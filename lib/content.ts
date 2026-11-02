
export function slugBase(slug: string, citySuffixes: string[]): string {
  for (const suf of [...citySuffixes].sort((a, b) => b.length - a.length)) {
    const token = `-${suf}`;
    if (slug.endsWith(token)) return slug.slice(0, -token.length);
  }
  return slug;
}

export function areaLabel(area: string): string {
  if (area.includes("National")) return "Canada";
  return area || "Canada";
}

export function displayServiceLabel(page: {
  area: string;
  category: string;
  slug: string;
}): string {
  const base = page.slug;
  if (page.area.includes("National")) {
    if (base.includes("commercial")) return "Commercial buildings";
    if (base.includes("annual")) return "Annual checks";
    if (base.includes("maintenance")) return "Maintenance";
    if (base.includes("servicing")) return "Routine servicing";
    if (base.includes("recharge") || base.includes("refill")) return "Recharge & refill";
    if (base.includes("co2")) return "CO₂ extinguishers";
    if (base.includes("apartment")) return "Apartments & condos";
    if (base.includes("6-year")) return "Long-interval service";
    return "Fire extinguisher inspection";
  }
  return `Help in ${areaLabel(page.area)}`;
}

export function secondaryKeywords(raw: string): string[] {
  if (!raw) return [];
  return raw
    .split(/[;,]/)
    .map((s) => s.trim())
    .filter(Boolean);
}
