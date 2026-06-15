import { ImageResponse } from "next/og";
import { site } from "@/app/lib/site";

/* Social share card (og:image + twitter:image fallback). Rendered at
   build time from the brand mark + wordmark, so link previews are on-brand
   instead of blank. 1200x630 is the standard social card size. */
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1b1b1b",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ef9a3e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8.5 9a5 5 0 1 0 5 5" />
            <path d="M8.5 11.7a2.3 2.3 0 1 0 2.3 2.3" />
            <circle cx="8.5" cy="14" r="0.9" fill="#ef9a3e" stroke="none" />
            <path d="M8.5 14l4-3.5 2.5 1.5L20 6" />
            <path d="M15 6h5v5" />
          </svg>
          <div
            style={{
              display: "flex",
              marginLeft: "28px",
              fontSize: "92px",
              fontWeight: 700,
              letterSpacing: "-3px",
            }}
          >
            <span style={{ color: "#ef9a3e" }}>SIMS</span>
            <span style={{ color: "#ffffff", marginLeft: "24px" }}>
              PROSPECTS
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "40px",
            maxWidth: "920px",
            textAlign: "center",
            fontSize: "36px",
            lineHeight: 1.3,
            color: "#cbd5e1",
          }}
        >
          A predictable pipeline of booked sales meetings — cold calling,
          LinkedIn outreach and appointment setting.
        </div>
      </div>
    ),
    size,
  );
}
