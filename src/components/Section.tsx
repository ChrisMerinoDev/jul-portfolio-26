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
 * Server component; all content renders visible and static (no scroll reveal).
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
 * A content element. Previously animated on scroll; now renders plain, static
 * markup that is visible from first paint. Kept as a thin wrapper so existing
 * call sites don't need to change.
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
