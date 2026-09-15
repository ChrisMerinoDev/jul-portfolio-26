import { ArrowDown, ArrowRight } from "lucide-react";
import { hero, identity } from "@/data/content";
import { AmbientBackground } from "./AmbientBackground";

/**
 * Server-rendered hero. The intro cascade (masked line slide-up + staggered
 * fade-ins) is driven entirely by CSS keyframes in globals.css, so it ships in
 * the initial HTML/CSS and plays on first paint with no JS to download or run.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-between px-6 pb-10 pt-28 sm:px-10 sm:pt-32"
    >
      <AmbientBackground />

      {/* top meta bar */}
      <div className="flex items-start justify-between gap-4 caption text-muted">
        <span data-hero-meta>{identity.name}</span>
        <span data-hero-meta className="hidden text-ink sm:block">
          {identity.title}
        </span>
        <span data-hero-meta className="flex items-center gap-2 whitespace-nowrap">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16a34a] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#16a34a]" />
          </span>
          Available · 2026
        </span>
      </div>

      {/* the statement */}
      <div className="py-10">
        <h1 className="font-display text-[clamp(2.5rem,7.8vw,7.8rem)] font-normal leading-[0.98] tracking-[-0.02em] text-ink">
          <span data-hero-line className="line-mask">
            <span className="block">Frontend engineer</span>
          </span>
          <span data-hero-line className="line-mask">
            <span className="block">
              crafting <em className="italic text-accent">fast,</em>
            </span>
          </span>
          <span data-hero-line className="line-mask">
            <span className="block italic">accessible interfaces.</span>
          </span>
        </h1>
      </div>

      {/* bottom row: supporting copy, CTAs, scroll cue */}
      <div className="flex flex-col gap-10 border-t border-line pt-8 md:flex-row md:items-end md:justify-between">
        <p
          data-hero-meta
          className="max-w-md text-lg leading-relaxed text-ink-2"
        >
          {hero.supporting}{" "}
          <span className="caption ml-1 align-middle text-accent">
            {identity.languageBadge}
          </span>
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <a
            data-hero-cta
            href={hero.primaryCta.href}
            className="group inline-flex items-center gap-3 bg-ink px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:bg-accent"
          >
            {hero.primaryCta.label}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
          <a
            data-hero-cta
            href={hero.secondaryCta.href}
            className="group inline-flex items-center gap-2 border-b border-ink pb-1 font-mono text-xs uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            {hero.secondaryCta.label}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      {/* scroll cue */}
      <div
        data-hero-cue
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 caption text-muted md:flex"
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}
