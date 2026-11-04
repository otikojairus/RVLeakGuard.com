import Link from "next/link";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-brand">{SITE.name}</p>
          <p>{SITE.tagline}</p>
          <p className="footer-blurb">
            Roof drips, soft floors, and hidden mould — traced, dried, and rebuilt for
            motorhomes and travel trailers nationwide.
          </p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li>
              <Link href="/rv-water-damage-repair">Water damage repair</Link>
            </li>
            <li>
              <Link href="/rv-roof-leak-repair">Roof leak repair</Link>
            </li>
            <li>
              <Link href="/rv-floor-rot-repair">Floor rot repair</Link>
            </li>
            <li>
              <Link href="/rv-mold-removal">Mould removal</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
            </li>
            <li>{SITE.hours}</li>
            <li>
              <Link href="/#coverage">City coverage</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 {SITE.name}</span>
        <span>{SITE.hoursNote}</span>
      </div>
    </footer>
  );
}
