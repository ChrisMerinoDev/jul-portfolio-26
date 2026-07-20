# Chris Merino — Portfolio

A polished, production-ready personal portfolio for **Chris Merino**, Frontend Engineer.
Single-page, dark-themed, fast, and accessible.

Built with:

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (scroll-reveal + micro-interactions, `prefers-reduced-motion` aware)
- **lucide-react** (icons)
- **sonner** (dark-themed toast notifications)

## Features

- Modern dark design with one cohesive accent gradient (indigo → cyan) and glassmorphism cards
- Ambient, GPU-light animated background glow + subtle grid behind the hero
- Sticky navbar with active-section highlight, scroll-progress bar, and a mobile menu
- Sections: Hero · About · Tech Stack · Experience (timeline) · Projects · Contact / Footer
- Fully responsive (mobile-first), WCAG AA contrast, keyboard-navigable, visible focus rings
- Featured projects with hover glow:
  - **HydraFlow Wellness** → opens the live site in a new tab
  - **AceLoop** → fires a dark-themed “coming soon” toast (no navigation), keyboard accessible

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Editing content

All site copy lives in a single typed config file:

```
src/data/content.ts
```

Update the exported objects/arrays there — `identity`, `hero`, `about`, `techStack`,
`experience`, `projects`, `contact`, `footer`, and `navLinks`. Components map over this
data, so no component edits are needed to change wording, add experience entries, or add
tech-stack chips.

To add or change a project, edit the `projects` array. Each project's `action` is either:

- `{ kind: "link", label, href, domain? }` — renders a button that opens `href` in a new tab
- `{ kind: "toast", label, message }` — renders a button that fires a toast (no navigation)

## Resume

The “Resume” / “Download Resume” buttons link to `/resume.pdf`.
A placeholder file lives at `public/resume.pdf` — **drop the real PDF there** (same filename)
to replace it. No code changes needed.

## Metadata / OG image

Page metadata and Open Graph tags are set in `src/app/layout.tsx`. The Open Graph image is
generated on the fly by `src/app/opengraph-image.tsx` (edit that file to customize it). The
favicon/monogram is `src/app/icon.svg`.

## Deploy to Vercel

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset auto-detects **Next.js** — no configuration needed. Click **Deploy**.

Or deploy from the CLI:

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

## Accessibility & performance notes

- Non-essential motion is disabled for users with `prefers-reduced-motion`.
- Semantic landmarks (`header`, `nav`, `main`, `footer`), a skip link, aria labels on
  icon-only buttons, and visible focus rings.
- Fonts loaded via `next/font` (Geist + Geist Mono) with `display: swap`.
- No CMS, database, or backend — fully static marketing site.

© 2026 Chris Merino · EN · ES · PT
