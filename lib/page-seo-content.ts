import { getCitySeoFacts } from "@/lib/city-seo";
import { SERVICE_TITLES } from "@/lib/local-pages";
import type { SeoPage } from "@/lib/pages";
import { SERVICE_BLURBS, SITE } from "@/lib/site";

export type FaqItem = { question: string; answer: string };

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function titleCase(kw: string): string {
  return kw.replace(/\b\w/g, (c) => c.toUpperCase());
}

export function buildPageTitle(
  page: SeoPage,
  serviceBase: string,
  isLocal: boolean,
): string {
  const brand = SITE.name;
  if (isLocal) {
    const city = getCitySeoFacts(page.area).displayName;
    const primary = page.primary_kw || `${SERVICE_TITLES[serviceBase]} ${city}`.toLowerCase();
    const candidate = `${titleCase(primary)} | ${brand}`;
    if (candidate.length <= 60) return candidate;
    return `${SERVICE_TITLES[serviceBase]} ${city} | ${brand}`.slice(0, 60);
  }
  const primary = page.primary_kw || SERVICE_TITLES[serviceBase];
  const candidate = `${titleCase(primary)} Canada | ${brand}`;
  return candidate.length <= 60 ? candidate : candidate.slice(0, 60);
}

export function buildMetaDescription(
  page: SeoPage,
  serviceBase: string,
  isLocal: boolean,
): string {
  const service = SERVICE_TITLES[serviceBase] ?? page.primary_kw;
  const h = hash(page.slug + (page.secondary_kw || ""));
  if (isLocal) {
    const facts = getCitySeoFacts(page.area);
    const city = facts.displayName;
    const variants = [
      `${service} in ${city} — trace leaks, dry structure, rebuild for campers near ${facts.landmark}. Call ${SITE.phoneDisplay} for a quote.`,
      `${city} ${service.toLowerCase()} for motorhomes & travel trailers. ${facts.climate} is tough on seals — we explain scope before tear-out. Call ${SITE.phoneDisplay}.`,
      `Need ${service.toLowerCase()} in ${city}? Mobile help for driveways & storage lots. Quote first, then repair. Call ${SITE.phoneDisplay} to book.`,
    ];
    const d = variants[h % variants.length];
    return d.length <= 160 ? d : d.slice(0, 157) + "…";
  }
  const variants = [
    `${service} across Canada — roof, floor, mould & plumbing leaks in RVs. Trace, dry, rebuild. Call ${SITE.phoneDisplay} to describe your rig.`,
    `Canada-wide ${service.toLowerCase()} for motorhomes & fifth wheels. Clear pricing before demolition. Call ${SITE.phoneDisplay} today.`,
    `${service} for campers nationwide. We match materials to lightweight RV construction. Call ${SITE.phoneDisplay} for scheduling.`,
  ];
  const d = variants[h % variants.length];
  return d.length <= 160 ? d : d.slice(0, 157) + "…";
}

export function pageH1(
  page: SeoPage,
  serviceBase: string,
  isLocal: boolean,
): string {
  const service = SERVICE_TITLES[serviceBase] ?? titleCase(page.primary_kw);
  if (isLocal) {
    const city = getCitySeoFacts(page.area).displayName;
    return `${service} in ${city}`;
  }
  return `${service} in Canada`;
}

export function buildIntro(
  page: SeoPage,
  serviceBase: string,
  isLocal: boolean,
): string {
  const blurb = SERVICE_BLURBS[serviceBase] ?? "";
  const service = SERVICE_TITLES[serviceBase] ?? page.primary_kw;
  const h = hash(page.slug);

  if (isLocal) {
    const facts = getCitySeoFacts(page.area);
    const openers = [
      `When ${service.toLowerCase()} cannot wait until your next trip out of ${facts.displayName}, you need someone who understands camper construction — not a house restoration crew.`,
      `Owners across ${facts.displayName} call us when a stain, smell, or soft floor shows up after ${facts.climate}.`,
      `If you store near ${facts.landmark} or live around ${facts.neighbourhood}, moisture in an RV can spread quietly along plywood and insulation.`,
      `${facts.displayName} full-timers and weekend campers alike reach ${SITE.name} when ${service.toLowerCase()} threatens a season — especially after storms rolling in from ${facts.landmark}.`,
      `Spongy steps and musty closets show up often in ${facts.neighbourhood}; ${facts.climate} makes small seal failures turn into big repairs if you wait.`,
    ];
    const opener = openers[h % openers.length];
    const closers = [
      `Tell us your rig type and what you noticed — we will explain the next step in plain language.`,
      `Share photos if you have them; we confirm ${service.toLowerCase()} coverage for ${facts.displayName} before dispatch.`,
      `We quote before major tear-out and schedule visits to driveways, storage yards, and sites you can reach from ${facts.landmark}.`,
    ];
    const closer = closers[(h + serviceBase.length) % closers.length];
    const local =
      `${service} in ${facts.displayName} — ${facts.population} in the region; ${facts.climate} is hard on roof laps and slide seals. ` +
      `${blurb} We confirm scope and price before tear-out, and we schedule visits to driveways, storage lots, and campgrounds you can reach from ${facts.landmark}. ` +
      closer;
    return `${opener} ${local}`;
  }

  const nationalOpeners = [
    `Canadian full-timers, weekend campers, and snowbirds rely on ${SITE.name} when ${service.toLowerCase()} threatens a season on the road.`,
    `When ${service.toLowerCase()} shows up as a stain, smell, or soft spot, owners across Canada call ${SITE.name} before the next long haul.`,
    `${SITE.name} coordinates ${service.toLowerCase()} for motorhomes and travel trailers from coast to coast — with RV-specific materials, not house shortcuts.`,
  ];
  const national =
    `${nationalOpeners[h % nationalOpeners.length]} ` +
    `${blurb} ` +
    `From Pacific rain to prairie hail and Quebec freeze–thaw, water enters through roof laps, windows, slide-outs, and plumbing bays — then travels where you cannot see it. ` +
    `We trace the source, dry the shell with moisture readings, and rebuild with materials matched to lightweight RV construction. ` +
    `Call ${SITE.phoneDisplay} to describe what you are seeing; a coordinator will tell you what we can do nationally and how soon a technician can assess your rig.`;
  return national;
}

export function buildBodySections(
  page: SeoPage,
  serviceBase: string,
  isLocal: boolean,
): { heading: string; paragraphs: string[] }[] {
  const service = SERVICE_TITLES[serviceBase] ?? page.primary_kw;
  const h = hash(page.slug + serviceBase);

  const common = [
    {
      heading: "What we look for on your rig",
      paragraphs: [
        `During ${service.toLowerCase()}, we start with how water enters: failed sealant, cracked gaskets, loose fittings, or condensation trapped after lay-up. We follow staining, soft spots, and musty areas until the path makes sense — not just the visible damage.`,
        `Lightweight plywood, luan, and foam insulation dry differently than residential walls. We keep structure open until readings are safe, document what must be removed, and explain what can stay.`,
      ],
    },
    {
      heading: "What to expect when you call",
      paragraphs: [
        `You will speak with a coordinator, not an automated queue. Share your city, RV year/make/model, and symptoms — drip, bubble, spongy floor, or odour after storage.`,
        `We quote leak tracing, drying, or rebuild scope before major demolition. If insurance needs photos or moisture logs, we can provide them when useful.`,
      ],
    },
    {
      heading: "Why act before the next trip",
      paragraphs: [
        `Water that sits continues along screw lines and edge grain. Mould follows moisture that never fully dried. A smaller repair today often prevents a full floor or wall replacement later.`,
        `After work completes, we note what was fixed, what to monitor, and when to re-check seals — especially before long hauls or winter storage.`,
      ],
    },
  ];

  if (isLocal) {
    const facts = getCitySeoFacts(page.area);
    const localBlock = {
      heading: `Serving ${facts.displayName} and nearby routes`,
      paragraphs: [
        `We regularly reach owners near ${facts.landmark} and communities such as ${facts.neighbourhood}. ${facts.climate} is hard on roof laps and slide seals — especially when rigs sit unused for months.`,
        `Whether you are pre-trip in spring or mid-season after a storm, tell us where the camper is parked. We confirm coverage for ${service.toLowerCase()} in ${facts.displayName} before we dispatch.`,
      ],
    };
    const sections = h % 2 === 0 ? [localBlock, ...common] : [...common, localBlock];
    return sections;
  }

  const nationalBlock = {
    heading: "Coast-to-coast scheduling",
    paragraphs: [
      `We coordinate ${service.toLowerCase()} for motorhomes, travel trailers, and fifth wheels across provinces. Seasonal owners often book after dewinterizing or before selling — whenever honesty about moisture matters.`,
      `National accounts and single-rig owners get the same plain-language walk-through: what is wet, what must come out, and what it costs before we start.`,
    ],
  };
  const serviceDepth = {
    heading: `What ${service.toLowerCase()} includes on a typical rig`,
    paragraphs: [
      `Every manufacturer routes wiring, plumbing, and insulation differently. We treat ${service.toLowerCase()} as a process: confirm the leak path, remove only what cannot dry safely, replace with compatible thickness and fasteners, and re-test before we close walls or floors.`,
      `Owners often ask whether they can keep camping with a small stain. We measure moisture behind finishes — if readings stay high, hidden mould or rot continues even when the surface looks fine. Acting early keeps ${service.toLowerCase()} scoped to a bay or section instead of a full shell.`,
      `After repair, we leave written notes on what was sealed or rebuilt, what to watch on the next rain, and when to re-check roof laps or slide seals. That matters on long hauls where vibration loosens fittings you cannot see from the ground.`,
      `Many owners combine ${service.toLowerCase()} with a roof walk or seal inspection so the entry point and interior damage are handled in one plan.`,
    ],
  };
  const planning = {
    heading: "Planning your appointment",
    paragraphs: [
      `Have your RV year, make, model, and roof type ready when you call. Photos of stains, soft floors, or delamination help dispatch match you with the right technician and parts.`,
      `If the unit is in storage, tell us gate codes, aisle width, and power availability for drying equipment. We work in driveways, dealer lots, and campground sites when access is safe.`,
    ],
  };
  const canadaNotes = {
    heading: "Seasons, storage, and when to call",
    paragraphs: [
      `Spring dewinterizing exposes leaks that grew under snow load. Summer hail and tree branches puncture roof membranes. Fall lay-up traps humidity if vents stay closed. We align ${service.toLowerCase()} with how you actually use the rig — not a one-size house mold protocol.`,
      `Snowbirds and cross-country travelers often book mid-route when a new drip appears after a long driving day. Tell us your timeline; we prioritize rigs with active moisture and trips already booked.`,
      `Keep maintenance records after ${service.toLowerCase()} — resale and insurance both go smoother when moisture work is documented with dates and photos.`,
    ],
  };
  return [nationalBlock, serviceDepth, planning, canadaNotes, ...common];
}

function faqPool(serviceBase: string, isLocal: boolean, page: SeoPage): FaqItem[] {
  const service = SERVICE_TITLES[serviceBase] ?? "this repair";
  const facts = isLocal ? getCitySeoFacts(page.area) : null;
  const city = facts?.displayName ?? "your city";

  const base: FaqItem[] = [
    {
      question: `How soon can I get ${service.toLowerCase()} near me?`,
      answer: isLocal
        ? `Availability in ${city} depends on season and how many rigs are ahead of you. Call ${SITE.phoneDisplay} with your postal area near ${facts?.landmark ?? city}; we give an honest window — often same week when you call early.`
        : `We schedule across Canada by region. Call ${SITE.phoneDisplay} with your city and rig details; the coordinator confirms whether we can reach you in the timeframe you need.`,
    },
    {
      question: `Do you work on motorhomes and travel trailers for ${service.toLowerCase()}?`,
      answer:
        "Yes — Class A/B/C motorhomes, travel trailers, fifth wheels, and truck campers. Tell us roof type (rubber, fibreglass, aluminum) and where damage shows; we match sealants and rebuild methods to how your unit is built.",
    },
    {
      question: "Will you quote before tearing anything out?",
      answer:
        "We explain leak tracing vs. tear-out scope and pricing before major demolition. If moisture is deeper than expected after opening a small area, we stop and discuss options — no surprise bills without talking to you first.",
    },
    {
      question: "Can you help with insurance documentation?",
      answer:
        "Many owners need photos, moisture readings, and a short summary after sudden leaks. Tell us when you call; we document what we find in a way you can share with your adjuster.",
    },
    {
      question: "What if I only notice a smell after winter storage?",
      answer: isLocal
        ? `Musty odours after lay-up are common around ${city} when ${facts?.climate ?? "freeze–thaw"} traps moisture in closets and floors. We inspect for mould risk, dry the shell, and remove contaminated materials when readings require it.`
        : "Closed-up rigs trap humidity. We inspect for mould, dry structure, and replace materials that cannot be sanitized — then advise on ventilation before your next trip.",
    },
  ];

  if (serviceBase.includes("roof")) {
    base.push({
      question: "Is roof resealing enough or do I need interior repair?",
      answer:
        "Resealing fixes the entry point; interior work fixes soaked insulation or soft wood. We check both — resealing alone does not help if plywood under the vinyl is still wet.",
    });
  }
  if (serviceBase.includes("floor") || serviceBase.includes("subfloor")) {
    base.push({
      question: "How do I know if my floor is rotted or just soft vinyl?",
      answer:
        "A soft step that flexes with body weight often means wet plywood below. We probe from vents or edges, measure moisture, and show you whether patch or subfloor replacement is required.",
    });
  }
  if (serviceBase.includes("mold")) {
    base.push({
      question: "Is camper mould dangerous to sleep in?",
      answer:
        "Mould spores can affect air quality, especially for allergies or asthma. We contain affected areas, remove porous materials that cannot be cleaned, and dry the shell before you use the rig overnight again.",
    });
  }

  const start = hash(page.slug) % Math.max(1, base.length - 2);
  return base.slice(start, start + 3).length >= 3
    ? base.slice(start, start + 3)
    : base.slice(0, 3);
}

export function buildFaqs(
  page: SeoPage,
  serviceBase: string,
  isLocal: boolean,
): FaqItem[] {
  const pool = faqPool(serviceBase, isLocal, page);
  if (pool.length >= 3) return pool.slice(0, 3);
  const fallback: FaqItem = {
    question: `How do I book ${SERVICE_TITLES[serviceBase] ?? "RV repair"}?`,
    answer: `Call ${SITE.phoneDisplay}. We confirm coverage and scheduling for your rig.`,
  };
  return [...pool, fallback, pool[0]].slice(0, 3);
}

export function totalWordCount(parts: string[]): number {
  return parts.join(" ").split(/\s+/).filter(Boolean).length;
}

export function estimatePageWordCount(
  page: SeoPage,
  serviceBase: string,
  isLocal: boolean,
): number {
  const intro = buildIntro(page, serviceBase, isLocal);
  const sections = buildBodySections(page, serviceBase, isLocal);
  const faqs = buildFaqs(page, serviceBase, isLocal);
  const chunks = [
    intro,
    ...sections.flatMap((s) => [s.heading, ...s.paragraphs]),
    ...faqs.flatMap((f) => [f.question, f.answer]),
  ];
  return totalWordCount(chunks);
}

export function breadcrumbItems(
  page: SeoPage,
  serviceBase: string,
  isLocal: boolean,
): { name: string; path: string }[] {
  const items = [{ name: "Home", path: "/" }];
  if (isLocal) {
    const city = getCitySeoFacts(page.area).displayName;
    items.push({
      name: `${SERVICE_TITLES[serviceBase]} Canada`,
      path: `/${serviceBase}`,
    });
    items.push({ name: city, path: `/${page.slug}` });
  } else {
    items.push({ name: "Canada", path: `/${page.slug}` });
  }
  return items;
}
