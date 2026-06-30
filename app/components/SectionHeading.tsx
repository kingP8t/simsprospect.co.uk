/** Shared section heading: small orange eyebrow, headline, optional intro. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
}) {
  const alignment =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-sm font-semibold uppercase tracking-wide text-brand">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.625rem]">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-slate-600">{intro}</p>
      )}
    </div>
  );
}
