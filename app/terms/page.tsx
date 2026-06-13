import type { Metadata } from "next";
import { LegalLayout } from "@/app/components/LegalLayout";
import { site, legal } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that apply when you use the SIMS PROSPECTS website.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Use"
      intro="The terms that apply when you use the SIMS PROSPECTS website."
      lastUpdated="19 May 2026"
    >
      <p>
        These terms govern your use of the {legal.companyName} website. By using
        this website, you agree to them. If you do not agree, please do not use
        the site.
      </p>

      <h2>1. About us</h2>
      <p>
        This website is operated by {legal.companyName}, a company registered in{" "}
        {legal.jurisdiction} (company number {legal.companyNumber}), with its
        registered office at {legal.address}.
      </p>

      <h2>2. Using our website</h2>
      <p>
        You may use this website for lawful purposes only. You must not misuse
        it by introducing malicious code, attempting to gain unauthorised
        access to it, or disrupting the site or the infrastructure it runs on.
      </p>

      <h2>3. Intellectual property</h2>
      <p>
        All content on this website — including text, graphics, logos, and
        design — is owned by or licensed to {legal.companyName} and is protected
        by intellectual property law. You may not reproduce or republish it
        without our written permission.
      </p>

      <h2>4. Accuracy of content</h2>
      <p>
        We aim to keep the information on this site accurate and up to date, but
        we make no guarantees that it is complete or error-free. Content is
        provided for general information only and does not constitute
        professional or commercial advice.
      </p>

      <h2>5. Enquiries and booking a call</h2>
      <p>
        Submitting a form or booking a call through this website is an enquiry
        only. It does not create a contract for services. Any engagement is
        governed by a separate written agreement between us.
      </p>

      <h2>6. Links to other websites</h2>
      <p>
        Our site may contain links to third-party websites. We have no control
        over their content and accept no responsibility for them. A link does
        not imply that we endorse the linked site.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, we are not liable for any loss
        or damage arising from your use of, or inability to use, this website.
        Nothing in these terms excludes or limits liability that cannot be
        excluded or limited under applicable law.
      </p>

      <h2>8. Privacy</h2>
      <p>
        Your use of this website is also governed by our{" "}
        <a href="/privacy">Privacy Policy</a> and{" "}
        <a href="/cookies">Cookie Policy</a>.
      </p>

      <h2>9. Governing law</h2>
      <p>
        These terms are governed by the law of {legal.jurisdiction}, and any
        disputes relating to them will be subject to the exclusive jurisdiction
        of its courts.
      </p>

      <h2>10. Changes to these terms</h2>
      <p>
        We may revise these terms at any time. The &quot;last updated&quot; date
        above shows the latest version.
      </p>

      <h2>11. Contact</h2>
      <p>
        If you have any questions about these terms, email us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalLayout>
  );
}
