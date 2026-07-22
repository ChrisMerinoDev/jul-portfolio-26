"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Single global scroll-reveal controller.
 *
 * Any element in the tree marked `data-reveal` starts hidden (via the
 * `.reveal-init` CSS rule) and is animated up + in as it enters the viewport.
 * Elements close together in the document animate as a staggered batch, which
 * gives sections a hand-choreographed cascade without per-component JS.
 *
 * Keeping this the only client component for reveals lets the actual section
 * markup stay as server components.
 */
export function RevealController() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;

    if (reduce) {
      // Show everything immediately — no motion.
      root.classList.remove("reveal-init");
      return;
    }

    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      gsap.set(els, { y: 30, opacity: 0 });

      ScrollTrigger.batch(els, {
        start: "top 88%",
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.09,
            overwrite: true,
          }),
      });

      // The class only existed to prevent a flash before this ran.
      root.classList.remove("reveal-init");
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return null;
}
