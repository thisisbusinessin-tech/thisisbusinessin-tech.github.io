import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout } from "@/components/content/LegalPageLayout";
import { siteConfig } from "@/lib/config/site";

export const metadata = createMetadata({
  title: "Refund and Cancellation Policy",
  description:
    "ApneTailor refund and cancellation policy for orders placed through the User App and Tailor App.",
  path: "/refund-and-cancellation-policy/"
});

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout title="Refund and Cancellation Policy" lastUpdated="September 2026">
      <p>
        This page explains ApneTailor&apos;s approach to refunds and cancellations for
        transactions made through the ApneTailor User App and the ApneTailor Tailor App. These
        terms also appear in our{" "}
        <Link href="/terms/">Terms of Service</Link>.
      </p>

      <h2>General principle</h2>
      <p>
        Payments made through ApneTailor are generally non-refundable once an order, service, or
        transaction has been confirmed or processed. However, refund requests may be reviewed
        on a case-by-case basis depending on the circumstances of the order, payment,
        cancellation, service issue, or dispute.
      </p>

      <h2>When refunds may be considered</h2>
      <p>Refund requests may be reviewed when:</p>
      <ul>
        <li>A service issue occurred that ApneTailor determines warrants review</li>
        <li>An order was cancelled before significant work began, subject to applicable rules</li>
        <li>A payment error or duplicate charge occurred</li>
        <li>Other circumstances where a resolution is appropriate under applicable policy</li>
      </ul>

      <h2>How to request a refund</h2>
      <p>
        Contact ApneTailor support through in-app support or at{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> with your
        order details and a description of the issue. Refund approval depends on the status
        of the order, applicable policies, and relevant circumstances.
      </p>

      <h2>Cancellations</h2>
      <p>
        Cancellation terms depend on the order status at the time of the request. Orders that
        have progressed significantly through the stitching workflow may not be eligible for
        full cancellation or refund. Contact support for guidance on your specific order.
      </p>

      <h2>Resolution options</h2>
      <p>
        Depending on the circumstances and applicable policy, partial or full refunds or other
        appropriate resolutions may be provided. ApneTailor does not guarantee automatic
        refunds for all situations.
      </p>

      <h2>Contact</h2>
      <p>
        For refund or cancellation inquiries:{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
      </p>
    </LegalPageLayout>
  );
}
