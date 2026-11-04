import type { SeoPage } from "@/lib/pages";
import { serviceCardImage } from "@/lib/service-images";

/** User-facing card titles (not SEO slug titles). */
export const SERVICE_CARD_TITLES: Record<string, string> = {
  "rv-water-damage-repair": "Water in the walls or floor",
  "rv-roof-leak-repair": "Roof leaks when it rains",
  "rv-roof-water-damage-repair": "Roof damage already inside",
  "rv-roof-resealing": "Reseal before the next storm",
  "rv-skylight-leak-repair": "Drips around the skylight",
  "rv-window-leak-repair": "Water by the windows",
  "rv-window-seal-replacement": "Foggy or drafty windows",
  "rv-slide-out-seal-replacement": "Leak when the slide is in",
  "motorhome-floor-repair": "Motorhome floor feels wrong",
  "rv-floor-rot-repair": "Soft or rotten flooring",
  "rv-floor-water-damage-repair": "Wet floors after a spill or leak",
  "rv-subfloor-replacement": "Subfloor needs replacing",
  "rv-wall-water-damage-repair": "Stains or bubbles on walls",
  "rv-delamination-repair": "Outer wall bubbling or separating",
  "rv-ceiling-water-damage-repair": "Sagging or stained ceiling",
  "rv-wood-rot-repair": "Rot in framing or wood",
  "rv-mold-removal": "Musty smell or visible mould",
  "rv-plumbing-leak-repair": "Plumbing leak under sinks or bays",
  "rv-water-heater-leak-repair": "Water heater bay is wet",
};

export const SERVICE_CARD_LINES: Record<string, string> = {
  "rv-water-damage-repair":
    "Not sure how far the moisture went? We help you find the source and dry out before mould starts.",
  "rv-roof-leak-repair":
    "Rain outside, drip inside — we trace failed sealant, vents, and seams, not just the ceiling stain.",
  "rv-roof-water-damage-repair":
    "When the roof has already soaked insulation or ceiling material, we map damage and rebuild properly.",
  "rv-roof-resealing":
    "Preventive resealing beats emergency tear-out — we match products to your roof type.",
  "rv-skylight-leak-repair":
    "Skylight frames and gaskets fail quietly; we re-bed and check the roof around them.",
  "rv-window-leak-repair":
    "Streaks on the wall below a window usually mean seal or drainage failure — we fix the path in.",
  "rv-window-seal-replacement":
    "Condensation between panes and drafts mean seals failed — we replace gaskets and exterior seal.",
  "rv-slide-out-seal-replacement":
    "Fresh wipers and bulb seals stop rain on the floor and wind noise on the highway.",
  "motorhome-floor-repair":
    "Flexing or soft spots near slides and entries need structural repair, not a vinyl patch.",
  "rv-floor-rot-repair":
    "That spongy step isn’t normal — we cut out rot, dry the bay, and rebuild plywood the right way.",
  "rv-floor-water-damage-repair":
    "From tank overflows to slow roof drips, we dry layers and replace what cannot be saved.",
  "rv-subfloor-replacement":
    "When a whole section is compromised, partial subfloor replacement restores a safe, stiff floor.",
  "rv-wall-water-damage-repair":
    "Water travels sideways behind paneling — we open, dry studs, and finish so it doesn’t come back.",
  "rv-delamination-repair":
    "Fibreglass pulling away from the core is structural — we repair before it spreads at speed.",
  "rv-ceiling-water-damage-repair":
    "Brown headliner spots mean wet insulation above — we fix the roof source and re-line inside.",
  "rv-wood-rot-repair":
    "Lightweight camper wood rots fast once wet — we replace members and seal the entry point.",
  "rv-mold-removal":
    "Closed-up moisture causes mould in closets and corners — we remove it and dry the shell.",
  "rv-plumbing-leak-repair":
    "Lines and fittings shake loose on the road — we pressure-test and fix without flooding the bay.",
  "rv-water-heater-leak-repair":
    "A weeping heater can flood storage overnight — we diagnose tank vs. fitting and dry the bay.",
};

export type ServiceCardItem = {
  slug: string;
  slugBase: string;
  title: string;
  line: string;
  image: string;
};

export function toServiceCardItem(page: SeoPage, slugBase: string): ServiceCardItem {
  return {
    slug: page.slug,
    slugBase,
    title:
      SERVICE_CARD_TITLES[slugBase] ??
      page.primary_kw ??
      page.title.replace(" | Call Now", ""),
    line:
      SERVICE_CARD_LINES[slugBase] ??
      "Tell us what you are seeing — we will walk you through the next step on the phone.",
    image: serviceCardImage(slugBase),
  };
}

/** Short, service-specific copy for sidebars (matches carousel cards). */
export function serviceSidebarLine(slugBase: string): string {
  return (
    SERVICE_CARD_LINES[slugBase] ??
    "Describe what you are seeing on your rig — dispatch is open 24/7."
  );
}
