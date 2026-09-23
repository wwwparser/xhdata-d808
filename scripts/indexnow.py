"""Уведомление Яндекса (и других поисковиков по протоколу IndexNow) об обновлённых страницах —
по сути заявка на переобход. Запускается в GitHub Actions после каждой публикации.

Ключ — файл site/<ключ>.txt (имя файла = содержимое). Все адреса берутся из site/sitemap.xml.
Запуск: python scripts/indexnow.py
"""
import json
import re
import sys
from pathlib import Path
from urllib.parse import urlparse

import requests

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "site"
ENDPOINTS = ["https://yandex.com/indexnow", "https://api.indexnow.org/indexnow"]


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    keys = [p for p in SITE.glob("*.txt") if re.fullmatch(r"[0-9a-f]{32}", p.stem) and p.read_text().strip() == p.stem]
    if not keys:
        print("Нет файла ключа IndexNow в site/")
        return 1
    key = keys[0].stem
    urls = re.findall(r"<loc>(.*?)</loc>", (SITE / "sitemap.xml").read_text(encoding="utf-8"))
    base = urls[0]  # адрес главной = корень сайта
    body = {"host": urlparse(base).netloc, "key": key, "keyLocation": f"{base}{key}.txt", "urlList": urls}
    ok = True
    for ep in ENDPOINTS:
        try:
            r = requests.post(ep, data=json.dumps(body), headers={"Content-Type": "application/json; charset=utf-8"}, timeout=30)
            print(f"{ep}: HTTP {r.status_code} {r.text[:200]}")
            ok &= r.status_code in (200, 202)
        except requests.RequestException as e:
            print(f"{ep}: ошибка {e}")
            ok = False
    print(f"Отправлено адресов: {len(urls)}")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
