import Link from "next/link";
import { Logo } from "@/app/components/Logo";
import { CookieSettingsButton } from "@/app/components/CookieSettingsButton";
import { site, legal } from "@/app/lib/site";

const footerNav = {
  Services: [
    { label: "Cold calling", href: "/services/cold-calling" },
    {
      label: "LinkedIn inbound marketing",
      href: "/services/linkedin-inbound-marketing",
    },
    {
      label: "B2B appointment setting",
      href: "/services/b2b-appointment-setting",
    },
    { label: "B2B lead generation", href: "/services/b2b-lead-generation" },
  ],
  Company: [
    { label: "How it works", href: "#process" },
    { label: "Results", href: "#results" },
    { label: "FAQ", href: "#faq" },
    { label: "Book a call", href: site.bookingUrl },
  ],
  // ⚠️ CONFIRM — these legal pages still need to be built (UK GDPR).
  Legal: [
    { label: "Privacy policy", href: "/privacy" },
    { label: "Cookie policy", href: "/cookies" },
    { label: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              A predictable pipeline of qualified B2B meetings — built through
              cold calling, LinkedIn, and appointment setting.
            </p>
            <dl className="mt-4 space-y-2 text-sm">
              <div>
                <dt className="text-slate-500">Project support enquiries</dt>
                <dd>
                  <a
                    href={`mailto:${site.email}`}
                    className="font-medium text-brand hover:text-brand-dark"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Sales enquiries</dt>
                <dd>
                  <a
                    href={`mailto:${site.salesEmail}`}
                    className="font-medium text-brand hover:text-brand-dark"
                  >
                    {site.salesEmail}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {Object.entries(footerNav).map(([heading, links]) => (
            <nav key={heading} aria-label={heading}>
              <h3 className="text-sm font-semibold text-slate-900">
                {heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                        {...(isExternal && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
                {heading === "Legal" && (
                  <li>
                    <CookieSettingsButton />
                  </li>
                )}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {legal.companyName}. All rights reserved.
          </p>
          <p>
            Registered in {legal.jurisdiction}. We handle personal data in line
            with the UK GDPR.
          </p>
        </div>
      </div>
    </footer>
  );
}
