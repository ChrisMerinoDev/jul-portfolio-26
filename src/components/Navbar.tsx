"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, contact, identity } from "@/data/content";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Solidify the bar once the user leaves the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track the section in view for the active-link marker.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-paper/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[86rem] items-center justify-between px-6 sm:px-10"
      >
        {/* monogram + role */}
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label="Chris Merino — back to top"
        >
          <span className="grid h-9 w-9 place-items-center border border-ink font-mono text-sm font-semibold text-ink transition-colors group-hover:bg-ink group-hover:text-paper">
            CM
          </span>
          <span className="hidden caption text-muted sm:block">
            {identity.title}
          </span>
        </a>

        {/* desktop links */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative caption transition-colors ${
                  isActive ? "text-accent" : "text-ink hover:text-accent"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* résumé + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={contact.resumeHref}
            className="hidden bg-ink px-5 py-2.5 caption text-paper transition-colors hover:bg-accent sm:inline-flex"
          >
            Résumé
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border border-ink text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-line bg-paper transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96 border-b" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-2">
          {navLinks.map((link) => (
            <li key={link.href} className="border-b border-line last:border-0">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-4 font-display text-2xl text-ink transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="py-4">
            <a
              href={contact.resumeHref}
              onClick={() => setOpen(false)}
              className="inline-flex bg-ink px-5 py-3 caption text-paper"
            >
              Résumé
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
