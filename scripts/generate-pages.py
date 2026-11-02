#!/usr/bin/env python3
"""Regenerate data/pages.json from the Canada Fire Extinguisher pSEO workbook."""

from __future__ import annotations

import json
import re
from pathlib import Path

import openpyxl

ROOT = Path(__file__).resolve().parents[1]
XLSX = Path("/Users/jairusotiko/Downloads/pSEO - Canada Fire Extinguisher Services.xlsx")
OUT = ROOT / "data" / "pages.json"

SECTION_MAP = {
    "GENERAL AND COMMERCIAL": "Inspection & compliance",
    "ANNUAL FIRE": "Annual service",
    "FIRE EXTINGUISHER MAINTENANCE": "Maintenance & servicing",
    "FIRE EXTINGUISHER RECHARGE": "Recharge & refill",
    "RESEARCH TOPICS": "Specialty building services",
}


def parse() -> tuple[list[dict], set[str]]:
    wb = openpyxl.load_workbook(XLSX, read_only=True, data_only=True)
    ws = wb["pSEO Page Plan"]
    pages: list[dict] = []
    cities: set[str] = set()
    current = "Fire extinguisher services"

    for row in ws.iter_rows(min_row=2, values_only=True):
        cells = list(row) + [None] * 13
        c0 = cells[0]
        if isinstance(c0, str) and cells[1] is None and cells[2] is None:
            u = c0.upper()
            for key, val in SECTION_MAP.items():
                if key in u:
                    current = val
                    break
            if "CITY AND AREA" in u:
                current = "Local fire extinguisher help"
            continue

        num, title, slug, pk, sk, area, *_rest = cells[:13]
        if not (slug and isinstance(slug, str) and slug.startswith("/")):
            continue

        slug = slug.lstrip("/")
        area_str = area or "Canada (National)"
        if "National" not in str(area_str):
            cities.add(str(area_str))
            cat = "Local fire extinguisher help"
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

    wb.close()
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
