"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const SCROLL_THRESHOLD = 80;

export function StickyCallBar() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setVisible(false);
      return;
    }
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  useEffect(() => {
    document.body.classList.toggle("mobile-call-bar-visible", visible && isMobile);
    return () => document.body.classList.remove("mobile-call-bar-visible");
  }, [visible, isMobile]);

  if (!isMobile) return null;

  return (
    <div
      className={`mobile-sticky-call${visible ? " is-visible" : ""}`}
      aria-hidden={!visible}
    >
      <a className="mobile-sticky-call-btn" href={`tel:${SITE.phoneTel}`}>
        Call {SITE.phoneDisplay}
      </a>
    </div>
  );
}
