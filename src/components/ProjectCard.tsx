"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { toast } from "sonner";
import type { Project } from "@/data/content";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: string;
}) {
  const isLive = project.status === "Live";
  const href = project.action.kind === "link" ? project.action.href : undefined;

  const body = (
    <>
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-baseline gap-4 sm:gap-6">
          <span className="caption pt-3 text-muted">{index}</span>
          <div>
            <div className="caption flex items-center gap-2 text-muted">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  isLive ? "bg-accent-warm" : "bg-muted"
                }`}
              />
              {project.status}
            </div>
            <h3 className="mt-3 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-light leading-[0.95] tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-accent">
              {project.name}
            </h3>
          </div>
        </div>

        <span className="mt-2 grid h-12 w-12 shrink-0 place-items-center border border-ink text-ink transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-paper sm:h-14 sm:w-14">
          <ArrowUpRight
            className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45 sm:h-6 sm:w-6"
            aria-hidden="true"
          />
        </span>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-12 md:gap-10">
        <p className="font-display text-xl font-light italic leading-snug text-ink md:col-span-4">
          {project.tagline}
        </p>
        <p className="leading-relaxed text-ink-2 md:col-span-8">
          {project.description}
        </p>
      </div>

      <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
        {project.tags.map((tag) => (
          <li key={tag} className="caption text-muted">
            {tag}
          </li>
        ))}
      </ul>
    </>
  );

  const base =
    "group block border-t border-line py-12 transition-colors last:border-b";

  if (href) {
    return (
      <a
        data-reveal
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={base}
      >
        {body}
      </a>
    );
  }

  return (
    <button
      data-reveal
      type="button"
      onClick={() =>
        toast(project.action.kind === "toast" ? project.action.message : "", {
          icon: <Sparkles className="h-4 w-4 text-accent" />,
        })
      }
      className={`${base} w-full text-left`}
    >
      {body}
    </button>
  );
}
