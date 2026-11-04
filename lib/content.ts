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
    if (base.includes("roof-leak") || base.includes("skylight") || base.includes("window-leak"))
      return "Roof & exterior leaks";
    if (base.includes("resealing") || base.includes("seal"))
      return "Seals & weatherproofing";
    if (base.includes("floor") || base.includes("subfloor") || base.includes("motorhome-floor"))
      return "Floor & subfloor";
    if (base.includes("wall") || base.includes("delamination") || base.includes("ceiling"))
      return "Walls & ceilings";
    if (base.includes("wood-rot")) return "Wood rot";
    if (base.includes("mold")) return "Mould remediation";
    if (base.includes("plumbing") || base.includes("water-heater")) return "Plumbing leaks";
    if (base.includes("water-damage-repair")) return "Water damage restoration";
    return page.category || "RV water damage";
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
