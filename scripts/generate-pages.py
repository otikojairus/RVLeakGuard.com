#!/usr/bin/env python3
"""Regenerate data/pages.json from the Canada RV Water Damage pSEO workbook."""

from __future__ import annotations

import json
import re
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
XLSX = Path("/Users/jairusotiko/Downloads/pSEO - Canada Water Damage for RV.xlsx")
OUT = ROOT / "data" / "pages.json"

SECTION_MAP = {
    "RV WATER DAMAGE REPAIR": "Water damage repair",
    "RV ROOF DAMAGE": "Roof & leak repair",
    "RV SEAL REPLACEMENT": "Seals & weatherproofing",
    "RV FLOOR, WALL": "Structure & wood repair",
    "RV MOLD REMOVAL": "Mold & plumbing leaks",
}


def _read_sheet_rows(path: Path) -> list[list]:
    ns = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
    with zipfile.ZipFile(path) as z:
        shared = ET.fromstring(z.read("xl/sharedStrings.xml"))
        strings: list[str] = []
        for si in shared.findall(".//m:si", ns):
            parts = []
            for t in si.findall(".//m:t", ns):
                if t.text:
                    parts.append(t.text)
            strings.append("".join(parts))
        sheet = ET.fromstring(z.read("xl/worksheets/sheet1.xml"))
        rows: list[list] = []
        for row in sheet.findall(".//m:sheetData/m:row", ns):
            cells: list = []
            for c in row.findall("m:c", ns):
                t = c.get("t")
                v = c.find("m:v", ns)
                if v is None or v.text is None:
                    cells.append(None)
                elif t == "s":
                    cells.append(strings[int(v.text)])
                else:
                    cells.append(v.text)
            rows.append(cells)
    return rows


def parse() -> tuple[list[dict], set[str]]:
    rows = _read_sheet_rows(XLSX)
    pages: list[dict] = []
    cities: set[str] = set()
    current = "RV water damage repair"

    for row in rows[2:]:
        cells = list(row) + [None] * 13
        c0 = cells[0]
        if isinstance(c0, str) and cells[1] is None and cells[2] is None:
            u = c0.upper()
            for key, val in SECTION_MAP.items():
                if key in u:
                    current = val
                    break
            if "CITY / AREA" in u or "CITY AND AREA" in u:
                current = "Local RV water damage help"
            continue

        num, title, slug, pk, sk, area, *_rest = cells[:13]
        if not (slug and isinstance(slug, str) and slug.startswith("/")):
            continue

        slug = slug.lstrip("/")
        area_str = area or "Canada (National)"
        if "National" not in str(area_str):
            cities.add(str(area_str))
            cat = "Local RV water damage help"
        else:
            cat = current

        sec = ""
        if sk:
            sec = "; ".join(s.strip() for s in re.split(r"[;,]", str(sk)) if s.strip())

        pages.append(
            {
                "num": num,
                "title": title,
                "slug": slug,
                "primary_kw": pk or "",
                "secondary_kw": sec,
                "area": area_str,
                "vol": cells[8] if cells[8] is not None else None,
                "kd": cells[9] if cells[9] is not None else None,
                "cpc": cells[10] if cells[10] is not None else None,
                "category": cat,
            }
        )

    return pages, cities


def main() -> None:
    pages, cities = parse()
    OUT.write_text(
        json.dumps({"pages": pages, "cities": sorted(cities)}, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"Wrote {len(pages)} pages, {len(cities)} cities → {OUT}")


if __name__ == "__main__":
    main()
