"""Пререндер для поисковиков: копирует site/ в папку сборки и сохраняет каждую страницу
уже отрисованной (таблицы станций, антенны, частоты — готовым HTML, а не пустыми контейнерами).

Скрипты на страницах остаются и у посетителя перерисовывают всё заново (время, «в эфире», плеер),
поэтому интерактив не ломается. Исходники в site/ не меняются.

Запуск: python scripts/prerender.py [site] [dist]
Нужен playwright с chromium: pip install playwright && python -m playwright install chromium
"""
import functools
import http.server
import shutil
import sys
import threading
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
PAGES = ["index", "guide", "manual", "bands", "listen", "schedule", "hams", "antennas"]

# что убрать из снимка: зависящее от времени сборки и то, что рисуется только у посетителя
CLEANUP_JS = """() => {
  document.querySelectorAll('.badge.on, .player').forEach(e => e.remove());
  document.querySelectorAll('tr.live').forEach(e => e.classList.remove('live'));
  document.querySelectorAll('.clock').forEach(e => e.textContent = '');
  const pages = document.getElementById('pages'); if (pages) pages.innerHTML = '';
  document.querySelectorAll('script[src*="hls"]').forEach(e => e.remove());
  document.body.classList.remove('has-player');
}"""


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


def serve(root: Path):
    handler = functools.partial(QuietHandler, directory=str(root))
    httpd = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    src = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "site"
    dst = Path(sys.argv[2]) if len(sys.argv) > 2 else ROOT / "dist"
    if dst.exists():
        shutil.rmtree(dst)
    shutil.copytree(src, dst)
    httpd = serve(src)
    base = f"http://127.0.0.1:{httpd.server_address[1]}/"
    errors = []
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1280, "height": 900})
        page.on("pageerror", lambda e: errors.append(str(e)))
        for name in PAGES:
            page.goto(base + f"{name}.html", wait_until="networkidle")
            page.wait_for_timeout(500)
            page.evaluate(CLEANUP_JS)
            html = "<!doctype html>\n" + page.evaluate("document.documentElement.outerHTML")
            (dst / f"{name}.html").write_text(html, encoding="utf-8")
            print(f"ok  {name}.html  {len(html) // 1024} КБ")
        browser.close()
    httpd.shutdown()
    if errors:
        print("Ошибки JS при пререндере:", *errors, sep="\n  ")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
