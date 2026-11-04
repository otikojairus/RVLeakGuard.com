import { citySlugSuffix } from "@/lib/cities";
import { getCitySeoFacts } from "@/lib/city-seo";
import { slugBase } from "@/lib/content";
import { SERVICE_TITLES } from "@/lib/local-pages";
import { allPages, citySuffixes, type SeoPage } from "@/lib/pages";

export function serviceBaseFromPage(page: SeoPage): string {
  return slugBase(page.slug, citySuffixes);
}

export function pillarPageFor(page: SeoPage): SeoPage | undefined {
  const base = serviceBaseFromPage(page);
  return allPages.find((p) => p.slug === base && p.area.includes("National"));
}

export function cityPagesForService(serviceBase: string): SeoPage[] {
  return allPages.filter((p) => {
    if (p.area.includes("National")) return false;
    return slugBase(p.slug, citySuffixes) === serviceBase;
  });
}

export function cityPageSlug(serviceBase: string, city: string): string {
  return `${serviceBase}-${citySlugSuffix(city)}`;
}

export function otherServicesInCity(page: SeoPage, limit = 18): SeoPage[] {
  const base = serviceBaseFromPage(page);
  return allPages
    .filter((p) => p.area === page.area && slugBase(p.slug, citySuffixes) !== base)
    .slice(0, limit);
}

export function linkLabel(page: SeoPage): string {
  const base = serviceBaseFromPage(page);
  const service = SERVICE_TITLES[base] ?? page.primary_kw ?? "RV repair";
  if (page.area.includes("National")) {
    return `${service} Canada`;
  }
  return `${service} ${getCitySeoFacts(page.area).displayName}`;
}
