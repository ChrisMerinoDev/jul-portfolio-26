import { Reveal } from "./Section";

/**
 * Consistent section header: a small mono eyebrow label + large heading.
 */
export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <Reveal className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-to)]">
        {eyebrow}
      </Reveal>
      <Reveal as="h2" className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </Reveal>
    </div>
  );
}
