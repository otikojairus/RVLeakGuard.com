import Link from "next/link";
import type { Metadata } from "next";
import { JsonLdBreadcrumbs, JsonLdFaq } from "@/components/JsonLd";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { slugBase } from "@/lib/content";
import {
  cityAreas,
  citySuffixes,
  featuredNationalSlugs,
  getPageBySlug,
  mobilePageSlugForCity,
} from "@/lib/pages";
import { toServiceCardItem, type ServiceCardItem } from "@/lib/service-cards";
import { serviceCardImage } from "@/lib/service-images";
import { SITE } from "@/lib/site";

const WELCOME_PERKS = [
  "You talk to a person, not a ticket queue",
  "Quote before major tear-out",
  "RV-built materials, not house shortcuts",
  "Help after storage, storms, or long hauls",
  "Photos for insurance when you need them",
  "Same team can reseal so it doesn’t come back",
];

const TIPS = [
  {
    slug: "rv-roof-resealing",
    date: "Seasonal tip",
    title: "Reseal before storm season — not after the stain shows",
    excerpt:
      "An hour on the roof in spring beats a week of ceiling repair in July. Here’s what we check on rubber and fibreglass rigs.",
    featured: false,
  },
  {
    slug: "rv-floor-rot-repair",
    date: "After storage",
    title: "Soft floor near the slide? Don’t wait until spring departure",
    excerpt:
      "Water often sits all winter under vinyl you can’t see. What to do when the corner feels spongy on walk-through day.",
    featured: true,
  },
  {
    slug: "rv-mold-removal",
    date: "Health & comfort",
    title: "Musty when you open the door? It’s not ‘just an old camper smell’",
    excerpt:
      "Closed-up moisture breeds mould in walls and closets. How we dry the shell so your family can breathe easy again.",
    featured: false,
  },
] as const;

const HOME_FAQ = [
  {
    question: "Do you repair water damage in motorhomes and travel trailers?",
    answer:
      "Yes. We work on Class A/B/C motorhomes, travel trailers, fifth wheels, and truck campers — tracing leaks, drying structure, and rebuilding with materials suited to RV construction, not residential drywall crews.",
  },
  {
    question: "How fast can someone look at my camper?",
    answer:
      "Timing depends on your city and season. Call our dispatch line with your postal area and symptoms; we give an honest window and can often book within the same week when you call before peak travel season.",
  },
  {
    question: "Will you tell me the price before tearing walls or floors out?",
    answer:
      "We explain leak tracing, drying, and rebuild scope before major demolition. If moisture is worse than expected after a small opening, we pause and discuss options — no surprise bills without talking to you first.",
  },
];

export const metadata: Metadata = {
  title: { absolute: `RV Water Damage Repair Canada | ${SITE.name}` },
  description:
    "RV & camper water damage repair across Canada — roof leaks, soft floors, mould & plumbing. Call for a clear quote before tear-out. Book mobile help near you.",
  alternates: { canonical: `https://${SITE.domain}/` },
};

export default function HomePage() {
  const serviceCards: ServiceCardItem[] = featuredNationalSlugs
    .map((s) => {
      const page = getPageBySlug(s);
      if (!page) return null;
      return toServiceCardItem(page, slugBase(page.slug, citySuffixes));
    })
    .filter((x): x is ServiceCardItem => x !== null);

  return (
    <>
      <JsonLdBreadcrumbs items={[{ name: "Home", path: "/" }]} domain={SITE.domain} />
      <JsonLdFaq faqs={HOME_FAQ} />
      <SiteHeader />
      <section className="hero">
        <div className="hero-bg" aria-hidden />
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="hero-badge">You noticed something wrong — that’s the right time to call</span>
            <h1>RV water damage repair across Canada</h1>
            <p className="hero-tagline">Stop the leak before your trip is ruined</p>
            <p className="hero-desc">
              Ceiling stain, musty closet, spongy floor — {SITE.name} traces what’s actually wet,
              dries it properly, and rebuilds with materials matched to your rig. A real person
              quotes the next step before major tear-out, whether you are in a driveway, storage
              lot, or campground.
            </p>
            <ul className="hero-trust">
              <li>No guesswork on scope or price</li>
              <li>Technicians who know RV construction</li>
              <li>Help in storage lots, driveways &amp; campgrounds</li>
            </ul>
          </div>
          <div className="hero-aside">
            <div
              className="hero-photo"
              role="img"
              aria-label="Technician inspecting water damage inside an RV"
            />
            <div className="hero-btns">
              <a className="btn-primary btn-lg" href={`tel:${SITE.phoneTel}`}>
                Call {SITE.phoneDisplay}
              </a>
              <Link className="btn-secondary btn-on-dark" href="#services">
                See how we can help
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container">
          <div className="services-head">
            <h2>We help with the problems that keep you up at night</h2>
            <div className="services-head-aside">
              <p className="services-label">Services</p>
              <p>
                Most calls start with one of these — pick what sounds like your situation and we’ll
                walk you through the next step on the phone.
              </p>
            </div>
          </div>
          <hr className="section-rule" />
          <ServicesCarousel items={serviceCards} />
          <p className="services-more">
            <Link href="#coverage">Find help near your city</Link>
            <span aria-hidden> · </span>
            <a href={`tel:${SITE.phoneTel}`}>Or call {SITE.phoneDisplay}</a>
          </p>
        </div>
      </section>

      <section className="section welcome" id="about">
        <div className="container welcome-split">
          <div className="welcome-collage">
            <div
              className="welcome-img welcome-img-main"
              style={{
                backgroundImage: "url(/images/hero-primary.jpg)",
              }}
              role="img"
              aria-label="Technician tracing water damage inside an RV"
            />
            <div
              className="welcome-img welcome-img-inset"
              style={{
                backgroundImage: "url(/images/hero-secondary.jpg)",
              }}
              role="img"
              aria-label="Technician repairing an RV roof leak"
            />
          </div>
          <div className="welcome-copy">
            <h2>Welcome — we’re here so your camper stays your escape, not a repair project</h2>
            <p>
              You bought the rig for weekends and summers, not for guessing where water went. We
              explain what we find in words you can repeat to your partner or insurer, and we don’t
              start demolition until you understand the plan.
            </p>
            <ul className="welcome-perks">
              {WELCOME_PERKS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="welcome-btns">
              <a className="btn-primary" href={`tel:${SITE.phoneTel}`}>
                Book now
              </a>
              <Link className="btn-secondary" href="/rv-water-damage-repair">
                Know more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      <section className="section tips" id="tips">
        <div className="container">
          <div className="tips-head">
            <div className="tips-head-banner">
              <p className="services-label">Tips for owners</p>
              <h2>Stay ahead of leaks &amp; rot</h2>
              <p>
                Short reads on what to watch for between trips — so a small drip doesn’t become a
                gutted floor.
              </p>
            </div>
          </div>
          <hr className="section-rule" />
          <div className="tips-grid">
            {TIPS.map((tip) => (
              <article
                key={tip.slug}
                className={`tip-card${tip.featured ? " tip-card-featured" : ""}`}
              >
                <div
                  className="tip-card-img"
                  style={{ backgroundImage: `url(${serviceCardImage(tip.slug)})` }}
                  role="img"
                  aria-label={tip.title}
                />
                <p className="tip-meta">{tip.date}</p>
                <h3>
                  <Link href={`/${tip.slug}`}>{tip.title}</Link>
                </h3>
                <p className="tip-excerpt">{tip.excerpt}</p>
                <Link className="btn-primary tip-read" href={`/${tip.slug}`}>
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process">
        <div className="container process-narrow">
          <h2>What happens when you call</h2>
          <p className="section-lead section-lead-center">
            No apps, no forms required — just tell us what you’re seeing and where the RV is parked.
          </p>
          <ol className="steps steps-simple">
            <li>
              <strong>You describe the problem</strong>
              <span>Stain, smell, drip, or soft spot — and when you first noticed it.</span>
            </li>
            <li>
              <strong>We agree on a plan &amp; price</strong>
              <span>Leak trace, drying, or rebuild — before walls come open.</span>
            </li>
            <li>
              <strong>We fix it &amp; leave you dry</strong>
              <span>Ready to camp again, with clear notes on what to watch.</span>
            </li>
          </ol>
        </div>
      </section>

      <section className="section coverage" id="coverage">
        <div className="container">
          <h2>Wherever you park, we try to reach you</h2>
          <p className="section-lead">
            Tap your city — if we serve your area, you’ll see local options for roof, floor, mould,
            and plumbing leaks on your rig.
          </p>
          <div className="city-cloud">
            {cityAreas.map((city) => (
              <Link key={city} href={`/${mobilePageSlugForCity(city)}`}>
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-faq" id="faq">
        <div className="container">
          <h2>Questions owners ask before they book</h2>
          <div className="faq-list">
            {HOME_FAQ.map((f) => (
              <div key={f.question} className="faq-item">
                <h3>{f.question}</h3>
                <p>{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-inner">
          <h2>Still watching a stain grow?</h2>
          <p>Call now — waiting usually makes the repair bigger, not smaller.</p>
          <a className="btn-primary btn-lg btn-on-band" href={`tel:${SITE.phoneTel}`}>
            Call {SITE.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="section call-now" id="call">
        <div className="container call-now-inner">
          <h2>Call anytime — we are open 24/7</h2>
          <p className="section-lead">
            No forms, no waiting on email. Describe your rig and what you are seeing; dispatch picks
            up around the clock, 365 days a year.
          </p>
          <a className="btn-primary btn-lg" href={`tel:${SITE.phoneTel}`}>
            Call {SITE.phoneDisplay}
          </a>
          <p className="call-now-hours">{SITE.hours}</p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
