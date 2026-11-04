/**
 * Service visuals — files in /public/images/services (one per national slug).
 * Unsplash URLs kept as fallback if a file is missing.
 */
const FALLBACK =
  "https://images.unsplash.com/photo-1527786356704-1064e7950a70?auto=format&fit=crop&w=1200&q=80";

export const SERVICE_CARD_IMAGES: Record<string, string> = {
  "rv-water-damage-repair": "/images/services/rv-water-damage-repair.jpg",
  "rv-roof-leak-repair": "/images/services/rv-roof-leak-repair.jpg",
  "rv-roof-water-damage-repair": "/images/services/rv-roof-water-damage-repair.jpg",
  "rv-roof-resealing": "/images/services/rv-roof-resealing.jpg",
  "rv-skylight-leak-repair": "/images/services/rv-skylight-leak-repair.jpg",
  "rv-window-leak-repair": "/images/services/rv-window-leak-repair.jpg",
  "rv-window-seal-replacement": "/images/services/rv-window-seal-replacement.jpg",
  "rv-slide-out-seal-replacement": "/images/services/rv-slide-out-seal-replacement.jpg",
  "motorhome-floor-repair": "/images/services/motorhome-floor-repair.jpg",
  "rv-floor-rot-repair": "/images/services/rv-floor-rot-repair.jpg",
  "rv-floor-water-damage-repair": "/images/services/rv-floor-water-damage-repair.jpg",
  "rv-subfloor-replacement": "/images/services/rv-subfloor-replacement.jpg",
  "rv-wall-water-damage-repair": "/images/services/rv-wall-water-damage-repair.jpg",
  "rv-delamination-repair": "/images/services/rv-delamination-repair.jpg",
  "rv-ceiling-water-damage-repair": "/images/services/rv-ceiling-water-damage-repair.jpg",
  "rv-wood-rot-repair": "/images/services/rv-wood-rot-repair.jpg",
  "rv-mold-removal": "/images/services/rv-mold-removal.jpg",
  "rv-plumbing-leak-repair": "/images/services/rv-plumbing-leak-repair.jpg",
  "rv-water-heater-leak-repair": "/images/services/rv-water-heater-leak-repair.jpg",
};

/** Stock Unsplash alternates (same slugs) — swap in SERVICE_CARD_IMAGES if you prefer stock only. */
export const SERVICE_STOCK_UNSPLASH: Record<string, string> = {
  "rv-water-damage-repair":
    "https://images.unsplash.com/photo-1527786356704-1064e7950a70?auto=format&fit=crop&w=1200&q=80",
  "rv-roof-leak-repair":
    "https://images.unsplash.com/photo-1478131143088-881a8045d93a?auto=format&fit=crop&w=1200&q=80",
  "rv-roof-water-damage-repair":
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
  "rv-roof-resealing":
    "https://images.unsplash.com/photo-1568605117032-2592ac397c9f?auto=format&fit=crop&w=1200&q=80",
  "rv-skylight-leak-repair":
    "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=80",
  "rv-window-leak-repair":
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
  "rv-window-seal-replacement":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
  "rv-slide-out-seal-replacement":
    "https://images.unsplash.com/photo-1533134486753-c833ca0da4a5?auto=format&fit=crop&w=1200&q=80",
  "motorhome-floor-repair":
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
  "rv-floor-rot-repair":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  "rv-floor-water-damage-repair":
    "https://images.unsplash.com/photo-1584622780114-7d8124f8e1b9?auto=format&fit=crop&w=1200&q=80",
  "rv-subfloor-replacement":
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  "rv-wall-water-damage-repair":
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  "rv-delamination-repair":
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
  "rv-ceiling-water-damage-repair":
    "https://images.unsplash.com/photo-1581858726788-75f0aca8315a?auto=format&fit=crop&w=1200&q=80",
  "rv-wood-rot-repair":
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
  "rv-mold-removal":
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
  "rv-plumbing-leak-repair":
    "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=80",
  "rv-water-heater-leak-repair":
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
};

export function serviceCardImage(slugBase: string): string {
  return SERVICE_CARD_IMAGES[slugBase] ?? FALLBACK;
}

export function pageHeroBackground(slugBase: string): string {
  const img = serviceCardImage(slugBase);
  return `linear-gradient(105deg, rgba(17, 29, 21, 0.92), rgba(17, 29, 21, 0.68)), url("${img}") center / cover no-repeat`;
}
