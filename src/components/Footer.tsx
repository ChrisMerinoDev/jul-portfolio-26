import { ArrowUp } from "lucide-react";
import { footer, identity } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-ink">
      <div className="mx-auto flex max-w-[86rem] flex-col gap-8 px-6 py-12 sm:px-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl text-ink">{identity.name}</p>
          <p className="mt-2 caption text-muted">
            {identity.title} · {footer.languageBadge}
          </p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <a
            href="#top"
            className="group inline-flex items-center gap-2 caption text-ink transition-colors hover:text-accent"
          >
            Back to top
            <ArrowUp
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </a>
          <p className="caption text-muted">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
