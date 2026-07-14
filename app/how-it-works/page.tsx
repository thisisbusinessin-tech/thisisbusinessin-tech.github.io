import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/config/site";

export const metadata = createMetadata({
  title: "How ApneTailor Works",
  description:
    "Learn how ApneTailor connects you with verified local tailors for custom stitching with doorstep pickup, progress tracking, and delivery.",
  path: "/how-it-works/"
});

const steps = [
  {
    title: "Choose your garment",
    description:
      "Select from supported categories — suits, kurtis, blouses, lehengas, kurtas, shirts, and more. Each category has its own measurement and detail requirements."
  },
  {
    title: "Enter measurements",
    description:
      "Provide your body measurements through guided screens in the app. Accurate measurements are key to a well-fitting garment."
  },
  {
    title: "Share tailoring details",
    description:
      "Add notes for the tailor, specify options like lining or bottom requirements, upload reference images, and choose who provides the fabric."
  },
  {
    title: "Fabric information",
    description:
      "If you provide fabric, share the fabric name and a photo. If the tailor provides it, specify the fabric type you need."
  },
  {
    title: "Set your location",
    description:
      "Enter your pickup and delivery addresses. Nearby verified tailors in your area are informed about your order."
  },
  {
    title: "Review tailor responses",
    description:
      "Interested tailors respond with their price and expected completion date. Review the details before making your decision."
  },
  {
    title: "Pay securely",
    description:
      "Once you accept a tailor's offer, pay through the app. Payment is processed securely before the stitching workflow begins."
  },
  {
    title: "Fabric logistics",
    description:
      "If you provided fabric, a pickup is arranged to deliver it to the tailor. If the tailor provides fabric, stitching can begin immediately."
  },
  {
    title: "Stitching and progress",
    description:
      "The tailor works on your garment and shares progress images. You can review the work and request changes where supported."
  },
  {
    title: "Delivery",
    description:
      "After approval, the finished garment is picked up from the tailor and delivered to your doorstep. Track the delivery in the app."
  }
];

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.domain },
          { name: "How It Works", url: `${siteConfig.domain}/how-it-works/` }
        ])}
      />

      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 mb-6">
            <Link href="/" className="no-underline hover:underline">
              Home
            </Link>
            <span aria-hidden="true"> / </span>
            <span>How It Works</span>
          </nav>

          <h1 className="mb-6">How ApneTailor works</h1>
          <p className="text-lg text-neutral-600 leading-relaxed mb-12">
            ApneTailor connects you with verified local tailors for custom stitching. The entire
            process — from measurements to delivery — is managed through the app.
          </p>

          <ol className="space-y-8">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <div>
                  <h2 className="text-xl mb-2">{step.title}</h2>
                  <p className="text-neutral-600 leading-relaxed">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-16 p-8 bg-brand-50 rounded-xl border border-brand-100">
            <h2 className="text-xl mb-4">Two fabric flows explained</h2>
            <div className="grid md:grid-cols-2 gap-6 text-neutral-700 text-sm leading-relaxed">
              <div>
                <h3 className="text-brand-700 font-semibold mb-2">You provide fabric</h3>
                <p>
                  After payment, a courier picks up your fabric from your address and delivers it
                  to the tailor. Once the tailor receives the fabric, stitching begins. After
                  completion, the finished garment is delivered back to you.
                </p>
              </div>
              <div>
                <h3 className="text-brand-700 font-semibold mb-2">Tailor provides fabric</h3>
                <p>
                  The tailor already has or sources the fabric. After payment, stitching begins
                  immediately — no fabric pickup step needed. When the garment is ready, it is
                  delivered directly to you.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-600 mb-4">
              Have questions? Check our{" "}
              <Link href="/faq/" className="font-medium">
                FAQ
              </Link>{" "}
              or explore{" "}
              <Link href="/services/" className="font-medium">
                supported garments
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
