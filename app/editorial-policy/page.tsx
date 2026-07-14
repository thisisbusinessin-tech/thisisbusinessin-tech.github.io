import { createMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";

export const metadata = createMetadata({
  title: "Editorial Policy",
  description: "ApneTailor's editorial standards for guides, articles, and educational content.",
  path: "/editorial-policy/"
});

export default function EditorialPolicyPage() {
  return (
    <section className="section-padding">
      <div className="container-narrow prose-content text-neutral-700">
        <h1>Editorial Policy</h1>
        <p>
          This policy describes how ApneTailor creates, maintains, and corrects educational
          content published on apnetailor.com.
        </p>
        <h2>Purpose</h2>
        <p>
          Our editorial content exists to help customers understand tailoring processes,
          make informed decisions, and find practical answers to common questions. Content
          is not created primarily for search engine rankings.
        </p>
        <h2>Standards</h2>
        <ul>
          <li>Content must address a genuine user need or question</li>
          <li>Articles must lead with a direct, useful answer</li>
          <li>Claims must be accurate and supported where factual evidence is required</li>
          <li>We do not fabricate statistics, research, citations, or expertise</li>
          <li>We do not copy competitor content</li>
          <li>Promotional content about ApneTailor is included only when contextually relevant</li>
          <li>Publication and update dates reflect actual content changes</li>
        </ul>
        <h2>Authorship</h2>
        <p>
          Default authorship is attributed to the ApneTailor Editorial Team. Individual
          reviewers are listed only when they have genuinely reviewed the article.
        </p>
        <h2>Corrections</h2>
        <p>
          If you identify an error, contact{" "}
          <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
          We review correction requests and update content with accurate information and
          meaningful update dates.
        </p>
      </div>
    </section>
  );
}
