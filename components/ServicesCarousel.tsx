"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { ServiceCardItem } from "@/lib/service-cards";

type Props = { items: ServiceCardItem[] };

export function ServicesCarousel({ items }: Props) {
  const [start, setStart] = useState(0);
  const total = items.length;

  const visible = useMemo(() => {
    if (total <= 3) return items;
    return [0, 1, 2].map((i) => items[(start + i) % total]);
  }, [items, start, total]);

  const prev = () => setStart((s) => (s - 1 + total) % total);
  const next = () => setStart((s) => (s + 1) % total);

  return (
    <div className="service-carousel">
      <div className="service-showcase">
        {visible.map((item, i) => {
          const featured = i === 1;
          return (
            <article
              key={`${item.slug}-${start}-${i}`}
              className={`service-showcase-card${featured ? " is-featured" : ""}`}
            >
              <div className="service-showcase-img">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 320px"
                  className="service-showcase-photo"
                  priority={featured}
                />
              </div>
              <h3>{item.title}</h3>
              <p>{item.line}</p>
              <Link
                className={featured ? "btn-book btn-book-solid" : "btn-book"}
                href={`/${item.slug}`}
              >
                Book help
                <span className="btn-book-icon" aria-hidden>
                  ↗
                </span>
              </Link>
            </article>
          );
        })}
      </div>
      {total > 3 ? (
        <div className="service-carousel-foot">
          <button type="button" className="service-carousel-arrow" onClick={prev} aria-label="Previous services">
            ←
          </button>
          <p className="service-carousel-count">{total} repair types — use arrows to explore</p>
          <button
            type="button"
            className="service-carousel-arrow service-carousel-arrow-primary"
            onClick={next}
            aria-label="Next services"
          >
            →
          </button>
        </div>
      ) : null}
    </div>
  );
}
