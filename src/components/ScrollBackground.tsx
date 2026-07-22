"use client";

import { useEffect } from "react";

/**
 * Premium scroll-driven color field.
 *
 * As the reader scrolls, the accent hue and the paper tint interpolate through
 * a curated palette (cobalt → emerald → plum → terracotta), and two soft,
 * fixed gradient blooms recolor with them. The shift is continuous and subtle
 * — depth and atmosphere rather than a light show.
 *
 * All writes go to CSS custom properties on :root via a rAF-throttled scroll
 * handler, so the whole UI (accents, underlines, marquee, blooms) moves in
 * lockstep with zero React re-renders.
 */

type Stop = { accent: [number, number, number]; paper: [number, number, number] };

// Rich, muted-luxe accents over barely-shifting warm/cool paper tints.
const STOPS: Stop[] = [
  { accent: [29, 43, 255], paper: [241, 236, 225] }, // cobalt / cream
  { accent: [14, 107, 82], paper: [232, 238, 231] }, // emerald / eucalyptus
  { accent: [76, 42, 134], paper: [236, 231, 240] }, // plum / lilac
  { accent: [168, 70, 31], paper: [242, 233, 221] }, // terracotta / sand
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const toRgb = (c: [number, number, number]) =>
  `rgb(${Math.round(c[0])}, ${Math.round(c[1])}, ${Math.round(c[2])})`;

export function ScrollBackground() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;

    const apply = () => {
      const max = root.scrollHeight - root.clientHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, root.scrollTop / max)) : 0;

      const seg = progress * (STOPS.length - 1);
      const i = Math.min(STOPS.length - 2, Math.floor(seg));
      const t = seg - i;
      const a = STOPS[i];
      const b = STOPS[i + 1];

      const accent: [number, number, number] = [
        lerp(a.accent[0], b.accent[0], t),
        lerp(a.accent[1], b.accent[1], t),
        lerp(a.accent[2], b.accent[2], t),
      ];
      const paper: [number, number, number] = [
        lerp(a.paper[0], b.paper[0], t),
        lerp(a.paper[1], b.paper[1], t),
        lerp(a.paper[2], b.paper[2], t),
      ];

      root.style.setProperty("--accent", toRgb(accent));
      root.style.setProperty("--paper", toRgb(paper));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
      // Restore the static defaults from globals.css.
      root.style.removeProperty("--accent");
      root.style.removeProperty("--paper");
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-50 overflow-hidden"
    >
      <div
        className="absolute right-[-15%] top-[-20%] h-[75vh] w-[75vh] rounded-full opacity-[0.18] blur-[140px]"
        style={{
          background: "radial-gradient(circle at center, var(--accent), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-20%] left-[-15%] h-[65vh] w-[65vh] rounded-full opacity-[0.14] blur-[140px]"
        style={{
          background: "radial-gradient(circle at center, var(--accent), transparent 70%)",
        }}
      />
    </div>
  );
}
