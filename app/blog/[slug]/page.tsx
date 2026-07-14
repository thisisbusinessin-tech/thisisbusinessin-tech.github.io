import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/config/site";
import { getArticleBySlug, getArticleSlugs } from "@/content/blog";
import { AppDownloadButton } from "@/components/ui/AppDownloadButton";
import type { Article } from "@/lib/validation/content";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return createMetadata({
    title: article.title,
    description: article.description,
    path: article.canonicalPath,
    ogType: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt
  });
}

function renderContent(article: Article) {
  return article.content.map((block, i) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p key={i} className="leading-relaxed">
            {block.text}
          </p>
        );
      case "heading":
        if (block.level === 2) return <h2 key={i}>{block.text}</h2>;
        if (block.level === 3) return <h3 key={i}>{block.text}</h3>;
        return <h2 key={i}>{block.text}</h2>;
      case "list":
        return (
          <ul key={i}>
            {block.items?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.domain },
            { name: "Guides", url: `${siteConfig.domain}/blog/` },
            { name: article.title, url: `${siteConfig.domain}${article.canonicalPath}` }
          ]),
          articleSchema({
            title: article.title,
            description: article.description,
            url: `${siteConfig.domain}${article.canonicalPath}`,
            publishedAt: article.publishedAt,
            updatedAt: article.updatedAt
          })
        ]}
      />

      <article className="section-padding">
        <div className="container-narrow">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 mb-6">
            <Link href="/" className="no-underline hover:underline">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/blog/" className="no-underline hover:underline">Guides</Link>
            <span aria-hidden="true"> / </span>
            <span>{article.title}</span>
          </nav>

          <header className="mb-10">
            <p className="text-xs text-brand-600 font-semibold uppercase tracking-wider mb-3">
              {article.category}
            </p>
            <h1 className="mb-4">{article.title}</h1>
            <p className="text-sm text-neutral-500">
              Written by {article.author} · Published {article.publishedAt}
              {article.updatedAt !== article.publishedAt && ` · Updated ${article.updatedAt}`}
            </p>
          </header>

          <div className="prose-content text-neutral-700">{renderContent(article)}</div>

          {article.apneTailorConnection && (
            <div className="mt-10 p-6 bg-brand-50 rounded-xl border border-brand-100">
              <h2 className="text-lg mb-2">How ApneTailor can help</h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {article.apneTailorConnection}
              </p>
              <div className="mt-4">
                <AppDownloadButton />
              </div>
            </div>
          )}

          {article.faqs.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl mb-6">Related questions</h2>
              <div className="space-y-3">
                {article.faqs.map((faq) => (
                  <details key={faq.question} className="card">
                    <summary className="cursor-pointer font-medium text-brand-800 list-none">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <section className="mt-12 p-6 bg-neutral-50 rounded-xl">
            <h2 className="text-lg mb-3">TL;DR</h2>
            <p className="text-neutral-700 text-sm leading-relaxed">{article.tldr}</p>
          </section>
        </div>
      </article>
    </>
  );
}
