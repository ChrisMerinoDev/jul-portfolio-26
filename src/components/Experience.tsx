import { experience } from "@/data/content";
import { Section, Reveal } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <Section id="experience" stagger>
      <SectionHeading eyebrow="03 — Journey" title="Experience" />

      <ol className="relative space-y-10 border-l border-[var(--border)] pl-8">
        {experience.map((item) => (
          <Reveal as="li" key={`${item.org}-${item.dates}`} className="relative">
            {/* timeline node */}
            <span
              aria-hidden="true"
              className="absolute -left-[2.4rem] top-1.5 grid h-4 w-4 place-items-center rounded-full border border-[var(--accent-to)]/50 bg-[var(--background)]"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)]" />
            </span>

            <div className="glass rounded-2xl p-6 transition-colors hover:border-[var(--accent-to)]/40">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold">
                  {item.role}{" "}
                  <span className="text-[var(--accent-to)]">· {item.org}</span>
                </h3>
                <span className="font-mono text-xs text-[var(--muted)] whitespace-nowrap">
                  {item.dates}
                </span>
              </div>

              {item.context && (
                <p className="mt-2 text-sm text-[var(--muted)]">{item.context}</p>
              )}

              <ul className="mt-4 space-y-2.5">
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-[var(--foreground)]/85"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-to)]/70"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
