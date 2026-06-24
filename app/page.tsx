import { Hero } from "@/app/components/Hero";
import { LogoBar } from "@/app/components/LogoBar";
import { Services } from "@/app/components/Services";
import { Comparison } from "@/app/components/Comparison";
import { Pillars } from "@/app/components/Pillars";
import { Guarantee } from "@/app/components/Guarantee";
import { Process } from "@/app/components/Process";
import { CampaignTimeline } from "@/app/components/CampaignTimeline";
import { Results } from "@/app/components/Results";
import { CaseStudies } from "@/app/components/CaseStudies";
import { Testimonials } from "@/app/components/Testimonials";
import { Team } from "@/app/components/Team";
import { Pricing } from "@/app/components/Pricing";
import { Faq } from "@/app/components/Faq";
import { FinalCta } from "@/app/components/FinalCta";
import { MidPageCta } from "@/app/components/MidPageCta";
import { PipelineAudit } from "@/app/components/PipelineAudit";
import { site } from "@/app/lib/site";

/* Structured data — helps search engines understand the business.
   The object is fully static (no user input), and rendered as plain
   script text children so React escaping handles it safely. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  areaServed: "Global",
  serviceType: [
    "Cold calling",
    "LinkedIn inbound marketing",
    "B2B appointment setting",
    "B2B lead generation",
  ],
};

/** Small wrapper that drops a MidPageCta into the page rhythm. */
function MidCtaSection(props: React.ComponentProps<typeof MidPageCta>) {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <MidPageCta {...props} />
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <Hero />
      <LogoBar />
      <Services />
      <Comparison />
      <Pillars />

      {/* Capture visitors who just recognised what they need */}
      <MidCtaSection
        title="Sound like what your team needs?"
        body="If outsourcing prospecting could change your numbers, a free 30-minute call will tell you whether it's worth doing. No obligation."
        ctaLabel="Book a discovery call"
      />

      <Process />
      <CampaignTimeline />
      <Results />
      <CaseStudies />
      <Testimonials />

      {/* Capture emotionally-warmed visitors right after social proof */}
      <MidCtaSection
        title="Ready to be the next one of these?"
        body="Book a 30-minute call. We'll review your current pipeline, where the gaps are, and exactly how we'd book more meetings for your team."
        ctaLabel="Book your call"
      />

      <Team />
      <Guarantee />
      <Pricing />
      <PipelineAudit />
      <Faq />
      <FinalCta />
    </>
  );
}
