"use client";

import { useEffect, useRef } from "react";

/**
 * A color-cycling ring that replaces the native cursor and swells over
 * interactive elements.
 *
 * Crispness: the ring is positioned with a translate3d transform, but its
 * growth on hover animates real width/height (not `transform: scale`), so the
 * border never stretches a cached bitmap — it stays razor-sharp at every size.
 *
 * Performance: pointer state lives in refs (zero React re-renders); one rAF
 * loop eases position + size and writes straight to the node. `mix-blend-mode:
 * multiply` lets the cobalt→plum hue read richly against the paper. Disabled on
 * touch devices.
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

    const BASE = 34;
    const HOVER = 92;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let size = BASE;
    let targetSize = BASE;
    let phase = 0;
    let raf = 0;
    let shown = false;

    const isInteractive = (el: EventTarget | null) =>
      el instanceof Element && !!el.closest("a, button, [data-cursor='hover']");

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      targetSize = isInteractive(e.target) ? HOVER : BASE;
      if (!shown) {
        shown = true;
        ring.style.opacity = "1";
      }
    };
    const onDown = () => (targetSize *= 0.7);
    const onLeave = () => {
      shown = false;
      ring.style.opacity = "0";
    };

    const tick = () => {
      const ease = reduce ? 1 : 0.3;
      x += (targetX - x) * ease;
      y += (targetY - y) * ease;
      size += (targetSize - size) * 0.2;

      // Sweep the hue cobalt → violet → magenta → plum and back.
      phase += 0.01;
      const hue = (235 + (Math.sin(phase) * 0.5 + 0.5) * 90) % 360;

      ring.style.width = `${size}px`;
      ring.style.height = `${size}px`;
      ring.style.borderColor = `hsl(${hue}, 80%, 52%)`;
      ring.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;

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
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-[34px] w-[34px] rounded-full border-[1.5px] opacity-0 will-change-transform"
      style={{ mixBlendMode: "multiply", transition: "opacity 0.3s ease" }}
    />
  );
}
