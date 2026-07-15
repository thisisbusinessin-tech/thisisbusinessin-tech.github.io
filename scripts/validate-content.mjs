import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

function read(path) {
  return readFileSync(join(root, path), "utf8");
}

const errors = [];

const blog = read("content/blog/index.ts");
const articleSlugs = [...blog.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const canonicalPaths = [...blog.matchAll(/canonicalPath:\s*"([^"]+)"/g)].map((m) => m[1]);

if (new Set(articleSlugs).size !== articleSlugs.length) {
  errors.push("Duplicate article slugs detected in content/blog/index.ts");
}

for (const path of canonicalPaths) {
  if (!path.startsWith("/blog/") || !path.endsWith("/")) {
    errors.push(`Invalid canonical path (must start with /blog/ and end with /): ${path}`);
  }
}

const urls = read("lib/seo/urls.ts");
const indexableRoutes = [...urls.matchAll(/"(\/[^"]*)"/g)].map((m) => m[1]);

for (const path of indexableRoutes) {
  if (path !== "/" && !path.endsWith("/")) {
    errors.push(`Indexable route missing trailing slash: ${path}`);
  }
}

for (const slug of articleSlugs) {
  const articlePath = `/blog/${slug}/`;
  if (!blog.includes(`canonicalPath: "${articlePath}"`)) {
    errors.push(`Article slug/canonicalPath mismatch for slug: ${slug}`);
  }
}

const faqs = read("content/faqs/index.ts");
const faqIds = [...faqs.matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1]);
if (new Set(faqIds).size !== faqIds.length) {
  errors.push("Duplicate FAQ ids detected");
}

if (errors.length > 0) {
  console.error("Content validation failed:\n");
  for (const error of errors) {
    console.error(`  - ${error}`);
  }
  process.exit(1);
}

console.log(
  `Content validation passed (${articleSlugs.length} articles, ${faqIds.length} FAQs, ${indexableRoutes.length} indexable routes).`
);
