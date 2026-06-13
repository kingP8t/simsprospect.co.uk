import { Cta } from "@/app/components/Cta";

/**
 * Results / proof section on a deep-slate background.
 * ⚠️ CONFIRM — replace the placeholder stats below with real, verifiable
 * client numbers before publishing. Specific, true numbers convert; vague
 * or invented ones erode trust.
 */
const stats = [
  { value: "3×", label: "more qualified meetings vs. in-house prospecting" },
  { value: "14 days", label: "average time to the first booked meeting" },
  { value: "90%+", label: "of booked meetings kept by attending prospects" },
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

        <p className="mt-6 text-center text-xs text-slate-500">
          Illustrative figures — final copy to be confirmed with verified client
          results.
        </p>

        <div className="mt-10 text-center">
          <Cta size="lg">See what we can book for you</Cta>
        </div>
      </div>
    </section>
  );
}
