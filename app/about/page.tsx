import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";

export const metadata = createMetadata({
  title: "About ApneTailor",
  description:
    "Learn why ApneTailor exists, the customer problem it solves, and the people behind the platform.",
  path: "/about/"
});

export default function AboutPage() {
  return (
    <section className="section-padding">
      <div className="container-site max-w-3xl">
        <h1 className="mb-6">About ApneTailor</h1>

        <div className="prose-content text-neutral-700">
          <p className="page-intro">
            ApneTailor is a technology-enabled tailoring platform that connects customers with
            nearby verified tailors and coordinates the entire stitching workflow — from
            measurements and fabric logistics to progress tracking and doorstep delivery.
          </p>

          <h2>The problem we solve</h2>
          <p>
            Custom tailoring in India often means visiting multiple tailors, explaining your
            design repeatedly, making trips for measurements, fabric drop-off, progress checks,
            and final collection. For busy people preparing for weddings, festivals, or everyday
            wear, this process takes more time than it should.
          </p>
          <p>
            ApneTailor brings the entire tailoring experience online. You place a stitching order
            from home, connect with skilled local tailors, track every stage, and receive your
            finished garment at your doorstep.
          </p>

          <h2>What we offer</h2>
          <ul>
            <li>Custom stitching from home for supported garment categories</li>
            <li>Connection with verified local tailors in your area</li>
            <li>Transparent pricing and expected completion dates before you commit</li>
            <li>Doorstep pickup and delivery coordination</li>
            <li>Stitching progress visibility through the app</li>
            <li>In-app communication with your tailor</li>
            <li>Secure payment processing</li>
          </ul>

          <h2>Our founders</h2>
          <p>
            ApneTailor was founded by{" "}
            {siteConfig.founders.map((f) => f.name).join(" and ")}.
          </p>

          <h2>Where we operate</h2>
          <p>{siteConfig.expansionWording}</p>

          <h2>Get in touch</h2>
          <p>
            For support, reach us at{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
            Visit our <Link href="/contact/">contact page</Link> for more ways to connect.
          </p>
        </div>
      </div>
    </section>
  );
}
