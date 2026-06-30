import Link from "next/link";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Reveal } from "@/app/components/Reveal";
import { CountUp } from "@/app/components/CountUp";
import { caseStudies, type CaseStudy } from "@/app/lib/case-studies";

/**
 * Homepage case studies section.
 * Reads from `case-studies.ts` and renders one featured card per entry,
 * stacked vertically — so every case study gets the dramatic two-stat
 * dark-panel treatment, not just the first.
 */
export function CaseStudies() {
  // Only genuine, delivered client results belong in this "real outcomes"
  // grid. Illustrative scenarios have their own labelled detail pages.
  const featured = caseStudies.filter((study) => !study.illustrative);
  if (featured.length === 0) return null;

  return (
    <section id="cases" className="scroll-mt-20 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case studies"
          title="Real outcomes for real B2B teams"
          intro="What we've delivered for clients across SaaS, recruitment, professional services, e-commerce, and restaurant tech."
        />

        <div className="mx-auto mt-14 max-w-5xl space-y-8">
          {featured.map((study, i) => (
            <Reveal key={study.slug} delay={i * 90}>
              <FeaturedCard study={study} />
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-slate-600">
          Want to see results from clients in your industry?{" "}
          <Link
            href="#audit"
            className="font-semibold text-brand hover:text-brand-dark"
          >
            We&apos;ll share them on the discovery call.
          </Link>
        </p>
      </div>
    </section>
  );
}

/** A single case study rendered as a featured card with dark stats panel. */
function FeaturedCard({ study }: { study: CaseStudy }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5 transition duration-300 hover:shadow-lg">
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1.4fr_1fr]">
        {/* Story */}
        <div className="p-8 sm:p-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-wide">
            <span className="text-brand">Case study</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-500">{study.industry}</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-500">{study.date}</span>
          </div>

          <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {study.headline}
          </h3>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {study.summary.body}
          </p>

          <Link
            href={`/case-studies/${study.slug}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
          >
            Read the full case study
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Headline stats — dark panel */}
        <div className="grid grid-cols-2 gap-px bg-slate-200 lg:grid-cols-1">
          <div className="bg-slate-900 px-8 py-10 text-center lg:text-left">
            <CountUp
              value={study.summary.primaryMetric.value}
              className="block text-5xl font-bold tracking-tight text-brand-light sm:text-6xl"
            />
            <p className="mt-2 text-sm font-medium text-slate-300">
              {study.summary.primaryMetric.label}
            </p>
          </div>
          <div className="bg-slate-900 px-8 py-10 text-center lg:text-left">
            <CountUp
              value={study.summary.secondaryMetric.value}
              className="block text-5xl font-bold tracking-tight text-brand-light sm:text-6xl"
            />
            <p className="mt-2 text-sm font-medium text-slate-300">
              {study.summary.secondaryMetric.label}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
