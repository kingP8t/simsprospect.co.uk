import type { Metadata } from "next";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Cta } from "@/app/components/Cta";
import { Reveal } from "@/app/components/Reveal";
import { FounderAvatar } from "@/app/components/FounderAvatar";
import { site } from "@/app/lib/site";

/* ─── SEO ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title:
    "Lead Generation for Building Product Suppliers & Manufacturers UK",
  description:
    "Get specified on live construction projects before the contractor locks in a supplier. AI-powered prospecting that books CPD and specification meetings with architects, specifiers, and contractors.",
  openGraph: {
    title:
      "Lead Generation for Building Product Suppliers & Manufacturers UK",
    description:
      "Get specified on live construction projects. AI-powered prospecting that books CPD and specification meetings with architects, specifiers, and contractors.",
    url: `${site.url}/construction-lead-generation/suppliers-and-manufacturers`,
    siteName: site.name,
    type: "website",
  },
  alternates: {
    canonical: "/construction-lead-generation/suppliers-and-manufacturers",
  },
};

/* ─── Data ────────────────────────────────────────────────────── */

const PAIN_POINTS = [
  {
    title: "Relying on referrals for new business",
    text: "Referrals are great until they dry up. You have no control over volume, timing, or the types of projects that come through.",
  },
  {
    title: "Hearing about projects too late",
    text: "By the time you find a project, the specification is already written and the preferred supplier list is closed.",
  },
  {
    title: "Trade shows that burn budget",
    text: "You spend £10k+ on a stand, talk to hundreds of people, and walk away with a handful of business cards that go cold within a week.",
  },
  {
    title: "Your BDMs are prospecting, not selling",
    text: "Your best salespeople are buried in research and cold outreach when they should be in specification meetings and closing deals.",
  },
];

const STEPS = [
  {
    number: 1,
    title: "Live project detection",
    description:
      "We monitor planning applications, tender notices, and project data feeds across the UK to find projects where your product can still be specified — at the right stage, in the right region.",
  },
  {
    number: 2,
    title: "Decision-maker mapping",
    description:
      "We identify the architects, specifiers, main contractors, and project managers involved in each opportunity — with verified contact details, not guesswork from a purchased list.",
  },
  {
    number: 3,
    title: "Multi-channel outreach",
    description:
      "Coordinated campaigns across email, LinkedIn, and phone — personalised to the project, the decision-maker's role, and the stage the project has reached.",
  },
  {
    number: 4,
    title: "Specification & CPD meetings booked",
    description:
      "We book meetings that meet your criteria. CPD presentations with architects, specification discussions with contractors, PSL introductions with procurement — you show up and sell.",
  },
];

const SECTORS = [
  "Windows, doors & glazing",
  "Insulation & cladding systems",
  "Roofing & waterproofing",
  "Kitchen & bathroom manufacturers",
  "Solar, heat pumps & renewables",
  "MEP products & systems",
  "Structural & steel systems",
  "Flooring & interior finishes",
  "Bespoke joinery & manufacturing",
  "Safety & access equipment",
  "Landscaping & external works",
  "Construction technology & SaaS",
];

const DELIVERABLES = [
  {
    title: "CPD & specification meetings",
    description:
      "Get your product in front of architects and specifiers through targeted CPD outreach. We handle scheduling, confirmation, and follow-up so your technical team just presents.",
  },
  {
    title: "Qualified sales meetings",
    description:
      "Face-to-face or online meetings with contractors, developers, and procurement teams who are working on projects that match your product range.",
  },
  {
    title: "Tender & pricing opportunities",
    description:
      "We identify live tenders in your sectors and regions and connect you to the buying team before the field closes — so you're quoting, not chasing.",
  },
  {
    title: "PSL introductions",
    description:
      "We get your Pre-Qualification Questionnaire in front of the right procurement teams and start the preferred supplier list application — the meeting that opens the door to repeat business.",
  },
];

const COMPARISON = [
  {
    feature: "Lead source",
    old: "Purchased lists, trade directories",
    ours: "Live planning & project data",
  },
  {
    feature: "Timing",
    old: "After specification is locked",
    ours: "At specification stage",
  },
  {
    feature: "Channels",
    old: "Phone or trade shows only",
    ours: "Email + LinkedIn + Phone",
  },
  {
    feature: "Targeting",
    old: "Job title only",
    ours: "Decision-makers on active projects",
  },
  {
    feature: "Meeting type",
    old: "Generic sales call",
    ours: "CPD, specification, or procurement meeting",
  },
  {
    feature: "Pricing",
    old: "Day rate or retainer",
    ours: "Pay per qualified meeting",
  },
];

const FAQS = [
  {
    question: "We've tried telemarketing before — leads were poor quality.",
    answer:
      "Traditional agencies dial from a list and hope someone picks up. We start from live planning data and verified decision-maker contacts, so every conversation is relevant to a real project happening now. You define what 'qualified' means — we don't book meetings that don't meet your criteria.",
  },
  {
    question: "Can you book CPD presentations with architectural practices?",
    answer:
      "Yes — that's one of our core deliverables. We identify architects working on projects where your product is relevant, reach out with a tailored CPD offer, and book the presentation slot. You bring the content, we fill the room.",
  },
  {
    question: "We already have Barbour ABI / Glenigan data. How is this different?",
    answer:
      "Those platforms give you the data. We give you the meetings. We can layer outreach on top of your existing project intelligence, or source our own. Either way, we handle the multi-channel outreach so your data actually converts into specification opportunities.",
  },
  {
    question: "Construction is a small world — we need to protect our brand.",
    answer:
      "Every message is approved by you before it goes out. We act as an extension of your sales team, not a call centre. Your prospects will think they're hearing from your BDM — because effectively they are.",
  },
  {
    question: "What does it cost?",
    answer:
      "We price per qualified meeting, not per day or per hour. That means you pay for specification meetings that actually happen, not activity that might lead somewhere. Book a pipeline audit and we'll give you a transparent quote based on your product range, target regions, and volume.",
  },
  {
    question: "How quickly do we see results?",
    answer:
      "Most campaigns generate the first booked meetings within 2–3 weeks. We spend the first week building your prospect list from live project data and setting up the outreach sequences. By week two, conversations are happening.",
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

export default function SuppliersAndManufacturers() {
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
              Suppliers &amp; Manufacturers
            </p>

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Get specified on live projects — before the contractor locks in a
              supplier.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              We use live planning data to find construction projects where your
              product can still be specified, identify the architects and
              contractors making the decisions, and book you the CPD and
              specification meetings that win the&nbsp;work.
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
            title="Your products are right for the project — but you're not in the room."
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
            title="From planning application to specification meeting — in weeks, not months."
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
            title="Not another trade directory or call centre."
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
                      Traditional approach
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

      {/* ===== SECTORS ===== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who we work with"
            title="If you manufacture or supply it, we can get it specified."
            intro="We work with product manufacturers, specialist suppliers, and installers across the built environment — from windows and cladding to renewables and MEP systems."
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

      {/* ===== DELIVERABLES ===== */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What you get"
            title="Specification meetings, not cold leads."
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
              Pipeline you can forecast.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              We&rsquo;re onboarding our first supplier clients now. Real
              metrics will replace these placeholders&nbsp;shortly.
            </p>
          </Reveal>

          <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 sm:grid-cols-3">
            {[
              { stat: "—", label: "Specification meetings booked" },
              { stat: "—", label: "Average meeting show rate" },
              { stat: "—", label: "Projects identified per month" },
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
            title="Questions product suppliers ask us."
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
              Stop waiting for referrals.
              <br />
              Start winning specifications.
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-slate-300">
              Your competitors are already in front of the architects and
              contractors you want. Let&rsquo;s get you in the
              room&nbsp;too.
            </p>

            <ul className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left text-sm text-slate-300">
              {[
                "30-minute discovery call",
                "We'll show you live projects matching your product range",
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
            name: "Construction Lead Generation for Suppliers & Manufacturers",
            provider: {
              "@type": "Organization",
              name: site.name,
              url: site.url,
            },
            description:
              "AI-powered lead generation and appointment setting for building product suppliers and manufacturers selling into the UK construction sector. CPD meetings, specification meetings, and tender opportunities.",
            areaServed: { "@type": "Country", name: "United Kingdom" },
            serviceType: "B2B Lead Generation",
          }),
        }}
      />
    </>
  );
}
