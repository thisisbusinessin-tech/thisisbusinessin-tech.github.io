import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { FaqAccordionItem } from "@/components/ui/FaqAccordionItem";
import { getFaqsByTopic } from "@/content/faqs";

export const metadata = createMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about ApneTailor — how it works, supported garments, measurements, fabric, delivery, payments, and more.",
  path: "/faq/"
});

export default function FAQPage() {
  const topics = getFaqsByTopic();

  return (
    <section className="section-padding">
      <div className="container-site max-w-3xl">
        <h1 className="mb-4">Frequently asked questions</h1>
        <p className="page-intro mb-10">
          Find answers to common questions about ApneTailor. For more detailed guides, visit
          our <Link href="/blog/">Guides &amp; Articles</Link> section.
        </p>

        {Array.from(topics.entries()).map(([topic, topicFaqs]) => (
          <div key={topic} className="mb-10">
            <h2 className="text-lg text-brand-600 font-semibold uppercase tracking-wider mb-4">
              {topic}
            </h2>
            <div className="space-y-3">
              {topicFaqs.map((faq) => (
                <FaqAccordionItem
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  note={
                    faq.needsReview
                      ? "This answer may be updated once final business rules are confirmed."
                      : undefined
                  }
                />
              ))}
            </div>
          </div>
        ))}

        <div className="mt-8 p-6 bg-neutral-50 rounded-lg text-center">
          <p className="text-neutral-600">
            Still have questions?{" "}
            <Link href="/contact/" className="font-medium">
              Contact us
            </Link>{" "}
            or visit <Link href="/support/" className="font-medium">Support</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
