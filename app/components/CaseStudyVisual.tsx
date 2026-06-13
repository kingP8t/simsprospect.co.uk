import Image from "next/image";
import type { CaseStudy } from "@/app/lib/case-studies";

/**
 * Renders the case study hero visual.
 *   - If `study.image` is set, uses next/image with the configured file.
 *   - Otherwise renders a styled on-brand placeholder that surfaces the
 *     headline metric — so the page never looks broken while you wait
 *     for real photography.
 */
export function CaseStudyVisual({ study }: { study: CaseStudy }) {
  if (study.image) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-slate-200">
        <Image
          src={study.image.src}
          alt={study.image.alt}
          width={study.image.width}
          height={study.image.height}
          className="h-full w-full object-cover"
          priority
        />
      </div>
    );
  }

  return <PlaceholderVisual study={study} />;
}

/** Branded fallback when no photograph has been supplied yet. */
function PlaceholderVisual({ study }: { study: CaseStudy }) {
  return (
    <div
      role="img"
      aria-label={`${study.client} case study visual`}
      className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-lg"
    >
      {/* Decorative dot pattern */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dot-grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>

      {/* Soft white blob accent */}
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-2xl"
      />

      {/* Content */}
      <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/80">
          <span>{study.client}</span>
          <span className="text-white/40">·</span>
          <span>{study.date}</span>
        </div>

        <div>
          <p className="text-6xl font-bold tracking-tight sm:text-7xl">
            {study.summary.primaryMetric.value}
          </p>
          <p className="mt-2 text-sm font-medium text-white/85 sm:text-base">
            {study.summary.primaryMetric.label}
          </p>
        </div>
      </div>
    </div>
  );
}
