# Deployment

## Target

**Cloudflare Pages** from GitHub. Static export only — no Node.js server at runtime.

## Build settings

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Build output directory | `out` |
| Node.js version | 22+ |
| Framework preset | Next.js (Static HTML Export) |

## Local build verification

```bash
npm install
npm run check
npm run build
npx serve out
```

Review at `http://localhost:3000` before any deployment.

## Prerequisites

1. GitHub repository with this codebase
2. Cloudflare account with Pages enabled
3. Domain `apnetailor.com` DNS managed in Cloudflare (user handles this)
4. Final Google Play Store URL added to `lib/config/site.ts` before launch CTA goes live

## Deployment steps (after explicit approval)

1. Push approved branch to GitHub
2. Connect repository in Cloudflare Pages
3. Configure build command and output directory as above
4. Deploy preview first; review all critical routes
5. Assign custom domain
6. Verify `_headers` are applied (check response headers)
7. Submit sitemap to Search Console and Bing

## Rollback

Cloudflare Pages retains deployment history. Roll back to a previous successful deployment from the dashboard if a release has issues.

## What not to do

- Do not deploy automatically from this project
- Do not modify DNS without explicit approval
- Do not commit verification tokens or API keys

## Environment variables

V1 requires no runtime environment variables for the static site. If analytics or IndexNow keys are added later, configure them in Cloudflare Pages environment settings — never commit secrets.
