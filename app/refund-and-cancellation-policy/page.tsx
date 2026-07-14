import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";

export const metadata = createMetadata({
  title: "Refund and Cancellation Policy",
  description:
    "ApneTailor refund and cancellation policy — draft pending final business approval.",
  path: "/refund-and-cancellation-policy/"
});

export default function RefundPolicyPage() {
  return (
    <section className="section-padding">
      <div className="container-narrow prose-content text-neutral-700">
        <h1>Refund and Cancellation Policy</h1>
        <p className="text-sm text-neutral-500 -mt-2 mb-4">Last Updated: July 2026</p>

        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg mb-8 text-sm text-amber-900">
          <strong>Draft — Pending Review:</strong> This policy is a working draft. Final
          business rules require user approval before this page should be treated as the
          definitive public policy.
        </div>

        <p>
          This page outlines ApneTailor&apos;s approach to refunds and cancellations. For
          authoritative refund language, also see the{" "}
          <Link href="/privacy-policy/">Privacy Policy</Link> and{" "}
          <Link href="/terms/">Terms of Service</Link>.
        </p>

        <h2>General principle</h2>
        <p>
          Payments made through ApneTailor are generally non-refundable once an order or
          transaction has been confirmed or processed. However, refund requests may be reviewed
          on a case-by-case basis depending on the circumstances.
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
          Contact ApneTailor support at{" "}
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
      </div>
    </section>
  );
}
