"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { hero } from "@/data/content";
import { AmbientBackground } from "./AmbientBackground";

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6 pt-16"
    >
      <AmbientBackground />

      <motion.div
        className="mx-auto max-w-3xl text-center"
        variants={container}
        initial={reduce ? undefined : "hidden"}
        animate={reduce ? undefined : "visible"}
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/60 px-4 py-1.5 font-mono text-xs tracking-wide text-[var(--muted)] backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-to)] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent-to)]" />
          </span>
          {hero.badge}
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl"
        >
          <span className="text-gradient">{hero.headline}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--foreground)]/90 sm:text-xl"
        >
          {hero.subheadline}
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]"
        >
          {hero.supporting}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={hero.primaryCta.href}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] px-6 py-3 font-medium text-[#06070a] shadow-[0_0_30px_-6px_var(--accent-to)] transition-transform hover:scale-[1.03] active:scale-[0.99] sm:w-auto"
          >
            {hero.primaryCta.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-medium transition-colors hover:border-[var(--accent-to)] sm:w-auto"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {hero.secondaryCta.label}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
