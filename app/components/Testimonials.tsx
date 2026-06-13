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
 * ⚠️ CONFIRM — placeholder testimonials. Replace with real, attributable
 * quotes (name, role, company) once you have client permission.
 */
const testimonials: Testimonial[] = [
  {
    quote:
      "Within the first month our reps had a full week of qualified calls. We stopped guessing where next quarter's pipeline would come from.",
    name: "Placeholder Name",
    role: "Head of Sales, B2B SaaS company",
  },
  {
    quote:
      "The meetings are genuinely qualified — they match our ICP and the prospects show up ready to talk. That was never true with our old list.",
    name: "Placeholder Name",
    role: "Founder, Recruitment agency",
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

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
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
