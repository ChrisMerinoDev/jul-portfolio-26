import { about, identity } from "@/data/content";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

const LANG_CODE: Record<string, string> = {
  English: "EN",
  Spanish: "ES",
  Portuguese: "PT",
};

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        index="01"
        title="About"
        note="React · Next.js · TypeScript"
      />

      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-8">
          <p
            data-reveal
            className="font-display text-[clamp(1.35rem,2.4vw,2rem)] font-light leading-[1.4] tracking-[-0.01em] text-ink"
          >
            {about.paragraph}
          </p>
        </div>

        <aside className="md:col-span-4 md:border-l md:border-line md:pl-8">
          <div data-reveal className="caption text-muted">
            Spoken languages
          </div>
          <ul className="mt-6">
            {identity.languages.map((lang) => (
              <li
                key={lang}
                data-reveal
                className="flex items-baseline justify-between border-b border-line py-4"
              >
                <span className="font-display text-2xl text-ink">{lang}</span>
                <span className="caption text-accent">
                  {LANG_CODE[lang] ?? ""}
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
