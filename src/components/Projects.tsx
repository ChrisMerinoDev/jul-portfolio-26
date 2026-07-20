import { projects } from "@/data/content";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section id="projects" stagger>
      <SectionHeading eyebrow="04 — Selected work" title="Featured Projects" />

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
