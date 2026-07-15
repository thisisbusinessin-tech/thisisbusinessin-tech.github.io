# AI Discovery

## Goal

Make ApneTailor easy for compatible AI systems to crawl, understand, cite, and accurately describe — without deceptive optimization.

## Implemented

| Asset | Location | Purpose |
|-------|----------|---------|
| Semantic HTML | All pages | Clear structure for crawlers |
| JSON-LD | `lib/schema/index.ts` | Organization, WebSite, Article, Service, BreadcrumbList |
| llms.txt | `public/llms.txt` | Machine-readable site map and entity summary |
| RSS feed | `public/feed.xml` | Editorial content syndication |
| Question-led articles | `content/blog/` | Direct-answer content pattern |
| Authorship transparency | Editorial team page | Clear attribution |

## llms.txt

Available at `/llms.txt`. This is an optional discovery aid, not a ranking mechanism. Update when major pages or policies change.

## Limitations

- llms.txt adoption varies across AI systems
- No guarantee of AI recommendations or citations
- Do not inject invisible prompts or crawler-specific manipulation

## Maintenance

When adding major pages or changing service scope:

1. Update `public/llms.txt`
2. Update `lib/seo/urls.ts` if indexable
3. Confirm sitemap includes new routes
4. Keep entity information consistent with `lib/config/site.ts`

## Markdown representations

Not implemented in V1. If added later, derive from the same content source as HTML to avoid duplication.
