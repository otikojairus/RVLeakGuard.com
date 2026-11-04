/**
 * Pre-launch SEO audit — run: npx tsx scripts/seo-audit.ts
 */
import { slugBase } from "../lib/content";
import { cityPagesForService, otherServicesInCity, serviceBaseFromPage } from "../lib/internal-links";
import {
  buildIntro,
  buildMetaDescription,
  buildPageTitle,
  estimatePageWordCount,
  pageH1,
} from "../lib/page-seo-content";
import { SERVICE_TITLES } from "../lib/local-pages";
import { SERVICE_CARD_LINES, SERVICE_CARD_TITLES } from "../lib/service-cards";
import { SERVICE_CARD_IMAGES } from "../lib/service-images";
import { SERVICE_BLURBS } from "../lib/site";
import {
  allPages,
  cityAreas,
  citySuffixes,
  featuredNationalSlugs,
  mobilePageSlugForCity,
  type SeoPage,
} from "../lib/pages";

const inbound = new Map<string, number>();
const titles = new Map<string, string[]>();
const h1s = new Map<string, string[]>();
const intros = new Map<string, string[]>();

function bumpIn(slug: string) {
  inbound.set(slug, (inbound.get(slug) ?? 0) + 1);
}

function noteDup(map: Map<string, string[]>, value: string, slug: string) {
  const list = map.get(value) ?? [];
  list.push(slug);
  map.set(value, list);
}

// Homepage outbound
for (const slug of featuredNationalSlugs) bumpIn(slug);
for (const city of cityAreas) bumpIn(mobilePageSlugForCity(city));

for (const page of allPages) {
  const isLocal = !page.area.includes("National");
  const serviceBase = slugBase(page.slug, citySuffixes);

  const title = buildPageTitle(page, serviceBase, isLocal);
  const h1 = pageH1(page, serviceBase, isLocal);
  const intro = buildIntro(page, serviceBase, isLocal);
  const desc = buildMetaDescription(page, serviceBase, isLocal);
  const words = estimatePageWordCount(page, serviceBase, isLocal);

  noteDup(titles, title, page.slug);
  noteDup(h1s, h1, page.slug);
  noteDup(intros, intro, page.slug);

  if (title.length > 60) {
    console.warn("TITLE >60:", page.slug, title.length, title);
  }
  if (desc.length > 160) {
    console.warn("META >160:", page.slug, desc.length);
  }
  const introWords = intro.split(/\s+/).filter(Boolean).length;
  if (introWords < 80) {
    console.warn("INTRO <80 words:", page.slug, introWords);
  }
  const minWords = isLocal ? 400 : 800;
  if (words < minWords) {
    console.warn(`WORDS <${minWords}:`, page.slug, words);
  }

  if (!isLocal) {
    for (const city of cityPagesForService(serviceBase)) bumpIn(city.slug);
  } else {
    bumpIn(serviceBase);
    for (const other of otherServicesInCity(page, 18)) bumpIn(other.slug);
    const hub = mobilePageSlugForCity(page.area);
    if (hub !== page.slug) bumpIn(hub);
  }
}

const orphans = allPages.filter((p) => (inbound.get(p.slug) ?? 0) === 0);

const dupTitles = [...titles.entries()].filter(([, slugs]) => slugs.length > 1);
const dupH1 = [...h1s.entries()].filter(([, slugs]) => slugs.length > 1);
const dupIntro = [...intros.entries()].filter(([, slugs]) => slugs.length > 1);

console.log("\n=== RV Leak Guard SEO audit ===\n");
console.log("Pages:", allPages.length);
console.log("Orphan slugs (simulated inbound):", orphans.length);
if (orphans.length > 0 && orphans.length <= 30) {
  console.log(orphans.map((p: SeoPage) => p.slug).join("\n"));
}

console.log("\nDuplicate titles:", dupTitles.length);
console.log("Duplicate H1s:", dupH1.length);
console.log("Duplicate full intros:", dupIntro.length);

if (dupH1.length) {
  console.log("\nSample duplicate H1:", dupH1[0][0], "→", dupH1[0][1].slice(0, 5).join(", "));
}

console.log("\n=== Service content catalog (19 national slugs) ===\n");
for (const slug of featuredNationalSlugs) {
  const missing: string[] = [];
  if (!SERVICE_TITLES[slug]) missing.push("SERVICE_TITLES");
  if (!SERVICE_BLURBS[slug]) missing.push("SERVICE_BLURBS");
  if (!SERVICE_CARD_LINES[slug]) missing.push("SERVICE_CARD_LINES");
  if (!SERVICE_CARD_TITLES[slug]) missing.push("SERVICE_CARD_TITLES");
  if (!SERVICE_CARD_IMAGES[slug]) missing.push("SERVICE_CARD_IMAGES");
  if (missing.length) console.warn("MISSING", slug, "→", missing.join(", "));
}
console.log("Catalog check complete (no lines = all OK).\n");

console.log("\nDone. Fix warnings above before launch.\n");
