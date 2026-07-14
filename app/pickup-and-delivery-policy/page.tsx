import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";

export const metadata = createMetadata({
  title: "Pickup and Delivery Policy",
  description:
    "ApneTailor pickup and delivery policy — how fabric pickup and garment delivery work.",
  path: "/pickup-and-delivery-policy/"
});

export default function PickupDeliveryPolicyPage() {
  return (
    <section className="section-padding">
      <div className="container-narrow prose-content text-neutral-700">
        <h1>Pickup and Delivery Policy</h1>
        <p className="text-sm text-neutral-500 -mt-2 mb-4">Last Updated: July 2026</p>

        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg mb-8 text-sm text-amber-900">
          <strong>Draft — Pending Review:</strong> Specific operational rules such as
          rescheduling fees, penalty charges, and availability windows require final business
          approval.
        </div>

        <p>
          ApneTailor coordinates pickup and delivery through integrated logistics partners.
          This page explains the general pickup and delivery process.
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
      </div>
    </section>
  );
}
