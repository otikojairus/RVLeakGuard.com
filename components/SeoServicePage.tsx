import Image from "next/image";
import Link from "next/link";
import {
  JsonLdBreadcrumbs,
  JsonLdFaq,
  JsonLdLocalService,
} from "@/components/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import {
  cityPagesForService,
  linkLabel,
  otherServicesInCity,
  pillarPageFor,
  serviceBaseFromPage,
} from "@/lib/internal-links";
import { getCityProfile } from "@/lib/local-pages";
import {
  breadcrumbItems,
  buildBodySections,
  buildFaqs,
  buildIntro,
  pageH1,
  type FaqItem,
} from "@/lib/page-seo-content";
import { getPageBySlug, mobilePageSlugForCity, type SeoPage } from "@/lib/pages";
import { pageHeroBackground, serviceCardImage } from "@/lib/service-images";
import { SERVICE_TITLES } from "@/lib/local-pages";
import { serviceSidebarLine } from "@/lib/service-cards";
import { SITE } from "@/lib/site";

type Props = {
  page: SeoPage;
  isLocal: boolean;
};

export function SeoServicePage({ page, isLocal }: Props) {
  const serviceBase = serviceBaseFromPage(page);
  const h1 = pageH1(page, serviceBase, isLocal);
  const intro = buildIntro(page, serviceBase, isLocal);
  const sections = buildBodySections(page, serviceBase, isLocal);
  const faqs = buildFaqs(page, serviceBase, isLocal);
  const crumbs = breadcrumbItems(page, serviceBase, isLocal);
  const heroImage = serviceCardImage(serviceBase);
  const imageAlt = isLocal
    ? `${h1} — technician assessing camper water damage`
    : `${h1} — RV water damage repair service`;

  const pillar = pillarPageFor(page);
  const cityLinks = isLocal ? [] : cityPagesForService(serviceBase);
  const crossLinks = isLocal ? otherServicesInCity(page, 18) : [];
  const hubSlug = mobilePageSlugForCity(page.area);
  const hubPage = isLocal ? getPageBySlug(hubSlug) : undefined;

  return (
    <>
      <JsonLdBreadcrumbs items={crumbs} domain={SITE.domain} />
      <JsonLdFaq faqs={faqs} />
      {isLocal ? (
        <JsonLdLocalService
          name={h1}
          description={intro.slice(0, 240)}
          area={getCityProfile(page.area).name}
          url={`https://${SITE.domain}/${page.slug}`}
          telephone={SITE.phoneTel}
        />
      ) : null}

      <SiteHeader active="services" />
      <header
        className="page-hero page-hero-seo"
        style={{ background: pageHeroBackground(serviceBase) }}
      >
        <div className="page-hero-seo-inner">
          <div className="page-hero-panel">
            <nav className="breadcrumb breadcrumb-bar" aria-label="Breadcrumb">
              {crumbs.map((c, i) => (
                <span key={c.path} className="crumb-item">
                  {i > 0 ? <span aria-hidden> / </span> : null}
                  {i < crumbs.length - 1 ? (
                    <Link href={c.path}>{c.name}</Link>
                  ) : (
                    <span>{c.name}</span>
                  )}
                </span>
              ))}
            </nav>
            <h1>{h1}</h1>
            <p className="page-intro-lead">{intro}</p>
            <div className="page-cta">
              <a className="btn-primary btn-lg" href={`tel:${SITE.phoneTel}`}>
                Call {SITE.phoneDisplay}
              </a>
              <Link className="btn-secondary btn-on-dark" href="/#coverage">
                Find your city
              </Link>
            </div>
          </div>
          <div className="page-hero-media">
            <Image
              src={heroImage}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              priority
              className="page-hero-photo"
            />
          </div>
        </div>
      </header>

      <article className="section seo-body">
        <div className="container seo-body-grid">
          <div className="seo-main">
            {sections.map((sec) => (
              <section key={sec.heading}>
                <h2>{sec.heading}</h2>
                {sec.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </section>
            ))}

            {isLocal && pillar ? (
              <section>
                <h2>National overview</h2>
                <p>
                  For Canada-wide scope on this repair type, see our{" "}
                  <Link href={`/${pillar.slug}`}>{linkLabel(pillar)}</Link> guide — then
                  return here for {getCityProfile(page.area).name} scheduling details.
                </p>
              </section>
            ) : null}

            <section className="seo-faq" id="faq">
              <h2>Frequently asked questions</h2>
              <div className="faq-list">
                {faqs.map((f: FaqItem) => (
                  <div key={f.question} className="faq-item">
                    <h3>{f.question}</h3>
                    <p>{f.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="sidebar seo-aside">
            <div className="sidebar-call-card">
              <p className="sidebar-kicker">Need help now?</p>
              <h3 className="sidebar-title">
                {SERVICE_TITLES[serviceBase] ?? "RV repair dispatch"}
              </h3>
              <p className="sidebar-blurb">{serviceSidebarLine(serviceBase)}</p>
              <a className="btn-primary sidebar-phone" href={`tel:${SITE.phoneTel}`}>
                <span className="sidebar-phone-label">Call dispatch</span>
                <span className="sidebar-phone-num">{SITE.phoneDisplay}</span>
              </a>
              <p className="sidebar-hours">{SITE.hours}</p>
            </div>

            {isLocal && pillar ? (
              <>
                <hr className="sidebar-divider" />
                <h4>Pillar page</h4>
                <ul className="link-list">
                  <li>
                    <Link href={`/${pillar.slug}`}>{linkLabel(pillar)}</Link>
                  </li>
                </ul>
              </>
            ) : null}

            {crossLinks.length > 0 ? (
              <>
                <hr className="sidebar-divider" />
                <h4>Other help in {getCityProfile(page.area).name}</h4>
                <ul className="link-list">
                  {crossLinks.slice(0, 8).map((p) => (
                    <li key={p.slug}>
                      <Link href={`/${p.slug}`}>{linkLabel(p)}</Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            {isLocal && hubPage ? (
              <>
                <hr className="sidebar-divider" />
                <Link className="link-arrow" href={`/${hubPage.slug}`}>
                  {linkLabel(hubPage)}
                </Link>
              </>
            ) : null}
          </aside>
        </div>
      </article>

      {isLocal && crossLinks.length > 8 ? (
        <section className="section local-areas">
          <div className="container">
            <h2 className="section-title">
              More RV leak help in {getCityProfile(page.area).name}
            </h2>
            <ul className="local-link-grid">
              {crossLinks.slice(8).map((p) => (
                <li key={p.slug}>
                  <Link href={`/${p.slug}`}>{linkLabel(p)}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {!isLocal && cityLinks.length > 0 ? (
        <section className="section seo-local-links">
          <div className="container">
            <h2>
              {pageH1(page, serviceBase, false).replace(" in Canada", "")} by city
            </h2>
            <p className="section-lead">
              Choose your city for mobile scheduling and area-specific guidance.
            </p>
            <ul className="local-link-grid">
              {cityLinks.map((p) => (
                <li key={p.slug}>
                  <Link href={`/${p.slug}`}>{linkLabel(p)}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="section cta-band">
        <div className="container cta-inner">
          <h2>Ready to fix the leak?</h2>
          <p>Call {SITE.phoneDisplay} — describe your rig and we will tell you the next step.</p>
          <a className="btn-primary btn-lg btn-on-band" href={`tel:${SITE.phoneTel}`}>
            Call now
          </a>
        </div>
      </section>
    </>
  );
}
