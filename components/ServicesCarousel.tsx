import Image from "next/image";
import Link from "next/link";
import type { ServiceCardItem } from "@/lib/service-cards";

type Props = { items: ServiceCardItem[] };

export function ServicesCarousel({ items }: Props) {
  const featured = items.slice(0, 6);

  return (
    <div className="service-carousel">
      <p className="service-carousel-count">
        {items.length} repair types — tap the one that matches what you’re seeing
      </p>
      <div className="service-showcase">
        {featured.map((item) => (
          <article key={item.slug} className="service-showcase-card">
            <div className="service-showcase-img">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 90vw, 320px"
                className="service-showcase-photo"
              />
            </div>
            <h3>{item.title}</h3>
            <p>{item.line}</p>
            <Link className="btn-book btn-book-solid" href={`/${item.slug}`}>
              Book help
              <span className="btn-book-icon" aria-hidden>
                ↗
              </span>
            </Link>
          </article>
        ))}
      </div>
      <ul className="service-chip-list" aria-label="All repair types">
        {items.map((item) => (
          <li key={`chip-${item.slug}`}>
            <Link href={`/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
