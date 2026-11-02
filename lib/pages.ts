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
    allPages
      .map((p) => p.area)
      .filter((a) => a && !a.includes("National")),
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
  const slug = `fire-extinguisher-inspection-${citySlugSuffix(city)}`;
  if (allPages.some((p) => p.slug === slug)) return slug;
  const fallback = allPages.find((p) => p.area === city);
  return fallback?.slug ?? slug;
}

export function nationalServicePages() {
  return nationalPages.filter((p) => !p.slug.startsWith("6-year") && !p.slug.startsWith("apartment"));
}

export const featuredNationalSlugs = [
  "fire-extinguisher-inspection",
  "commercial-fire-extinguisher-inspection",
  "annual-fire-extinguisher-inspection",
  "fire-extinguisher-maintenance",
  "fire-extinguisher-servicing",
  "fire-extinguisher-recharge-and-refill",
  "co2-fire-extinguisher-refill",
  "apartment-building-fire-extinguisher-inspection",
  "6-year-fire-extinguisher-inspection",
] as const;
