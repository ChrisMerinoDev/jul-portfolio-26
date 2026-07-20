"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { toast } from "sonner";
import type { Project } from "@/data/content";

export function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  const isLive = project.status === "Live";

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      whileHover={reduce ? undefined : { y: -6 }}
      className="group glass relative flex flex-col overflow-hidden rounded-3xl p-8"
    >
      {/* hover glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at 50% 0%, color-mix(in oklab, var(--accent-to) 14%, transparent), transparent 70%)",
        }}
      />

      <div className="relative flex flex-1 flex-col">
        {/* status badge */}
        <div className="mb-5 flex items-center justify-between">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs ${
              isLive
                ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                : "border-[var(--accent-to)]/30 bg-[var(--accent-to)]/10 text-[var(--accent-to)]"
            }`}
          >
            {isLive ? (
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            ) : (
              <Sparkles className="h-3 w-3" aria-hidden="true" />
            )}
            {project.status}
          </span>
        </div>

        <h3 className="text-2xl font-bold tracking-tight">{project.name}</h3>
        <p className="mt-2 text-[var(--accent-to)]/90">{project.tagline}</p>
        <p className="mt-4 leading-relaxed text-[var(--foreground)]/80">
          {project.description}
        </p>

        {/* tag row */}
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 font-mono text-xs text-[var(--muted)]"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* action */}
        <div className="mt-8 flex items-center gap-4 pt-2">
          {project.action.kind === "link" ? (
            <>
              <a
                href={project.action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] px-5 py-2.5 font-medium text-[#06070a] transition-transform hover:scale-[1.03] active:scale-[0.99]"
              >
                {project.action.label}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              {project.action.domain && (
                <span className="font-mono text-xs text-[var(--muted)]">
                  {project.action.domain}
                </span>
              )}
            </>
          ) : (
            <button
              type="button"
              onClick={() =>
                toast(
                  project.action.kind === "toast" ? project.action.message : "",
                  { icon: <Sparkles className="h-4 w-4 text-[var(--accent-to)]" /> },
                )
              }
              className="group/btn inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-5 py-2.5 font-medium transition-colors hover:border-[var(--accent-to)] hover:text-[var(--foreground)]"
            >
              {project.action.label}
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                aria-hidden="true"
              />
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
