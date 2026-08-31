import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";
import { HomeHero } from "@/components/home/HomeHero";
import { HowItWorksShowcase } from "@/components/home/HowItWorksShowcase";
import { TrustScenes } from "@/components/home/TrustScenes";
import { StitchedSeamDivider } from "@/components/home/StitchedSeamDivider";
import { FaqSeamDivider } from "@/components/home/FaqSeamDivider";
import { FaqAccordionItem } from "@/components/ui/FaqAccordionItem";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/content/faqs";

export const metadata = createMetadata({
  title: "ApneTailor — Online Tailoring App",
  description: siteConfig.defaultMetadata.defaultDescription,
  path: "/"
});

export default function HomePage() {
  const previewFaqs = faqs.slice(0, 5);
  const allGarments = [
    ...siteConfig.supportedGarments.women,
    ...siteConfig.supportedGarments.men
  ];
  const marqueeGroups = Array.from({ length: 4 }, (_, index) => index);
  const processSteps = [
    {
      title: "Choose Garment Type"
    },
    {
      title: "Share Tailoring Details"
    },
    {
      title: "Give Accurate Address"
    },
    {
      title: "Confirm Your Order"
    }
  ];
  const howItWorksScreens = processSteps.map((step, index) => ({
    ...step,
    screenshot: `/how-it-works/screenshot-${index + 1}.webp`
  }));

  return (
    <>
      <HomeHero />

      <section className="fabric-sheet relative z-20 -mt-[100svh] rounded-t-[2.6rem] bg-white section-padding md:rounded-t-[3.4rem]">
        <div className="container-site">
          <Reveal className="mx-auto max-w-4xl text-center">
            <blockquote className="fabric-quote mt-6">
              Chahiye Darji?
              <br />
              Done Ji.
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden bg-brand-900 py-8" aria-label="Supported garments">
        <div className="marquee-track text-sm font-semibold uppercase tracking-[0.18em] text-white/88">
          {marqueeGroups.map((groupIndex) => (
            <div
              key={groupIndex}
              className="marquee-group"
              aria-hidden={groupIndex > 0 ? "true" : undefined}
            >
              {allGarments.map((g) => (
                <span key={`${groupIndex}-${g.slug}`} className="marquee-chip whitespace-nowrap">
                  {g.name}
                  <span className="text-accent-thread" aria-hidden="true">
                    ◆
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="relative z-10 section-padding bg-white">
        <div className="container-site">
          <HowItWorksShowcase steps={howItWorksScreens} />
        </div>
      </section>

      <StitchedSeamDivider />

      <section className="trust-shell section-padding bg-brand-900 text-white">
        <div className="container-site">
          <TrustScenes />
        </div>
      </section>

      <section className="bg-brand-900 pb-8 pt-2 md:pb-10">
        <div className="container-site">
          <p className="founder-line text-center text-white/60">
            Founded by Pushpit Trehan &amp; Yugank Trehan
          </p>
        </div>
      </section>

      <FaqSeamDivider />

      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <Reveal className="text-center">
            <p className="section-kicker">Common questions</p>
            <h2 className="mb-10 mt-5">Answers that are easier to scan and easier to read</h2>
          </Reveal>
          <div className="space-y-4">
            {previewFaqs.map((faq, index) => (
              <Reveal key={faq.id} delayMs={index * 60}>
                <FaqAccordionItem question={faq.question} answer={faq.answer} />
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link href="/faq/" className="font-semibold text-brand-600 no-underline hover:underline">
              View all FAQs →
            </Link>
          </p>
        </div>
      </section>

    </>
  );
}
