# Architecture

## Overview

ApneTailor Website V1 is a **static-first**, content-driven Next.js site. There is no custom application backend, database, or CMS.

```
content/          Repository content (articles, FAQs, service areas)
lib/              Config, SEO utilities, schema.org helpers, validation
components/       Layout, UI, SEO components
app/              App Router pages (static generation)
public/           Static assets, feed.xml, llms.txt, _headers
scripts/          Build-time generators and validators
```

## Rendering model

- **Default:** Server Components, statically generated at build time
- **Output:** `next build` with `output: "export"` produces the `out/` directory
- **Client JS:** Minimal — mobile nav uses native `<details>`, FAQs use `<details>`, no page-level `"use client"`
- **Images:** `images.unoptimized: true` for static export compatibility

## Content flow

1. Content authored in TypeScript files under `content/`
2. Zod schemas in `lib/validation/content.ts` validate at import/parse time
3. `scripts/validate-content.mjs` runs additional structural checks
4. Pages import content and render pre-rendered HTML

## SEO infrastructure

- `lib/seo/metadata.ts` — page metadata factory
- `lib/seo/urls.ts` — indexable static routes
- `app/sitemap.ts` — static routes + blog articles
- `app/robots.ts` — crawler policy
- `lib/schema/index.ts` — JSON-LD generators
- `public/llms.txt` — machine discovery aid
- `scripts/generate-feed.mjs` — RSS feed at build time

## Deployment target

Cloudflare Pages from GitHub. Security headers configured via `public/_headers`.

## Future extension points

- App download URL (centralized in `lib/config/site.ts`)
- Service area pages (when approved in `content/service-areas/`)
- Verified reviews API integration (architecture reserved, no fake data)
- Analytics (configuration documented, not loaded in V1)
- City waitlist (documented, not implemented)
