import { faqSchema, type FAQ } from "@/lib/validation/content";

const rawFaqs = [
  {
    id: "how-it-works",
    topic: "Getting Started",
    question: "How does ApneTailor work?",
    answer:
      "You select a garment category, provide measurements and tailoring details, choose who provides the fabric, and share your location. Nearby verified tailors can respond with pricing and an expected completion date. After you review and pay, the stitching workflow begins with pickup, progress updates, and final delivery."
  },
  {
    id: "supported-garments",
    topic: "Garments",
    question: "Which garments does ApneTailor currently support?",
    answer:
      "ApneTailor currently supports stitching for women's garments (Suit, Saree, Kurti, Lehenga, Blouse) and men's garments (Kurta, Formal Suit, Shirt, Sherwani, Pant)."
  },
  {
    id: "measurements",
    topic: "Measurements",
    question: "How do I provide measurements?",
    answer:
      "You enter your measurements directly in the ApneTailor app during the order flow. The app guides you through the measurements required for your selected garment category."
  },
  {
    id: "fabric-responsibility",
    topic: "Fabric",
    question: "Who provides the fabric?",
    answer:
      "You choose whether you or the tailor provides the fabric. If you provide it, you share fabric details and a photo, and pickup is arranged to deliver it to the tailor. If the tailor provides it, they handle fabric sourcing and the initial pickup step is not needed."
  },
  {
    id: "tracking",
    topic: "Tracking",
    question: "Can I track my order?",
    answer:
      "Yes. ApneTailor provides order status updates and tracking for pickup and delivery stages where applicable. You can also view stitching progress when the tailor shares progress images."
  },
  {
    id: "changes",
    topic: "Changes",
    question: "What if I need changes during stitching?",
    answer:
      "When the tailor shares progress images, you can review the work and request changes where supported by the app workflow. The tailor can then address your feedback before final delivery."
  },
  {
    id: "payments",
    topic: "Payments",
    question: "How does payment work?",
    answer:
      "After a tailor accepts your order and provides pricing, you review the details and pay through the app. Payment is processed securely before the stitching workflow begins."
  },
  {
    id: "refunds",
    topic: "Payments",
    question: "What is the refund policy?",
    answer:
      "Refund and cancellation terms depend on the circumstances and applicable policy. Issues may be reviewed and, depending on the situation, partial or full refunds or other appropriate resolutions may be provided. See our Refund and Cancellation Policy for details.",
    needsReview: true
  },
  {
    id: "availability",
    topic: "Availability",
    question: "Is ApneTailor available in my city?",
    answer:
      "ApneTailor is expanding to more cities across India. Service availability depends on your location. Check the app for current availability in your area."
  },
  {
    id: "account-deletion",
    topic: "Privacy",
    question: "How do I delete my account?",
    answer:
      "Open the ApneTailor app, go to Profile → Delete Account, and confirm your deletion request. Your account then enters a 30-day retention period, after which your personal information is permanently deleted or anonymized. See our Account Deletion Policy for more information."
  },
  {
    id: "verified-tailors",
    topic: "Trust",
    question: "Are the tailors verified?",
    answer:
      "ApneTailor works with registered tailors who go through a verification process before they can accept orders on the platform. This helps ensure customers connect with tailors who meet ApneTailor's standards."
  },
  {
    id: "support",
    topic: "Support",
    question: "How do I contact support?",
    answer:
      "You can reach ApneTailor support at support@apnetailor.com. For order-specific issues, use the in-app support and chat features."
  }
];

export const faqs: FAQ[] = rawFaqs.map((faq) => faqSchema.parse(faq));

export function getFaqsByTopic() {
  const topics = new Map<string, FAQ[]>();
  for (const faq of faqs) {
    const list = topics.get(faq.topic) ?? [];
    list.push(faq);
    topics.set(faq.topic, list);
  }
  return topics;
}
