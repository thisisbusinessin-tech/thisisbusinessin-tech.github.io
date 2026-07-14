# ApneTailor Website Research Summary

## 1. Workspace And Safety Confirmation
- Working directory confirmed: `C:\Users\furio\Downloads\Apne Tailor Website`
- Research and planning were limited to this workspace plus approved public web resources.
- No `.env` files, secret material, or out-of-scope local directories were accessed.

## 2. Executive Summary
- ApneTailor should launch as a static-first, customer-facing website focused on trust, clarity, and app-download conversion rather than a generic landing page.
- The best-fit architecture for V1 is `Next.js App Router + TypeScript + static export` deployed to `Cloudflare Pages`, provided all routes remain build-time renderable.
- Search visibility should come from truthful service pages, strong information architecture, helpful editorial content, and clean technical SEO rather than AI-optimization gimmicks.
- The strongest commercial content opportunities center on `online tailoring`, `clothes stitching from home`, `doorstep tailoring`, `blouse stitching`, `measurement help`, `pricing clarity`, and `wedding/occasion wear`.

## 3. Public Legal Surface Review
Reviewed:
- `https://apnetailor.com/privacy-policy/`
- `https://apnetailor.com/terms/`
- `https://apnetailor.com/data-compliance/`
- `https://apnetailor.com/delete-accounts/`

Key takeaways:
- Privacy and compliance copy already supports sharing limited information with tailors, logistics partners, and service providers where necessary.
- Security wording is appropriately cautious: it promises reasonable safeguards, not absolute safety.
- Refund language is intentionally case-by-case and should not be tightened into hard guarantees without explicit approval.
- Account deletion currently states a pending deletion state of up to 30 days, followed by deletion or anonymization with some retained legal/operational records.
- Terms state delivery dates are estimates and may vary; the website must avoid hard delivery guarantees.

Implications for the new website:
- Preserve the existing legal URLs exactly:
  - `/privacy-policy/`
  - `/terms/`
  - `/data-compliance/`
  - `/delete-accounts/`
- Preserve legal meaning; redesign for readability without silently changing obligations.
- Additional policy pages such as refund/cancellation and pickup/delivery should be clearly marked as draft if they require business rules not yet provided.

## 4. Platform And Deployment Research
Sources reviewed:
- Next.js static export documentation
- Cloudflare Pages static Next.js guidance
- Cloudflare Workers Next.js guidance

Current recommendation:
- Use `Next.js` App Router with `output: 'export'` for V1.
- Use `Cloudflare Pages` with:
  - Build command: `npx next build`
  - Output directory: `out`
  - Framework preset: `Next.js (Static HTML Export)`

Why this fits:
- The website is intentionally static-first.
- V1 does not require authentication, dashboards, web ordering, or a custom backend.
- Pre-rendered HTML supports SEO, accessibility, low cost, and small attack surface.

Important constraints:
- All routes must be known at build time.
- Dynamic content must come from repository content, not request-time logic.
- Unsupported for this mode: request-aware route handlers, server actions, ISR, cookies-based personalization, rewrites/redirects that depend on runtime behavior, and default `next/image` optimization.

Decision:
- Stay on `Cloudflare Pages + static export` unless a later approved feature genuinely requires server runtime capabilities.

## 5. Technical SEO And AI Discoverability Research
Sources reviewed:
- Google Search documentation on AI features, AI optimization, structured data, robots, and sitemaps
- Bing Webmaster Guidelines and Bing sitemap guidance
- `llms.txt` proposal materials

Confirmed best practices:
- Google and Bing still reward the same fundamentals for AI-era discoverability:
  - crawlable HTML
  - clear internal linking
  - canonical URLs
  - fast pages
  - helpful original content
  - accurate structured data
- There is no special Google-only AI markup requirement.
- `FAQPage` rich-result value is effectively gone for ordinary commercial sites; FAQ content should remain for users, not SERP gimmicks.
- `llms.txt` is optional and experimental, not a standard ranking mechanism.

Implementation implications:
- Treat AI discoverability as a by-product of strong SEO, clear entity information, and question-led content.
- Generate `robots.txt` and `sitemap.xml` at build time.
- Include only canonical, indexable, non-redirecting URLs in the sitemap.
- Use JSON-LD only when supported by visible page content.
- Prioritize schema types with clear value:
  - `Organization`
  - `WebSite`
  - `BreadcrumbList`
  - `Service`
  - `Person` for real founders where appropriate
  - `Article` or `BlogPosting`
  - `VideoObject` only when genuine public video pages are added
- Evaluate `llms.txt` as a supplemental machine-readable file, not a dependency.

## 6. Content And Search-Intent Research
Highest-priority content themes identified:

### Transactional / Commercial
1. Online tailoring / tailoring from home
2. Doorstep tailoring / pickup and delivery tailoring
3. Blouse stitching and designer blouse needs
4. Measurement help and fit reassurance
5. Transparent pricing explanations

### High-Value Supporting Themes
1. Wedding and occasion wear planning
2. Women’s ethnic garment guidance
3. Men’s garment pages for currently supported categories
4. Trust, process, tracking, and fabric-handling reassurance

Recurring customer questions:
- How does ApneTailor work from home?
- How do I send measurements and design references?
- What if I already have fabric?
- What if the tailor provides the fabric?
- Can I track pickup, stitching progress, and delivery?
- How do I know which garments are currently supported?
- What affects stitching prices?
- What if I need changes during the process?
- Is ApneTailor available in my city?
- How do refunds, cancellations, and account deletion work?

Strategic takeaway:
- The website should lead with service clarity and trust, then expand into question-led editorial content that reduces friction before app download.

## 7. Design Reference Principles
User-provided references indicate two complementary directions:

### Studio Dialect Principles To Borrow
- Creative minimalism
- Custom-feeling transitions
- Unconventional but lightweight reveals
- Marquee-style movement
- Deliberate visual experimentation

### Zomato Principles To Borrow
- Mature public-web information architecture
- Clear navigation
- Strong footer and legal architecture
- Professional, scalable content organization

Design direction synthesis:
- Premium, calm, modern, dark-blue-and-white base
- Original composition with restrained motion
- Immediate content visibility
- No loading screen
- No heavy visual effects that delay usability

## 8. Information Architecture Direction
Recommended indexable core pages:
- `/`
- `/how-it-works/`
- `/services/`
- `/services/women/`
- `/services/men/`
- `/services/women/suit/`
- `/services/women/saree/`
- `/services/women/kurti/`
- `/services/women/lehenga/`
- `/services/women/blouse/`
- `/services/men/kurta/`
- `/services/men/formal-suit/`
- `/services/men/shirt/`
- `/services/men/sherwani/`
- `/services/men/pant/`
- `/about/`
- `/contact/`
- `/support/`
- `/faq/`
- `/blog/`
- `/blog/[slug]/`
- `/editorial-policy/`
- `/review-policy/`
- `/accessibility-statement/`
- `/security/`
- `/media/`
- `/privacy-policy/`
- `/terms/`
- `/data-compliance/`
- `/delete-accounts/`

Draft-or-review-needed pages:
- `/refund-and-cancellation-policy/`
- `/pickup-and-delivery-policy/`

Non-indexable or conditional:
- Service-area pages should stay non-indexed or uncreated until approved city data exists.
- Review surfaces should remain architecture-only until real public review data exists.

## 9. Initial Editorial Roadmap
Recommended V1 editorial seed set:
1. `How Can I Get Clothes Stitched From Home?`
2. `How Does Online Tailoring Work When You Already Have Fabric?`
3. `How Do I Take Measurements At Home For Custom Stitching?`
4. `What Should You Check Before Giving Fabric To A Tailor?`
5. `How Long Does Custom Stitching Usually Take For Wedding Or Occasion Wear?`
6. `How Do You Choose Between Ready-Made Clothing And Custom Stitching?`

Why this set:
- Covers high-friction customer questions.
- Supports homepage, services, FAQ, and trust surfaces.
- Avoids unsupported location claims.
- Connects naturally to the app CTA without reading like SEO spam.

## 10. Dependency Direction
Recommended production dependencies should stay minimal.

Likely acceptable:
- `next`
- `react`
- `react-dom`
- `typescript`
- `tailwindcss` if it improves maintainable design-system implementation
- `gray-matter` or an equivalent lightweight parser only if MD/MDX metadata handling justifies it
- `zod` for content and configuration validation

Likely avoid unless later justified:
- heavy animation libraries
- CMS packages
- runtime databases
- analytics packages
- server middleware packages for static pages

## 11. Performance Budgets
Target budgets for V1:
- JS shipped on the homepage: keep as low as practical; avoid page-level client components
- LCP image or hero media: optimized and dimensioned; no autoplay background video
- Font families: at most 2 families, limited weights
- Above-the-fold content: meaningful HTML immediately, no blocker overlay
- Decorative effects: lazy-loaded or CSS-first; removable under reduced-motion conditions

Operational targets:
- Fast first paint on common mobile connections
- No major layout shifts
- No heavy third-party embeds above the fold
- Strong Lighthouse results without gaming audits

## 12. Security Direction
V1 security posture should match a static site:
- minimize dependencies
- keep lockfile committed
- avoid secrets entirely
- use safe external-link handling
- design a realistic CSP
- document Cloudflare header configuration
- validate repository content before rendering
- avoid arbitrary HTML execution from content files

Headers to document for deployment:
- `Content-Security-Policy`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`
- `X-Frame-Options` or `frame-ancestors` via CSP
- HSTS guidance at deployment level

## 13. Open Facts Requiring User Approval Or Later Input
1. Final Google Play Store URL for the user app
2. Approved public service-area list
3. Approved social-profile URLs, if any
4. Any richer founder biographies or founding story details
5. Finalized business rules for refund/cancellation and pickup/delivery policies
6. Any approved public video or screenshot assets to use as real product evidence
7. Any approved public review source for future website review integration

## 14. First Major Build Phase Recommendation
Phase 1 implementation after plan approval should cover:
- project foundation and static export setup
- typed site configuration
- design tokens and global layout
- metadata system
- homepage
- header, footer, mobile navigation
- how-it-works page
- services hub and garment pages
- about, contact, support, and FAQ pages
- legal page integration and draft policy placeholders
- sitemap, robots, schema foundation, and core documentation

## 15. Recommendation
- Proceed with a static-first `Next.js App Router` website on `Cloudflare Pages`.
- Use a design system that feels premium and original, but keeps content instantly accessible.
- Lead with trust, process clarity, and garment/category specificity.
- Use a small, high-quality editorial seed set instead of publishing many weak pages.
- Hold implementation of speculative claims, public locations, reviews, and hard policy promises until approved facts are available.
