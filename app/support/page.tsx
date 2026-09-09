import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";
import { AppDownloadButton } from "@/components/ui/AppDownloadButton";

export const metadata = createMetadata({
  title: "Support",
  description:
    "Find help with ApneTailor orders, account issues, and general questions. Support routes and guidance.",
  path: "/support/"
});

export default function SupportPage() {
  return (
    <section className="section-padding">
      <div className="container-site max-w-3xl">
        <h1 className="mb-6">Support</h1>
        <p className="text-lg text-neutral-600 leading-relaxed mb-10">
          Need help with ApneTailor? Here is how to get assistance for different types of issues.
        </p>

        <div className="space-y-6">
          <div className="card">
            <h2 className="text-xl mb-3">Order issues</h2>
            <p className="text-neutral-600">
              For problems with an active order — delivery delays, fitting concerns, payment
              questions, or change requests — use the in-app support and chat features. This
              connects you directly with the support team and your tailor.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl mb-3">Account and privacy</h2>
            <p className="text-neutral-600">
              For account deletion information, visit our{" "}
              <Link href="/delete-accounts/">Account Deletion</Link> page. For privacy questions,
              see our <Link href="/privacy-policy/">Privacy Policy</Link> and{" "}
              <Link href="/data-compliance/">Data Compliance</Link> page.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl mb-3">Access or correct your information</h2>
            <p className="text-neutral-600">
              Customers can update name, phone number, email, addresses, and profile photo in
              the ApneTailor User App where supported. Tailors can update eligible profile
              fields in the Tailor App; changes that need manual review can be requested by
              email.
            </p>
            <p className="text-neutral-600 mt-3">
              To ask what personal information we hold about you, email{" "}
              <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> from
              your registered email address where possible. Include your name, phone number, and
              whether you use the customer or tailor app. See our{" "}
              <Link href="/data-compliance/">Data Compliance</Link> page for the full process.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl mb-3">Refunds and cancellations</h2>
            <p className="text-neutral-600">
              Refund and cancellation terms depend on the circumstances. See our{" "}
              <Link href="/refund-and-cancellation-policy/">Refund and Cancellation Policy</Link>{" "}
              for details.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl mb-3">Grievance and complaints</h2>
            <p className="text-neutral-600">
              If you have a complaint about an order, payment, pickup or delivery, your
              account, or the platform, raise it through in-app support or email{" "}
              <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
              Include your contact details, order reference where applicable, and a clear
              description of the issue. We will make reasonable efforts to acknowledge and
              address grievances in a timely manner. This is also described in our{" "}
              <Link href="/terms/">Terms of Service</Link>.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl mb-3">General inquiries</h2>
            <p className="text-neutral-600">
              Email us at{" "}
              <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> for
              general questions, feedback, or issues not covered above.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center p-8 bg-brand-50 rounded-xl">
          <h2 className="text-xl mb-3">Get the app</h2>
          <p className="text-neutral-600 mb-6">
            The ApneTailor app is the best way to place orders and access in-app support.
          </p>
          <AppDownloadButton />
        </div>
      </div>
    </section>
  );
}
