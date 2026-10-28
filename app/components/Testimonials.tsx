import { SectionHeading } from "@/app/components/SectionHeading";
import { Reveal } from "@/app/components/Reveal";
import { Avatar } from "@/app/components/Avatar";

type Testimonial = {
  /** Short result-led line shown above the quote. */
  headline: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  /**
   * Optional headshot. Drop a square image (min 160×160) at
   * /public/testimonials/{photo} and it replaces the initials tile
   * automatically. Use only photos the client has supplied or approved.
   */
  photo?: string;
};

/**
 * Client testimonials.
 *
 * ⚠️ Wording has been edited for length and clarity. Each client must
 * approve their final quote before this goes live — keep the written
 * approval on file. UK law (DMCC Act 2024) and ASA/CAP rules require
 * testimonials to be genuine, attributable and not to overstate what the
 * client said.
 */
const testimonials: Testimonial[] = [
  {
    headline: "Introductions that became live projects",
    quote:
      "Two years in, Sims Prospects is part of our planning and strategy. They've introduced us to opportunities that turned into live projects, they report clearly and often, and they genuinely want us to succeed. We couldn't recommend them more highly.",
    name: "Noel Chapman",
    role: "Managing Director",
    company: "Torsion Construction",
    photo: "noel-chapman.jpg",
  },
  {
    headline: "Nothing else comes close",
    quote:
      "First class at delivering on their promises, and a real asset to our team. They listen, learn and share back, which helps us grow and hit our targets. I've tried other lead generation firms. None of them come close.",
    name: "Rob Farrell",
    role: "Head of Sales & Business Development",
    company: "Corbyn Construction",
    photo: "rob-farrell.jpg",
  },
  {
    headline: "Our strongest pipeline yet",
    quote:
      "Our pipeline has never been stronger. Their targeted approach has won us opportunities and contracts we wouldn't have secured otherwise.",
    name: "Giles Green",
    role: "Secretary",
    company: "Core Special Projects",
    photo: "giles-green.jpg",
  },
  {
    headline: "Access to key decision-makers",
    quote:
      "Their method is smart, structured, and it works. They've put us in front of key decision-makers and helped us grow in ways we couldn't have managed alone.",
    name: "Jamie Ryan",
    role: "Managing Director",
    company: "Glenlee",
    photo: "jamie-ryan.jpg",
  },
  {
    headline: "Conversations into contracts",
    quote:
      "A brilliant team that knows how to turn conversations into contracts. Their approach to business development is refreshing, and it works.",
    name: "Andy Cartley",
    role: "Sales Director",
    company: "Avatar Construction",
    photo: "andy-cartley.jpg",
  },
  {
    headline: "Leads that match our market",
    quote:
      "They consistently deliver high-quality leads that match our target market. A pleasure to work with, and the results show.",
    name: "Jamie Curtis",
    role: "Head of Sales & Business Development",
    company: "Maypine Construction",
    photo: "jamie-curtis.jpg",
  },
  {
    headline: "More qualified leads within weeks",
    quote:
      "Within a few weeks we saw a big rise in qualified leads. The service is reliable and consistently delivers what our consultancy needs to move forward.",
    // ⚠️ CONFIRM surname before going live — a first name alone looks unverifiable.
    name: "Steve",
    role: "Sales Director",
    company: "Mackoy",
    photo: "steve-mackoy.jpg",
  },
  {
    headline: "Learned our product fast",
    quote:
      "First-class service and support. They identified our needs quickly, learned our product fast and delivered the leads. Excellent company.",
    name: "Jamie Halton",
    role: "Head of Sales & Business Development",
    company: "Sunflow",
    photo: "jamie-halton.jpg",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="In their words"
          title="What clients say"
          intro="Construction firms, consultancies and B2B teams on working with Sims Prospects."
        />

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} className="h-full" delay={(i % 3) * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm ring-1 ring-slate-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-base font-semibold text-brand-dark">
                  {item.headline}
                </p>
                <blockquote className="mt-3 flex-1 leading-relaxed text-slate-700">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
                  <Avatar
                    name={item.name}
                    role={`${item.role}, ${item.company}`}
                    photoSrc={`/testimonials/${item.photo ?? "none.jpg"}`}
                    shape="circle"
                    className="h-12 w-12 shrink-0"
                    initialsClassName="text-sm"
                  />
                  <span>
                    <span className="block font-semibold text-slate-900">
                      {item.name}
                    </span>
                    <span className="block text-sm text-slate-500">
                      {item.role}, {item.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
