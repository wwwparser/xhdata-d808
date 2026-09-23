"""Собирает data/*.json в site/data/*.js (window.X = ...), чтобы сайт открывался с диска без сервера.

Попутно нормализует время КВ-расписаний: "1600-1700" -> "16:00-17:00", добавляет time_msk (UTC+3),
и проверяет данные: пустые поля, дубли, количество антенн.

Запуск: python scripts/build_data.py
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "data"
OUT = ROOT / "site" / "data"

FILES = {
    "d808.json": "D808",
    "stations.json": "STATIONS",
    "antennas.json": "ANTENNAS",
}

TIME_RE = re.compile(r"^\s*(\d{1,2}):?(\d{2})\s*[-–]\s*(\d{1,2}):?(\d{2})\s*$")


def norm_range(s):
    m = TIME_RE.match(str(s or ""))
    if not m:
        return None
    a = (int(m[1]), int(m[2]))
    b = (int(m[3]), int(m[4]))
    return a, b


def fmt(hm):
    return f"{hm[0] % 24:02d}:{hm[1]:02d}"


def shift(hm, hours):
    return ((hm[0] + hours) % 24, hm[1])


def fix_sw(rows, problems, section):
    for r in rows:
        rng = norm_range(r.get("time_utc"))
        if not rng:
            problems.append(f"{section}: не разобрано время '{r.get('time_utc')}' у {r.get('station')}")
            continue
        a, b = rng
        r["time_utc"] = f"{fmt(a)}-{fmt(b)}"
        r["time_msk"] = f"{fmt(shift(a, 3))}-{fmt(shift(b, 3))}"


def fix_shows(rows):
    for r in rows:
        rng = norm_range(r.get("time_msk"))
        if rng:
            r["time_msk"] = f"{fmt(rng[0])}-{fmt(rng[1])}"


def check_antennas(rows, problems):
    if len(rows) != 20:
        problems.append(f"антенн {len(rows)}, ожидается 20")
    seen = set()
    for a in rows:
        key = a.get("url") or a.get("name")
        if key in seen:
            problems.append(f"дубль антенны: {key}")
        seen.add(key)
        for f in ("name", "type", "placement", "price_rub", "description", "principle", "rating"):
            if not a.get(f):
                problems.append(f"антенна '{a.get('name')}': пустое поле {f}")
        if (a.get("price_rub") or 0) > 3000:
            problems.append(f"антенна '{a.get('name')}' дороже 3000 ₽: {a.get('price_rub')}")


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    OUT.mkdir(parents=True, exist_ok=True)
    problems = []
    for name, var in FILES.items():
        src = SRC / name
        if not src.exists():
            problems.append(f"нет файла {src}")
            data = [] if var == "ANTENNAS" else {}
        else:
            data = json.loads(src.read_text(encoding="utf-8"))
        if var == "STATIONS":
            fix_sw(data.get("sw_russian", []), problems, "sw_russian")
            fix_sw(data.get("sw_other", []), problems, "sw_other")
            fix_shows(data.get("shows", []))
        if var == "ANTENNAS":
            check_antennas(data, problems)
        js = f"window.{var} = {json.dumps(data, ensure_ascii=False, indent=1)};\n"
        (OUT / name.replace(".json", ".js")).write_text(js, encoding="utf-8")
        print(f"ok  {name} -> site/data/{name.replace('.json', '.js')}")
    if problems:
        print("\nЗамечания:")
        for p in problems:
            print("  -", p)
    return 0


if __name__ == "__main__":
    sys.exit(main())
