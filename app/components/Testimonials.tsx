import { SectionHeading } from "@/app/components/SectionHeading";
import { VideoPlayer } from "@/app/components/VideoPlayer";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  /**
   * Optional video testimonial. Drop the file in /public/videos/ and set
   * `video: { src, poster }`. ⚠️ Use ONLY genuine client recordings — never
   * AI-generated or actor footage presented as a real customer. Misleading
   * testimonials can breach UK ASA/CAP rules and destroy trust.
   */
  video?: { src: string; poster?: string };
};

/**
 * Real client testimonials. These are verbatim excerpts from the quotes in
 * `case-studies.ts` — the case study cards on the homepage show the stats,
 * this section surfaces the clients' own words.
 *
 * ⚠️ Only add quotes you have permission to publish, attributed to a real
 * person. Never invent or embellish — misleading testimonials breach UK
 * ASA/CAP rules.
 */
const testimonials: Testimonial[] = [
  {
    quote:
      "They became an extension of our team. 186 qualified appointments delivered. The ROI was undeniable — and we didn't have to hire a single salesperson.",
    name: "Mikhail Antonchanka",
    role: "Home Lead Gen",
  },
  {
    quote:
      "SIMS PROSPECTS took over the outbound process, and the demos came in steadily — the lead quality was exceptionally strong. Outbound became stable and reliable, something we couldn't achieve on our own before.",
    name: "Fatima Ahmed",
    role: "Product Lead Manager, Fast Digital Marketing",
  },
  {
    quote:
      "In three months, SIMS PROSPECTS delivered 15 qualified appointments and met all our KPIs. They learned our product, refined our ICP, and built outreach that worked.",
    name: "Mr Burn",
    role: "Director, e-commerce development agency",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="In their words"
          title="What clients say"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.role}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-8"
            >
              {item.video && (
                <VideoPlayer
                  src={item.video.src}
                  poster={item.video.poster}
                  title={`Testimonial from ${item.name}`}
                  className="mb-6"
                />
              )}
              <span aria-hidden="true" className="text-5xl leading-none text-brand">
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 text-lg leading-relaxed text-slate-800">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-200 pt-4">
                <span className="block font-semibold text-slate-900">
                  {item.name}
                </span>
                <span className="block text-sm text-slate-500">
                  {item.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
