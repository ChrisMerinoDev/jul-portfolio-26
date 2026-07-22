import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  /** kept for call-site compatibility; the reveal cascade is global */
  stagger?: boolean;
};

/**
 * Editorial section shell — generous magazine gutters and vertical rhythm.
 * Server component; scroll reveals are handled globally by RevealController.
 */
export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-[86rem] scroll-mt-28 px-6 py-24 sm:px-10 sm:py-32 ${className}`}
    >
      {children}
    </section>
  );
}

type As = "div" | "li" | "h2" | "h3" | "p" | "span" | "ul" | "ol";

/**
 * A single element that reveals on scroll. Marked with `data-reveal`, which the
 * global controller finds and animates. Renders plain markup on the server.
 */
export function Reveal({
  children,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: As;
  /** accepted for compatibility; global controller ignores per-item delay */
  delay?: number;
}) {
  const Tag = as;
  return (
    <Tag data-reveal className={className}>
      {children}
    </Tag>
  );
}
