import { Globe } from "lucide-react";
import { about, identity } from "@/data/content";
import { Section, Reveal } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <Section id="about" stagger>
      <SectionHeading eyebrow="01 — About" title={about.heading} />

      <div className="grid gap-8 md:grid-cols-[1.6fr_1fr]">
        <Reveal
          as="p"
          className="text-lg leading-relaxed text-[var(--foreground)]/90"
        >
          {about.paragraph}
        </Reveal>

        <Reveal className="glass h-fit rounded-2xl p-6">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
            <Globe className="h-4 w-4 text-[var(--accent-to)]" aria-hidden="true" />
            Languages
          </div>
          <ul className="mt-4 space-y-3">
            {identity.languages.map((lang) => (
              <li key={lang} className="flex items-center gap-3 text-[var(--foreground)]">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)]" />
                {lang}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
