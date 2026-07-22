/**
 * Editorial hero backdrop — a faint six-column magazine grid with two soft
 * ink-blooms (cobalt + vermilion). Purely decorative; the page-wide grain
 * lives in globals.css. Static and GPU-cheap.
 */
export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* six-column rule grid, faded toward the bottom */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent calc(100% / 6 - 1px), var(--line) calc(100% / 6 - 1px), var(--line) calc(100% / 6))",
          maskImage: "linear-gradient(to bottom, #000 0%, transparent 88%)",
          WebkitMaskImage: "linear-gradient(to bottom, #000 0%, transparent 88%)",
        }}
      />

      {/* cobalt bloom, upper right */}
      <div
        className="absolute -top-40 right-[-12%] h-[42rem] w-[42rem] rounded-full opacity-[0.13] blur-[130px]"
        style={{
          background: "radial-gradient(circle at center, var(--accent), transparent 66%)",
        }}
      />

      {/* vermilion bloom, lower left */}
      <div
        className="absolute bottom-[-14%] left-[-10%] h-[32rem] w-[32rem] rounded-full opacity-[0.10] blur-[130px]"
        style={{
          background:
            "radial-gradient(circle at center, var(--accent-warm), transparent 66%)",
        }}
      />
    </div>
  );
}
