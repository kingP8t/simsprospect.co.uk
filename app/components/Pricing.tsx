import { SectionHeading } from "@/app/components/SectionHeading";
import { Cta } from "@/app/components/Cta";
import { pricing } from "@/app/lib/site";
import { getCurrency } from "@/app/lib/currency";

/* Tick icon used in feature lists */
function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
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

export async function Pricing() {
  const currency = await getCurrency();
  return (
    <section
      id="pricing"
      className="scroll-mt-20 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Pricing for every outbound channel"
          intro="Three channels, all month-to-month. Pick the one that fits how you want to reach buyers, or combine them, and scale up or down whenever."
        />

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pricing.map((tier) => (
            <article
              key={tier.name}
              className={`relative flex flex-col rounded-2xl p-8 ${
                tier.highlighted
                  ? "bg-slate-900 text-white ring-2 ring-brand"
                  : "border border-slate-200 bg-white"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 right-6 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Most popular
                </span>
              )}

              <h3
                className={`text-lg font-semibold ${
                  tier.highlighted ? "text-white" : "text-slate-900"
                }`}
              >
                {tier.name}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  tier.highlighted ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {tier.tagline}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span
                  className={`text-4xl font-bold tracking-tight sm:text-5xl ${
                    tier.highlighted ? "text-white" : "text-slate-900"
                  }`}
                >
                  {tier.priceMonthly[currency]}
                </span>
                <span
                  className={`text-sm ${
                    tier.highlighted ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {tier.cadence}
                </span>
              </div>

              <p
                className={`mt-4 text-xs font-bold uppercase tracking-wide ${
                  tier.highlighted ? "text-brand" : "text-brand-dark"
                }`}
              >
                {tier.volume}
              </p>

              <ul
                className={`mt-8 space-y-3 ${
                  tier.highlighted ? "text-slate-200" : "text-slate-700"
                }`}
              >
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                  >
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Cta
                  variant={tier.highlighted ? "primary" : "secondary"}
                  size="lg"
                  className="w-full"
                >
                  {tier.cta}
                </Cta>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-slate-600">
          Need something custom, like higher volume, additional channels, or a
          white-label setup?{" "}
          <a
            href="#audit"
            className="font-semibold text-brand underline hover:text-brand-dark"
          >
            Let&apos;s scope it on a call.
          </a>
        </p>
      </div>
    </section>
  );
}
