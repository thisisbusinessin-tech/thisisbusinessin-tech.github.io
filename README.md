# ApneTailor Website

Official customer-facing website for [ApneTailor](https://apnetailor.com) — a technology-enabled tailoring platform connecting customers with nearby verified tailors.

**Tagline:** Chahiye darji? Done ji.

## Stack

- Next.js 16 (App Router) + TypeScript
- Static export (`output: "export"`) for Cloudflare Pages
- Tailwind CSS 4
- Repository-based content with Zod validation

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development server |
| `npm run build` | Production static export to `out/` |
| `npm run typecheck` | TypeScript check |
| `npm run lint` | ESLint |
| `npm run validate:content` | Content schema and route checks |
| `npm run test` | Unit and export smoke tests |
| `npm run check` | Full pre-review validation |

## Key configuration

- **Site config:** `content/site/config.ts` — brand, founders, app download URL, garments (re-exported via `lib/config/site.ts`)
- **App download URL:** Set `appDownload.url` and change `status` to `"live"` when the Play Store listing is ready
- **Service areas:** `content/service-areas/index.ts` — add cities only when publicly approved
- **Articles:** `content/blog/index.ts`
- **FAQs:** `content/faqs/index.ts`

## Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md)
- [CONTENT_GUIDE.md](./CONTENT_GUIDE.md)
- [SEO_GUIDE.md](./SEO_GUIDE.md)
- [AI_DISCOVERY.md](./AI_DISCOVERY.md)
- [SECURITY.md](./SECURITY.md)
- [DEPLOYMENT.md](./DEPLOYMENT.md)
- [TESTING.md](./TESTING.md)
- [BACKLINK_STRATEGY.md](./BACKLINK_STRATEGY.md)
- [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md)
- [CHANGELOG.md](./CHANGELOG.md)

## Deployment

Do not deploy without explicit approval. See [DEPLOYMENT.md](./DEPLOYMENT.md) for Cloudflare Pages setup.

## Support

support@apnetailor.com
