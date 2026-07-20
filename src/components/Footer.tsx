import { ArrowUp } from "lucide-react";
import { footer } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-[var(--muted)] sm:flex-row">
        <p>{footer.copyright}</p>
        <p className="font-mono text-xs tracking-widest">{footer.languageBadge}</p>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--foreground)]"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
