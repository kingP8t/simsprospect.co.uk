import { SectionHeading } from "@/app/components/SectionHeading";
import { Cta } from "@/app/components/Cta";

/* Build-in-house vs outsource comparison — the strongest objection-handler
   for a "no ramp, no overhead" pitch. Every row maps to a claim already
   made elsewhere on the site. */
const rows: { dimension: string; inHouse: string; sims: string }[] = [
  {
    dimension: "Time to first meeting",
    inHouse: "3–6 months to hire, onboard, and ramp an SDR",
    sims: "First qualified meetings in 2–3 weeks",
  },
  {
    dimension: "Upfront cost & overhead",
    inHouse: "Salary, tooling, data, NI, and management on top",
    sims: "One predictable monthly fee, month-to-month",
  },
  {
    dimension: "Risk if it doesn't work",
    inHouse: "A bad hire costs months and a redundancy process",
    sims: "Pause or cancel any month — no lock-in",
  },
  {
    dimension: "Data & tooling",
    inHouse: "You buy, learn, and maintain the whole stack",
    sims: "Verified data and multi-channel tooling included",
  },
  {
    dimension: "Coverage",
    inHouse: "One person — holidays and sick days stop output",
    sims: "A managed team, so activity never goes dark",
  },
  {
    dimension: "Management",
    inHouse: "You coach, monitor, and course-correct daily",
    sims: "We manage delivery; you get weekly reporting",
  },
];

function CrossIcon() {
  return (
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
      className="mt-0.5 shrink-0 text-slate-400"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function TickIcon() {
  return (
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
      className="mt-0.5 shrink-0 text-brand"
    >
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function Comparison() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Build vs. partner"
          title="Cheaper, faster, and lower-risk than hiring in-house"
          intro="Standing up your own outbound team is slow and expensive before it books a single meeting. Here's how the two stack up."
        />

        <div className="mt-12 overflow-hidden rounded-2xl ring-1 ring-slate-200">
          {/* Header row */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr]">
            <div className="hidden bg-slate-50 px-6 py-4 sm:block" />
            <div className="bg-slate-50 px-6 py-4 text-sm font-semibold text-slate-500">
              Building in-house
            </div>
            <div className="bg-brand-tint px-6 py-4 text-sm font-bold text-brand-dark">
              With SIMS PROSPECTS
            </div>
          </div>

          {/* Body rows */}
          {rows.map((row, i) => (
            <div
              key={row.dimension}
              className={`grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr] ${
                i % 2 ? "bg-white" : "bg-slate-50/40"
              }`}
            >
              <div className="border-t border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900">
                {row.dimension}
              </div>
              <div className="flex items-start gap-2.5 border-t border-slate-200 px-6 py-5 text-sm leading-relaxed text-slate-600">
                <CrossIcon />
                <span>{row.inHouse}</span>
              </div>
              <div className="flex items-start gap-2.5 border-t border-slate-200 bg-brand-tint/40 px-6 py-5 text-sm leading-relaxed text-slate-800">
                <TickIcon />
                <span>{row.sims}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Cta size="lg">See what we&apos;d book for you</Cta>
        </div>
      </div>
    </section>
  );
}
