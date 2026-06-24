/* Risk-reversal band — surfaces the commitments that lower the perceived
   risk of signing, instead of leaving them buried in the FAQ. */
const guarantees: { title: string; body: string }[] = [
  {
    title: "Month-to-month, no lock-in",
    body: "Every engagement is rolling. Pause or cancel any month, whether it's for holiday cover, headcount changes, or any reason at all.",
  },
  {
    title: "Qualified meetings, or we fix it",
    body: "We agree the qualification bar up front and only book meetings that clear it. If show rate dips below benchmark, we adjust at our cost.",
  },
  {
    title: "You stay in control",
    body: "You approve the scripts, targeting, and positioning before anything goes out. We represent your brand exactly the way you want.",
  },
];

export function Guarantee() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">
              Low risk by design
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              The downside is small. The upside is your pipeline.
            </h2>
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {guarantees.map((item) => (
              <div key={item.title} className="text-center sm:text-left">
                <dt className="flex items-center justify-center gap-2 sm:justify-start">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-tint text-brand">
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
                    >
                      <path d="M9 12l2 2 4-4" />
                      <path d="M12 3a9 9 0 1 0 9 9" />
                    </svg>
                  </span>
                  <span className="text-base font-semibold text-slate-900">
                    {item.title}
                  </span>
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
