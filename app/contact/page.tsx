import { createMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";

export const metadata = createMetadata({
  title: "Contact ApneTailor",
  description: "Get in touch with ApneTailor support for questions, feedback, or assistance.",
  path: "/contact/"
});

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="container-site max-w-3xl">
        <h1 className="mb-6">Contact us</h1>
        <p className="text-lg text-neutral-600 leading-relaxed mb-10">
          We are here to help. For questions about ApneTailor, your orders, or general inquiries,
          reach out through the channels below.
        </p>

        <div className="space-y-8">
          <div className="card">
            <h2 className="text-xl mb-3">Email support</h2>
            <p className="text-neutral-600 mb-4">
              For support inquiries, feedback, or general questions:
            </p>
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="text-brand-600 font-semibold text-lg no-underline hover:underline"
            >
              {siteConfig.supportEmail}
            </a>
          </div>

          <div className="card">
            <h2 className="text-xl mb-3">In-app support</h2>
            <p className="text-neutral-600">
              For order-specific issues, use the support and chat features within the ApneTailor
              app. This is the fastest way to get help with an active order.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl mb-3">Media inquiries</h2>
            <p className="text-neutral-600">
              For press and media requests, visit our{" "}
              <a href="/media/" className="font-medium">
                Media &amp; Press
              </a>{" "}
              page or email{" "}
              <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
            </p>
          </div>
        </div>

        <p className="mt-10 text-sm text-neutral-500">
          We do not publish phone numbers or office addresses at this time. All support is
          handled through email and in-app channels.
        </p>
      </div>
    </section>
  );
}
