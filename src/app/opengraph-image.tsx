import { ImageResponse } from "next/og";

export const alt = "Chris Merino — Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generated Open Graph image — placeholder-quality but on-brand. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(1000px 500px at 20% 0%, #1b1b4d, transparent), radial-gradient(900px 500px at 90% 100%, #0e3b45, transparent), #0a0a0b",
          color: "#ededf2",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 8,
            color: "#22d3ee",
            fontFamily: "monospace",
          }}
        >
          EN · ES · PT
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            marginTop: 20,
            backgroundImage: "linear-gradient(120deg, #6366f1, #22d3ee)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Chris Merino
        </div>
        <div style={{ fontSize: 40, marginTop: 12, color: "#a1a1ac" }}>
          Frontend Engineer
        </div>
        <div style={{ fontSize: 28, marginTop: 28, color: "#cfcfd6", maxWidth: 900 }}>
          Fast, accessible web apps with React, Next.js, and TypeScript.
        </div>
      </div>
    ),
    { ...size },
  );
}
