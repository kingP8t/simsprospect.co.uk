/* Three-pillar differentiator (People / Technology / Process) — mirrors the
   "why us" structure of established lead-gen agencies, on a bold dark band. */
const pillars: {
  name: string;
  title: string;
  body: string;
  points: string[];
  icon: React.ReactNode;
}[] = [
  {
    name: "People",
    title: "Trained callers, not a call centre",
    body: "UK-based people who run outbound for a living, briefed on your offer and objections before the first dial.",
    points: [
      "Sound like they know your business",
      "You approve the scripts and positioning",
      "A named contact who owns your account",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    name: "Technology",
    title: "Verified data and multi-channel reach",
    body: "Clean, ICP-matched data and the tooling to run calls, LinkedIn, and email together — without you buying or learning a stack.",
    points: [
      "Contact data verified before outreach",
      "Calls, LinkedIn & email run as one motion",
      "Booked straight onto your calendar",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="m7 11 3-3 3 3 4-4" />
      </svg>
    ),
  },
  {
    name: "Process",
    title: "A repeatable system, reported weekly",
    body: "A defined motion from ICP to booked meeting, tuned every few weeks on what's actually converting — so results compound.",
    points: [
      "ICP workshop → list → outreach → qualify → book",
      "Messaging A/B-tested and refined",
      "Weekly activity, meetings, and pipeline reporting",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3v18h18" />
        <path d="m7 15 3-4 3 2 4-6" />
      </svg>
    ),
  },
];

export function Pillars() {
  return (
    <section className="bg-slate-900 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-light">
            Why it works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            People, technology, and process — pulling together
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Pipeline isn&apos;t one trick. It&apos;s the right people running the
            right system on clean data — which is exactly what we bring.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.name}
              className="flex flex-col rounded-2xl bg-white/5 p-8 ring-1 ring-white/10"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/15 text-brand-light [&_svg]:h-6 [&_svg]:w-6">
                {pillar.icon}
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-brand-light">
                {pillar.name}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {pillar.body}
              </p>
              <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                {pillar.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300"
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
                      className="mt-0.5 shrink-0 text-brand-light"
                    >
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
