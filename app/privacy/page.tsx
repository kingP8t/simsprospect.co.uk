import type { Metadata } from "next";
import { LegalLayout } from "@/app/components/LegalLayout";
import { site, legal, isPlaceholder } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SIMS PROSPECTS collects, uses, and protects personal data in line with the UK GDPR.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro="How we collect, use, and protect personal data — and the rights you have under UK data protection law."
      lastUpdated="19 May 2026"
    >
      <p>
        {legal.companyName} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is
        committed to protecting your privacy. We handle all personal data in
        line with the <strong>UK General Data Protection Regulation (UK GDPR)</strong>{" "}
        and the <strong>Data Protection Act 2018</strong>. This policy explains
        what we collect when you use our website, why we collect it, and what
        you can do about it.
      </p>
      <p>
        For the purposes of UK data protection law, the data controller is{" "}
        {legal.companyName}
        {!isPlaceholder(legal.address) && <>, {legal.address}</>}, registered in{" "}
        {legal.jurisdiction}
        {!isPlaceholder(legal.companyNumber) && (
          <> (company number {legal.companyNumber})</>
        )}
        . We are registered with the Information Commissioner&apos;s Office
        {!isPlaceholder(legal.icoNumber) && (
          <> (registration number {legal.icoNumber})</>
        )}
        .
      </p>

      <h2>1. The personal data we collect</h2>
      <p>
        We only collect data you choose to give us, or that is needed to run
        and secure the site:
      </p>
      <ul>
        <li>
          <strong>Enquiry &amp; form data</strong> — your name, work email,
          company, phone number, and anything you tell us when you submit a
          form or request a pipeline audit.
        </li>
        <li>
          <strong>Booking data</strong> — details you provide when you book a
          call through our scheduling tool.
        </li>
        <li>
          <strong>Usage data</strong> — with your consent, analytics data about
          how you use the site, such as pages viewed, approximate location, and
          device or browser type.
        </li>
        <li>
          <strong>Technical data</strong> — server logs, including IP address,
          which are needed to deliver and protect the website.
        </li>
      </ul>

      <h2>2. How we use your data and our lawful basis</h2>
      <p>
        Under the UK GDPR we must have a lawful basis for processing personal
        data. We rely on:
      </p>
      <ul>
        <li>
          <strong>Consent</strong> — for analytics cookies and any marketing
          communications. You can withdraw consent at any time.
        </li>
        <li>
          <strong>Legitimate interests</strong> — to respond to your enquiry,
          run and secure the website, and contact you about a service you have
          asked about.
        </li>
        <li>
          <strong>Performance of a contract</strong> — where you become a
          client, to deliver the services you have engaged us for.
        </li>
      </ul>

      <h2>3. Who we share your data with</h2>
      <p>
        We never sell your personal data. We share it only with trusted service
        providers (processors) who help us run our business, including:
      </p>
      <ul>
        <li>
          <strong>HubSpot</strong> — customer relationship management and form
          handling
        </li>
        <li>
          <strong>Cal.com</strong> — scheduling discovery calls
        </li>
        <li>
          <strong>Vercel</strong> — website hosting
        </li>
        <li>
          <strong>Google Analytics</strong> — website analytics (only where you
          have given consent)
        </li>
      </ul>
      <p>
        Each provider is bound by a data processing agreement and may only use
        your data on our instructions. We may also disclose data where required
        to do so by law.
      </p>

      <h2>4. International data transfers</h2>
      <p>
        Some of our providers process data outside the UK. Where they do, we
        ensure appropriate safeguards are in place — such as UK adequacy
        regulations or the International Data Transfer Agreement — so your data
        receives an equivalent level of protection.
      </p>

      <h2>5. How long we keep your data</h2>
      <p>
        We keep personal data only for as long as we need it for the purpose we
        collected it, or as required by law. Enquiry data is typically held for
        up to 24 months after our last contact with you, unless you become a
        client or ask us to delete it sooner.
      </p>

      <h2>6. Your rights under the UK GDPR</h2>
      <p>You have the right to:</p>
      <ul>
        <li>access the personal data we hold about you;</li>
        <li>ask us to correct inaccurate or incomplete data;</li>
        <li>
          ask us to erase your data (the &quot;right to be forgotten&quot;);
        </li>
        <li>restrict or object to our processing of your data;</li>
        <li>request a portable copy of your data;</li>
        <li>
          withdraw your consent at any time, where processing is based on
          consent.
        </li>
      </ul>
      <p>
        To exercise any of these rights, email us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. We will respond
        within one month.
      </p>

      <h2>7. Cookies</h2>
      <p>
        We use cookies and similar technologies as described in our{" "}
        <a href="/cookies">Cookie Policy</a>. Non-essential cookies are only set
        with your consent.
      </p>

      <h2>8. How we keep your data secure</h2>
      <p>
        We use appropriate technical and organisational measures to protect
        your data against loss, misuse, or unauthorised access. No method of
        transmission over the internet is completely secure, but we work to
        protect your personal data at all times.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The &quot;last
        updated&quot; date above shows when it was last revised.
      </p>

      <h2>10. How to contact us or make a complaint</h2>
      <p>
        For any privacy question or request, contact us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. If you are not
        satisfied with our response, you have the right to complain to the
        UK&apos;s supervisory authority, the Information Commissioner&apos;s
        Office, at{" "}
        <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
          ico.org.uk
        </a>
        .
      </p>
    </LegalLayout>
  );
}
