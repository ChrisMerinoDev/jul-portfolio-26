"use client";

import { useEffect, useRef } from "react";

/**
 * A color-cycling ring that replaces the native cursor and swells over
 * interactive elements.
 *
 * Performance: pointer position lives in refs (zero React re-renders); a single
 * rAF loop eases position + scale and writes transform/color straight to the
 * node — all compositor work via translate3d + will-change. `mix-blend-mode:
 * multiply` lets the cobalt→vermilion hue read richly against the cream paper.
 * Disabled on touch devices.
 */
export function CursorRing() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const ring = ringRef.current;
    if (!ring) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    const prevCursor = root.style.cursor;
    root.style.cursor = "none";

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let scale = 1;
    let targetScale = 1;
    let phase = 0;
    let raf = 0;
    let shown = false;

    const isInteractive = (el: EventTarget | null) =>
      el instanceof Element &&
      !!el.closest("a, button, [data-cursor='hover']");

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      targetScale = isInteractive(e.target) ? 2.6 : 1;
      if (!shown) {
        shown = true;
        ring.style.opacity = "1";
      }
    };
    const onDown = () => (targetScale *= 0.6);
    const onLeave = () => {
      shown = false;
      ring.style.opacity = "0";
    };

    const tick = () => {
      const ease = reduce ? 1 : 0.3;
      x += (targetX - x) * ease;
      y += (targetY - y) * ease;
      scale += (targetScale - scale) * 0.18;

      // Sweep the hue cobalt → violet → magenta → vermilion and back.
      phase += 0.01;
      const hue = (235 + (Math.sin(phase) * 0.5 + 0.5) * 139) % 360;
      ring.style.borderColor = `hsl(${hue}, 85%, 52%)`;
      ring.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;

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
    };
  }, []);

  return (
    <div
      ref={ringRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-9 w-9 rounded-full border-[1.5px] opacity-0 will-change-transform"
      style={{ mixBlendMode: "multiply", transition: "opacity 0.3s ease" }}
    />
  );
}
