import { SectionHeading } from "@/app/components/SectionHeading";

/* Addresses the objections B2B buyers raise before outsourcing prospecting.
   Native <details> = accessible and works with zero JavaScript. */
const faqs = [
  {
    question: "How is this different from hiring an in-house SDR?",
    answer:
      "No recruiting, ramp time, or management overhead. You get a trained team and a proven process from week one — and you can scale activity up or down without hiring or firing.",
  },
  {
    question: "How do you make sure the leads are actually qualified?",
    answer:
      "We agree on your ideal customer profile and qualification criteria up front. Only meetings that meet that bar get booked, and we report on quality every week so the definition stays sharp.",
  },
  {
    question: "How long until we see booked meetings?",
    answer:
      "Most clients see their first qualified meetings within the first two to three weeks, once lists are built and messaging is approved. Volume builds steadily from there — see the campaign timeline for the full picture.",
  },
  {
    question: "Do we keep control of the messaging?",
    answer:
      "Yes. You approve the scripts, sequences, and positioning before anything goes out. We represent your brand the way you want it represented.",
  },
  {
    question: "Where does your data come from, and is it GDPR-compliant?",
    answer:
      "We source from licensed B2B data providers and verify every record before outreach. All processing is in line with UK GDPR — we use legitimate interest for B2B contact, document lawful basis, and honour opt-outs immediately. Full detail in our privacy policy.",
  },
  {
    question: "Who actually does the outreach — your team, or offshore?",
    answer:
      "Our cold-calling and account-management team is UK-based. Where we use specialist sub-teams (e.g. for high-volume list building or LinkedIn admin), they sit under our day-to-day management and follow your approved messaging.",
  },
  {
    question: "What if a booked meeting no-shows?",
    answer:
      "We re-engage no-shows and reschedule wherever possible. We report show-rate weekly, and if a campaign trends below benchmark we adjust qualification criteria — at our cost, not yours.",
  },
  {
    question: "What KPIs do you report on?",
    answer:
      "Weekly: activity (calls, connects, replies), booked meetings, show rate, and pipeline created. Monthly: cost per meeting, cost per opportunity, and a written commentary on what's working and what we're changing.",
  },
  {
    question: "Can we pause or cancel the campaign?",
    answer:
      "Yes. All engagements are month-to-month — pause whenever you need to (holiday cover, headcount changes, market shifts) and pick back up without re-onboarding fees.",
  },
  {
    question: "What does it cost?",
    answer:
      "Outbound starts at £2,500/month; Full Pipeline at £3,500/month — both month-to-month. See the pricing section above for what's included, or book a call and we'll scope something custom.",
  },
];

/* FAQ structured data — makes these answers eligible for rich results
   in search and more citable by AI answer engines. Mirrors the visible
   Q&A below exactly (Google requires the markup to match the page). */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-slate-50 py-20 sm:py-24">
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Questions"
          title="What B2B teams ask before they start"
        />

        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-brand ring-1 ring-slate-200 transition-transform group-open:rotate-45"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
