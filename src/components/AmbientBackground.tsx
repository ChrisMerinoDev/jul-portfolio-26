/**
 * Ambient hero backdrop: slow, GPU-light gradient glows over a faint grid.
 * Purely decorative — hidden from assistive tech. Animation is CSS-only and
 * automatically stilled by the prefers-reduced-motion rule in globals.css.
 */
export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* faint grid texture */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />

      {/* accent glow — indigo */}
      <div
        className="animate-drift absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full opacity-40 blur-[120px] will-change-transform"
        style={{
          background:
            "radial-gradient(circle at center, var(--accent-from), transparent 62%)",
        }}
      />

      {/* accent glow — cyan */}
      <div
        className="animate-drift-slow absolute -top-24 right-[8%] h-[26rem] w-[26rem] rounded-full opacity-30 blur-[110px] will-change-transform"
        style={{
          background:
            "radial-gradient(circle at center, var(--accent-to), transparent 62%)",
        }}
      />

      {/* fade to background at the bottom of the hero */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--background)]" />
    </div>
  );
}
