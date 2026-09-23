/* Общие функции сайта: шапка, тема, рендер таблиц и карточек из window.* данных. */
(function () {
  "use strict";

  const PAGES = [
    ["index.html", "Главная"],
    ["guide.html", "Инструкция"],
    ["manual.html", "Руководство"],
    ["bands.html", "Диапазоны"],
    ["listen.html", "Что слушать"],
    ["schedule.html", "Программа"],
    ["hams.html", "Радиолюбители"],
    ["antennas.html", "Антенны"],
  ];

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (sel, root = document) => root.querySelector(sel);

  function header() {
    const here = location.pathname.split("/").pop() || "index.html";
    const links = PAGES.map(([href, title]) =>
      `<a href="${href}"${href === here ? ' class="active"' : ""}>${title}</a>`).join("");
    const el = document.createElement("header");
    el.className = "top";
    el.innerHTML = `<div class="wrap"><a class="brand" href="index.html">XHDATA <span>D-808</span></a>
      <nav class="nav">${links}</nav>
      <button class="theme-btn" type="button" title="Тема">◐</button></div>`;
    document.body.prepend(el);
    $(".theme-btn", el).addEventListener("click", () => {
      const cur = document.documentElement.dataset.theme
        || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      const next = cur === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) { /* нет хранилища */ }
    });
    const foot = document.createElement("footer");
    foot.innerHTML = `<div class="wrap">Неофициальный справочник по приёмнику XHDATA D-808.
      Частоты и расписания меняются — метка <span class="badge verify">проверить</span> означает, что данные нужно сверить перед публикацией.
      Схемы нарисованы для сайта, это не копии иллюстраций из инструкции производителя. Фото приёмника и антенн — из карточек товаров на Wildberries.</div>`;
    document.body.append(foot);
  }

  try {
    const t = localStorage.getItem("theme");
    if (t) document.documentElement.dataset.theme = t;
  } catch (e) { /* нет хранилища */ }

  // ---- время ----
  function nowMsk() {
    const d = new Date();
    return new Date(d.getTime() + d.getTimezoneOffset() * 60000 + 3 * 3600000);
  }
  function nowUtcMinutes() {
    const d = new Date();
    return d.getUTCHours() * 60 + d.getUTCMinutes();
  }
  // "HH:MM-HH:MM" (UTC) -> в эфире ли сейчас
  function isLive(range) {
    const m = /^(\d{2}):?(\d{2})\s*[-–]\s*(\d{2}):?(\d{2})$/.exec(String(range || "").trim());
    if (!m) return false;
    const a = +m[1] * 60 + +m[2];
    let b = +m[3] * 60 + +m[4];
    if (b === 0) b = 1440;
    const n = nowUtcMinutes();
    return a <= b ? n >= a && n < b : n >= a || n < b;
  }
  function startClock(el) {
    const tick = () => {
      const d = nowMsk();
      el.textContent = d.toTimeString().slice(0, 5) + " МСК";
    };
    tick();
    setInterval(tick, 20000);
  }

  function stars(n) {
    n = Math.max(0, Math.min(5, Math.round(+n || 0)));
    return `<span class="stars" aria-label="${n} из 5">${"★".repeat(n)}${"☆".repeat(5 - n)}</span>`;
  }
  const verify = (x) => (x && x.verify ? ' <span class="badge verify">проверить</span>' : "");

  // ---- подсказка «как включить на D-808» ----
  const K = (t) => `<span class="kbd">${esc(t)}</span>`;
  const digits = (s) => String(s).replace(/\D/g, "").split("").map(K).join(" ");
  const HOLD = (t) => `<span class="kbd hold" title="удерживать 2 секунды">${esc(t)} ⏱</span>`;

  // Разбор частоты из любой записи: freq_mhz, freq_khz ("5965, 5990"), freq ("126.375 МГц", "106.2 FM", "11810 / 11850 кГц")
  function parseFreqs(r) {
    if (r.freq_mhz != null && r.freq_mhz !== "") return [{ v: +r.freq_mhz, unit: "MHz" }];
    const raw = String(r.freq_khz ?? r.freq ?? "");
    const isMhz = r.freq_khz == null && /МГц|MHz|FM/i.test(raw);
    const nums = (raw.match(/\d+(?:[.,]\d+)?/g) || []).map((x) => +x.replace(",", "."));
    return nums.filter((n) => n > 0).map((v) => (isMhz ? { v, unit: "MHz" } : { v, unit: "kHz" }));
  }

  function bandOf(f) {
    const khz = f.unit === "MHz" ? f.v * 1000 : f.v;
    if (khz >= 118000 && khz <= 137000) return "AIR";
    if (khz >= 64000 && khz <= 108000) return "FM";
    if (khz >= 1711 && khz <= 29999) return "SW";
    if (khz >= 520 && khz <= 1710) return "MW";
    if (khz >= 150 && khz <= 450) return "LW";
    if (khz >= 1000 && khz < 1711 && f.unit === "MHz") return null;
    return null;
  }

  const fmtMhz = (v, d) => v.toFixed(d).replace(".", ",");

  function tuneHelp(r) {
    const fs = parseFreqs(r);
    if (!fs.length) return `<p class="muted small">Частота не указана — подсказки нет.</p>`;
    const f = fs[0];
    const band = bandOf(f);
    if (!band) return `<p class="muted small">Эта частота вне диапазонов D-808.</p>`;
    const khz = f.unit === "MHz" ? Math.round(f.v * 1000) : Math.round(f.v);
    const mode = String(r.mode || "");
    const ssb = /SSB|LSB|USB|CW/i.test(mode);
    const pre = [];   // разовая подготовка
    const steps = []; // набор частоты
    const tips = [];
    let lcd = "";

    if (band === "FM") {
      const mhz = khz / 1000;
      if (mhz < 87.5) pre.push(`Один раз: выключите радио ${K("POWER")}, удержите ${HOLD("FM")}, короткими нажатиями ${K("FM")} выберите <b>64.0</b>, подождите 3 секунды.`);
      const hund = Math.round(mhz * 100) % 10 !== 0; // 72,92 — есть сотые
      const d = String(Math.round(mhz * (hund ? 100 : 10)));
      steps.push(`${K("FM")} → ${K("FREQ")} → ${digits(d)} → ${K("FREQ")}`);
      steps.push(`<span class="muted">Или колесом:</span> нажмите на ${K("TUNING")} до <b>${hund ? "SLOW</b> (шаг 10 кГц)" : "FAST</b> (шаг 0,1 МГц)"} и крутите до ${fmtMhz(mhz, hund ? 2 : 1)}.`);
      tips.push("Выдвиньте телескоп полностью. Если станция шипит — кнопкой FM ST включите моно.");
      tips.push("Формат ввода FM в руководстве не описан: если после набора на экране другая частота или Error, настройтесь колесом.");
      lcd = `FM  ${fmtMhz(mhz, hund ? 2 : 1)} MHz`;
    } else if (band === "AIR") {
      const mhz = khz / 1000;
      steps.push(`${K("AIR")} → ${K("FREQ")} → ${digits(String(khz))} → ${K("FREQ")}`);
      steps.push(`<span class="muted">Или колесом:</span> ${K("TUNING")} в режиме <b>FAST</b> (шаг 25 кГц), крутите до ${fmtMhz(mhz, 3)}.`);
      tips.push("Выдвиньте телескоп, выйдите к окну. Включите шумоподавитель: удерживайте колесо TUNING до Squelch, поставьте 3–5.");
      tips.push("Формат ввода авиачастот в руководстве не описан: если набор не сработал, настройтесь колесом.");
      lcd = `AIR ${fmtMhz(mhz, 3)} MHz`;
    } else if (band === "MW" || band === "LW") {
      if (band === "LW") pre.push(`Один раз: выключите радио, удержите ${HOLD("LW/MW")}, выберите <b>LW ON</b>.`);
      if (band === "MW" && khz % 9 === 0) pre.push(`Один раз: выключите радио, удержите ${HOLD("0")} и выберите <b>9k</b> (шаг для Европы и Азии).`);
      const need = String(khz).length < 4;
      steps.push(`${K("LW/MW")}${band === "LW" ? " (до надписи LW)" : " (до надписи MW)"} → ${K("FREQ")} → ${digits(String(khz))}${need ? " → " + K("FREQ") : ""}`);
      tips.push("Телескоп не нужен — работает внутренняя антенна. Медленно поворачивайте приёмник, пока звук не станет чище.");
      tips.push("Мешает соседняя станция — сузьте фильтр кнопкой AM BW до 2–3 кГц.");
      lcd = `${band} ${khz} kHz`;
    } else {
      const need = String(khz).length < 5;
      steps.push(`${K("SW")} → ${K("FREQ")} → ${digits(String(khz))}${need ? " → " + K("FREQ") : ""}`);
      if (need) tips.push("Частота из 4 цифр: в конце ещё раз нажмите FREQ, иначе приёмник ждёт пятую цифру.");
      if (ssb) {
        const sb = /USB/i.test(mode) ? "USB" : /LSB/i.test(mode) ? "LSB" : khz < 10000 ? "LSB" : "USB";
        steps.push(`${K("SSB")} (подождите до 5 с) → ${K("INFO")} до <b>${sb}</b> → медленно крутите ${K("FINE TUNE")}, пока речь не станет разборчивой`);
        tips.push("Фильтр AM BW 2,2 кГц. Выход из режима SSB — снова кнопка SSB.");
      } else {
        tips.push("Выдвиньте телескоп полностью или подключите провод к гнезду внешней антенны. Мешают соседи — AM BW 3–4 кГц.");
      }
      lcd = `SW  ${khz} kHz${ssb ? " SSB" : ""}`;
    }

    const scanEnd = r.scan ? +(String(r.scan).match(/[–-]\s*(\d+)/) || [0, 0])[1] : 0;
    if (band === "MW" && scanEnd > 1710) steps.push(`На 1710 кГц СВ заканчивается: дальше нажмите ${K("SW")} → ${K("FREQ")} → ${digits("1711")} → ${K("FREQ")} и продолжайте колесом.`);
    if (r.scan) steps.push(`Дальше медленно проходите участок <b>${esc(r.scan)}</b> колесом ${K("TUNING")} в режиме <b>SLOW</b> и слушайте.`);
    const alt = r.scan ? [] : fs.slice(1).map((x) => (x.unit === "MHz" ? fmtMhz(x.v, 1) + " МГц" : x.v + " кГц"));
    return `<div class="tune">
      <div class="tune-main">
        <div class="kicker">Как включить на D-808</div>
        ${pre.map((p) => `<p class="tune-pre">${p}</p>`).join("")}
        ${steps.map((s) => `<p class="tune-keys">${s}</p>`).join("")}
        ${alt.length ? `<p class="small">Не слышно? Та же программа идёт на ${alt.map((a) => `<b>${esc(a)}</b>`).join(", ")} — наберите так же.</p>` : ""}
        <ul class="small">${tips.map((t) => `<li>${esc(t)}</li>`).join("")}
          <li>Сохранить в память: ${K("PAGE")} → цифра страницы → удержать ${HOLD("цифру ячейки")}.</li></ul>
        ${streamButton(r)}
      </div>
      <div class="tune-lcd" aria-label="Что будет на экране">${esc(lcd)}</div>
    </div>`;
  }

  // ---- онлайн-поток ----
  // window.STREAMS: {"Название станции": {url, site, note}} — только проверенные рабочие потоки
  function streamFor(r) {
    const S = window.STREAMS || {};
    return S[r.name] || S[r.station] || null;
  }
  function streamButton(r) {
    const st = streamFor(r);
    if (!st) return "";
    const name = r.name || r.station;
    return `<div class="tune-actions"><button class="play-btn" type="button" data-play="${esc(st.url)}" data-title="${esc(name)}">▶ Слушать онлайн</button>
      ${st.site ? `<a class="small" href="${esc(st.site)}" target="_blank" rel="noopener">сайт станции</a>` : ""}
      ${st.note ? `<span class="small muted">${esc(st.note)}</span>` : ""}</div>`;
  }

  let audio, hls, player;
  function ensurePlayer() {
    if (player) return;
    player = document.createElement("div");
    player.className = "player";
    player.hidden = true;
    player.innerHTML = `<button class="main" type="button" title="Пауза/продолжить">❚❚</button>
      <div class="ptitle"><b></b><span class="pstate"></span></div>
      <button type="button" title="Закрыть">✕</button>`;
    document.body.append(player);
    audio = new Audio();
    const [mainBtn, closeBtn] = player.querySelectorAll("button");
    const state = (t) => { player.querySelector(".pstate").textContent = t; };
    audio.addEventListener("playing", () => { state("онлайн-эфир"); mainBtn.textContent = "❚❚"; });
    audio.addEventListener("waiting", () => state("загрузка…"));
    audio.addEventListener("pause", () => { state("пауза"); mainBtn.textContent = "▶"; });
    audio.addEventListener("error", () => state("поток не отвечает — попробуйте позже"));
    mainBtn.addEventListener("click", () => (audio.paused ? audio.play() : audio.pause()));
    closeBtn.addEventListener("click", stopStream);
  }
  function stopStream() {
    if (hls) { hls.destroy(); hls = null; }
    if (audio) { audio.pause(); audio.removeAttribute("src"); audio.load(); }
    if (player) player.hidden = true;
    document.body.classList.remove("has-player");
  }
  function loadScript(src) {
    return new Promise((ok, fail) => {
      const s = document.createElement("script");
      s.src = src; s.onload = ok; s.onerror = fail;
      document.head.append(s);
    });
  }
  async function playStream(url, title) {
    ensurePlayer();
    stopStream();
    player.hidden = false;
    document.body.classList.add("has-player");
    player.querySelector(".ptitle b").textContent = title;
    player.querySelector(".pstate").textContent = "подключение…";
    const isHls = /\.m3u8(\?|$)/i.test(url);
    if (isHls && !audio.canPlayType("application/vnd.apple.mpegurl")) {
      if (!window.Hls) await loadScript("https://cdn.jsdelivr.net/npm/hls.js@1.5.13/dist/hls.min.js");
      hls = new window.Hls();
      hls.loadSource(url);
      hls.attachMedia(audio);
    } else {
      audio.src = url;
    }
    audio.play().catch(() => { player.querySelector(".pstate").textContent = "нажмите ▶, чтобы начать"; });
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-play]");
    if (b) { e.stopPropagation(); playStream(b.dataset.play, b.dataset.title); }
  }, true);

  // ---- универсальная таблица ----
  // cols: [{key, title, cls, render(row)}]
  // opts.live(row) — подсветка; opts.detail(row) — раскрывающаяся строка под записью
  const openRows = new Set();
  const rowKey = (r) => [r.freq_mhz, r.freq_khz, r.freq, r.name, r.station, r.show, r.what, r.time_utc, r.time_msk, r.city].join("|");
  function table(rows, cols, opts = {}) {
    if (!rows || !rows.length) return `<p class="muted">Нет данных.</p>`;
    const head = cols.map((c) => `<th>${c.title}</th>`).join("");
    const body = rows.map((r) => {
      const live = opts.live && opts.live(r);
      const tds = cols.map((c, i) => {
        let html = c.render ? c.render(r) : esc(r[c.key]);
        if (opts.detail && i === 0) html = `<button class="tune-btn" type="button" aria-expanded="${openRows.has(rowKey(r))}">${html}<span class="caret">▾</span></button>`;
        return `<td${c.cls ? ` class="${c.cls}"` : ""}>${html}</td>`;
      }).join("");
      const cls = [live ? "live" : "", opts.detail ? "has-detail" : ""].filter(Boolean).join(" ");
      if (!opts.detail) return `<tr${cls ? ` class="${cls}"` : ""}>${tds}</tr>`;
      const key = rowKey(r);
      const open = openRows.has(key);
      return `<tr class="${cls}${open ? " open" : ""}" data-key="${esc(key)}">${tds}</tr>
        <tr class="detail"${open ? "" : " hidden"}><td colspan="${cols.length}">${opts.detail(r)}</td></tr>`;
    }).join("");
    return `<div class="table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
  }

  // Клик по строке с подсказкой — раскрыть/свернуть (ссылки внутри строки работают как обычно)
  document.addEventListener("click", (e) => {
    const tr = e.target.closest("tr.has-detail");
    if (!tr || e.target.closest("a, [data-play]")) return;
    const det = tr.nextElementSibling;
    const open = det.hidden;
    det.hidden = !open;
    tr.classList.toggle("open", open);
    const btn = tr.querySelector(".tune-btn");
    if (btn) btn.setAttribute("aria-expanded", open);
    if (open) openRows.add(tr.dataset.key); else openRows.delete(tr.dataset.key);
  });

  function filterRows(rows, q) {
    q = (q || "").trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) => JSON.stringify(r).toLowerCase().includes(q));
  }

  // Одна станция в одно и то же время на нескольких частотах -> одна строка "5965, 5990".
  // Сомнительные (verify) уходят вниз.
  function groupSW(rows) {
    const map = new Map();
    for (const r of rows) {
      const key = [r.station, r.time_utc, r.days].join("|");
      const g = map.get(key);
      if (g) {
        g.freqs.push(r.freq_khz);
        g.verify = g.verify && r.verify;
      } else {
        map.set(key, { ...r, freqs: [r.freq_khz] });
      }
    }
    return [...map.values()]
      .map((g) => ({ ...g, freq_khz: [...new Set(g.freqs)].sort((a, b) => a - b).join(", ") }))
      .sort((a, b) => (a.verify ? 1 : 0) - (b.verify ? 1 : 0) || String(a.time_msk).localeCompare(String(b.time_msk)));
  }

  window.Site = { esc, $, table, stars, verify, isLive, nowMsk, startClock, filterRows, groupSW, tuneHelp, streamFor, playStream };
  document.addEventListener("DOMContentLoaded", header);
})();
