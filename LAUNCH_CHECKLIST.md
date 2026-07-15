# Launch Checklist

## Pre-launch (code)

- [x] Static export builds successfully
- [x] Typecheck, lint, content validation pass
- [x] 42 static pages generated
- [x] Sitemap and robots.txt present
- [x] Legal routes preserved (`/privacy-policy/`, `/terms/`, `/data-compliance/`, `/delete-accounts/`)
- [x] 6 seed blog articles with question-led pattern
- [x] llms.txt and RSS feed
- [x] Security headers documented (`public/_headers`)
- [ ] **User:** Add real Google Play Store URL to `lib/config/site.ts`
- [ ] **User:** Review draft policies marked for approval (refund, pickup/delivery)
- [ ] **User:** Confirm service area claims before adding cities
- [ ] **User:** Supply app screenshots/videos for product evidence sections (optional enhancement)

## Pre-launch (review)

- [ ] Localhost review on mobile and desktop
- [ ] Legal review of policy pages
- [ ] Verify support email links work
- [ ] Manual keyboard and reduced-motion check
- [ ] Lighthouse audit on homepage and one article

## Deployment (after explicit approval)

- [ ] Push to GitHub
- [ ] Connect Cloudflare Pages
- [ ] Deploy preview environment
- [ ] Verify custom domain and HTTPS
- [ ] Confirm security headers in production
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Request indexing for homepage and key pages

## Post-launch

- [ ] Monitor Search Console coverage
- [ ] Monitor Core Web Vitals
- [ ] Track crawl errors weekly for first month
- [ ] Add new articles per content roadmap

## Open items requiring user input

1. Google Play Store URL
2. Approved service area list
3. Refund policy business rules finalization
4. Public app screenshots and demo videos
5. Verified reviews API (future)
