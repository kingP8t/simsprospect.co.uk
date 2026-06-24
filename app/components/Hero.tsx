import { Cta } from "@/app/components/Cta";
import { LeadForm } from "@/app/components/LeadForm";
import { VideoPlayer } from "@/app/components/VideoPlayer";
import { video } from "@/app/lib/video";

/** Above-the-fold hero. Form-first (lead capture), outcome-led headline. */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Optional muted, looping background B-roll. Off until enabled in
          app/lib/video.ts. A light overlay keeps the text legible. */}
      {video.heroBackground.enabled && (
        <>
          <video
            aria-hidden="true"
            src={video.heroBackground.src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-slate-50/85"
          />
        </>
      )}

      {/* Soft orange glow — decorative only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: message */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-tint px-3.5 py-1.5 text-sm font-semibold text-brand-dark ring-1 ring-inset ring-brand/20">
              B2B Lead Generation Agency
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              There&apos;s a better way to{" "}
              <span className="text-brand">build your pipeline</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              We run the cold calling, LinkedIn outreach, and appointment
              setting that keeps your sales team&apos;s calendar full of
              qualified meetings. Your reps get to spend their day selling.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Cta size="lg">Book a discovery call</Cta>
              <a
                href="#services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-brand"
              >
                See how it works
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              No long contracts. Qualified meetings, booked straight onto your
              calendar.
            </p>
          </div>

          {/* Right: lead-capture form */}
          <div className="lg:pl-8">
            <LeadForm />
          </div>
        </div>

        {/* Founder / explainer video. Off until enabled in app/lib/video.ts. */}
        {video.hero.enabled && (
          <figure className="mx-auto mt-16 max-w-3xl">
            <VideoPlayer
              src={video.hero.src}
              poster={video.hero.poster}
              title={video.hero.title}
              className="shadow-xl"
            />
            {video.hero.caption && (
              <figcaption className="mt-3 text-center text-sm text-slate-500">
                {video.hero.caption}
              </figcaption>
            )}
          </figure>
        )}

        {/* Trust strip */}
        <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl bg-slate-200 ring-1 ring-slate-200 sm:grid-cols-3">
          {[
            { stat: "SaaS · Recruitment · Pro services", label: "Industries we know" },
            { stat: "Multi-channel", label: "Calls, LinkedIn & email" },
            { stat: "Qualified only", label: "Meetings vetted to your ICP" },
          ].map((item) => (
            <div key={item.label} className="bg-white px-6 py-5 text-center">
              <dt className="text-base font-semibold text-slate-900">
                {item.stat}
              </dt>
              <dd className="mt-1 text-sm text-slate-500">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
