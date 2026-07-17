import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { getAllArticles } from "@/content/blog";

export const metadata = createMetadata({
  title: "Guides & Articles",
  description:
    "Practical guides and articles about custom tailoring, measurements, fabric, and the stitching process from ApneTailor.",
  path: "/blog/"
});

export default function BlogIndexPage() {
  const articles = getAllArticles();

  return (
    <section className="section-padding">
      <div className="container-site">
        <h1 className="mb-4">Guides &amp; articles</h1>
        <p className="page-intro max-w-2xl mb-4">
          Practical answers to common tailoring questions. Each article is written to help you
          understand the process and make informed decisions.
        </p>
        <p className="text-sm text-neutral-500 mb-10">
          <a href="/feed.xml" className="font-medium">
            Subscribe via RSS
          </a>
        </p>

        <ul className="grid gap-6 max-w-3xl">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/blog/${article.slug}/`}
                className="surface-panel block p-6 no-underline transition-colors"
              >
                <p className="text-xs text-brand-600 font-semibold uppercase tracking-wider mb-2">
                  {article.category}
                </p>
                <h2 className="mb-2 text-[1.35rem]">{article.title}</h2>
                <p className="leading-7 text-neutral-600">{article.description}</p>
                <p className="text-xs text-neutral-400 mt-3">
                  {article.publishedAt} · {article.author}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
