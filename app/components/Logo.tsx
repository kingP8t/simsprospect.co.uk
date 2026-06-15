import Link from "next/link";
import { site } from "@/app/lib/site";

/**
 * Brand mark: an upward trend-arrow rising out of a target/bullseye —
 * "hit the target, grow the pipeline". Rebuilt from the SIMS PROSPECTS
 * logo as inline SVG so it stays crisp at any size and themeable.
 */
function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="32"
      height="32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {/* concentric target, open toward the arrow's exit (upper-right) */}
      <path d="M8.5 9a5 5 0 1 0 5 5" />
      <path d="M8.5 11.7a2.3 2.3 0 1 0 2.3 2.3" />
      <circle cx="8.5" cy="14" r="0.9" fill="currentColor" stroke="none" />
      {/* rising trend line + arrowhead */}
      <path d="M8.5 14l4-3.5 2.5 1.5L20 6" />
      <path d="M15 6h5v5" />
    </svg>
  );
}

/** Wordmark + mark. `tone` adapts the text colour for dark sections. */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5"
      aria-label={`${site.name} — home`}
    >
      <Mark className="text-brand" />
      {/* Two-tone wordmark mirrors the logo: orange "SIMS" + neutral "PROSPECTS" */}
      <span className="text-lg font-bold tracking-tight">
        <span className="text-brand">SIMS</span>
        <span
          className={tone === "light" ? "text-white" : "text-slate-900"}
        >
          &nbsp;PROSPECTS
        </span>
      </span>
    </Link>
  );
}
