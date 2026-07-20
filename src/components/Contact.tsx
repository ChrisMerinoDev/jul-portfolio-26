import { Mail, Download } from "lucide-react";
import { contact, identity } from "@/data/content";
import { Section, Reveal } from "./Section";
import { GithubIcon } from "./GithubIcon";

export function Contact() {
  return (
    <Section id="contact" stagger className="pb-12">
      <Reveal className="glass relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12">
        {/* soft accent glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 w-[80%] rounded-full opacity-30 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, var(--accent-from), transparent 70%)",
          }}
        />

        <Reveal className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-to)]">
          05 — Contact
        </Reveal>
        <Reveal
          as="h2"
          className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl"
        >
          {contact.heading}
        </Reveal>
        <Reveal as="p" className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
          {contact.line}
        </Reveal>

        <Reveal className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${identity.email}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] px-6 py-3 font-medium text-[#06070a] transition-transform hover:scale-[1.03] active:scale-[0.99] sm:w-auto"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email
          </a>
          <a
            href={identity.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-medium transition-colors hover:border-[var(--accent-to)] sm:w-auto"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={contact.resumeHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-medium transition-colors hover:border-[var(--accent-to)] sm:w-auto"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>
        </Reveal>

        <Reveal as="p" className="mt-8 font-mono text-xs text-[var(--muted)]">
          {identity.email}
        </Reveal>
      </Reveal>
    </Section>
  );
}
