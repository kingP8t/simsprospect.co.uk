import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Cta } from "@/app/components/Cta";
import { CaseStudyVisual } from "@/app/components/CaseStudyVisual";
import { MidPageCta } from "@/app/components/MidPageCta";
import { caseStudies } from "@/app/lib/case-studies";

type Props = { params: Promise<{ slug: string }> };

/** Pre-render every known case study at build time. */
export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return { title: "Case study not found" };

  return {
    title: `${study.client} — Case Study`,
    description: study.headline,
    openGraph: {
      title: `${study.client} — Case Study`,
      description: study.headline,
      type: "article",
      ...(study.image && {
        images: [{ url: study.image.src, alt: study.image.alt }],
      }),
    },
  };
}

/* Small tick icon used in the solution bullet lists. */
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

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <Link
            href="/#cases"
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
            All case studies
          </Link>

          <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Text content */}
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-wide">
                <span className="rounded-full bg-brand-tint px-3 py-1 text-brand-dark ring-1 ring-inset ring-brand/20">
                  {study.industry}
                </span>
                <span className="text-slate-500">{study.date}</span>
              </div>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {study.headline}
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                {study.summary.body}
              </p>

              {/* Metric pair */}
              <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-200 ring-1 ring-slate-200">
                <div className="bg-white px-5 py-6">
                  <dt className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    {study.summary.primaryMetric.value}
                  </dt>
                  <dd className="mt-2 text-xs font-medium text-slate-500 sm:text-sm">
                    {study.summary.primaryMetric.label}
                  </dd>
                </div>
                <div className="bg-white px-5 py-6">
                  <dt className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    {study.summary.secondaryMetric.value}
                  </dt>
                  <dd className="mt-2 text-xs font-medium text-slate-500 sm:text-sm">
                    {study.summary.secondaryMetric.label}
                  </dd>
                </div>
              </dl>

              {/* Hero CTAs */}
              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <Cta size="lg">Book a discovery call</Cta>
                <a
                  href="#campaign-results"
                  className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-900"
                >
                  See the full results
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

            {/* Hero visual */}
            <div>
              <CaseStudyVisual study={study} />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            About the client
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            {study.about}
          </p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            The challenge
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            What they needed to solve
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {study.challenges.map((challenge) => (
              <article
                key={challenge.title}
                className="rounded-2xl bg-white p-7 ring-1 ring-slate-200"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {challenge.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {challenge.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA — captures visitors who already recognise themselves */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <MidPageCta
            title="Sound familiar?"
            body="If these are the challenges holding your pipeline back, let's spend 30 minutes mapping a path out, free and with no obligation."
            ctaLabel="Book a discovery call"
          />
        </div>
      </section>

      {/* Our Solution */}
      <section className="bg-white pb-16 pt-6 sm:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            Our solution
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            How we ran the campaign
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            {study.solution.intro}
          </p>

          <div className="mt-10 space-y-8">
            {study.solution.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {section.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {section.body}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm leading-relaxed text-slate-700"
                    >
                      <Tick />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Results */}
      <section
        id="campaign-results"
        className="scroll-mt-20 bg-slate-900 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-light">
            The results
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            What we delivered
          </h2>

          <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {study.results.map((result) => (
              <div
                key={result.label}
                className="bg-slate-900 px-6 py-8 text-center"
              >
                <dt className="text-4xl font-bold tracking-tight text-brand-light sm:text-5xl">
                  {result.value}
                </dt>
                <dd className="mt-3">
                  <span className="block text-sm font-semibold text-white">
                    {result.label}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-slate-400">
                    {result.sublabel}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Mid-page CTA — strike while the results are fresh */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <MidPageCta
            title="Want outcomes like this for your team?"
            body="Book a 30-minute call and we'll walk you through what we'd do for you specifically, based on your industry, ICP, and current pipeline."
            ctaLabel="Book your call"
          />
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <figure>
            <span
              aria-hidden="true"
              className="block text-6xl leading-none text-brand"
            >
              &ldquo;
            </span>
            <blockquote className="mt-2 text-xl font-medium leading-relaxed text-slate-800 sm:text-2xl">
              {study.testimonial.quote}
            </blockquote>
            <figcaption className="mt-6 border-t border-slate-200 pt-4">
              <span className="block font-semibold text-slate-900">
                {study.testimonial.author}
              </span>
              {study.testimonial.role && (
                <span className="block text-sm text-slate-500">
                  {study.testimonial.role}
                </span>
              )}
              <span className="mt-1 block text-xs text-slate-400">
                {study.client} · {study.date}
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Ready to see what we can book for you?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            A focused 30-minute discovery call, free and with no obligation.
            We&apos;ll review your current pipeline, where the gaps are, and
            exactly how we&apos;d book more qualified meetings for your team.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Cta size="lg">Book a discovery call</Cta>
            <Cta href="/#cases" variant="secondary" size="lg">
              See more case studies
            </Cta>
          </div>
        </div>
      </section>
    </>
  );
}
