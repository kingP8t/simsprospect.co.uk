/**
 * Social-proof strip.
 *
 * ⚠️ Do NOT list named companies here unless your clients have genuinely
 * booked meetings at them and you can substantiate it — naming blue-chip
 * accounts you haven't reached breaches UK ASA/CAP rules. Until you have
 * real, named accounts (with real logos via next/image), keep the honest
 * sector framing below.
 */
const sectors = [
  "B2B SaaS",
  "Recruitment",
  "Professional services",
  "Agencies",
  "E-commerce",
];

export function LogoBar() {
  return (
    <section className="border-y border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wide text-slate-500">
          We book meetings for B2B teams in
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {sectors.map((name) => (
            <li
              key={name}
              className="text-lg font-semibold tracking-tight text-slate-400"
            >
              {name}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-slate-500">
          We get your reps in front of the decision-makers they&apos;ve been
          trying to reach, in the sectors we know best.
        </p>
      </div>
    </section>
  );
}
