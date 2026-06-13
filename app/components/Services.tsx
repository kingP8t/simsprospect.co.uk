import Link from "next/link";
import { SectionHeading } from "@/app/components/SectionHeading";

type Service = {
  title: string;
  /** Slug of the matching landing page at /services/{slug}. */
  slug: string;
  description: string;
  outcome: string;
  icon: React.ReactNode;
};

/* Minimal inline icons keep the page dependency-free and fast. */
const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const services: Service[] = [
  {
    title: "Cold calling",
    slug: "cold-calling",
    description:
      "Outbound calling campaigns into your target accounts, run by trained callers using messaging built around your offer.",
    outcome: "Conversations with decision-makers, not gatekeepers.",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M3 5a2 2 0 0 1 2-2h2.6a1 1 0 0 1 1 .76l1 4a1 1 0 0 1-.3 1l-1.8 1.8a14 14 0 0 0 6 6l1.8-1.8a1 1 0 0 1 1-.3l4 1a1 1 0 0 1 .76 1V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5Z" />
      </svg>
    ),
  },
  {
    title: "LinkedIn inbound marketing",
    slug: "linkedin-inbound-marketing",
    description:
      "Content and outreach that builds your authority and pulls qualified prospects toward a conversation with your team.",
    outcome: "Warmer prospects who already know who you are.",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M4 4h16v16H4z" />
        <path d="M8 11v6M8 8v.01M12 17v-3a2 2 0 0 1 4 0v3" />
      </svg>
    ),
  },
  {
    title: "B2B appointment setting",
    slug: "b2b-appointment-setting",
    description:
      "We qualify interest and book vetted meetings straight onto your sales team's calendar — confirmed and ready to run.",
    outcome: "A calendar of meetings that fit your ideal customer.",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
        <path d="M4 9h16M8 3v4M16 3v4M9.5 14l1.8 1.8 3.2-3.6" />
      </svg>
    ),
  },
  {
    title: "B2B lead generation",
    slug: "b2b-lead-generation",
    description:
      "Sourcing and qualifying leads that match your ideal customer profile, so your pipeline is built on fit, not volume.",
    outcome: "A steady supply of leads worth your reps' time.",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Outsource the prospecting, keep the closing"
          intro="Four services that work on their own or together — built to fill your pipeline with meetings your reps actually want to take."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={`/services/${service.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-tint text-brand">
                {service.icon}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
              <p className="mt-4 border-t border-slate-100 pt-4 text-sm font-medium text-slate-900">
                {service.outcome}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Learn more
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
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
