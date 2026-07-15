# Content Guide

## Adding a blog article

1. Open `content/blog/index.ts`
2. Add a new article object following the existing pattern
3. Required fields: `slug`, `title`, `primaryQuestion`, `description`, dates, `author`, `category`, `canonicalPath`, `content`, `faqs`, `tldr`
4. Follow the mandatory article pattern:
   - Question-led title
   - Direct answer in the first paragraph
   - Detailed explanation body
   - Contextual ApneTailor connection (only when relevant)
   - FAQ section
   - TL;DR at the bottom
5. Run `npm run validate:content` and `npm run build`
6. Update `scripts/generate-feed.mjs` article list (or refactor to shared source later)

## Article metadata rules

- `canonicalPath` must be `/blog/{slug}/` with trailing slash
- `indexable: false` for drafts; do not add to sitemap via `indexable`
- Use accurate `publishedAt` and `updatedAt` dates
- Default author: **ApneTailor Editorial Team**
- Add `reviewer` only when a real person reviewed the article

## Updating FAQs

Edit `content/faqs/index.ts`. Set `needsReview: true` for answers requiring business/legal approval.

## Updating service availability

Edit `content/service-areas/index.ts`. Only add indexable cities when:

1. ApneTailor genuinely serves the location
2. The location is approved for public listing
3. The page will contain unique, useful local content

## Updating the app download URL

In `lib/config/site.ts`:

```typescript
appDownload: {
  url: "https://play.google.com/store/apps/details?id=YOUR_ID",
  status: "live",
  label: "Download the ApneTailor App",
  placeholderMessage: "..."
}
```

## Images

Place assets in `public/`. Use descriptive alt text. Optimize before commit.

## Preview locally

```bash
npm run dev
```

Visit the new route and confirm metadata, headings, internal links, and mobile layout.
