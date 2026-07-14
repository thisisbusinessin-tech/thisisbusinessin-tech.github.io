import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const siteConfig = {
  domain: "https://apnetailor.com",
  brand: { name: "ApneTailor" }
};

const articles = [
  {
    title: "How Can I Get Clothes Stitched From Home?",
    canonicalPath: "/blog/how-can-i-get-clothes-stitched-from-home/",
    description:
      "Learn how to get custom clothes stitched from home using online tailoring platforms, what to prepare, and what to expect from the process.",
    publishedAt: "2026-07-14",
    author: "ApneTailor Editorial Team"
  },
  {
    title: "How to Take Measurements for Blouse Stitching?",
    canonicalPath: "/blog/how-to-take-measurements-for-blouse-stitching/",
    description:
      "A practical guide to taking accurate blouse measurements at home for custom stitching.",
    publishedAt: "2026-07-14",
    author: "ApneTailor Editorial Team"
  },
  {
    title: "What Is Online Tailoring and How Does It Work?",
    canonicalPath: "/blog/what-is-online-tailoring-and-how-does-it-work/",
    description:
      "Understand what online tailoring means and what to expect from the digital stitching process.",
    publishedAt: "2026-07-14",
    author: "ApneTailor Editorial Team"
  },
  {
    title: "Should I Provide My Own Fabric or Let the Tailor Source It?",
    canonicalPath: "/blog/should-i-provide-my-own-fabric-or-let-the-tailor-source-it/",
    description:
      "Compare the two fabric options in custom tailoring and how each affects the process.",
    publishedAt: "2026-07-14",
    author: "ApneTailor Editorial Team"
  },
  {
    title: "How to Prepare for Wedding Garment Stitching?",
    canonicalPath: "/blog/how-to-prepare-for-wedding-garment-stitching/",
    description:
      "Practical steps to prepare for getting wedding garments custom-stitched.",
    publishedAt: "2026-07-14",
    author: "ApneTailor Editorial Team"
  },
  {
    title: "How Does Doorstep Pickup and Delivery Work for Tailoring?",
    canonicalPath: "/blog/how-does-doorstep-pickup-and-delivery-work-for-tailoring/",
    description:
      "Understand how fabric pickup and finished garment delivery work in online tailoring.",
    publishedAt: "2026-07-14",
    author: "ApneTailor Editorial Team"
  }
];

const buildDate = new Date().toUTCString();

const items = articles
  .map(
    (article) => `    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${siteConfig.domain}${article.canonicalPath}</link>
      <guid isPermaLink="true">${siteConfig.domain}${article.canonicalPath}</guid>
      <description><![CDATA[${article.description}]]></description>
      <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
      <author>${article.author}</author>
    </item>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.brand.name} Guides</title>
    <link>${siteConfig.domain}/blog/</link>
    <description>Editorial guides and articles from ${siteConfig.brand.name}</description>
    <language>en-in</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${siteConfig.domain}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;

writeFileSync(join(root, "public", "feed.xml"), xml, "utf8");
console.log("Generated public/feed.xml");
