"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  /** stagger children reveals when true */
  stagger?: boolean;
};

/**
 * Reusable section wrapper that handles the scroll-reveal animation.
 * Fades + slides its content up as it enters the viewport, and disables
 * the motion entirely for users who prefer reduced motion.
 */
export function Section({ id, className = "", children, stagger = false }: SectionProps) {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: stagger ? { staggerChildren: 0.08, delayChildren: 0.05 } : {},
    },
  };

  return (
    <motion.section
      id={id}
      className={`relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20 sm:py-28 ${className}`}
      variants={container}
      initial={reduce ? undefined : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.section>
  );
}

/**
 * A single revealing element. Pairs with <Section stagger> or works standalone.
 */
export function Reveal({
  children,
  className = "",
  as = "div",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "h2" | "p" | "span";
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const variants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
    },
  };

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
