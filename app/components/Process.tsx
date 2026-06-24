import { SectionHeading } from "@/app/components/SectionHeading";
import { VideoPlayer } from "@/app/components/VideoPlayer";
import { video } from "@/app/lib/video";

const steps = [
  {
    title: "Define your ICP & offer",
    description:
      "We map your ideal customer, sharpen the messaging, and agree on what counts as a qualified meeting before any outreach starts.",
  },
  {
    title: "Build & verify target lists",
    description:
      "We source and verify contacts that match your profile, so your campaign reaches the right people with accurate data.",
  },
  {
    title: "Run multi-channel outreach",
    description:
      "Calls, LinkedIn, and email work together, with messaging you approve. You see activity and results every week.",
  },
  {
    title: "Hand off booked meetings",
    description:
      "Qualified, confirmed meetings land on your reps' calendars with the context they need to walk in ready to sell.",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="From kickoff to booked meetings"
          intro="A clear, repeatable process. You keep control of the messaging and full visibility into every step."
        />

        {/* Explainer video. Off until enabled in app/lib/video.ts. */}
        {video.explainer.enabled && (
          <figure className="mx-auto mt-12 max-w-3xl">
            <VideoPlayer
              src={video.explainer.src}
              poster={video.explainer.poster}
              title={video.explainer.title}
              className="shadow-xl"
            />
            {video.explainer.caption && (
              <figcaption className="mt-3 text-center text-sm text-slate-500">
                {video.explainer.caption}
              </figcaption>
            )}
          </figure>
        )}

        <ol className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-slate-200 bg-white p-6"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
