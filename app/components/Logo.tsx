import Link from "next/link";
import { site } from "@/app/lib/site";

/** Wordmark + mark. `tone` adapts the text colour for dark sections. */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5"
      aria-label={`${site.name} — home`}
    >
      {/* Mark: an upward arrow = growth / momentum */}
      <span
        aria-hidden="true"
        className="grid h-9 w-9 place-items-center rounded-lg bg-brand"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 19 19 5" />
          <path d="M9 5h10v10" />
        </svg>
      </span>
      <span
        className={`text-lg font-bold tracking-tight ${
          tone === "light" ? "text-white" : "text-slate-900"
        }`}
      >
        SIMS&nbsp;PROSPECTS
      </span>
    </Link>
  );
}
