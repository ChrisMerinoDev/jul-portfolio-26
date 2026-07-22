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
          justifyContent: "space-between",
          padding: "80px",
          background: "#f1ece1",
          color: "#14110d",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            letterSpacing: 6,
            color: "#6c6456",
            fontFamily: "monospace",
            textTransform: "uppercase",
          }}
        >
          <span>Chris Merino</span>
          <span style={{ color: "#1d2bff" }}>EN · ES · PT</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 110,
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: -3,
            }}
          >
            Frontend engineer
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 110,
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: -3,
              fontStyle: "italic",
            }}
          >
            <span>crafting&nbsp;</span>
            <span style={{ color: "#1d2bff" }}>fast,&nbsp;</span>
            <span>accessible</span>
          </div>
          <div
            style={{
              fontSize: 110,
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: -3,
              fontStyle: "italic",
            }}
          >
            interfaces.
          </div>
        </div>

        <div
          style={{
            fontSize: 24,
            letterSpacing: 4,
            color: "#6c6456",
            fontFamily: "monospace",
            textTransform: "uppercase",
          }}
        >
          React · Next.js · TypeScript
        </div>
      </div>
    ),
    { ...size },
  );
}
