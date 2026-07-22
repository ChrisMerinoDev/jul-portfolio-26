import type { Metadata } from "next";
import { Newsreader, Archivo, IBM_Plex_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { CursorRing } from "@/components/CursorRing";
import { RevealController } from "@/components/RevealController";
import { ScrollBackground } from "@/components/ScrollBackground";
import "./globals.css";

// Display: a refined editorial serif with optical-display cuts and true italics.
const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  style: ["normal", "italic"],
});

// Body — a clean, slightly editorial grotesque.
const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

// Labels / technical captions — a refined monospace.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

const siteUrl = "https://chrismerino.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chris Merino, Frontend Engineer",
  description:
    "Frontend Engineer building fast, accessible web apps with React, Next.js, and TypeScript. From enterprise healthcare SaaS to paid client work.",
  keywords: [
    "Chris Merino",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Chris Merino" }],
  openGraph: {
    title: "Chris Merino, Frontend Engineer",
    description:
      "Frontend Engineer building fast, accessible web apps with React, Next.js, and TypeScript.",
    url: siteUrl,
    siteName: "Chris Merino",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Chris Merino, Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Merino, Frontend Engineer",
    description:
      "Frontend Engineer building fast, accessible web apps with React, Next.js, and TypeScript.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${archivo.variable} ${plexMono.variable} reveal-init h-full antialiased`}
    >
      <head>
        {/* If JS is off, never leave reveal content hidden */}
        <noscript>
          <style>{`.reveal-init [data-reveal]{opacity:1 !important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col">
        <ScrollBackground />
        <CursorRing />
        <RevealController />
        {children}
        <Toaster
          position="bottom-right"
          theme="light"
          toastOptions={{
            style: {
              background: "#f2ede2",
              border: "1px solid rgba(20, 18, 16, 0.16)",
              color: "#141210",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
            },
          }}
        />
      </body>
    </html>
  );
}
