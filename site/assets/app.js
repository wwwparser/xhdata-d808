/* Общие функции сайта: шапка, тема, рендер таблиц и карточек из window.* данных. */
(function () {
  "use strict";

  const PAGES = [
    ["index.html", "Главная"],
    ["guide.html", "Инструкция"],
    ["bands.html", "Диапазоны"],
    ["listen.html", "Что слушать"],
    ["schedule.html", "Программа"],
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
      Схемы на сайте нарисованы заново, это не копии иллюстраций из инструкции производителя.</div>`;
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

  // ---- универсальная таблица ----
  // cols: [{key, title, cls, render(row)}]
  function table(rows, cols, opts = {}) {
    if (!rows || !rows.length) return `<p class="muted">Нет данных.</p>`;
    const head = cols.map((c) => `<th>${c.title}</th>`).join("");
    const body = rows.map((r) => {
      const live = opts.live && opts.live(r);
      const tds = cols.map((c) => `<td${c.cls ? ` class="${c.cls}"` : ""}>${c.render ? c.render(r) : esc(r[c.key])}</td>`).join("");
      return `<tr${live ? ' class="live"' : ""}>${tds}</tr>`;
    }).join("");
    return `<div class="table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
  }

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

  window.Site = { esc, $, table, stars, verify, isLive, nowMsk, startClock, filterRows, groupSW };
  document.addEventListener("DOMContentLoaded", header);
})();
