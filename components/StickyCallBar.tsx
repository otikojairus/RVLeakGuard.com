"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

export function StickyCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 420);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("sticky-cta-visible", visible);
    return () => document.body.classList.remove("sticky-cta-visible");
  }, [visible]);

  return (
    <div
      className={`sticky-cta${visible ? " is-visible" : ""}`}
      aria-hidden={!visible}
    >
      <a className="sticky-cta-call" href={`tel:${SITE.phoneTel}`}>
        Call now
      </a>
      <a className="sticky-cta-callback" href="/#quote">
        Request callback
      </a>
    </div>
  );
}
