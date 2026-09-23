"""Проверка онлайн-потоков радиостанций: идёт ли по ссылке звук.

Поток считается рабочим, только если:
  - адрес https:// (сайт на https, браузер не проиграет http-поток на такой странице);
  - прямой поток (mp3/aac/ogg): ответ 200, тип audio/* или application/ogg|octet-stream,
    и за 15 секунд пришло не меньше 32 КБ данных;
  - HLS (.m3u8): плейлист разбирается, в нём есть сегменты или вложенные плейлисты,
    и первый сегмент скачивается (>= 8 КБ).

Использование:
  python scripts/check_streams.py data/streams.json          # проверить все, записать status/checked_at
  python scripts/check_streams.py --url https://...          # проверить одну ссылку

Формат data/streams.json: {"<название станции как в stations.json>": {"url": "...", "site": "...", ...}}
"""
import argparse
import json
import sys
import time
from datetime import date
from pathlib import Path
from urllib.parse import urljoin

import requests

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36"
MIN_STREAM = 32 * 1024
MIN_SEGMENT = 8 * 1024
TIMEOUT = 15


def _read(resp, limit, deadline):
    got = 0
    for chunk in resp.iter_content(4096):
        got += len(chunk)
        if got >= limit or time.time() > deadline:
            break
    return got


def check_hls(url, s, depth=0):
    r = s.get(url, timeout=TIMEOUT)
    if r.status_code != 200 or "#EXTM3U" not in r.text[:200]:
        return False, f"hls: плейлист не отдаётся ({r.status_code})"
    lines = [ln.strip() for ln in r.text.splitlines() if ln.strip() and not ln.startswith("#")]
    if not lines:
        return False, "hls: пустой плейлист"
    nxt = urljoin(r.url, lines[0])
    if ".m3u8" in nxt.split("?")[0] and depth < 2:
        return check_hls(nxt, s, depth + 1)
    seg = s.get(nxt, timeout=TIMEOUT, stream=True)
    if seg.status_code != 200:
        return False, f"hls: сегмент {seg.status_code}"
    got = _read(seg, MIN_SEGMENT, time.time() + TIMEOUT)
    seg.close()
    return (got >= MIN_SEGMENT), f"hls: сегмент {got} байт"


def check(url):
    if not url.startswith("https://"):
        return False, "не https"
    s = requests.Session()
    s.headers["User-Agent"] = UA
    try:
        if ".m3u8" in url.split("?")[0]:
            return check_hls(url, s)
        r = s.get(url, timeout=TIMEOUT, stream=True, allow_redirects=True)
        ctype = r.headers.get("content-type", "").lower()
        if r.status_code != 200:
            return False, f"HTTP {r.status_code}"
        if "mpegurl" in ctype:
            r.close()
            return check_hls(url, s)
        if not (ctype.startswith("audio/") or "ogg" in ctype or "octet-stream" in ctype or "aacp" in ctype):
            r.close()
            return False, f"не аудио: {ctype or 'нет content-type'}"
        got = _read(r, MIN_STREAM, time.time() + TIMEOUT)
        r.close()
        if not r.url.startswith("https://"):
            return False, "редирект на http"
        return (got >= MIN_STREAM), f"{ctype}, {got} байт"
    except requests.RequestException as e:
        return False, f"ошибка: {type(e).__name__}"


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    ap = argparse.ArgumentParser()
    ap.add_argument("file", nargs="?")
    ap.add_argument("--url")
    a = ap.parse_args()
    if a.url:
        ok, info = check(a.url)
        print("OK " if ok else "BAD", info)
        return 0 if ok else 1
    path = Path(a.file)
    data = json.loads(path.read_text(encoding="utf-8"))
    bad = 0
    for name, st in data.items():
        ok, info = check(st["url"])
        st["ok"] = ok
        st["check"] = info
        st["checked_at"] = date.today().isoformat()
        bad += not ok
        print(("OK  " if ok else "BAD ") + f"{name}: {info}")
    path.write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"\nрабочих {len(data) - bad} из {len(data)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
