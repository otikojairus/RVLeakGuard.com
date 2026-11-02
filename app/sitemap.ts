import type { MetadataRoute } from "next";
import { allPages } from "@/lib/pages";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${SITE.domain}`;
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    ...allPages.map((p) => ({
      url: `${base}/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: p.area.includes("National") ? 0.9 : 0.7,
    })),
  ];
}
