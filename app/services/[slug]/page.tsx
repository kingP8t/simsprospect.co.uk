import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Cta } from "@/app/components/Cta";
import { MidPageCta } from "@/app/components/MidPageCta";
import { VideoPlayer } from "@/app/components/VideoPlayer";
import { services, getService } from "@/app/lib/services";
import { getCaseStudy } from "@/app/lib/case-studies";
import { renderWithLinks } from "@/app/lib/rich-text";
import { site } from "@/app/lib/site";
import { video } from "@/app/lib/video";

type Props = { params: Promise<{ slug: string }> };

/** Pre-render every known service at build time. */
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.metaTitle} — ${site.name}`,
      description: service.metaDescription,
      type: "website",
      url: `${site.url}/services/${service.slug}`,
    },
  };
}

/* Small tick icon used in the problem and deliverable lists. */
function Tick() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-brand"
    >
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const caseStudy = service.caseStudy
    ? getCaseStudy(service.caseStudy)
    : undefined;

  /* Structured data — describes this specific service to search engines. */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.metaDescription,
    url: `${site.url}/services/${service.slug}`,
    provider: {
      "@type": "ProfessionalService",
      name: site.name,
      url: site.url,
    },
    areaServed: "Global",
  };

  /* FAQ structured data — makes the Q&A below eligible for rich
     results in search and more citable by AI answer engines.
     Mirrors exactly the questions rendered in the FAQ section. */
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  /* Breadcrumb trail — Home › Services › this service. Helps search
     engines understand site hierarchy and can show breadcrumbs in results. */
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${site.url}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${site.url}/services/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbJsonLd)}
      </script>

      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <Link
            href="/#services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            All services
          </Link>

          <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Text content */}
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                {service.hero.eyebrow}
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {service.hero.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                {service.hero.subtitle}
              </p>

              {/* Hero CTAs */}
              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <Cta size="lg">Book a discovery call</Cta>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-900"
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
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Hero proof stats */}
            <div className="lg:col-span-5">
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-200 ring-1 ring-slate-200">
                {service.hero.stats.map((stat) => (
                  <div key={stat.label} className="bg-white px-5 py-7">
                    <dt className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                      {stat.value}
                    </dt>
                    <dd className="mt-2 text-xs font-medium text-slate-500 sm:text-sm">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            Is this you?
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {service.problem.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            {service.problem.intro}
          </p>

          <ul className="mt-8 space-y-4">
            {service.problem.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-2xl bg-slate-50 p-5 text-sm leading-relaxed text-slate-700 ring-1 ring-slate-200"
              >
                <Tick />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Outcomes band */}
      <section className="bg-slate-900 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-light">
            What you get
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Outcomes we run the campaign for
          </h2>

          <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {service.outcomes.map((outcome) => (
              <div
                key={outcome.label}
                className="bg-slate-900 px-6 py-8 text-center"
              >
                <dt className="text-3xl font-bold tracking-tight text-brand-light sm:text-4xl">
                  {outcome.value}
                </dt>
                <dd className="mt-3">
                  <span className="block text-sm font-semibold text-white">
                    {outcome.label}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-slate-400">
                    {outcome.sublabel}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            What&apos;s included
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {service.deliverables.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-700">
            {service.deliverables.intro}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.items.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-tint text-brand">
                  <Tick />
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <MidPageCta
            title="Sound like what your team needs?"
            body="A free 30-minute call will tell you whether this is worth doing for your business. No obligation."
            ctaLabel="Book a discovery call"
          />
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="scroll-mt-20 bg-slate-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            How it works
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {service.process.title}
          </h2>

          {/* Explainer video. Off until enabled in app/lib/video.ts. */}
          {video.explainer.enabled && (
            <figure className="mt-8">
              <VideoPlayer
                src={video.explainer.src}
                poster={video.explainer.poster}
                title={video.explainer.title}
                className="shadow-xl"
              />
              {video.explainer.caption && (
                <figcaption className="mt-3 text-sm text-slate-500">
                  {video.explainer.caption}
                </figcaption>
              )}
            </figure>
          )}

          <ol className="mt-10 space-y-6">
            {service.process.steps.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-5 rounded-2xl bg-white p-6 ring-1 ring-slate-200"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-base font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            Why SIMS PROSPECTS
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {service.why.title}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {service.why.points.map((point) => (
              <article
                key={point.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {point.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            Questions
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {service.name}: common questions
          </h2>

          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            {service.faqs.map((faq) => (
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
                  {renderWithLinks(faq.answer, faq.links)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Proof — a real result delivered with this service */}
      {caseStudy && (
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">
              Proof
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              See it in action
            </h2>

            <Link
              href={`/case-studies/${caseStudy.slug}`}
              className="group mt-8 flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-7 transition-shadow hover:shadow-lg sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {caseStudy.industry}
                </p>
                <p className="mt-2 text-lg font-semibold leading-snug text-slate-900">
                  {caseStudy.headline}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  Read the {caseStudy.client} case study
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
              </div>
              <div className="shrink-0 rounded-2xl bg-brand-tint px-7 py-5 text-center">
                <span className="block text-4xl font-bold tracking-tight text-brand-dark">
                  {caseStudy.summary.primaryMetric.value}
                </span>
                <span className="mt-1 block text-sm font-medium text-slate-600">
                  {caseStudy.summary.primaryMetric.label}
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Related services */}
      {related.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">
              Works well with
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Pair it with the rest of the motion
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {item.cardDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Explore {item.name.toLowerCase()}
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
      )}

      {/* Final CTA */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Ready to put {service.name.toLowerCase()} to work?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            A focused 30-minute discovery call, free and with no obligation.
            We&apos;ll review your current pipeline, where the gaps are, and
            exactly how we&apos;d book more qualified meetings for your team.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Cta size="lg">Book a discovery call</Cta>
            <Cta href="/#cases" variant="secondary" size="lg">
              See our results
            </Cta>
          </div>
        </div>
      </section>
    </>
  );
}
