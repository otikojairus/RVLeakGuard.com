import pagesData from "@/data/pages.json";
import { citySlugSuffix } from "@/lib/cities";

export type SeoPage = {
  num: number | string;
  title: string;
  slug: string;
  primary_kw: string;
  secondary_kw: string;
  area: string;
  vol: number | null;
  kd: number | null;
  cpc: number | null;
  category: string;
};

type PagesPayload = {
  pages: SeoPage[];
  cities: string[];
};

const payload = pagesData as PagesPayload;

export const allPages = payload.pages;

export const cityAreas = [
  ...new Set(
    allPages.map((p) => p.area).filter((a) => a && !a.includes("National")),
  ),
].sort();

export const citySuffixes = cityAreas.map(citySlugSuffix);

export const nationalPages = allPages.filter((p) => p.area.includes("National"));

export function getPageBySlug(slug: string): SeoPage | undefined {
  return allPages.find((p) => p.slug === slug);
}

export function getRelatedPages(page: SeoPage, limit = 6): SeoPage[] {
  const sameArea = allPages.filter(
    (p) => p.area === page.area && p.slug !== page.slug,
  );
  if (sameArea.length) return sameArea.slice(0, limit);
  return nationalPages.slice(0, limit);
}

export function mobilePageSlugForCity(city: string): string {
  const slug = `rv-water-damage-repair-${citySlugSuffix(city)}`;
  if (allPages.some((p) => p.slug === slug)) return slug;
  const fallback = allPages.find((p) => p.area === city);
  return fallback?.slug ?? slug;
}

export const featuredNationalSlugs = [
  "rv-water-damage-repair",
  "rv-roof-leak-repair",
  "rv-roof-water-damage-repair",
  "rv-roof-resealing",
  "rv-skylight-leak-repair",
  "rv-window-leak-repair",
  "rv-window-seal-replacement",
  "rv-slide-out-seal-replacement",
  "motorhome-floor-repair",
  "rv-floor-rot-repair",
  "rv-floor-water-damage-repair",
  "rv-subfloor-replacement",
  "rv-wall-water-damage-repair",
  "rv-delamination-repair",
  "rv-ceiling-water-damage-repair",
  "rv-wood-rot-repair",
  "rv-mold-removal",
  "rv-plumbing-leak-repair",
  "rv-water-heater-leak-repair",
] as const;
