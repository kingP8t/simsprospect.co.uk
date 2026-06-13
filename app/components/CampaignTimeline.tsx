import { SectionHeading } from "@/app/components/SectionHeading";
import { Cta } from "@/app/components/Cta";

/**
 * "Your campaign, week by week" — sets expectations on what happens
 * and WHEN, which is the #1 objection B2B buyers raise before signing.
 */
const milestones = [
  {
    when: "Day 1",
    title: "Kickoff & ICP workshop",
    description:
      "A 60-minute call to map your ideal customer, sharpen the offer, and agree what counts as a qualified meeting. You approve the messaging before anything goes out.",
  },
  {
    when: "Week 1",
    title: "Campaign goes live",
    description:
      "We build and verify your target list, set up email infrastructure and LinkedIn assets, and start the first wave of outreach. You see daily activity in your dashboard.",
  },
  {
    when: "Week 2",
    title: "First conversations land",
    description:
      "Replies start coming back. Qualified meetings begin appearing on your reps' calendars — usually 5–10 in the first month.",
  },
  {
    when: "Month 1",
    title: "First performance review",
    description:
      "We sit down with you to review results, sharpen messaging on what's converting, and double down on the channels and segments performing best.",
  },
  {
    when: "Month 3+",
    title: "Predictable monthly pipeline",
    description:
      "Volume stabilises into a forecastable monthly run-rate. You can plan headcount, quotas, and revenue around the pipeline we deliver.",
  },
];

export function CampaignTimeline() {
  return (
    <section
      id="timeline"
      className="scroll-mt-20 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What to expect"
          title="Your campaign, week by week"
          intro="A clear timeline from kickoff to predictable pipeline — so you know exactly what you're getting, and when."
        />

        <ol className="mx-auto mt-14 max-w-3xl">
          {milestones.map((milestone, index) => (
            <li key={milestone.when} className="relative pl-20 sm:pl-28">
              {/* Time badge */}
              <span className="absolute left-0 top-0 inline-flex w-16 justify-center rounded-full bg-brand-tint px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-dark sm:w-24">
                {milestone.when}
              </span>

              {/* Vertical connector — drawn between items only */}
              {index < milestones.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-8 top-8 h-full w-px bg-slate-200 sm:left-12"
                />
              )}

              <div className="pb-10">
                <h3 className="text-lg font-semibold text-slate-900">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {milestone.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6 text-center">
          <Cta size="lg">Book your kickoff call</Cta>
        </div>
      </div>
    </section>
  );
}
