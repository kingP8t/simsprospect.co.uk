import { Cta } from "@/app/components/Cta";

/**
 * Results / proof section on a deep-slate background.
 * Every figure below must tie back to real, verifiable client work.
 * ⚠️ CONFIRM the totals stay accurate as you add or close case studies:
 * "338" is the sum of qualified meetings across the three case studies
 * (186 + 137 + 15). Update it when the case-study data changes.
 */
const stats = [
  { value: "338", label: "qualified meetings booked across client campaigns" },
  { value: "2–3 wks", label: "to the first booked meetings on a new campaign" },
  { value: "100%", label: "of agreed KPIs met on our most recent engagement" },
];

export function Results() {
  return (
    <section id="results" className="scroll-mt-20 bg-slate-900 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-light">
            The numbers
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pipeline you can forecast
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            We measure success in booked, qualified meetings — and report on it
            every week.
          </p>
        </div>

        <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-slate-900 px-6 py-10 text-center">
              <dt className="text-4xl font-bold tracking-tight text-brand-light sm:text-5xl">
                {stat.value}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-slate-300">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 text-center">
          <Cta size="lg">See what we can book for you</Cta>
        </div>
      </div>
    </section>
  );
}
