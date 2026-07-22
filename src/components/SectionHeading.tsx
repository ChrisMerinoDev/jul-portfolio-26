/**
 * Editorial section header — a mono index, an oversized serif title, and an
 * optional right-aligned note, all riding a hairline rule.
 */
export function SectionHeading({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="mb-14 flex flex-col gap-6 border-t border-ink pt-6 md:flex-row md:items-end md:justify-between">
      <div className="flex items-baseline gap-5">
        <span data-reveal className="caption text-accent">
          {index}
        </span>
        <h2
          data-reveal
          className="font-display text-[clamp(2rem,5vw,4rem)] font-light leading-none tracking-[-0.02em] text-ink"
        >
          {title}
        </h2>
      </div>
      {note && (
        <p
          data-reveal
          className="max-w-xs caption leading-relaxed text-muted md:text-right"
        >
          {note}
        </p>
      )}
    </div>
  );
}
