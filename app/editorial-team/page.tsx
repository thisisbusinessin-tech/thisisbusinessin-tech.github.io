import { createMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";

export const metadata = createMetadata({
  title: "Editorial Team",
  description:
    "Learn about the ApneTailor Editorial Team and how our guides and articles are created.",
  path: "/editorial-team/"
});

export default function EditorialTeamPage() {
  return (
    <section className="section-padding">
      <div className="container-narrow prose-content text-neutral-700">
        <h1>ApneTailor Editorial Team</h1>
        <p>
          Articles and guides on the ApneTailor website are attributed to the ApneTailor
          Editorial Team. This is the team responsible for researching, writing, and
          maintaining the educational content published on apnetailor.com.
        </p>
        <h2>What this means</h2>
        <p>
          The ApneTailor Editorial Team creates content to help customers understand tailoring
          processes, garment preparation, measurements, fabric choices, and how online tailoring
          platforms work. Content is written in plain English and focused on answering genuine
          customer questions.
        </p>
        <h2>Our approach</h2>
        <ul>
          <li>Every article targets a real customer question or search intent</li>
          <li>Articles lead with a direct answer, not filler introductions</li>
          <li>We distinguish facts from recommendations clearly</li>
          <li>We do not fabricate expertise, statistics, or first-hand experience</li>
          <li>We connect content to ApneTailor only when genuinely relevant</li>
          <li>Articles include related FAQs and a TL;DR summary</li>
        </ul>
        <h2>Reviewers</h2>
        <p>
          A reviewer may be listed on an article only when a specific person has genuinely
          reviewed that content. Reviewers are not automatically assigned to every article.
        </p>
        <h2>Corrections</h2>
        <p>
          If you find an error in our content, please contact us at{" "}
          <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
          See our <a href="/editorial-policy/">Editorial Policy</a> for more details.
        </p>
      </div>
    </section>
  );
}
