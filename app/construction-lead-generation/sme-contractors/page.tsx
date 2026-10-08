import type { Metadata } from "next";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Cta } from "@/app/components/Cta";
import { Reveal } from "@/app/components/Reveal";
import { FounderAvatar } from "@/app/components/FounderAvatar";
import { site } from "@/app/lib/site";

/* ─── SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title:
    "Lead Generation for SME Contractors & Builders UK",
  description:
    "Win more local construction projects without competing on price against 10 other builders. We find homeowners, developers, and architects with live projects and book qualified meetings for your team.",
  openGraph: {
    title:
      "Lead Generation for SME Contractors & Builders UK",
    description:
      "Win more local construction projects without competing on price. We book qualified meetings with homeowners and developers who have live projects in your area.",
    url: `${site.url}/construction-lead-generation/sme-contractors`,
    siteName: site.name,
    type: "website",
  },
  alternates: {
    canonical: "/construction-lead-generation/sme-contractors",
  },
};

/* ─── Data ────────────────────────────────────────────────────── */

const PAIN_POINTS = [
  {
    title: "Racing to the bottom on price",
    text: "You're one of ten builders quoting the same job from a lead site. The only way to win is to be cheapest — and that kills your margins.",
  },
  {
    title: "Relying on word of mouth",
    text: "Referrals keep you busy some months, then nothing. You can't forecast revenue when your pipeline depends on who talks to who.",
  },
  {
    title: "Wasting time on tyre-kickers",
    text: "You drive an hour to quote a job and never hear back. Half the leads you chase aren't ready, aren't funded, or aren't serious.",
  },
  {
    title: "No time to do your own marketing",
    text: "You know you should be doing more outreach, but you're on-site all day. Marketing falls to evenings and weekends — or doesn't happen at all.",
  },
];

const STEPS = [
  {
    number: 1,
    title: "We find live projects in your area",
    description:
      "Using planning application data and local market intelligence, we identify homeowners, developers, and architects with approved or in-progress projects that match the type of work you do — extensions, new builds, refurbs, loft conversions.",
  },
  {
    number: 2,
    title: "We reach out on your behalf",
    description:
      "Personalised outreach across email, LinkedIn, and phone — written in your voice, referencing the specific project. No generic spam. Every message looks like it came from your team.",
  },
  {
    number: 3,
    title: "We qualify the opportunity",
    description:
      "Before a meeting hits your diary, we confirm the project scope, budget range, and timeline. If it doesn't match your criteria, it doesn't get through.",
  },
  {
    number: 4,
    title: "You show up and quote",
    description:
      "A qualified meeting with a homeowner or developer who has planning approval, a realistic budget, and wants to talk to a builder this week. You quote the job. We find the next one.",
  },
];

const SECTORS = [
  "Extensions & renovations",
  "Loft conversions",
  "New-build residential",
  "Design & build",
  "Refurbishment & fit-out",
  "Garage conversions",
  "Listed buildings & heritage",
  "Multi-unit residential",
  "Commercial fit-out",
  "Landscaping & groundworks",
];

const COMPARISON = [
  {
    feature: "Lead source",
    old: "Lead-gen websites, Checkatrade",
    ours: "Live planning application data",
  },
  {
    feature: "Competition",
    old: "5–10 builders quoting the same job",
    ours: "You're often the only one in the room",
  },
  {
    feature: "Qualification",
    old: "Name and phone number only",
    ours: "Scope, budget, timeline confirmed",
  },
  {
    feature: "Your effort",
    old: "You chase, you follow up, you quote blind",
    ours: "Meeting booked in your diary — just show up",
  },
  {
    feature: "Exclusivity",
    old: "Same lead sold to multiple builders",
    ours: "Exclusive — your meeting, your opportunity",
  },
  {
    feature: "Pricing model",
    old: "Pay per lead (qualified or not)",
    ours: "Pay per qualified meeting",
  },
];

const FAQS = [
  {
    question: "I've been burned by lead-gen sites before. How is this different?",
    answer:
      "Lead-gen sites sell the same lead to multiple builders and charge whether or not the lead is any good. We don't sell leads — we book exclusive, qualified meetings. You're the only contractor talking to that homeowner or developer. And we confirm scope, budget, and timeline before the meeting reaches your diary.",
  },
  {
    question: "I only work in a specific area. Can you target that?",
    answer:
      "Yes — we prospect by postcode, local authority, or radius from your base. If you only do work within 20 miles of your yard, that's where we look. We use planning data, so we know exactly where approved projects are.",
  },
  {
    question: "I don't have a sales team — it's just me and my guys on site.",
    answer:
      "That's exactly why this works. We handle the entire outreach and booking process. All you need to do is show up to the meeting, quote the job, and get back on-site. We'll manage the follow-up too, if you want us to.",
  },
  {
    question: "What kind of projects will you find me?",
    answer:
      "Whatever you tell us to look for. Extensions, loft conversions, new builds, refurbs, design & build — we filter by project type, size, and stage. If you only want residential projects over £100k with planning approved, that's what we target.",
  },
  {
    question: "How many meetings can I expect per month?",
    answer:
      "It depends on your area, the project types you want, and how far you're willing to travel. Most SME contractors we work with aim for 6–12 qualified meetings per month. We'll give you a realistic volume estimate on the pipeline audit call.",
  },
  {
    question: "What does it cost?",
    answer:
      "We charge per qualified meeting — not per lead, not per day. You pay for meetings with project owners who match your criteria and actually show up. Book a pipeline audit and we'll give you a transparent quote based on your target area and project types.",
  },
];

/* ─── Tick / Cross icons ──────────────────────────────────────── */

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

export default function SmeContractors() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
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
            <p className="inline-flex items-center rounded-full bg-brand-tint px-3.5 py-1.5 text-sm font-semibold text-brand-dark ring-1 ring-inset ring-brand/20">
              SME Contractors &amp; Builders
            </p>

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Win more local projects — without&nbsp;competing on&nbsp;price.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              We find homeowners and developers with approved planning
              applications in your area, qualify the opportunity, and book you
              the meeting. You&rsquo;re not one of ten builders quoting the
              same&nbsp;job.
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

      {/* ===== PAIN POINTS ===== */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The problem"
            title="Lead sites sell you competition. We sell you exclusivity."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PAIN_POINTS.map((item, i) => (
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

      {/* ===== HOW IT WORKS ===== */}
      <section
        id="how-it-works"
        className="scroll-mt-20 bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="From planning approval to your diary — in days, not months."
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

      {/* ===== COMPARISON TABLE ===== */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why us"
            title="Not another lead site. A done-for-you sales team."
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
                      Lead-gen sites
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
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}
                    >
                      <td className="px-5 py-4 font-medium text-slate-900">
                        {row.feature}
                      </td>
                      <td className="px-5 py-4 text-slate-500">
                        <span className="mr-2 inline-block align-middle">
                          <CrossIcon />
                        </span>
                        {row.old}
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

      {/* ===== PROJECT TYPES ===== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Project types"
            title="Tell us what you build. We'll fill your diary."
            intro="We target projects by type, size, and location so every meeting matches the work you actually want to win."
          />

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((sector, i) => (
              <Reveal key={sector} delay={i * 40}>
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

      {/* ===== WHAT YOU GET ===== */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What you get"
            title="Qualified meetings — not a spreadsheet of phone numbers."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Exclusive project meetings",
                text: "Meetings with homeowners and developers who have live, funded projects in your area. You're the only builder they're meeting through us.",
              },
              {
                title: "Planning-data targeting",
                text: "We use approved planning applications to find projects at the right stage — not cold leads from a directory, but people who need a builder now.",
              },
              {
                title: "Multi-channel outreach",
                text: "Email, LinkedIn, and phone — coordinated campaigns in your voice so prospects think they're hearing from your office, not an agency.",
              },
              {
                title: "Full qualification",
                text: "Scope, budget range, and timeline confirmed before the meeting lands in your diary. No more driving an hour to quote a job that doesn't exist.",
              },
              {
                title: "CRM & reporting",
                text: "Every prospect, conversation, and meeting tracked in a shared dashboard. You see exactly what's in your pipeline at any time.",
              },
              {
                title: "Follow-up management",
                text: "Quotes sent but no response? We follow up for you — chasing the decisions so you can stay on-site building.",
              },
            ].map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {d.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {d.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESULTS (dark section) ===== */}
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
              More projects. Less chasing.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              We&rsquo;re onboarding our first contractor clients now. Real
              metrics will replace these placeholders&nbsp;shortly.
            </p>
          </Reveal>

          <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 sm:grid-cols-3">
            {[
              { stat: "—", label: "Qualified meetings per month" },
              { stat: "—", label: "Average meeting show rate" },
              { stat: "—", label: "Cost per qualified meeting" },
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
            <Cta size="lg">See what we can book for you</Cta>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions builders ask us."
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

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-24">
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
              Stop chasing leads.
              <br />
              Start quoting jobs.
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-slate-300">
              We&rsquo;ll show you the live projects in your area, tell you
              exactly how many meetings we can book, and give you a
              transparent&nbsp;price.
            </p>

            <ul className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left text-sm text-slate-300">
              {[
                "30-minute discovery call",
                "We'll show you approved projects in your postcode area",
                "No commitment — see the pipeline before you decide",
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
              <Cta
                variant="ghost"
                size="lg"
                href={`mailto:${site.salesEmail}`}
              >
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
            name: "Construction Lead Generation for SME Contractors",
            provider: {
              "@type": "Organization",
              name: site.name,
              url: site.url,
            },
            description:
              "Done-for-you lead generation and appointment setting for SME contractors and builders. We use planning data to find live projects in your area and book qualified meetings with homeowners and developers.",
            areaServed: { "@type": "Country", name: "United Kingdom" },
            serviceType: "B2B Lead Generation",
          }),
        }}
      />
    </>
  );
}
