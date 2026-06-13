import type { Metadata } from "next";
import { LegalLayout } from "@/app/components/LegalLayout";
import { site } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "What cookies SIMS PROSPECTS uses, what they do, and how to control them under the UK GDPR.",
};

type CookieRow = {
  name: string;
  type: string;
  purpose: string;
  duration: string;
};

const cookies: CookieRow[] = [
  {
    name: "sims-cookie-consent",
    type: "Strictly necessary",
    purpose:
      "Remembers your cookie choice so we do not ask you on every visit.",
    duration: "Until you clear it (local storage)",
  },
  {
    name: "_ga, _ga_*",
    type: "Analytics (consent required)",
    purpose:
      "Google Analytics — measures site usage anonymously to help us improve. Set only after you select “Accept all”.",
    duration: "Up to 2 years",
  },
];

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      intro="What cookies we use on this website, what they do, and how you can control them."
      lastUpdated="19 May 2026"
    >
      <p>
        This policy explains how we use cookies and similar technologies on this
        website. It should be read alongside our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a
        website. Similar technologies — such as local storage — work in much the
        same way. They help websites function, remember your preferences, and
        understand how the site is used.
      </p>

      <h2>2. How we use cookies</h2>
      <p>
        We keep our use of cookies to a minimum. We use{" "}
        <strong>strictly necessary</strong> cookies to make the site work and,
        only with your consent, <strong>analytics</strong> cookies to improve
        it. We do not use advertising or cross-site tracking cookies.
      </p>

      <h2>3. The cookies we use</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-300">
              <th className="py-2 pr-4 font-semibold text-slate-900">Name</th>
              <th className="py-2 pr-4 font-semibold text-slate-900">Type</th>
              <th className="py-2 pr-4 font-semibold text-slate-900">
                Purpose
              </th>
              <th className="py-2 font-semibold text-slate-900">Duration</th>
            </tr>
          </thead>
          <tbody>
            {cookies.map((cookie) => (
              <tr
                key={cookie.name}
                className="border-b border-slate-200 align-top"
              >
                <td className="py-3 pr-4 font-mono text-xs text-slate-700">
                  {cookie.name}
                </td>
                <td className="py-3 pr-4 text-slate-600">{cookie.type}</td>
                <td className="py-3 pr-4 text-slate-600">{cookie.purpose}</td>
                <td className="py-3 text-slate-600">{cookie.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Analytics cookies are listed for transparency. They are only ever placed
        once analytics has been enabled on the site <em>and</em> you have given
        consent.
      </p>

      <h2>4. Managing your cookies</h2>
      <p>
        When you first visit, our cookie banner lets you accept or reject
        non-essential cookies. You can change your choice at any time using the{" "}
        <strong>Cookie settings</strong> link in the footer of any page.
      </p>
      <p>
        You can also block or delete cookies through your browser settings.
        Please note that blocking strictly necessary cookies may stop parts of
        the site from working as intended.
      </p>

      <h2>5. Changes to this policy</h2>
      <p>
        We may update this Cookie Policy from time to time. The &quot;last
        updated&quot; date above shows the latest revision.
      </p>

      <h2>6. Contact</h2>
      <p>
        If you have any questions about our use of cookies, email us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalLayout>
  );
}
