import { techStack } from "@/data/content";
import { Section, Reveal } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function TechStack() {
  return (
    <Section id="tech" stagger>
      <SectionHeading eyebrow="02 — Toolkit" title="Tech Stack" />

      <div className="grid gap-6 sm:grid-cols-2">
        {techStack.map((group) => (
          <Reveal
            key={group.label}
            className="glass rounded-2xl p-6 transition-colors hover:border-[var(--accent-to)]/40"
          >
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1.5 text-sm text-[var(--foreground)]/90 transition-colors hover:border-[var(--accent-to)]/60 hover:text-[var(--foreground)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
