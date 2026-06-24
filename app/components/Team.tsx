import { Avatar } from "@/app/components/Avatar";
import { FounderAvatar } from "@/app/components/FounderAvatar";
import { founder, team } from "@/app/lib/site";

/**
 * Founder humanises the agency right before pricing — the "UK team you
 * can actually talk to" beat.
 *
 * Photos: drop square images in /public/team/ and point `founder.photoSrc`
 * (and any `team[]` entries) at them in lib/site.ts. Until a file exists, a
 * clean initials tile shows in its place. Update bios in lib/site.ts too.
 */
export function Team() {
  return (
    <section id="team" className="scroll-mt-20 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
          <FounderAvatar
            className="mx-auto h-48 w-48 ring-1 ring-slate-200 md:mx-0 md:h-56 md:w-56"
            initialsClassName="text-5xl"
          />

          <div className="text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">
              Meet the team
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              You&apos;ll work directly with {founder.name}
            </h2>
            <p className="mt-2 text-base font-medium text-slate-500">
              {founder.role}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              {founder.bio}
            </p>

            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
              <a
                href={founder.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {team.length > 0 && (
          <div className="mt-14 border-t border-slate-200 pt-12">
            <p className="text-center text-sm font-semibold uppercase tracking-wide text-brand">
              The team behind your pipeline
            </p>
            <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap items-start justify-center gap-x-10 gap-y-8">
              {team.map((member) => (
                <li
                  key={member.name}
                  className="flex w-32 flex-col items-center text-center"
                >
                  <Avatar
                    name={member.name}
                    photoSrc={member.photoSrc}
                    role={member.role}
                    className="h-24 w-24 ring-1 ring-slate-200"
                    initialsClassName="text-2xl"
                  />
                  <span className="mt-3 text-sm font-semibold text-slate-900">
                    {member.name}
                  </span>
                  <span className="mt-0.5 text-xs leading-snug text-slate-500">
                    {member.role}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
