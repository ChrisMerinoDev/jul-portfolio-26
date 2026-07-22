import { ArrowUpRight } from "lucide-react";
import { contact, identity } from "@/data/content";
import { Section } from "./Section";
import { GithubIcon } from "./GithubIcon";

const links = [
  {
    label: "Email",
    detail: identity.email,
    href: `mailto:${identity.email}`,
    external: false,
  },
  {
    label: "GitHub",
    detail: "@ChrisMerinoDev",
    href: identity.github,
    external: true,
  },
  {
    label: "Download résumé",
    detail: "PDF",
    href: contact.resumeHref,
    external: false,
  },
] as const;

export function Contact() {
  return (
    <Section id="contact" className="pb-24">
      <div className="border-t border-ink pt-6">
        <span data-reveal className="caption text-accent">
          05 / Contact
        </span>
      </div>

      {/* contact.heading === "Let's build something great." — accent the tail */}
      <h2
        data-reveal
        className="mt-8 max-w-[15ch] font-display text-[clamp(2.6rem,8vw,7rem)] font-light leading-[0.92] tracking-[-0.03em] text-ink"
      >
        Let&apos;s build{" "}
        <em className="italic text-accent">something great.</em>
      </h2>

      <p data-reveal className="mt-8 max-w-xl text-lg text-ink-2">
        {contact.line}
      </p>

      <div
        data-reveal
        className="mt-14 flex flex-col border-t border-line"
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="group flex items-center justify-between border-b border-line py-6"
          >
            <span className="flex items-center gap-4 font-display text-2xl text-ink transition-colors group-hover:text-accent md:text-3xl">
              {link.label === "GitHub" && (
                <GithubIcon className="h-6 w-6" />
              )}
              {link.label}
            </span>
            <span className="flex items-center gap-4 caption text-muted">
              <span className="hidden sm:inline">{link.detail}</span>
              <ArrowUpRight
                className="h-5 w-5 text-ink transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                aria-hidden="true"
              />
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
