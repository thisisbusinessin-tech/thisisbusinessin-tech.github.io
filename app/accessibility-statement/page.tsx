import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";

export const metadata = createMetadata({
  title: "Accessibility Statement",
  description:
    "ApneTailor's commitment to web accessibility and how we work toward WCAG 2.2 AA compliance.",
  path: "/accessibility-statement/"
});

export default function AccessibilityStatementPage() {
  return (
    <section className="section-padding">
      <div className="container-narrow prose-content text-neutral-700">
        <h1>Accessibility Statement</h1>
        <p className="text-sm text-neutral-500 -mt-2 mb-8">Last Updated: July 2026</p>

        <p>
          ApneTailor is committed to making its website accessible to people with disabilities.
          We aim to conform to WCAG 2.2 Level AA where reasonably applicable.
        </p>

        <h2>Accessibility measures</h2>
        <p>This website includes the following accessibility features:</p>
        <ul>
          <li>Semantic HTML with logical heading hierarchy</li>
          <li>Keyboard navigation support with visible focus states</li>
          <li>Skip-to-main-content link</li>
          <li>Descriptive alternative text for meaningful images</li>
          <li>Sufficient color contrast for text and interactive elements</li>
          <li>Touch-friendly tap targets on mobile devices</li>
          <li>Reduced-motion support via <code>prefers-reduced-motion</code></li>
          <li>Accessible mobile navigation</li>
          <li>Screen-reader-friendly landmarks and labels</li>
        </ul>

        <h2>Known limitations</h2>
        <p>
          As a new website, some areas may not yet meet all accessibility standards. We are
          actively working to identify and address accessibility issues.
        </p>

        <h2>Feedback and assistance</h2>
        <p>
          If you encounter accessibility barriers on this website or need assistance accessing
          any content, please contact us at{" "}
          <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>. We will
          make reasonable efforts to provide the information in an alternative format.
        </p>

        <h2>Assessment approach</h2>
        <p>
          Accessibility is evaluated through automated tooling, manual keyboard navigation
          review, and responsive layout testing. We continue to improve accessibility as the
          website evolves.
        </p>

        <h2>Related resources</h2>
        <ul>
          <li>
            <Link href="/contact/">Contact</Link>
          </li>
          <li>
            <Link href="/support/">Support</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
