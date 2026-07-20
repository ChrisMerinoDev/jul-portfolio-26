import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://chrismerino.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chris Merino — Frontend Engineer",
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
    title: "Chris Merino — Frontend Engineer",
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
        alt: "Chris Merino — Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Merino — Frontend Engineer",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster
          position="bottom-right"
          theme="dark"
          toastOptions={{
            style: {
              background: "rgba(16, 16, 21, 0.9)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "#ededf2",
              backdropFilter: "blur(12px)",
            },
          }}
        />
      </body>
    </html>
  );
}
