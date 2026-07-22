import { experience } from "@/data/content";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="03"
        title="Experience"
        note="Where I've shipped"
      />

      <ol>
        {experience.map((item) => (
          <li
            key={`${item.org}-${item.dates}`}
            data-reveal
            className="group grid gap-6 border-t border-line py-10 md:grid-cols-12 md:gap-10"
          >
            <div className="md:col-span-3">
              <span className="caption text-muted">{item.dates}</span>
            </div>

            <div className="md:col-span-9">
              <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-[1.05] tracking-[-0.015em] text-ink">
                {item.role}
                <span className="italic text-accent">, {item.org}</span>
              </h3>

              {item.context && (
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                  {item.context}
                </p>
              )}

              <ul className="mt-6 grid max-w-4xl gap-x-10 gap-y-3 md:grid-cols-2">
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-2"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
