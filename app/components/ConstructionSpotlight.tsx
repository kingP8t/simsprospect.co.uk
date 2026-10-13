import Link from "next/link";
import { Cta } from "@/app/components/Cta";
import { Reveal } from "@/app/components/Reveal";

/* Homepage entry point to the construction pages. Copy mirrors what those
   pages already say; it makes no claims about past construction results
   (the landing page states we are onboarding our first construction clients). */
const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const segments = [
  {
    href: "/construction-lead-generation/suppliers-and-manufacturers",
    title: "Suppliers and manufacturers",
    body: "Reach architects, specifiers and contractors while the specification is still open, with CPD and specification meetings booked for you.",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" />
        <path d="m3 8 9 5 9-5M12 13v8" />
      </svg>
    ),
  },
  {
    href: "/construction-lead-generation/sme-contractors",
    title: "SME contractors and builders",
    body: "Meet homeowners, developers and architects with live projects in your area, instead of competing on price alone.",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 10h.01M15 10h.01" />
      </svg>
    ),
  },
  {
    href: "/construction-lead-generation/pipeline-calculator",
    title: "Pipeline calculator",
    body: "Enter your turnover to estimate what a construction pipeline could be worth to your business.",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 7h6M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01" />
      </svg>
    ),
  },
];

export function ConstructionSpotlight() {
  return (
    <section
      aria-labelledby="construction-heading"
      className="relative overflow-hidden bg-slate-900 py-20 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl"
      />
      <div aria-hidden="true" className="grain-overlay opacity-[0.06]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-light">
              New: construction
            </p>
            <h2
              id="construction-heading"
              className="mt-3 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl"
            >
              Lead generation for construction suppliers and contractors
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              We find live projects, identify the architects, specifiers and
              contractors involved, and run email, LinkedIn and phone outreach
              that books qualified meetings with them.
            </p>
            <div className="mt-8">
              <Cta href="/construction-lead-generation" size="lg">
                Explore construction lead generation
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
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Cta>
            </div>
          </Reveal>

          <Reveal stagger className="grid grid-cols-1 gap-4 lg:col-span-7">
            {segments.map((segment) => (
              <Link
                key={segment.href}
                href={segment.href}
                className="group flex items-start gap-5 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/15 text-brand-light">
                  {segment.icon}
                </span>
                <span className="flex-1">
                  <span className="block text-base font-semibold text-white">
                    {segment.title}
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-slate-300">
                    {segment.body}
                  </span>
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-brand-light transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
