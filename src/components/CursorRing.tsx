"use client";

import { useEffect, useRef } from "react";

/**
 * A color-cycling ring that replaces the native cursor. Over plain page it is a
 * small circle; over an interactive element it morphs into a shooting-game
 * sight (ring + N/E/S/W ticks + center dot), and a click fires a "shot" — the
 * reticle recoils inward while a shockwave ring bursts outward.
 *
 * Crispness: the reticle is an SVG scaled via real width/height, and every
 * stroke uses `vector-effect: non-scaling-stroke`, so the 1.5px lines stay
 * razor-sharp at any size instead of thickening like a scaled bitmap.
 *
 * Performance / latency: all pointer state lives in refs (zero React
 * re-renders). One rAF loop eases position, size and the reticle fade, writing
 * straight to the nodes. The click burst uses the Web Animations API so it runs
 * on the compositor and retriggers instantly on every click. `mix-blend-mode:
 * multiply` lets the cobalt→plum hue read richly against the paper. Disabled on
 * touch devices and honors prefers-reduced-motion.
 */
export function CursorRing() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);
  const ticksRef = useRef<SVGGElement>(null);
  const shotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const wrap = wrapRef.current;
    const svg = svgRef.current;
    const ring = ringRef.current;
    const ticks = ticksRef.current;
    const shot = shotRef.current;
    if (!wrap || !svg || !ring || !ticks || !shot) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    const prevCursor = root.style.cursor;
    root.style.cursor = "none";

    // `cursor: none` on <html> alone doesn't win over the `cursor: pointer`
    // that links/buttons set on themselves, so force it off everywhere while
    // the custom sight is active.
    const style = document.createElement("style");
    style.textContent = "*, *::before, *::after { cursor: none !important; }";
    document.head.appendChild(style);

    const BASE = 34;
    const HOVER = 92;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let size = BASE;
    let targetSize = BASE;
    let reticle = 0; // 0 = plain circle, 1 = full sight
    let targetReticle = 0;
    let hover = false;
    let phase = 0;
    let hue = 235;
    let raf = 0;
    let shown = false;

    const isInteractive = (el: EventTarget | null) =>
      el instanceof Element && !!el.closest("a, button, [data-cursor='hover']");

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      hover = isInteractive(e.target);
      targetSize = hover ? HOVER : BASE;
      targetReticle = hover ? 1 : 0;
      if (!shown) {
        shown = true;
        wrap.style.opacity = "1";
      }
    };

    // Fire the shot: reticle recoils, a shockwave ring bursts out.
    const fire = () => {
      if (reduce) return;
      const color = `hsl(${hue}, 80%, 52%)`;
      const px = `${Math.max(size, BASE)}px`;

      shot.style.width = px;
      shot.style.height = px;
      shot.style.borderColor = color;
      shot.animate(
        [
          { transform: "translate(-50%, -50%) scale(0.45)", opacity: 0.85 },
          { transform: "translate(-50%, -50%) scale(2.3)", opacity: 0 },
        ],
        { duration: 420, easing: "cubic-bezier(0.22, 0.61, 0.36, 1)" },
      );

      svg.animate(
        [
          { transform: "translate(-50%, -50%) scale(0.78)" },
          { transform: "translate(-50%, -50%) scale(1)" },
        ],
        { duration: 280, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" },
      );
    };

    const onDown = () => fire();
    const onLeave = () => {
      shown = false;
      wrap.style.opacity = "0";
    };

    const tick = () => {
      const ease = reduce ? 1 : 0.3;
      x += (targetX - x) * ease;
      y += (targetY - y) * ease;
      size += (targetSize - size) * 0.2;
      reticle += (targetReticle - reticle) * 0.25;

      // Sweep the hue cobalt → violet → magenta → plum and back.
      phase += 0.01;
      hue = (235 + (Math.sin(phase) * 0.5 + 0.5) * 90) % 360;
      const color = `hsl(${hue}, 80%, 52%)`;

      svg.style.width = `${size}px`;
      svg.style.height = `${size}px`;
      ring.style.stroke = color;
      ticks.style.stroke = color;
      ticks.style.fill = color;
      ticks.style.opacity = `${reticle}`;

      wrap.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
      root.style.cursor = prevCursor;
      style.remove();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] opacity-0 will-change-transform"
      style={{ mixBlendMode: "multiply", transition: "opacity 0.3s ease" }}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 100 100"
        className="absolute left-0 top-0 h-[34px] w-[34px] -translate-x-1/2 -translate-y-1/2 overflow-visible"
        fill="none"
      >
        <circle
          ref={ringRef}
          cx="50"
          cy="50"
          r="47"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <g
          ref={ticksRef}
          strokeWidth="1.5"
          style={{ opacity: 0 }}
          vectorEffect="non-scaling-stroke"
        >
          <line x1="50" y1="-6" x2="50" y2="16" vectorEffect="non-scaling-stroke" />
          <line x1="50" y1="84" x2="50" y2="106" vectorEffect="non-scaling-stroke" />
          <line x1="-6" y1="50" x2="16" y2="50" vectorEffect="non-scaling-stroke" />
          <line x1="84" y1="50" x2="106" y2="50" vectorEffect="non-scaling-stroke" />
          <circle cx="50" cy="50" r="2" stroke="none" />
        </g>
      </svg>
      <div
        ref={shotRef}
        className="absolute left-0 top-0 rounded-full border-[1.5px]"
        style={{ width: 34, height: 34, opacity: 0, transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
}
