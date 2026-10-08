import type { Metadata } from "next";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Reveal } from "@/app/components/Reveal";
import { FounderAvatar } from "@/app/components/FounderAvatar";
import { Cta } from "@/app/components/Cta";
import { PipelineCalculator } from "@/app/components/PipelineCalculator";
import { site } from "@/app/lib/site";
import Link from "next/link";

/* ─── SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Construction Pipeline ROI Calculator | See Your Projected Revenue",
  description:
    "Enter your annual turnover and see exactly how many qualified meetings, specification wins, and revenue our construction lead generation service can deliver. Free pipeline audit included.",
  openGraph: {
    title: "Construction Pipeline ROI Calculator",
    description:
      "See exactly how many qualified meetings and specification wins our construction lead generation service can deliver for your business.",
    url: `${site.url}/construction-lead-generation/pipeline-calculator`,
    siteName: site.name,
    type: "website",
  },
  alternates: {
    canonical: "/construction-lead-generation/pipeline-calculator",
  },
};

/* ─── JSON-LD ────────────────────────────────────────────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Construction Pipeline ROI Calculator",
  description:
    "Calculate the ROI of outsourced construction lead generation based on your annual turnover, average deal size, and meeting volume.",
  url: `${site.url}/construction-lead-generation/pipeline-calculator`,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
    description: "Free pipeline audit and ROI calculator",
  },
  provider: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
};

/* ─── Page ───────────────────────────────────────────────────── */

export default function PipelineCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-28">
        {/* Decorative glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-brand/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Link
              href="/construction-lead-generation"
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-slate-300 ring-1 ring-white/20 transition-colors hover:bg-white/15 hover:text-white"
            >
              <span aria-hidden="true">&larr;</span>
              Construction Lead Generation
            </Link>

            <h1 className="enter mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Pipeline audit{" "}
              <span className="text-brand-light">calculator</span>
            </h1>

            <p className="enter enter-stagger mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              Enter your turnover and see how many qualified meetings,
              specification wins, and new revenue you can expect — before
              you spend a penny.
            </p>
          </div>
        </div>
      </section>

      {/* ── Calculator ── */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="ROI Calculator"
              title="What could your pipeline look like?"
              intro="Select your annual turnover and we'll show you the meetings, wins, and revenue our service is built to deliver — tailored to your tier."
            />
          </Reveal>

          <Reveal className="mt-12">
            <PipelineCalculator />
          </Reveal>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="From turnover to booked meetings in 4 steps"
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Pipeline audit",
                desc: "We analyse your turnover, average deal size, and target market to build a custom outreach strategy.",
              },
              {
                step: "02",
                title: "Prospect list build",
                desc: "Using live planning data, we identify projects where your product or service can still be specified.",
              },
              {
                step: "03",
                title: "Multi-channel outreach",
                desc: "Cold email, LinkedIn, and cold calling campaigns run in parallel to reach decision-makers at the right time.",
              },
              {
                step: "04",
                title: "Qualified meetings",
                desc: "You receive booked meetings with architects, specifiers, and contractors — fully qualified and ready to buy.",
              },
            ].map((item) => (
              <Reveal key={item.step}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                  <span className="text-sm font-bold text-brand">
                    {item.step}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social proof / stats ── */}
      <section className="bg-slate-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
              {[
                { stat: "500+", label: "Qualified meetings booked" },
                { stat: "£12m+", label: "Pipeline generated" },
                { stat: "22%", label: "Avg. meeting-to-win rate" },
                { stat: "4.8x", label: "Avg. first-quarter ROI" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-3xl font-bold text-brand-light sm:text-4xl">
                    {item.stat}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions about the calculator"
            />
          </Reveal>

          <div className="mx-auto mt-14 max-w-3xl divide-y divide-slate-200">
            {[
              {
                q: "How accurate are these projections?",
                a: "The calculator uses conservative conversion rates (20–25%) based on real campaign data from our construction clients. Actual results vary depending on your product, pricing, and target regions — but most clients outperform these numbers within two quarters.",
              },
              {
                q: "What's included in the cost per meeting?",
                a: "Everything: prospect list building from live planning data, multi-channel outreach (cold email, LinkedIn, cold calling), full qualification against your criteria, and a confirmed meeting booked onto your calendar. No hidden extras.",
              },
              {
                q: "Why does turnover affect the price?",
                a: "Higher-turnover businesses sell higher-value products into larger projects. The prospects are harder to reach, the research is deeper, and the meetings are worth significantly more. Pricing reflects the value and complexity at each tier.",
              },
              {
                q: "What's the setup fee for?",
                a: "The one-off setup fee covers your bespoke prospect list build, email sequence creation, domain and deliverability infrastructure, CRM integration, and campaign design. It's the foundation that makes every meeting cost-effective.",
              },
              {
                q: "Do the revenue projections include repeat business?",
                a: "No — they show first-order value only. In construction, a single specification win often leads to repeat orders, framework agreements, and long-term relationships worth 3–10x the initial project. Your real ROI is likely much higher.",
              },
              {
                q: "How quickly will I see results?",
                a: "Most campaigns generate the first qualified meetings within 2–3 weeks of launch. The full pipeline projection is based on a quarterly timeframe, giving enough time for meetings to convert to specification wins.",
              },
            ].map((item) => (
              <Reveal key={item.q}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-slate-900">
                    {item.q}
                    <span className="ml-4 shrink-0 text-slate-400 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-slate-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <FounderAvatar />
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to see what your pipeline could look like?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                Book a free pipeline audit and we&rsquo;ll walk you through
                a custom projection for your business — no obligation, no
                hard sell.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Cta size="lg">Book Your Free Pipeline Audit</Cta>
                <Cta variant="ghost" size="lg">
                  <Link href="/construction-lead-generation">
                    Explore our services
                  </Link>
                </Cta>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
