import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout } from "@/components/content/LegalPageLayout";
import { siteConfig } from "@/lib/config/site";

export const metadata = createMetadata({
  title: "Pickup and Delivery Policy",
  description:
    "ApneTailor pickup and delivery policy — how fabric pickup and garment delivery work.",
  path: "/pickup-and-delivery-policy/"
});

export default function PickupDeliveryPolicyPage() {
  return (
    <LegalPageLayout title="Pickup and Delivery Policy" lastUpdated="September 2026">
      <p>
        ApneTailor coordinates pickup and delivery through integrated logistics partners.
        This page explains the general pickup and delivery process and is ApneTailor&apos;s
        shipping and delivery policy for orders placed through the apps.
      </p>

      <h2>Two logistics timelines</h2>
      <p>
        <strong>Customer provides fabric:</strong> Two separate logistics timelines apply.
        First, fabric is picked up from the customer and delivered to the tailor. After
        stitching is complete, the finished garment is picked up from the tailor and delivered
        to the customer.
      </p>
      <p>
        <strong>Tailor provides fabric:</strong> Only the final delivery timeline applies.
        The tailor sources the fabric, so no initial fabric pickup from the customer is
        needed.
      </p>

      <h2>Pickup requirements</h2>
      <ul>
        <li>Be available at the scheduled pickup address during the pickup window</li>
        <li>Keep fabric properly packed and ready for handover when providing your own fabric</li>
        <li>Ensure the pickup and delivery addresses provided in the app are accurate</li>
      </ul>

      <h2>Delivery requirements</h2>
      <ul>
        <li>Be available to receive the finished garment at the delivery address</li>
        <li>Inspect the garment upon receipt and report issues promptly through the app</li>
        <li>
          After stitching approval, you may choose immediate delivery or schedule a specific
          date where supported
        </li>
      </ul>

      <h2>Tracking</h2>
      <p>
        Pickup and delivery stages can be tracked through the ApneTailor app where supported.
        Status updates are provided as the logistics workflow progresses.
      </p>

      <h2>Stuck or delayed orders</h2>
      <p>
        If a pickup, delivery, or order appears delayed, inactive, or otherwise stuck,
        authorized ApneTailor personnel may intervene and update order or logistics statuses as
        reasonably necessary to keep the workflow accurate and to help resolve the issue.
      </p>

      <h2>Availability during pickup or delivery</h2>
      <p>
        If the customer or tailor is unavailable during a scheduled pickup or delivery, it may
        affect the order timeline. Specific rescheduling rules and any applicable charges are
        subject to operational policy. Contact support for assistance.
      </p>

      <h2>Service area</h2>
      <p>{siteConfig.expansionWording} Pickup and delivery availability depends on your location.</p>

      <h2>Related resources</h2>
      <ul>
        <li>
          <Link href="/how-it-works/">How It Works</Link>
        </li>
        <li>
          <Link href="/faq/">FAQ</Link>
        </li>
        <li>
          <Link href="/blog/how-does-doorstep-pickup-and-delivery-work-for-tailoring/">
            Guide: Doorstep pickup and delivery
          </Link>
        </li>
      </ul>

      <h2>Contact</h2>
      <p>
        For pickup or delivery issues:{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
      </p>
    </LegalPageLayout>
  );
}
