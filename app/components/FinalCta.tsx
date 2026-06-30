import { Cta } from "@/app/components/Cta";
import { FounderAvatar } from "@/app/components/FounderAvatar";
import { Reveal } from "@/app/components/Reveal";
import { founder } from "@/app/lib/site";

/** Closing conversion section — personal, with the founder front-and-centre. */
export function FinalCta() {
  const benefits = [
    "30-minute call, no obligation",
    "We'll review your current pipeline and where the gaps are",
    "Walk away with a clear plan, even if we don't work together",
  ];

  return (
    <section
      id="audit"
      className="relative scroll-mt-20 overflow-hidden bg-slate-900 py-20 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brand/20 blur-3xl"
      />
      <div aria-hidden="true" className="grain-overlay opacity-[0.06]" />

      <Reveal className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <FounderAvatar
          shape="circle"
          className="mx-auto h-20 w-20 ring-2 ring-white/20"
          initialsClassName="text-xl"
        />

        <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Book your free strategy call with {founder.name}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-300">
          A focused 30-minute conversation, free and with no obligation.
          We&apos;ll look at your current pipeline, where the gaps are, and
          exactly how we&apos;d book more qualified meetings for your team.
        </p>

        <ul className="mx-auto mt-8 grid max-w-xl gap-3 text-left">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-3 text-sm text-slate-200"
            >
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
                className="mt-0.5 shrink-0 text-brand-light"
              >
                <path d="m5 13 4 4L19 7" />
              </svg>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Cta size="lg">Book your call</Cta>
          <Cta
            href="#pricing"
            variant="ghost"
            size="lg"
            className="text-slate-200 hover:text-white"
          >
            See pricing first
          </Cta>
        </div>
      </Reveal>
    </section>
  );
}
