"""Скриншоты всех страниц на 390 и 1280 px для визуальной проверки. Запуск: python scripts/shots.py [out_dir]"""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent / "site"
PAGES = ["index", "guide", "manual", "bands", "listen", "schedule", "hams", "antennas"]
out = Path(sys.argv[1] if len(sys.argv) > 1 else ROOT.parent / "shots")
out.mkdir(parents=True, exist_ok=True)
with sync_playwright() as p:
    b = p.chromium.launch()
    for w in (390, 1280):
        pg = b.new_page(viewport={"width": w, "height": 900})
        errs = []
        pg.on("pageerror", lambda e: errs.append(str(e)))
        for name in PAGES:
            pg.goto((ROOT / f"{name}.html").as_uri())
            pg.wait_for_timeout(300)
            sw = pg.evaluate("document.documentElement.scrollWidth")
            pg.screenshot(path=str(out / f"{name}-{w}.png"), full_page=True)
            print(f"{name}-{w}: scrollWidth={sw}" + (" OVERFLOW" if sw > w else ""))
        for e in errs:
            print("JS error:", e)
    b.close()
