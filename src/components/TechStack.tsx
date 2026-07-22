import { Asterisk } from "lucide-react";
import { techStack } from "@/data/content";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

// Flattened, de-duped list of every skill for the marquee band.
const allSkills = Array.from(
  new Set(techStack.flatMap((g) => g.items)),
);

export function TechStack() {
  return (
    <>
      {/* full-bleed scrolling marquee */}
      <div
        aria-hidden="true"
        className="relative overflow-hidden border-y border-ink py-5"
      >
        <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap pr-10 will-change-transform">
          {[...allSkills, ...allSkills].map((skill, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="font-display text-3xl font-light italic text-ink/90 sm:text-4xl">
                {skill}
              </span>
              <Asterisk className="h-5 w-5 shrink-0 text-accent" />
            </span>
          ))}
        </div>
      </div>

      <Section id="tech">
        <SectionHeading
          index="02"
          title="Toolkit"
          note="The stack I reach for, by layer"
        />

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group) => (
            <div
              key={group.label}
              data-reveal
              className="border-t border-line pt-5"
            >
              <h3 className="caption mb-5 text-muted">{group.label}</h3>
              <ul className="flex flex-col">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="group flex items-baseline justify-between border-b border-line py-2.5 text-lg text-ink transition-colors hover:text-accent"
                  >
                    <span>{item}</span>
                    <span className="caption text-muted transition-colors group-hover:text-accent">
                      +
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
