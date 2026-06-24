import { Cta } from "@/app/components/Cta";

/* The destination for the hero's "Get a free pipeline audit" CTA.
   Gives that button real, relevant content (it previously linked to a
   missing #audit anchor) and a clear, low-pressure next step. */
const auditPoints = [
  {
    title: "Where the gaps are",
    body: "A quick read on your current outbound: what's working, what's leaking, and where meetings are being lost.",
  },
  {
    title: "What we'd change",
    body: "The specific channels, messaging, and targeting we'd use to book more qualified meetings for your team.",
  },
  {
    title: "The numbers to expect",
    body: "A realistic view of the pipeline and booked meetings you could plan around, with no inflated promises.",
  },
];

export function PipelineAudit() {
  return (
    <section id="audit" className="scroll-mt-20 bg-slate-900 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-light">
            Free pipeline audit
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            See where your pipeline is leaking, before you spend a penny
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Book a focused 30-minute call and we&apos;ll audit your current
            prospecting live: where the gaps are, what we&apos;d change, and the
            meetings you could realistically expect. No obligation, no hard sell.
          </p>
        </div>

        <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {auditPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
            >
              <dt className="text-base font-semibold text-white">
                {point.title}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-400">
                {point.body}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10">
          <Cta size="lg">Book your free pipeline audit</Cta>
        </div>
      </div>
    </section>
  );
}
