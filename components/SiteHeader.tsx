"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/lib/site";

type NavActive = "" | "services" | "commercial" | "coverage" | "quote";

export function SiteHeader({ active = "" }: { active?: NavActive }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <span className="topbar-l">🇨🇦 Fire extinguisher help coast to coast</span>
        <div className="topbar-r">
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
        </div>
      </div>
      <nav>
        <Link className="nav-logo" href="/">
          <span className="logo-mark">
            <Image
              src="/logo.svg"
              alt=""
              width={42}
              height={42}
              priority
            />
          </span>
          <span className="logo-text">{SITE.name}</span>
        </Link>
        <ul className="nav-links">
          <li>
            <Link
              href="/#services"
              className={active === "services" ? "active" : undefined}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/#commercial"
              className={active === "commercial" ? "active" : undefined}
            >
              Commercial
            </Link>
          </li>
          <li>
            <Link
              href="/#coverage"
              className={active === "coverage" ? "active" : undefined}
            >
              Cities
            </Link>
          </li>
          <li>
            <Link href="/#quote" className={active === "quote" ? "active" : undefined}>
              Get help
            </Link>
          </li>
        </ul>
        <div className="nav-cta">
          <a className="btn-call" href={`tel:${SITE.phoneTel}`}>
            Call now
          </a>
        </div>
        <button
          className="hamburger"
          type="button"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className="mob-menu" hidden={!menuOpen}>
        <Link href="/#services" onClick={() => setMenuOpen(false)}>
          Services
        </Link>
        <Link href="/#commercial" onClick={() => setMenuOpen(false)}>
          Commercial
        </Link>
        <Link href="/#coverage" onClick={() => setMenuOpen(false)}>
          Cities
        </Link>
        <Link href="/#quote" onClick={() => setMenuOpen(false)}>
          Get help
        </Link>
        <div className="mob-cta">
          <a className="mc-call" href={`tel:${SITE.phoneTel}`}>
            Call {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  );
}
