import type { Metadata } from "next";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Cta } from "@/app/components/Cta";
import { Reveal } from "@/app/components/Reveal";
import { FounderAvatar } from "@/app/components/FounderAvatar";
import { site, founder } from "@/app/lib/site";

/* ─── SEO metadata ────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Construction Lead Generation UK | AI-Powered Pipeline",
  description:
    "Book more qualified meetings with architects, contractors, and specifiers. AI prospecting + multi-channel outreach to fill your construction sales pipeline — no day-rate billing, no long contracts.",
  openGraph: {
    title: "Construction Lead Generation UK | AI-Powered Pipeline",
    description:
      "Book more qualified meetings with architects, contractors, and specifiers. AI prospecting + multi-channel outreach to fill your construction sales pipeline.",
    url: `${site.url}/construction-lead-generation`,
    siteName: site.name,
    type: "website",
  },
  alternates: {
    canonical: "/construction-lead-generation",
  },
};

/* ─── Inline icons (matching site icon pattern) ───────────────── */

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ─── Data ────────────────────────────────────────────────────── */

const STEPS = [
  {
    number: 1,
    title: "AI project detection",
    description:
      "We monitor planning applications, tender notices, and industry data feeds to surface projects at the stage where your product or service can still be specified. No manual searching. No stale lists.",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2v4" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Decision-maker identification",
    description:
      "We identify the architects, specifiers, project managers, and contractors involved in each opportunity — verified contact data, not guesswork.",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Multi-channel outreach",
    description:
      "Coordinated campaigns across email, LinkedIn, and phone. AI-personalised messaging timed to project milestones, so your introduction arrives when it's relevant.",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22 11 13 2 9z" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Qualified meetings on your calendar",
    description:
      "We book meetings that meet your criteria — right job title, right project stage, confirmed interest. You show up and sell. We handle everything else.",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
];

const COMPARISON = [
  {
    feature: "Pricing",
    traditional: "Day rate (£150–£600/day)",
    ours: "Pay per qualified meeting",
  },
  {
    feature: "Channels",
    traditional: "Phone only",
    ours: "Email + LinkedIn + Phone",
  },
  {
    feature: "Data",
    traditional: "You supply the list",
    ours: "AI-sourced from live project data",
  },
  {
    feature: "Targeting",
    traditional: "Whoever picks up",
    ours: "Decision-makers on active projects",
  },
  {
    feature: "Reporting",
    traditional: "Weekly call log",
    ours: "Real-time dashboard, full attribution",
  },
  {
    feature: "Contracts",
    traditional: "Rolling monthly or fixed term",
    ours: "No long-term commitment",
  },
];

const SECTORS = [
  "Building product manufacturers",
  "Specialist subcontractors",
  "Design & build contractors",
  "Facilities management",
  "Construction technology & SaaS",
  "Professional services",
];

const DELIVERABLES = [
  {
    title: "Qualified appointments",
    description:
      "Face-to-face or online meetings with decision-makers who match your ICP and have confirmed interest.",
  },
  {
    title: "CPD & specification meetings",
    description:
      "Get your product in front of architects and specifiers through targeted CPD outreach — we handle scheduling and follow-up.",
  },
  {
    title: "Tender & pricing opportunities",
    description:
      "We identify live tender opportunities in your target sectors and regions, and connect you before the field closes.",
  },
  {
    title: "PSL introductions",
    description:
      "We start the preferred supplier list application process — getting your Pre-Qualification Questionnaire in front of the right procurement team.",
  },
];

const FAQS = [
  {
    question:
      "We've used telemarketing agencies before and the lead quality was poor.",
    answer:
      "Traditional agencies dial from a list and hope. We start from live project data and verified decision-maker contacts, so every conversation is relevant to something happening now. You define what 'qualified' means — we don't book meetings that don't meet your criteria.",
  },
  {
    question: "How do you know construction? This isn't a simple market.",
    answer:
      "Our campaigns are timed around project stages — specification, tender, procurement — not arbitrary call schedules. Our messaging is written for the way architects, contractors, and specifiers actually think and buy.",
  },
  {
    question: "What if we already have Barbour ABI or Glenigan data?",
    answer:
      "That's a head start. We can layer our outreach on top of your existing project intelligence, or source our own. Either way, we handle the outreach and meeting-booking so your data actually converts into conversations.",
  },
  {
    question: "We need to protect our brand — construction is a small world.",
    answer:
      "Every message is approved by you before it goes out. We act as an extension of your team, not a call centre. Your prospects will think they're hearing from you — because they are.",
  },
  {
    question: "What does it cost?",
    answer:
      "We price per qualified meeting, not per day or per hour. That means you pay for results, not activity. Book a pipeline audit and we'll give you a transparent quote based on your ICP and target volume.",
  },
];

/* ─── Tick / Cross icons (matching Comparison.tsx pattern) ─────── */

function TickIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="inline text-brand"
    >
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="inline text-slate-400"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

/* ─── Page ────────────────────────────────────────────────────── */

export default function ConstructionLeadGeneration() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        {/* Decorative blobs — matching Hero.tsx */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-brand/[0.06] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-48 h-[320px] w-[320px] rounded-full bg-brand-tint blur-3xl"
        />
        <div aria-hidden="true" className="grain-overlay" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 sm:pt-36 lg:px-8 lg:pt-44">
          <div className="enter-stagger mx-auto max-w-3xl text-center">
            {/* Pill badge — matching Hero.tsx */}
            <p className="inline-flex items-center rounded-full bg-brand-tint px-3.5 py-1.5 text-sm font-semibold text-brand-dark ring-1 ring-inset ring-brand/20">
              Construction &amp; Built Environment
            </p>

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              We book qualified meetings with the architects, contractors, and
              specifiers you actually want to work&nbsp;with.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Most construction telemarketing agencies make 100&nbsp;calls a day
              and charge you a day rate whether those calls convert or not. We
              use AI to find the right projects, identify the decision-makers,
              and run multi-channel campaigns that book meetings&nbsp;— so your
              sales team spends time closing, not cold&nbsp;calling.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Cta size="lg">Book a Free Pipeline Audit</Cta>
              <Cta variant="secondary" size="lg" href="#how-it-works">
                See How It Works
              </Cta>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The problem"
            title="Your sales team is stuck chasing the wrong opportunities."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Outdated databases",
                text: "Half the contacts are wrong, projects have moved on, and your callers are dialling into dead air.",
              },
              {
                title: "Day-rate billing with no guarantees",
                text: "You're paying £300–£600/day for someone to make calls — with no guarantee those calls turn into meetings.",
              },
              {
                title: "Missing projects at the right stage",
                text: "By the time you find out about a tender, the specification is already locked and the PSL is closed.",
              },
              {
                title: "Sales team prospecting instead of closing",
                text: "Your best people are buried in research and cold outreach when they should be in front of buyers.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS (matching Process.tsx) ===== */}
      <section
        id="how-it-works"
        className="scroll-mt-20 bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="How we fill your pipeline — without day-rate billing."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-brand text-sm font-bold text-white">
                    {step.number}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE (matching Comparison.tsx) ===== */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why us"
            title="Not another telemarketing agency."
          />

          <Reveal className="mt-14">
            <div className="overflow-x-auto rounded-2xl ring-1 ring-slate-200">
              <table className="w-full min-w-[540px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="bg-slate-50 px-5 py-4 font-semibold text-slate-500">
                      &nbsp;
                    </th>
                    <th className="bg-slate-50 px-5 py-4 font-semibold text-slate-500">
                      Traditional agency
                    </th>
                    <th className="bg-brand-tint px-5 py-4 font-semibold text-brand-dark">
                      {site.name}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={
                        i % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                      }
                    >
                      <td className="px-5 py-4 font-medium text-slate-900">
                        {row.feature}
                      </td>
                      <td className="px-5 py-4 text-slate-500">
                        <span className="mr-2 inline-block align-middle">
                          <CrossIcon />
                        </span>
                        {row.traditional}
                      </td>
                      <td className="bg-brand-tint/40 px-5 py-4 text-slate-900">
                        <span className="mr-2 inline-block align-middle">
                          <TickIcon />
                        </span>
                        {row.ours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== SECTORS ===== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who we work with"
            title="Built for companies selling into construction."
            intro="We work with product manufacturers, specialist subcontractors, consultancies, and service providers across the built environment. If your buyers are architects, contractors, developers, or facilities managers — we know how to reach them."
          />

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((sector, i) => (
              <Reveal key={sector} delay={i * 60}>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm ring-1 ring-slate-900/5">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand" />
                  <span className="text-sm font-medium text-slate-900">
                    {sector}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DELIVERABLES (matching Services card pattern) ===== */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What you get"
            title="The meetings that move your pipeline forward."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {DELIVERABLES.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {d.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {d.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOCIAL PROOF / RESULTS (matching Results.tsx dark section) ===== */}
      <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brand/20 blur-3xl"
        />
        <div aria-hidden="true" className="grain-overlay opacity-[0.06]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-light">
              Results
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Results from the built&nbsp;environment.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              We&rsquo;re currently onboarding our first construction clients.
              Case studies and metrics will appear here&nbsp;shortly.
            </p>
          </Reveal>

          {/* Placeholder stats — replace with real data after first campaign */}
          <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 sm:grid-cols-3">
            {[
              { stat: "—", label: "Qualified meetings booked" },
              { stat: "—", label: "Average show rate" },
              { stat: "—", label: "Cost per meeting" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-slate-900 px-6 py-10 text-center"
              >
                <dt className="text-4xl font-bold tracking-tight text-brand-light sm:text-5xl">
                  {s.stat}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-slate-300">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 text-center">
            <Cta size="lg">Book a Free Pipeline Audit</Cta>
          </div>
        </div>
      </section>

      {/* ===== FAQ (matching Faq.tsx) ===== */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions construction sales leaders ask us."
          />

          <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
            {FAQS.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left font-semibold text-slate-900">
                  <span>{faq.question}</span>
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-brand ring-1 ring-slate-200 transition-transform group-open:rotate-45">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA (matching FinalCta.tsx) ===== */}
      <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-24">
        {/* Decorative brand blob */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl"
        />
        <div aria-hidden="true" className="grain-overlay opacity-[0.06]" />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <FounderAvatar
              className="mx-auto mb-8 h-16 w-16"
              shape="circle"
            />

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Stop paying for&nbsp;calls.
              <br />
              Start paying for&nbsp;meetings.
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-slate-300">
              Your competitors are already in front of the buyers you want.
              Let&rsquo;s make sure you&rsquo;re in the room&nbsp;too.
            </p>

            <ul className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left text-sm text-slate-300">
              {[
                "30-minute discovery call",
                "No commitment or obligation",
                "We'll show you the exact projects and contacts we'd target",
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-brand-light"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Cta size="lg">Book Your Free Pipeline Audit</Cta>
              <Cta variant="ghost" size="lg" href={`mailto:${site.salesEmail}`}>
                Email us instead
              </Cta>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== STRUCTURED DATA ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Construction Lead Generation",
            provider: {
              "@type": "Organization",
              name: site.name,
              url: site.url,
            },
            description:
              "AI-powered B2B lead generation and appointment setting for companies selling into the UK construction and built environment sectors.",
            areaServed: { "@type": "Country", name: "United Kingdom" },
            serviceType: "B2B Lead Generation",
          }),
        }}
      />
    </>
  );
}
