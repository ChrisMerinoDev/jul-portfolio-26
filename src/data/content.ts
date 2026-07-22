/**
 * Single source of truth for all editable site content.
 * Update copy, experience, projects, and tech stack here — components map over this data.
 */

export const identity = {
  name: "Chris Merino",
  title: "Frontend Engineer",
  email: "chrismerino.dev@gmail.com",
  github: "https://github.com/ChrisMerinoDev",
  languages: ["English", "Spanish", "Portuguese"],
  languageBadge: "EN · ES · PT",
} as const;

export const hero = {
  headline: "Chris Merino",
  subheadline:
    "Frontend Engineer building fast, accessible web apps with React, Next.js, and TypeScript.",
  supporting:
    "From enterprise healthcare SaaS to paid client work — I take features from idea to production.",
  primaryCta: { label: "View Projects", href: "#projects" },
  secondaryCta: { label: "Get in Touch", href: "#contact" },
  badge: "EN · ES · PT",
} as const;

export const about = {
  heading: "About",
  paragraph:
    "I'm a frontend engineer who ships production web applications with React, Next.js, and TypeScript. I've built everything from a company's first in-app onboarding system for a complex healthcare platform to a paid client website and a full-stack gamified coding platform. I care about clean architecture, accessibility, performance, and interfaces that feel effortless. I move fast in startup and agile team environments, and I collaborate in English, Spanish, and Portuguese.",
} as const;

export type TechGroup = {
  label: string;
  items: string[];
};

export const techStack: TechGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    label: "State & Data",
    items: ["React Hooks", "Context", "Zustand", "REST APIs", "Axios"],
  },
  {
    label: "Backend & Data",
    items: ["Node.js", "Supabase", "MongoDB", "PostgreSQL"],
  },
  {
    label: "UI & Tooling",
    items: ["TipTap", "Monaco Editor", "GSAP", "Framer Motion", "Recharts", "Web Workers"],
  },
  {
    label: "Dev & Ops",
    items: ["Git", "GitHub", "Vercel", "Vite", "CI/CD"],
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  dates: string;
  context?: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Frontend Engineer Intern",
    org: "Medlaunch Concepts",
    dates: "Apr 2026 – Jul 2026",
    context:
      "Medlaunch Portal, a healthcare accreditation and quality management platform (React 19, Vite).",
    points: [
      "Shipped the platform's first in-app onboarding system in React, guiding users through 17 interactive product tours with live-state gating and branching flows.",
      "Improved application performance by replacing oversized data loads with true server-side pagination and a role-gated reviewer view, keeping the interface responsive as data grew.",
      "Built a compliance-focused policy authoring suite with a TipTap rich-text editor and live acknowledgment tracking, and refactored a monolithic data layer into reusable utilities.",
    ],
  },
  {
    role: "Freelance Frontend Developer",
    org: "HydraFlow Wellness",
    dates: "2026",
    context:
      "Paid client engagement: marketing and lead-generation website for a mobile IV & wellness business.",
    points: [
      "Designed and delivered a responsive, SEO-optimized site in Next.js, React, and TypeScript that serves as the business's primary online presence and customer acquisition channel.",
      "Built an accessible, validated lead-capture form and optimized performance with scroll-based animations, a mobile-first layout, and optimized image loading.",
    ],
  },
  {
    role: "Gymnastics Head Coach & Team Leader",
    org: "TAG USA Gymnastics",
    dates: "2023 – Present",
    points: [
      "Lead and develop competitive teams, coaching athletes to championship titles.",
      "Own season planning and make real-time decisions under pressure in high-stakes competitions.",
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  status: "Live" | "Coming soon";
  /** action type controls the primary button behavior */
  action:
    | { kind: "link"; label: string; href: string; domain?: string }
    | { kind: "toast"; label: string; message: string };
};

export const projects: Project[] = [
  {
    name: "HydraFlow Wellness",
    tagline:
      "Marketing & lead-generation website for a mobile IV and wellness therapy business.",
    description:
      "A responsive, SEO-optimized site built in Next.js 16, React 19, TypeScript, and Tailwind CSS v4, with scroll-based GSAP animations, an accessible Zod-validated contact form, and a strongly typed content architecture that lets the client update services in minutes.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Zod"],
    status: "Live",
    action: {
      kind: "link",
      label: "Visit Site",
      href: "https://hydraflowwellness.com",
      domain: "hydraflowwellness.com",
    },
  },
  {
    name: "AceLoop",
    tagline: "A gamified platform for mastering data structures and algorithms.",
    description:
      "A full-stack coding platform in Next.js and TypeScript where users solve DSA problems in an in-browser Monaco editor with instant test-based grading. Features a secure Web Worker sandbox that safely runs untrusted code, a scoring/XP/rank progression system, 36 curated problems across 12 algorithmic patterns, 16 achievements, and offline-first state with Zustand plus optional Supabase cloud sync.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Zustand",
      "Monaco Editor",
      "Web Workers",
      "Supabase",
    ],
    status: "Live",
    action: {
      kind: "link",
      label: "View Project",
      href: "https://aceloop.vercel.app",
      domain: "aceloop.vercel.app",
    },
  },
];

export const contact = {
  heading: "Let's build something great.",
  line: "Open to frontend engineering roles and freelance work.",
  resumeHref: "/resume.pdf",
} as const;

export const footer = {
  copyright: "© 2026 Chris Merino",
  languageBadge: "EN · ES · PT",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;
