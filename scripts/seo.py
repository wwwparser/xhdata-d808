"""SEO-разметка сайта: title/description/canonical/Open Graph, микроразметка schema.org (JSON-LD),
видимый блок FAQ в инструкции, sitemap.xml и robots.txt.

Всё, что зависит от адреса сайта, берётся из SITE_URL. При переезде на свой домен:
    SITE_URL=https://xhdata-d808.ru/ python scripts/seo.py
(или поменять значение по умолчанию ниже) — и закоммитить изменения.

Блок в <head> каждой страницы переписывается между маркерами <!-- seo:start --> и <!-- seo:end -->.
Запуск: python scripts/seo.py
"""
import html
import json
import os
import re
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "site"
DATA = ROOT / "data"

SITE_URL = os.environ.get("SITE_URL", "https://wwwparser.github.io/xhdata-d808/").rstrip("/") + "/"
SITE_NAME = "XHDATA D-808 — справочник"
OG_IMAGE = "img/og-cover.jpg"
TODAY = date.today().isoformat()

# page: (title, description, крошка, приоритет в sitemap)
PAGES = {
    "index": ("XHDATA D-808: инструкция на русском, частоты станций, антенны",
              "Справочник по приёмнику XHDATA D-808: инструкция на русском, что слушать в Москве и Подмосковье на FM, СВ и КВ, онлайн-эфир станций, радиолюбители и антенны до 3000 ₽.",
              "Главная", "1.0"),
    "guide": ("Инструкция XHDATA D-808 на русском: кнопки, SSB, память, ATS",
              "Как пользоваться XHDATA D-808: схема кнопок, ввод частоты, SSB, память станций, автопоиск ATS, часы, будильник и сброс — пошагово и простыми словами.",
              "Инструкция", "0.9"),
    "manual": ("Руководство XHDATA D-808 PDF — официальное, на русском и английском",
               "Официальное руководство пользователя XHDATA D-808 в PDF: русская и английская версии. Смотрите прямо на сайте или скачайте файл.",
               "Руководство PDF", "0.8"),
    "bands": ("Диапазоны XHDATA D-808: как ловить FM, СВ, ДВ, КВ, SSB и авиа",
              "Что слышно на каждом диапазоне D-808 и как настроиться: FM, средние и длинные волны, КВ-поддиапазоны по времени суток, SSB и авиадиапазон.",
              "Диапазоны", "0.8"),
    "listen": ("Радиостанции Москвы и Подмосковья: частоты FM, СВ и КВ",
               "Все FM-станции Москвы и городов области, что ловится на СВ и ДВ, русскоязычное КВ-вещание с расписанием, авиачастоты — с подсказкой, что набрать на D-808, и онлайн-эфиром.",
               "Что слушать", "0.9"),
    "schedule": ("Что слушать на радио сегодня: КВ и FM по времени (МСК)",
                 "Программа эфира по времени суток: популярные FM-передачи и коротковолновые станции утром, днём, вечером и ночью по московскому времени.",
                 "Программа", "0.7"),
    "hams": ("Радиолюбители и радиохулиганы: частоты, время, как слушать SSB",
             "Где и когда слушать радиолюбителей, Си-Би, радиохулиганов и пиратов на XHDATA D-808: диапазоны, круглые столы, соревнования и пошаговая настройка SSB.",
             "Радиолюбители", "0.7"),
    "antennas": ("Антенна для XHDATA D-808 до 3000 ₽: отзывы, фото, рейтинг",
                 "Антенны для радиоприёмника с Wildberries с реальными отзывами покупателей: провода для КВ, FM-антенны, фото, выжимка отзывов, подключение к D-808.",
                 "Антенны", "0.8"),
}


def url(page):
    return SITE_URL if page == "index" else f"{SITE_URL}{page}.html"


def load(name):
    p = DATA / name
    return json.loads(p.read_text(encoding="utf-8")) if p.exists() else None


def breadcrumbs(page):
    items = [{"@type": "ListItem", "position": 1, "name": "Главная", "item": url("index")}]
    if page != "index":
        items.append({"@type": "ListItem", "position": 2, "name": PAGES[page][2], "item": url(page)})
    return {"@type": "BreadcrumbList", "itemListElement": items}


RECEIVER = {"@type": "Product", "name": "XHDATA D-808", "brand": {"@type": "Brand", "name": "XHDATA"},
            "category": "Всеволновый радиоприёмник"}


def jsonld(page):
    title, desc = PAGES[page][:2]
    graph = [breadcrumbs(page)]
    webpage = {"@type": "WebPage", "@id": url(page) + "#page", "url": url(page), "name": title,
               "description": desc, "inLanguage": "ru", "isPartOf": {"@id": SITE_URL + "#site"},
               "dateModified": TODAY, "about": RECEIVER}
    if page == "index":
        graph.append({"@type": "WebSite", "@id": SITE_URL + "#site", "url": SITE_URL, "name": SITE_NAME,
                      "inLanguage": "ru", "description": PAGES["index"][1]})
        webpage["primaryImageOfPage"] = SITE_URL + "img/d808/2.webp"
    graph.append(webpage)

    if page == "guide":
        graph.append({"@type": "TechArticle", "headline": "Инструкция к XHDATA D-808 простыми словами",
                      "description": desc, "inLanguage": "ru", "about": RECEIVER, "dateModified": TODAY,
                      "mainEntityOfPage": url(page), "image": SITE_URL + "img/d808/5.webp"})
        faq = load("faq.json") or []
        if faq:
            graph.append({"@type": "FAQPage", "mainEntity": [
                {"@type": "Question", "name": x["q"], "acceptedAnswer": {"@type": "Answer", "text": x["a"]}} for x in faq]})
    if page == "manual":
        for lang, fn, pages in (("ru", "XHDATA-D-808-manual-ru.pdf", 12), ("en", "XHDATA-D-808-manual-en.pdf", 16)):
            graph.append({"@type": "DigitalDocument", "name": f"Руководство пользователя XHDATA D-808 ({lang.upper()})",
                          "inLanguage": lang, "encodingFormat": "application/pdf", "numberOfPages": pages,
                          "url": f"{SITE_URL}docs/{fn}", "author": {"@type": "Organization", "name": "XHDATA"},
                          "about": RECEIVER})
    if page == "listen":
        st = load("stations.json") or {}
        items = []
        for i, r in enumerate(st.get("fm_moscow", []), 1):
            items.append({"@type": "ListItem", "position": i, "item": {
                "@type": "BroadcastService", "name": r["name"], "broadcastDisplayName": r["name"],
                "areaServed": {"@type": "City", "name": "Москва"},
                "broadcastFrequency": {"@type": "BroadcastFrequencySpecification",
                                       "broadcastFrequencyValue": r["freq_mhz"], "broadcastSignalModulation": "FM"}}})
        graph.append({"@type": "ItemList", "name": "FM-радиостанции Москвы", "numberOfItems": len(items),
                      "itemListElement": items})
    if page == "antennas":
        ants = load("antennas.json") or []
        items = []
        for i, a in enumerate(ants, 1):
            items.append({"@type": "ListItem", "position": i, "item": {
                "@type": "Product", "name": a["name"], "description": a.get("description", ""),
                "image": [SITE_URL + x for x in a.get("images", [])], "category": "Антенна для радиоприёмника",
                "sku": str(a.get("article", "")),
                "offers": {"@type": "Offer", "price": a["price_rub"], "priceCurrency": "RUB",
                           "availability": "https://schema.org/InStock", "url": a["url"]}}})
        graph.append({"@type": "ItemList", "name": "Антенны для XHDATA D-808 до 3000 ₽",
                      "numberOfItems": len(items), "itemListElement": items})
    return {"@context": "https://schema.org", "@graph": graph}


def head_block(page):
    title, desc = PAGES[page][:2]
    e = lambda s: html.escape(s, quote=True)
    ld = json.dumps(jsonld(page), ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/")
    return "\n".join([
        "<!-- seo:start -->",
        f"<title>{e(title)}</title>",
        f'<meta name="description" content="{e(desc)}">',
        '<meta name="robots" content="index, follow, max-image-preview:large">',
        f'<link rel="canonical" href="{url(page)}">',
        '<link rel="icon" href="favicon.svg" type="image/svg+xml">',
        '<link rel="apple-touch-icon" href="img/apple-touch-icon.png">',
        '<meta name="theme-color" content="#c2410c">',
        '<meta property="og:type" content="website">',
        '<meta property="og:locale" content="ru_RU">',
        f'<meta property="og:site_name" content="{e(SITE_NAME)}">',
        f'<meta property="og:title" content="{e(title)}">',
        f'<meta property="og:description" content="{e(desc)}">',
        f'<meta property="og:url" content="{url(page)}">',
        f'<meta property="og:image" content="{SITE_URL}{OG_IMAGE}">',
        '<meta property="og:image:width" content="1200">',
        '<meta property="og:image:height" content="630">',
        '<meta name="twitter:card" content="summary_large_image">',
        f'<script type="application/ld+json">{ld}</script>',
        "<!-- seo:end -->",
    ])


# старые теги, которые теперь живут в seo-блоке
OLD_TAGS = re.compile(r'^\s*(<title>.*?</title>|<meta name="description"[^>]*>|<link rel="(canonical|icon)"[^>]*>|'
                      r'<meta property="og:[^"]+"[^>]*>|<meta name="theme-color"[^>]*>)\s*\n', re.M)
BLOCK = re.compile(r"<!-- seo:start -->.*?<!-- seo:end -->\n?", re.S)


def apply_head(page):
    p = SITE / f"{page}.html"
    s = p.read_text(encoding="utf-8")
    s = BLOCK.sub("", s)
    s = OLD_TAGS.sub("", s)
    s = s.replace('<meta name="viewport" content="width=device-width, initial-scale=1">\n',
                  '<meta name="viewport" content="width=device-width, initial-scale=1">\n' + head_block(page) + "\n", 1)
    p.write_text(s, encoding="utf-8")


def apply_faq():
    faq = load("faq.json") or []
    p = SITE / "guide.html"
    s = p.read_text(encoding="utf-8")
    e = html.escape
    block = "<!-- faq:start -->\n  <h2 id=\"faq\">Частые вопросы</h2>\n" + "\n".join(
        f'  <details class="howto"><summary>{e(x["q"])}</summary><div class="body"><p>{e(x["a"])}</p></div></details>'
        for x in faq) + "\n  <!-- faq:end -->"
    if "<!-- faq:start -->" in s:
        s = re.sub(r"<!-- faq:start -->.*?<!-- faq:end -->", block, s, flags=re.S)
    else:
        s = s.replace('  <h2>Характеристики</h2>', block + '\n\n  <h2>Характеристики</h2>', 1)
    p.write_text(s, encoding="utf-8")


def write_sitemap():
    ants = load("antennas.json") or []
    imgs = {"index": ["img/d808/2.webp"], "guide": ["img/d808/5.webp"],
            "antennas": [x for a in ants for x in a.get("images", [])[:1]]}
    rows = []
    for page, (_, _, _, prio) in PAGES.items():
        im = "".join(f"<image:image><image:loc>{SITE_URL}{x}</image:loc></image:image>" for x in imgs.get(page, []))
        rows.append(f"  <url><loc>{url(page)}</loc><lastmod>{TODAY}</lastmod><priority>{prio}</priority>{im}</url>")
    for fn in ("XHDATA-D-808-manual-ru.pdf", "XHDATA-D-808-manual-en.pdf"):
        rows.append(f"  <url><loc>{SITE_URL}docs/{fn}</loc><lastmod>{TODAY}</lastmod><priority>0.5</priority></url>")
    (SITE / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" '
        'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n' + "\n".join(rows) + "\n</urlset>\n",
        encoding="utf-8")
    (SITE / "robots.txt").write_text(f"User-agent: *\nAllow: /\n\nSitemap: {SITE_URL}sitemap.xml\n", encoding="utf-8")


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    for page in PAGES:
        apply_head(page)
    apply_faq()
    write_sitemap()
    print(f"SEO обновлено для {len(PAGES)} страниц, SITE_URL = {SITE_URL}")


if __name__ == "__main__":
    main()
