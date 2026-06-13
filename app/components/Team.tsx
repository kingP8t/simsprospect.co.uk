import { FounderAvatar } from "@/app/components/FounderAvatar";
import { founder } from "@/app/lib/site";

/**
 * Founder humanises the agency right before pricing — the "UK team you
 * can actually talk to" beat from the Harper reference.
 *
 * ⚠️ Drop a real photo at /public/founder.jpg (square, ~600×600) and the
 * styled initial placeholder is replaced automatically. Update the bio
 * in lib/site.ts.
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
      </div>
    </section>
  );
}
