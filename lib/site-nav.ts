import { SERVICE_TITLES } from "@/lib/local-pages";
import { featuredNationalSlugs } from "@/lib/pages";

export type NavServiceLink = {
  slug: string;
  label: string;
  href: string;
};

export type NavServiceGroup = {
  id: string;
  label: string;
  links: NavServiceLink[];
};

function linkForSlug(slug: (typeof featuredNationalSlugs)[number]): NavServiceLink {
  return {
    slug,
    label: SERVICE_TITLES[slug] ?? slug,
    href: `/${slug}`,
  };
}

/** National service pages grouped for navigation (19 services). City pages link from each service. */
export const NAV_SERVICE_GROUPS: NavServiceGroup[] = [
  {
    id: "overview",
    label: "Overview",
    links: [linkForSlug("rv-water-damage-repair")],
  },
  {
    id: "roof",
    label: "Roof & vents",
    links: [
      linkForSlug("rv-roof-leak-repair"),
      linkForSlug("rv-roof-water-damage-repair"),
      linkForSlug("rv-roof-resealing"),
      linkForSlug("rv-skylight-leak-repair"),
    ],
  },
  {
    id: "openings",
    label: "Windows & slide-outs",
    links: [
      linkForSlug("rv-window-leak-repair"),
      linkForSlug("rv-window-seal-replacement"),
      linkForSlug("rv-slide-out-seal-replacement"),
    ],
  },
  {
    id: "floors",
    label: "Floors & subfloor",
    links: [
      linkForSlug("motorhome-floor-repair"),
      linkForSlug("rv-floor-rot-repair"),
      linkForSlug("rv-floor-water-damage-repair"),
      linkForSlug("rv-subfloor-replacement"),
    ],
  },
  {
    id: "structure",
    label: "Walls, ceiling & structure",
    links: [
      linkForSlug("rv-wall-water-damage-repair"),
      linkForSlug("rv-ceiling-water-damage-repair"),
      linkForSlug("rv-delamination-repair"),
      linkForSlug("rv-wood-rot-repair"),
    ],
  },
  {
    id: "health",
    label: "Mould & air quality",
    links: [linkForSlug("rv-mold-removal")],
  },
  {
    id: "plumbing",
    label: "Plumbing & water heater",
    links: [
      linkForSlug("rv-plumbing-leak-repair"),
      linkForSlug("rv-water-heater-leak-repair"),
    ],
  },
];

export const NAV_ALL_SERVICES: NavServiceLink[] = featuredNationalSlugs.map(linkForSlug);
