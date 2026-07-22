import { projects } from "@/data/content";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        index="04"
        title="Selected Work"
        note="Shipped, in production"
      />

      <div>
        {projects.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={String(i + 1).padStart(2, "0")}
          />
        ))}
      </div>
    </Section>
  );
}
