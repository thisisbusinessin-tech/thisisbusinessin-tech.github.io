import { createMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";

export const metadata = createMetadata({
  title: "Review Policy",
  description: "How ApneTailor handles customer reviews and content review standards.",
  path: "/review-policy/"
});

export default function ReviewPolicyPage() {
  return (
    <section className="section-padding">
      <div className="container-narrow prose-content text-neutral-700">
        <h1>Review Policy</h1>
        <h2>Customer reviews in the app</h2>
        <p>
          ApneTailor&apos;s mobile application includes a rating and review system tied to
          completed orders. Reviews on the website will only be displayed when connected to
          a verified data source from completed orders. We do not fabricate review data on
          the website.
        </p>
        <h2>Website review display</h2>
        <p>
          The ApneTailor website does not currently display customer reviews or aggregate
          ratings. When a verified public review data source becomes available, reviews
          displayed on the website will be tied to genuine completed-order experiences.
        </p>
        <h2>Content review standards</h2>
        <p>
          Editorial content on this website is reviewed for accuracy and usefulness. A
          named reviewer may be credited on an article only when that person has genuinely
          reviewed the content.
        </p>
        <h2>Reporting issues</h2>
        <p>
          To report concerns about reviews or content, contact{" "}
          <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
        </p>
      </div>
    </section>
  );
}
