import { Cta } from "@/app/components/Cta";
import { VideoPlayer } from "@/app/components/VideoPlayer";
import { video } from "@/app/lib/video";

/** Above-the-fold hero. Leads with the outcome; primary CTA is the booked call. */
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
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-tint px-3.5 py-1.5 text-sm font-semibold text-brand-dark ring-1 ring-inset ring-brand/20">
            B2B Lead Generation Agency
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            A predictable pipeline of{" "}
            <span className="text-brand">booked sales meetings</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            SIMS PROSPECTS runs cold calling, LinkedIn outreach, and
            appointment setting for B2B teams — so your reps spend their time
            closing deals, not chasing prospects.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Cta size="lg">Book a discovery call</Cta>
            <Cta href="#audit" variant="secondary" size="lg">
              Get a free pipeline audit
            </Cta>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            No long contracts. Qualified meetings, booked straight onto your
            calendar.
          </p>
        </div>

        {/* Founder / explainer video. Off until enabled in app/lib/video.ts. */}
        {video.hero.enabled && (
          <figure className="mx-auto mt-14 max-w-3xl">
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
