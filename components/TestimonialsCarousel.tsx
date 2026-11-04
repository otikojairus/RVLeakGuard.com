"use client";

import { useState } from "react";

const REVIEWS = [
  {
    name: "Marcus T.",
    role: "Travel trailer owner · Calgary",
    quote:
      "They found the leak at the slide-out wiper, not the roof like two other shops guessed. Our floor dried out and we still made our summer trip.",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Helen & Ray K.",
    role: "Class A motorhome · Vancouver Island",
    quote:
      "We got a clear quote before anyone tore anything out, and moisture readings after — exactly what we needed for insurance on the ceiling damage.",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Devon P.",
    role: "Fifth wheel · Winnipeg",
    quote:
      "Soft corner after winter storage was plumbing under the sink, not the roof. Fixed and resealed in one visit — no more musty smell when we walk in.",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
] as const;

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const review = REVIEWS[index];

  const prev = () => setIndex((i) => (i === 0 ? REVIEWS.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === REVIEWS.length - 1 ? 0 : i + 1));

  return (
    <section className="section feedback">
      <div className="container feedback-split">
        <div className="feedback-intro">
          <h2>Feedback about fixing leaks with us</h2>
          <p>
            Real campers, real trips saved. Hear what changed after someone actually traced the
            water — not just painted over the stain.
          </p>
          <div className="feedback-nav">
            <button type="button" className="feedback-arrow" onClick={prev} aria-label="Previous review">
              ←
            </button>
            <button type="button" className="feedback-arrow feedback-arrow-primary" onClick={next} aria-label="Next review">
              →
            </button>
          </div>
        </div>
        <article className="feedback-card">
          <span className="feedback-quote-mark" aria-hidden>
            &ldquo;
          </span>
          <div className="feedback-card-inner">
            <div
              className="feedback-photo"
              style={{ backgroundImage: `url(${review.photo})` }}
              role="img"
              aria-label=""
            />
            <div>
              <div className="feedback-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p className="feedback-text">{review.quote}</p>
              <footer>
                <strong>{review.name}</strong>
                <span>{review.role}</span>
              </footer>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
