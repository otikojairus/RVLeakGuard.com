"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { NAV_SERVICE_GROUPS } from "@/lib/site-nav";
import { SITE } from "@/lib/site";

type NavActive = "" | "services" | "about" | "coverage";

const PAGE_LINKS: { href: string; label: string; key: NavActive }[] = [
  { href: "/#about", label: "About", key: "about" },
  { href: "/#coverage", label: "Areas", key: "coverage" },
];

function ServiceNavGroups({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="nav-service-groups">
      {NAV_SERVICE_GROUPS.map((group) => (
        <details key={group.id} className="nav-service-group">
          <summary>{group.label}</summary>
          <ul className="nav-service-sublist">
            {group.links.map((item) => (
              <li key={item.slug}>
                <Link href={item.href} onClick={onNavigate}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      ))}
      <Link className="nav-service-all" href="/#services" onClick={onNavigate}>
        View all on homepage
      </Link>
    </div>
  );
}

export function SiteHeader({ active = "" }: { active?: NavActive }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const servicesPanelId = useId();
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-menu-open", menuOpen);
    return () => document.body.classList.remove("nav-menu-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  return (
    <header className="site-nav-shell">
      <nav className="site-nav" aria-label="Primary">
        <Link className="nav-logo" href="/" onClick={closeMenu}>
          <span className="logo-mark">
            <Image src="/logo.svg" alt="" width={42} height={42} priority />
          </span>
          <span className="logo-text">{SITE.name}</span>
        </Link>

        <ul className="nav-links">
          <li
            className={`nav-item-dropdown${servicesOpen ? " is-open" : ""}`}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={`nav-dropdown-trigger${active === "services" ? " active" : ""}`}
              aria-expanded={servicesOpen}
              aria-controls={servicesPanelId}
              onClick={() => setServicesOpen((o) => !o)}
            >
              Services
              <span className="nav-chevron" aria-hidden />
            </button>
            <div
              id={servicesPanelId}
              className={`nav-dropdown-panel${servicesOpen ? " is-open" : ""}`}
              role="region"
              aria-label="Repair services"
            >
              <div className="nav-dropdown-grid">
                {NAV_SERVICE_GROUPS.map((group) => (
                  <div key={group.id} className="nav-dropdown-col">
                    <p className="nav-dropdown-heading">{group.label}</p>
                    <ul>
                      {group.links.map((item) => (
                        <li key={item.slug}>
                          <Link href={item.href} onClick={closeMenu}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Link className="nav-dropdown-foot" href="/#services" onClick={closeMenu}>
                All services — photos &amp; booking on homepage →
              </Link>
            </div>
          </li>
          {PAGE_LINKS.map(({ href, label, key }) => (
            <li key={href}>
              <Link
                href={href}
                className={active === key ? "active" : undefined}
                onClick={closeMenu}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <a className="btn-call" href={`tel:${SITE.phoneTel}`}>
            Call {SITE.phoneDisplay}
          </a>
          <button
            className={`hamburger${menuOpen ? " is-active" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mob-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {mounted
        ? createPortal(
            <>
              <button
                type="button"
                className={`mob-menu-backdrop${menuOpen ? " is-open" : ""}`}
                aria-label="Close menu"
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}
              />
              <div
                id="mob-menu"
                className={`mob-menu${menuOpen ? " is-open" : ""}`}
                aria-hidden={!menuOpen}
              >
                <Link className="mob-menu-toplink" href="/" onClick={closeMenu}>
                  Home
                </Link>
                <p className="mob-menu-section-label">Services &amp; repairs</p>
                <ServiceNavGroups onNavigate={closeMenu} />
                {PAGE_LINKS.map(({ href, label }) => (
                  <Link key={href} href={href} className="mob-menu-link" onClick={closeMenu}>
                    {label}
                  </Link>
                ))}
                <div className="mob-cta">
                  <a className="mc-call" href={`tel:${SITE.phoneTel}`}>
                    Call {SITE.phoneDisplay}
                  </a>
                  <p className="mob-hours">{SITE.hours}</p>
                </div>
              </div>
            </>,
            document.body,
          )
        : null}
    </header>
  );
}
