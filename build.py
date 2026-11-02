#!/usr/bin/env python3
"""Generate Canada Tire Repair static site from data/pages.json."""
from __future__ import annotations

import json
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent
DATA = ROOT / "data" / "pages.json"
OUT = ROOT / "dist"

SITE = {
    "name": "Northern Wheel Response",
    "tagline": "Mobile & roadside tire repair across Canada",
    "domain": "northernwheelresponse.ca",
    "phone_display": "1-888-555-8473",
    "phone_tel": "+18885558473",
    "email": "dispatch@northernwheelresponse.ca",
    "hours": "Monday – Sunday, 6 AM – 11 PM ET",
    "hours_note": "After-hours availability varies by region — call to confirm.",
}

SERVICE_BLURBS = {
    "truck-tire-repair": "Heavy-duty on-site patching, mounting, and inflation for commercial fleets stuck roadside or at the yard.",
    "semi-truck-tire-repair": "Class 8 tire changes with torque-safe procedures and inventory matched to steer, drive, and trailer positions.",
    "mobile-truck-tire-repair": "Fully equipped mobile units reach highways, depots, and job sites without towing your rig.",
    "truck-roadside-assistance": "Tire-focused roadside support for operators — confirm scope when you call so we dispatch the right unit.",
    "emergency-tire-repair": "Fast dispatch when a blowout or flat threatens your schedule — passenger, light truck, and fleet calls.",
    "24-hour-tire-repair": "Extended-hour coverage in major corridors; operating windows are confirmed per city before dispatch.",
    "roadside-tire-repair": "We come to you — parking lots, shoulders, and fleet yards — with professional repair or spare swap.",
    "mobile-tire-repair": "Canada-wide mobile tire service for flats, punctures, and pressure issues at home, work, or on the road.",
    "tire-repair": "Patch, plug, and valve service performed to industry standards — not a temporary gas-station fix.",
    "flat-tire-repair": "Flat tire service near you: assessment, repair when safe, or replacement coordination when needed.",
    "tire-puncture-repair": "Nail, screw, and tread punctures evaluated for repairability before we restore safe pressure.",
    "tire-leak-repair": "Slow leaks from beads, valves, or minor damage diagnosed with soapy testing and proper reseating.",
}


def slug_base(slug: str, city_suffixes: list[str] | None = None) -> str:
    if city_suffixes:
        for suf in sorted(city_suffixes, key=len, reverse=True):
            token = f"-{suf}"
            if slug.endswith(token):
                return slug[: -len(token)]
    legacy = [
        "calgary", "winnipeg", "edmonton", "ottawa", "montreal", "laval", "hamilton",
        "st-catharines", "markham", "north-york", "london-ontario", "surrey-bc",
        "mississauga", "toronto", "halifax", "regina", "vancouver", "vaughan",
        "etobicoke", "barrie", "woodbridge", "thornhill", "abbotsford",
    ]
    for city in legacy:
        token = f"-{city}"
        if slug.endswith(token):
            return slug[: -len(token)]
    return slug


def area_label(area: str) -> str:
    if "National" in area:
        return "Canada"
    return area or "Canada"


def secondary_list(raw: str) -> list[str]:
    if not raw:
        return []
    return [p.strip() for p in re.split(r"[;,]", str(raw)) if p.strip()]


def load_pages() -> dict:
    with DATA.open(encoding="utf-8") as f:
        return json.load(f)


def shared_css() -> str:
    return (ROOT / "assets" / "css" / "styles.css").read_text(encoding="utf-8")


def shared_js() -> str:
    return (ROOT / "assets" / "js" / "main.js").read_text(encoding="utf-8")


def head_block(title: str, description: str, canonical_path: str, extra_schema: str = "") -> str:
    url = f"https://{SITE['domain']}{canonical_path}"
    return f"""<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>{title}</title>
<meta name="description" content="{description}"/>
<link rel="canonical" href="{url}"/>
<meta property="og:type" content="website"/>
<meta property="og:site_name" content="{SITE['name']}"/>
<meta property="og:title" content="{title}"/>
<meta property="og:description" content="{description}"/>
<meta property="og:url" content="{url}"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="{rel_root(canonical_path)}assets/css/styles.css"/>
<script type="application/ld+json">{{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "{SITE['name']}",
  "url": "https://{SITE['domain']}",
  "telephone": "{SITE['phone_tel']}",
  "email": "{SITE['email']}",
  "areaServed": "CA",
  "description": "{SITE['tagline']}"
}}{extra_schema}</script>"""


def rel_root(canonical_path: str) -> str:
    if canonical_path in ("/", ""):
        return ""
    depth = len([p for p in canonical_path.strip("/").split("/") if p])
    return "../" * depth


def top_shell(canonical_path: str, active: str = "") -> str:
    r = rel_root(canonical_path)
    return f"""
<div class="topbar">
  <span class="topbar-l">🇨🇦 Serving drivers &amp; fleets coast to coast</span>
  <div class="topbar-r">
    <a href="mailto:{SITE['email']}">{SITE['email']}</a>
    <a href="tel:{SITE['phone_tel']}">{SITE['phone_display']}</a>
  </div>
</div>
<nav>
  <a class="nav-logo" href="{r}index.html"><span class="logo-mark">NWR</span><span class="logo-text">{SITE['name']}</span></a>
  <ul class="nav-links">
    <li><a href="{r}index.html#services" class="{'active' if active=='services' else ''}">Services</a></li>
    <li><a href="{r}index.html#fleet" class="{'active' if active=='fleet' else ''}">Fleet</a></li>
    <li><a href="{r}index.html#coverage" class="{'active' if active=='coverage' else ''}">Coverage</a></li>
    <li><a href="{r}index.html#quote" class="{'active' if active=='quote' else ''}">Get help</a></li>
  </ul>
  <div class="nav-cta">
    <a class="btn-call" href="tel:{SITE['phone_tel']}">Call now</a>
  </div>
  <button class="hamburger" aria-label="Menu" type="button"><span></span><span></span><span></span></button>
</nav>
<div class="mob-menu" hidden>
  <a href="{r}index.html#services">Services</a>
  <a href="{r}index.html#fleet">Fleet</a>
  <a href="{r}index.html#coverage">Coverage</a>
  <a href="{r}index.html#quote">Get help</a>
  <div class="mob-cta"><a class="mc-call" href="tel:{SITE['phone_tel']}">Call {SITE['phone_display']}</a></div>
</div>"""


def footer_block(canonical_path: str) -> str:
    r = rel_root(canonical_path)
    return f"""
<footer class="site-footer">
  <div class="footer-grid">
    <div>
      <div class="footer-brand">{SITE['name']}</div>
      <p>{SITE['tagline']}. Research-backed service pages for tire repair intent across Canada — confirm local fulfillment before dispatch.</p>
    </div>
    <div>
      <h4>Contact</h4>
      <ul>
        <li><a href="tel:{SITE['phone_tel']}">{SITE['phone_display']}</a></li>
        <li><a href="mailto:{SITE['email']}">{SITE['email']}</a></li>
        <li>{SITE['hours']}</li>
      </ul>
    </div>
    <div>
      <h4>Popular services</h4>
      <ul>
        <li><a href="{r}mobile-tire-repair/index.html">Mobile tire repair</a></li>
        <li><a href="{r}flat-tire-repair/index.html">Flat tire repair</a></li>
        <li><a href="{r}truck-tire-repair/index.html">Truck tire repair</a></li>
        <li><a href="{r}emergency-tire-repair/index.html">Emergency tire repair</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 {SITE['name']}</span>
    <span>{SITE['hours_note']}</span>
  </div>
</footer>
<script src="{rel_root(canonical_path)}assets/js/main.js"></script>"""


def city_slug_suffix(city: str) -> str:
    known = {
        "St Catharines": "st-catharines",
        "London Ontario": "london-ontario",
        "Surrey BC": "surrey-bc",
        "North York": "north-york",
    }
    return known.get(city, city.lower().replace(" ", "-"))


def build_home(pages: list, cities: list) -> str:
    national = [p for p in pages if "National" in p.get("area", "")]
    marquee = national[:12]
    city_links = sorted({p["area"] for p in pages if p.get("area") and "National" not in p["area"]})

    service_cards = ""
    icons = ["🛞", "🚛", "📍", "🆘", "🕐", "🛣️", "🔧", "⚙️", "💨", "🔩", "🪛", "💧"]
    for i, p in enumerate(national):
        base = slug_base(p["slug"])
        blurb = SERVICE_BLURBS.get(base, "Professional tire repair dispatched to your location.")
        vol = p.get("vol")
        badge = "High demand" if vol and float(vol) >= 400 else ""
        service_cards += f"""
        <article class="service-card{' featured' if i == 7 else ''}">
          {f'<span class="pill">{badge}</span>' if badge else ''}
          <div class="svc-icon">{icons[i % len(icons)]}</div>
          <h3><a href="{p['slug']}/index.html">{p['primary_kw'].title() if p['primary_kw'] else p['title']}</a></h3>
          <p>{blurb}</p>
          <a class="link-arrow" href="{p['slug']}/index.html">View service page</a>
        </article>"""

    def city_href(city: str) -> str:
        slug = f"mobile-tire-repair-{city_slug_suffix(city)}"
        if not any(p["slug"] == slug for p in pages):
            slug = next((p["slug"] for p in pages if p["area"] == city), "index.html#coverage")
        return f"{slug}/index.html" if slug.startswith("mobile") else slug

    city_pills = "".join(f'<a href="{city_href(c)}">{c}</a>' for c in sorted(city_links))

    standards = [
        ("01", "Route-smart dispatch", "We match your keyword intent — mobile, roadside, fleet, or emergency — to the right crew and equipment."),
        ("02", "Repair vs replace honesty", "Punctures and leaks are tested for safe repair; otherwise we explain replacement options clearly."),
        ("03", "Fleet-ready documentation", "Commercial clients receive job notes suitable for maintenance logs and insurance follow-up."),
        ("04", "Transparent quotes", "Scope, estimated arrival, and pricing are confirmed before wheels come off."),
        ("05", "Canadian corridors", "National pages plus city targets from our pSEO research — local pages need unique on-the-ground detail."),
        ("06", "No false promises", "24/7 and emergency claims are region-specific; we confirm hours when you call."),
    ]
    std_html = "".join(
        f'<div class="std-item"><span class="std-num">{n}</span><h3>{t}</h3><p>{d}</p></div>'
        for n, t, d in standards
    )

    return f"""<!DOCTYPE html>
<html lang="en-CA">
<head>
{head_block(f"{SITE['name']} | Canada's Mobile Tire Repair Network", "Mobile, roadside, flat, and truck tire repair across Canada. Call " + SITE['phone_display'] + " for dispatch.", "/")}
</head>
<body>
{top_shell("/")}
<header class="hero">
  <div class="hero-bg"></div>
  <div class="hero-inner">
    <div class="hero-copy">
      <div class="hero-badge">Available for dispatch — fast response on major routes</div>
      <h1>Canada's trusted <em>mobile tire repair</em> network</h1>
      <p class="hero-desc">From flat tires in Toronto traffic to semi-truck rubber on the Trans-Canada, {SITE['name']} connects search intent to real tire repair — patch, inflate, swap, and fleet support backed by our 288-page service map.</p>
      <div class="hero-btns">
        <a class="btn-primary" href="tel:{SITE['phone_tel']}">Call {SITE['phone_display']}</a>
        <a class="btn-secondary" href="#quote">Request callback</a>
      </div>
      <ul class="hero-trust">
        <li>12 core service topics</li>
        <li>{len(city_links)} city targets</li>
        <li>288 pSEO-ready pages</li>
        <li>Phone-first CTA</li>
      </ul>
    </div>
    <div class="hero-panel">
      <h2>Our track record</h2>
      <div class="stat-grid">
        <div><strong>2,100+</strong><span>mo. searches — tire repair</span></div>
        <div><strong>450+</strong><span>mobile repair intent</span></div>
        <div><strong>23</strong><span>metro areas mapped</span></div>
        <div><strong>45 min</strong><span>avg. callback target</span></div>
      </div>
      <p class="panel-note">Metrics sourced from Ahrefs CA exports in your research workbook — not a guarantee of lead volume.</p>
    </div>
  </div>
  <div class="marquee" aria-hidden="true">
    <div class="marquee-track">
      {''.join(f'<span>{p["primary_kw"]} ◆ </span>' for p in marquee * 2)}
    </div>
  </div>
</header>

<section class="section about" id="about">
  <div class="container split">
    <div>
      <p class="eyebrow">Built from your pSEO master sheet</p>
      <h2>Every page matches a verified keyword</h2>
      <p>{SITE['name']} mirrors the structure of high-converting service sites while using unique Canadian tire content, typography, and color — not a clone of overseas maintenance templates.</p>
      <ul class="check-list">
        <li>24 Ahrefs source terms → 12 national service hubs</li>
        <li>276 city expansion pages across researched targets</li>
        <li>Commercial truck + passenger tire intents separated</li>
        <li>Scope flags respected (hours, roadside scope, DIY bleed)</li>
      </ul>
    </div>
    <div class="about-card">
      <h3>Publication controls</h3>
      <p>Your workbook marks city metrics as unmeasured and operating hours as unknown. This site uses conditional language until local fulfillment is verified.</p>
      <a class="btn-primary" href="tire-repair/index.html">Start with tire repair</a>
    </div>
  </div>
</section>

<section class="section services" id="services">
  <div class="container">
    <p class="eyebrow">National service topics</p>
    <h2>Professional tire solutions across Canada</h2>
    <p class="section-lead">Skilled techs, proper patches, and mobile units — aligned to the exact phrases in your keyword audit.</p>
    <div class="service-grid">{service_cards}</div>
  </div>
</section>

<section class="section fleet" id="fleet">
  <div class="container split">
    <div>
      <p class="eyebrow">Truck &amp; semi</p>
      <h2>Fleet &amp; heavy-duty tire experts</h2>
      <p>Truck tire repair, mobile truck units, and roadside assistance keywords are isolated from general consumer repair so SERP intent stays clean.</p>
      <div class="fleet-links">
        <a href="truck-tire-repair/index.html">Truck tire repair</a>
        <a href="semi-truck-tire-repair/index.html">Semi truck tire repair</a>
        <a href="mobile-truck-tire-repair/index.html">Mobile truck tire repair</a>
        <a href="truck-roadside-assistance/index.html">Truck roadside assistance</a>
      </div>
    </div>
    <div class="feature-stack">
      <article><h3>Highway-ready rigs</h3><p>Steer, drive, and trailer positions with torque and inflation checks.</p></article>
      <article><h3>Yard &amp; depot calls</h3><p>Keep tractors rolling without shop appointments.</p></article>
      <article><h3>Scope clarity</h3><p>Roadside assistance may include non-tire help — confirm when dispatching.</p></article>
    </div>
  </div>
</section>

<section class="section standards">
  <div class="container">
    <p class="eyebrow">The Northern Wheel standard</p>
    <h2>Six commitments on every job</h2>
    <div class="std-grid">{std_html}</div>
  </div>
</section>

<section class="section process">
  <div class="container">
    <p class="eyebrow">Simple. Professional. Reliable.</p>
    <h2>Five steps from flat to rolling</h2>
    <ol class="steps">
      <li><strong>Call dispatch</strong><span>{SITE['phone_display']} — tell us your keyword need (mobile, flat, truck).</span></li>
      <li><strong>Share location</strong><span>Highway marker, address, or fleet yard — photos help.</span></li>
      <li><strong>Confirm scope</strong><span>Repair, spare swap, or tow coordination if required.</span></li>
      <li><strong>On-site work</strong><span>Patch, plug, inflate, or mount with clean workspace.</span></li>
      <li><strong>Roll safe</strong><span>Pressure check and guidance on follow-up if needed.</span></li>
    </ol>
  </div>
</section>

<section class="section coverage" id="coverage">
  <div class="container">
    <p class="eyebrow">City &amp; area targets</p>
    <h2>Covering researched Canadian metros</h2>
    <p class="section-lead">Each city has 12 service slug variants — same structure as your pSEO Page Plan sheet.</p>
    <div class="city-cloud">{city_pills}</div>
  </div>
</section>

<section class="section cta-band">
  <div class="container cta-inner">
    <h2>Blowout? Slow leak? Fleet down?</h2>
    <p>Our phone-first CTA matches all 288 rows in your master sheet.</p>
    <a class="btn-primary btn-lg" href="tel:{SITE['phone_tel']}">Call {SITE['phone_display']}</a>
  </div>
</section>

<section class="section quote" id="quote">
  <div class="container split">
    <div>
      <p class="eyebrow">Get help</p>
      <h2>Request a callback</h2>
      <p>We respond quickly on major corridors. This form is a demo — wire to your CRM or dispatch line.</p>
      <ul class="contact-list">
        <li><strong>Phone</strong> <a href="tel:{SITE['phone_tel']}">{SITE['phone_display']}</a></li>
        <li><strong>Email</strong> <a href="mailto:{SITE['email']}">{SITE['email']}</a></li>
        <li><strong>Hours</strong> {SITE['hours']}</li>
      </ul>
    </div>
    <form class="quote-form" action="#" method="post">
      <label>Name<input name="name" required placeholder="Your name"/></label>
      <label>Phone<input name="phone" required placeholder="(555) 555-5555"/></label>
      <label>City<input name="city" placeholder="e.g. Calgary"/></label>
      <label>What do you need?<textarea name="need" rows="3" placeholder="Flat tire, truck steer, mobile repair…"></textarea></label>
      <button type="submit" class="btn-primary">Submit request</button>
    </form>
  </div>
</section>
{footer_block("/")}
</body>
</html>"""


def build_service_page(page: dict, all_pages: list, city_suffixes: list[str]) -> str:
    slug = page["slug"]
    canonical = f"/{slug}/"
    area = area_label(page["area"])
    base = slug_base(slug, city_suffixes)
    blurb = SERVICE_BLURBS.get(base, "Professional tire repair for your location and vehicle type.")
    primary = page["primary_kw"] or page["title"]
    secondaries = secondary_list(page.get("secondary_kw") or "")
    related = [p for p in all_pages if p["area"] == page["area"] and p["slug"] != slug][:6]
    if not related:
        related = [p for p in all_pages if "National" in p.get("area", "")][:6]

    related_html = "".join(
        f'<li><a href="{rel_root(canonical)}{p["slug"]}/index.html">{p["title"]}</a></li>' for p in related
    )

    vol = page.get("vol")
    kd = page.get("kd")
    cpc = page.get("cpc")
    metrics = ""
    if vol is not None and "National" in page.get("area", ""):
        metrics = f"""<div class="metrics"><span>Volume (CA/mo): <strong>{int(float(vol))}</strong></span>
        <span>KD: <strong>{kd}</strong></span><span>CPC: <strong>${cpc}</strong></span></div>"""

    local_para = ""
    if "National" not in page.get("area", ""):
        local_para = f"<p>Local page for <strong>{area}</strong>. Add unique landmarks, response times, and partner shops before publishing — your scope sheet requires distinct city content.</p>"
    else:
        local_para = f"<p>National Canada page targeting <strong>{primary}</strong> and related commercial + local intent.</p>"

    sec_block = ""
    if secondaries:
        sec_block = "<h3>Related searches we align with</h3><ul class=" + '"tag-list">' + "".join(f"<li>{s}</li>" for s in secondaries) + "</ul>"

    title = page["title"]
    desc = f"{primary} in {area}. Call {SITE['phone_display']} for mobile dispatch, flat repair, and fleet tire support."

    return f"""<!DOCTYPE html>
<html lang="en-CA">
<head>
{head_block(title, desc, canonical)}
</head>
<body class="page-service">
{top_shell(canonical, "services")}
<header class="page-hero">
  <div class="container">
    <nav class="breadcrumb"><a href="{rel_root(canonical)}index.html">Home</a> / <span>{area}</span></nav>
    <p class="eyebrow">{page.get('category') or 'Tire repair service'}</p>
    <h1>{title.replace(' | Call Now', '')}</h1>
    {local_para}
    {metrics}
    <div class="page-cta">
      <a class="btn-primary btn-lg" href="tel:{SITE['phone_tel']}">Call {SITE['phone_display']}</a>
      <a class="btn-secondary" href="{rel_root(canonical)}index.html#quote">Request callback</a>
    </div>
  </div>
</header>
<section class="section">
  <div class="container split">
    <div>
      <h2>What you get</h2>
      <p>{blurb}</p>
      <p>Primary keyword focus: <strong>{primary}</strong>. CTA on this page: phone number — consistent with your master sheet.</p>
      {sec_block}
    </div>
    <aside class="sidebar">
      <h3>More in {area}</h3>
      <ul>{related_html}</ul>
    </aside>
  </div>
</section>
{footer_block(canonical)}
</body>
</html>"""


def main() -> None:
    payload = load_pages()
    pages = payload["pages"]
    cities = payload.get("cities", [])
    city_areas = sorted({p["area"] for p in pages if p.get("area") and "National" not in p["area"]})
    city_suffixes = [city_slug_suffix(c) for c in city_areas]

    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir(parents=True)
    (OUT / "assets" / "css").mkdir(parents=True)
    (OUT / "assets" / "js").mkdir(parents=True)
    shutil.copy(ROOT / "assets" / "css" / "styles.css", OUT / "assets" / "css" / "styles.css")
    shutil.copy(ROOT / "assets" / "js" / "main.js", OUT / "assets" / "js" / "main.js")

    (OUT / "index.html").write_text(build_home(pages, cities), encoding="utf-8")

    for page in pages:
        slug_dir = OUT / page["slug"]
        slug_dir.mkdir(parents=True, exist_ok=True)
        (slug_dir / "index.html").write_text(build_service_page(page, pages, city_suffixes), encoding="utf-8")

    # sitemap
    lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    lines.append(f"<url><loc>https://{SITE['domain']}/</loc></url>")
    for page in pages:
        lines.append(f"<url><loc>https://{SITE['domain']}/{page['slug']}/</loc></url>")
    lines.append("</urlset>")
    (OUT / "sitemap.xml").write_text("\n".join(lines), encoding="utf-8")

    print(f"Built {len(pages) + 1} HTML files + sitemap → {OUT}")


if __name__ == "__main__":
    main()
