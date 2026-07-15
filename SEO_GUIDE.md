# SEO Guide

## Principles

SEO is built into the architecture — pre-rendered HTML, unique metadata, clean URLs, structured data, and intentional internal linking.

## URL conventions

- Trailing slashes on all routes (`trailingSlash: true` in `next.config.ts`)
- Lowercase, hyphenated slugs
- Canonical domain: `https://apnetailor.com`

## Metadata

Use `createMetadata()` from `lib/seo/metadata.ts` on every indexable page:

```typescript
export const metadata = createMetadata({
  title: "Page Title",
  description: "Unique description under ~160 characters.",
  path: "/your-page/"
});
```

## Sitemap

- Generated at build time: `app/sitemap.ts`
- Includes static routes from `lib/seo/urls.ts` plus indexable blog articles
- Submit `https://apnetailor.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools

## Robots

- `app/robots.ts` allows public content, disallows `/api/`
- Does not block AI crawlers by default

## Structured data

Centralized in `lib/schema/index.ts`:

- **Organization + WebSite** — global (layout)
- **BreadcrumbList** — service and article pages
- **Article** — blog posts
- **Service** — garment pages

Do not add AggregateRating or Review schema without real eligible data.

## Internal linking

Connect articles to relevant service pages, How It Works, FAQ, and support pages contextually. Avoid keyword-stuffed footers.

## Post-launch monitoring

1. Verify ownership in Search Console and Bing
2. Submit sitemap
3. Inspect key URLs (homepage, services, blog)
4. Monitor coverage, crawl errors, and Core Web Vitals
5. Review Search Console enhancement reports for structured data

## Verification tokens

Do not commit verification tokens. Add meta tags or DNS records through Cloudflare/hosting settings when ready.
