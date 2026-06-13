import { Cta } from "@/app/components/Cta";

/**
 * Inline call-out CTA used between sections on long pages (e.g. case
 * studies) so visitors can act at any point — not just at the end.
 */
export function MidPageCta({
  title,
  body,
  ctaLabel = "Book a call",
  ctaHref,
}: {
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <aside className="overflow-hidden rounded-2xl bg-brand-tint ring-1 ring-inset ring-brand/20">
      <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="max-w-xl">
          <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
            {title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-700">{body}</p>
        </div>
        <div className="shrink-0">
          <Cta href={ctaHref} size="md">
            {ctaLabel}
          </Cta>
        </div>
      </div>
    </aside>
  );
}
