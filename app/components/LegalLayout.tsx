/**
 * Shared shell for legal pages (privacy, cookies, terms).
 * Prose styling is applied with arbitrary variants so the page bodies
 * stay clean, semantic HTML with no per-element class noise.
 */
export function LegalLayout({
  title,
  intro,
  lastUpdated,
  children,
}: {
  title: string;
  intro: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{intro}</p>
          <p className="mt-4 text-sm text-slate-500">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <article
        className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8
          [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-slate-900
          [&_h2:first-child]:mt-0
          [&_p]:mt-4 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-slate-600
          [&_ul]:mt-4 [&_ul]:space-y-2 [&_ul]:pl-5
          [&_li]:list-disc [&_li]:text-sm [&_li]:leading-relaxed [&_li]:text-slate-600
          [&_a]:font-medium [&_a]:text-brand [&_a]:underline hover:[&_a]:text-brand-dark
          [&_strong]:font-semibold [&_strong]:text-slate-900"
      >
        {children}
      </article>
    </>
  );
}
