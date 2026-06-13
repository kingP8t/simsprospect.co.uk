/**
 * Social-proof strip — Harper-style framing.
 *
 * The headline ("Our clients have opened conversations at") positions
 * these as TARGET ACCOUNTS your clients reached through us, not
 * SIMS PROSPECTS' own clients. This is more honest and more impressive.
 *
 * ⚠️ CONFIRM — replace placeholder names with the real, recognisable
 * accounts your clients have actually booked meetings at, and switch
 * to real logos (use next/image) once you have them.
 */
const placeholderAccounts = [
  "Capgemini",
  "Sage",
  "Travis Perkins",
  "BT Business",
  "Hays",
  "Bupa",
];

export function LogoBar() {
  return (
    <section className="border-y border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wide text-slate-500">
          Our clients have opened conversations at
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {placeholderAccounts.map((name) => (
            <li
              key={name}
              className="text-lg font-semibold tracking-tight text-slate-400"
            >
              {name}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-slate-500">
          When you partner with us, your reps end up in rooms with the
          decision-makers you&apos;ve been targeting — across SaaS,
          recruitment, and professional services.
        </p>
      </div>
    </section>
  );
}
