"use client";

import { useEffect } from "react";

/**
 * Single global scroll-reveal controller — native IntersectionObserver, zero
 * animation libraries.
 *
 * Any element marked `data-reveal` starts hidden (via the `.reveal-init` CSS
 * rule) and transitions up + in when it scrolls into view. The actual motion
 * is CSS (see globals.css); this only toggles the `.is-revealed` class. Because
 * there's no library to download or parse, reveals are armed the moment the
 * page hydrates and fire instantly on scroll.
 *
 * Elements that enter together in one observer callback are staggered via a
 * per-element `transition-delay`, reproducing a hand-choreographed cascade
 * without per-component JS.
 */
export function RevealController() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      // Show everything immediately — no motion, no observer.
      root.classList.remove("reveal-init");
      return;
    }

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Stagger everything that crossed the threshold in this frame, in
        // document order, for a cascading batch effect.
        const entering = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop,
          );

        entering.forEach((entry, i) => {
          const el = entry.target as HTMLElement;
          el.style.transitionDelay = `${i * 90}ms`;
          el.classList.add("is-revealed");
          observer.unobserve(el);
        });
      },
      // Start a touch before the element is fully in view.
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
