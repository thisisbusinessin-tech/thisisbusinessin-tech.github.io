# Changelog

## 2026-07-15

### Added
- Complete static website with 42 pre-rendered pages
- Homepage with hero, process explanation, garment marquee, trust section, FAQ preview
- How It Works, About, Contact, Support, FAQ pages
- Services hub with women's/men's categories and 10 individual garment pages
- Blog with 6 seed articles following question-led editorial pattern
- Legal pages: Privacy, Terms, Data Compliance, Account Deletion
- Policy pages: Refund & Cancellation, Pickup & Delivery, Editorial, Review, Accessibility, Security, Media
- Editorial team page
- SEO: sitemap, robots.txt, JSON-LD, canonical metadata
- AI discovery: llms.txt, RSS feed
- Design system: dark blue/white brand tokens, Tailwind 4, responsive layout
- Documentation: README, ARCHITECTURE, CONTENT_GUIDE, SEO_GUIDE, AI_DISCOVERY, SECURITY, DEPLOYMENT, TESTING, BACKLINK_STRATEGY, LAUNCH_CHECKLIST
- Content validation script and smoke tests
- Cloudflare security headers via `public/_headers`
- Favicon (`app/icon.svg`)

### Fixed
- TypeScript/ESLint toolchain compatibility (TS 5.8, ESLint 9)
- FAQ schema validation via Zod parse
- Removed unused `lucide-react` dependency

### Known placeholders
- App download URL (intentional placeholder until Play Store link provided)
- Service areas (empty — expansion wording only)
- Product screenshots/videos (not yet supplied)
