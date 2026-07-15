\# APNETAILOR WEBSITE — PROJECT MEMORY



> \*\*Purpose of this file\*\*

>

> This file is the persistent project memory and decision compass for the official ApneTailor website.

>

> Read this file:

>

> 1. at the beginning of every new agent session;

> 2. before planning significant work;

> 3. before making architecture, design, SEO, content, security, accessibility, or dependency decisions;

> 4. after context compaction or when earlier conversation context may have been lost;

> 5. before declaring any phase complete;

> 6. before final project handoff.

>

> This file summarizes the project's permanent goals and critical constraints.

>

> The full Master Implementation Prompt remains the authoritative detailed specification.

>

> If this file conflicts with the Master Implementation Prompt, follow the Master Implementation Prompt and report the conflict.

>

> Do not silently reinterpret, weaken, remove, or overwrite permanent rules in this file.

>

> Only update the \*\*Current Project State\*\*, \*\*Decisions Made During Implementation\*\*, \*\*Open Questions / Blockers\*\*, and \*\*Next Recommended Actions\*\* sections as work progresses.

>

> Never place secrets, credentials, tokens, private keys, `.env` contents, production data, or sensitive information in this file.



\---



\# 1. PROJECT IDENTITY



Official brand name:



\*\*ApneTailor\*\*



Official tagline:



\*\*Chahiye darji? Done ji.\*\*



Public founders:



\* Pushpit Trehan

\* Yugank Trehan



Public support email:



\*\*\[support@apnetailor.com](mailto:support@apnetailor.com)\*\*



Primary brand colors:



\* Dark blue

\* White



Launch language:



\*\*English only\*\*



The architecture should remain clean enough for future internationalization without unnecessarily implementing a full localization system in V1.



\---



\# 2. PROJECT MISSION



Build the official customer-facing website for ApneTailor.



This is a real production business website.



It is not:



\* a prototype;

\* a hackathon project;

\* a generic landing page;

\* a portfolio mockup;

\* a template;

\* a visual experiment;

\* a website built only to pass Lighthouse;

\* a website built only for search engines;

\* a website built only for AI crawlers.



The website must be:



\* professional;

\* trustworthy;

\* premium;

\* fast;

\* mobile-first;

\* responsive;

\* accessible;

\* secure;

\* search-engine-readable;

\* AI-readable;

\* maintainable;

\* content-driven;

\* truthful;

\* visually distinctive;

\* technically sound.



The final public website should make visitors feel that ApneTailor is a serious, genuine, professionally engineered service.



\---



\# 3. PRIMARY BUSINESS GOAL



The primary conversion goal is:



\*\*GET RELEVANT CUSTOMERS TO DOWNLOAD THE APNETAILOR USER APP.\*\*



The website should also:



1\. establish trust;

2\. explain what ApneTailor does;

3\. explain the customer problems ApneTailor solves;

4\. explain how the service works;

5\. educate customers;

6\. build brand authority;

7\. become discoverable through Google and other search engines;

8\. build long-term topical authority around relevant tailoring problems;

9\. become easy for compatible AI systems to crawl, understand, cite, and accurately describe;

10\. support high-quality editorial content;

11\. earn legitimate backlinks and external mentions over time;

12\. provide clear support and policy information;

13\. create a strong technical foundation for future expansion.



Never optimize vanity metrics at the expense of users.



Never use deceptive SEO or AI-discovery techniques.



\---



\# 4. WHAT APNETAILOR DOES



ApneTailor is a technology-enabled tailoring platform connecting customers with nearby tailors and coordinating the stitching workflow.



At a public, customer-understandable level, the flow includes:



1\. customer chooses a supported garment category;

2\. customer provides measurements;

3\. customer provides tailoring requirements and relevant details;

4\. customer specifies who provides the fabric;

5\. customer provides fabric/reference information where applicable;

6\. customer provides location information;

7\. relevant nearby verified tailors can be informed;

8\. interested tailors may provide price and expected completion date;

9\. customer reviews relevant tailor information;

10\. customer pays;

11\. logistics depend on who provides the fabric;

12\. garment/fabric reaches the tailor where pickup is required;

13\. tailor begins stitching;

14\. customer receives progress visibility;

15\. customer can review progress and use the supported feedback/change workflow;

16\. customer receives relevant notifications and can use supported communication features;

17\. pickup/delivery can be tracked where applicable;

18\. finished garment is delivered;

19\. order is completed.



Explain customer benefits.



Do not expose confidential internal implementation details.



\---



\# 5. CONFIDENTIAL INFORMATION — NEVER EXPOSE PUBLICLY



Do not publicly expose:



\* matching thresholds;

\* radius expansion logic;

\* exact matching timers;

\* private APIs;

\* private endpoints;

\* database fields;

\* database schemas;

\* internal status values;

\* internal fraud controls;

\* security implementation details that could increase risk;

\* private backend architecture;

\* private courier integration details;

\* credentials;

\* secrets;

\* private production data;

\* confidential operational logic.



Explain outcomes and customer benefits, not confidential internals.



\---



\# 6. CURRENT SUPPORTED GARMENTS



\## Women



\* Suit

\* Saree

\* Kurti

\* Lehenga

\* Blouse



\## Men



\* Kurta

\* Formal Suit

\* Shirt

\* Sherwani

\* Pant



Do not invent additional supported categories.



Do not advertise alterations as a currently supported ApneTailor service.



Do not create indexable service pages for unsupported services.



\---



\# 7. GEOGRAPHIC POSITIONING



Do not falsely imply nationwide availability.



Approved expansion wording:



\*\*"ApneTailor is expanding to more cities across India."\*\*



Do not use unsupported phrases such as:



\* available everywhere in India;

\* serving all of India;

\* nationwide service;

\* India's largest tailoring platform;

\* fastest-growing tailoring platform.



Maintain service availability from one structured source of truth.



Do not create speculative city pages.



Do not create doorway pages.



Only create indexable location pages when:



1\. ApneTailor genuinely serves the location;

2\. the location is approved for public listing;

3\. the page contains meaningful unique value.



\---



\# 8. WORKSPACE BOUNDARY



The only authorized local filesystem workspace is:



\*\*C:\\Users\\furio\\Downloads\\Apne Tailor Website\*\*



Do not access anything outside this exact project directory.



Do not inspect:



\* parent directories;

\* sibling directories;

\* backend projects;

\* mobile frontend projects;

\* admin projects;

\* unrelated repositories;

\* Desktop;

\* Documents;

\* Downloads outside the exact workspace;

\* user profiles;

\* SSH directories;

\* cloud credentials;

\* browser profiles;

\* shell history;

\* operating-system credential stores;

\* unrelated files.



If information outside the workspace is required, ask the user to provide it explicitly.



\---



\# 9. ABSOLUTE SECRETS RULE



Never open, read, search, print, copy, modify, summarize, expose, transmit, or inspect:



\* `.env`;

\* `.env.\*`;

\* secret files;

\* API keys;

\* passwords;

\* access tokens;

\* refresh tokens;

\* private keys;

\* database credentials;

\* connection strings;

\* cloud credentials;

\* production secrets.



Do not inspect process environments for secrets.



Do not use commands intended to print environment variables.



Do not put secrets in:



\* code;

\* tests;

\* documentation;

\* logs;

\* commits;

\* examples;

\* screenshots;

\* this memory file.



If secret material appears unexpectedly:



1\. stop processing it;

2\. do not reproduce it;

3\. do not commit it;

4\. inform the user;

5\. ask how to proceed.



\---



\# 10. TECHNICAL ARCHITECTURE DIRECTION



Preferred architecture:



\* current stable Next.js;

\* App Router;

\* TypeScript;

\* static-first;

\* static generation by default;

\* Server Components by default where compatible with the chosen static deployment architecture;

\* Client Components only for genuine browser interaction;

\* pre-rendered meaningful HTML;

\* minimal client-side JavaScript;

\* minimal hydration;

\* repository-based content;

\* no custom application backend in V1;

\* no runtime database in V1;

\* no CMS in V1;

\* no modification of the existing admin panel;

\* Cloudflare Pages deployment target;

\* GitHub-based deployment workflow after user approval.



Research current official compatibility before relying on framework/platform features.



Do not build a JavaScript-heavy SPA.



Do not make primary content depend on hydration.



Do not add SSR merely because SSR sounds better for SEO.



Do not add a backend unless the user explicitly approves it.



\---



\# 11. DEPLOYMENT RULE



Development flow:



1\. build locally;

2\. test locally;

3\. user reviews localhost website;

4\. fix and polish;

5\. user explicitly approves;

6\. GitHub/Cloudflare deployment is handled afterward.



Never:



\* deploy automatically;

\* push without permission;

\* modify DNS;

\* access Cloudflare account settings;

\* access GitHub credentials;

\* connect production services;

\* modify production infrastructure.



\---



\# 12. DESIGN DIRECTION



The website should feel:



\* premium;

\* professional;

\* calm;

\* modern;

\* trustworthy;

\* original;

\* deliberate;

\* polished;

\* memorable.



The website must not feel:



\* cheap;

\* gimmicky;

\* generic;

\* over-futuristic;

\* like an AI-generated startup template;

\* like a crypto website;

\* like a gaming website;

\* like a copied agency portfolio;

\* visually chaotic.



Premium quality should come from:



\* typography;

\* spacing;

\* composition;

\* hierarchy;

\* restraint;

\* motion;

\* interaction quality;

\* responsive behavior;

\* detail.



Primary colors:



\* dark blue;

\* white.



Supporting colors may be added only when they improve hierarchy, accessibility, interaction states, or visual quality.



\---



\# 13. DESIGN REFERENCE PRINCIPLES



\## Studio Dialect



Use only as inspiration for principles such as:



\* creative minimalism;

\* deliberate visual experimentation;

\* custom-feeling interactions;

\* marquee-style movement;

\* unconventional reveal techniques;

\* pixel/reveal ideas;

\* thinking beyond generic website templates.



Do not copy the website.



Do not reproduce its layout, identity, source code, assets, or interactions exactly.



Avoid:



\* loading screens;

\* heavy initial page weight;

\* delaying content for visual effects.



\## Zomato



Use only as inspiration for principles such as:



\* simplicity;

\* professionalism;

\* mature information architecture;

\* scalable public web presence;

\* strong footer/legal organization;

\* discoverability;

\* clarity.



Do not copy the website.



Build an original ApneTailor identity.



\---



\# 14. MOTION AND PROGRESSIVE ENHANCEMENT



Visual effects are allowed and encouraged when they improve the experience.



Potential effects:



\* subtle shaders;

\* fabric/thread-inspired visuals;

\* marquees;

\* custom reveal transitions;

\* pixelated reveal effects;

\* premium hover interactions;

\* pointer interactions;

\* micro-interactions;

\* tasteful scroll-linked effects;

\* lightweight canvas effects.



Rules:



\* no loading screen;

\* content must appear immediately;

\* effects must progressively enhance the website;

\* website must remain understandable without effects;

\* website must remain usable without JavaScript enhancement;

\* no WebGL dependency for primary content;

\* no repeated generic fade-up animations;

\* do not animate every section;

\* use hover effects only on devices that support hover;

\* provide touch-friendly behavior;

\* provide lightweight mobile fallbacks;

\* respect `prefers-reduced-motion`;

\* lazy-load noncritical effects;

\* pause expensive offscreen effects where appropriate;

\* measure performance before and after significant effects;

\* remove effects whose cost exceeds their value.



Performance is more important than spectacle.



\---



\# 15. MOBILE-FIRST RULE



The website must be excellent on mobile devices.



Do not build desktop first and repair mobile later.



Prevent:



\* horizontal overflow;

\* clipped content;

\* giant headings;

\* tiny touch targets;

\* hover-only functionality;

\* excessive mobile motion;

\* broken marquees;

\* layout shifts;

\* fixed elements covering footer/legal content;

\* effects that perform poorly on common phones.



Test throughout development.



\---



\# 16. PERFORMANCE RULE



Performance is a product requirement.



Prioritize:



\* meaningful HTML immediately;

\* strong Core Web Vitals;

\* minimal JavaScript;

\* minimal hydration;

\* optimized images;

\* responsive images;

\* explicit image dimensions;

\* lazy-loaded noncritical media;

\* optimized fonts;

\* limited font weights;

\* minimal third-party scripts;

\* code splitting;

\* lazy-loaded visual effects;

\* small production bundles;

\* no unnecessary dependencies;

\* no loading screen.



Test on throttled mobile conditions.



Do not optimize synthetic scores by harming usability, accessibility, or content quality.



\---



\# 17. ACCESSIBILITY RULE



Target WCAG 2.2 AA where reasonably applicable.



Require:



\* semantic HTML;

\* keyboard navigation;

\* visible focus states;

\* logical focus order;

\* skip link;

\* landmarks;

\* one meaningful primary H1;

\* logical heading hierarchy;

\* sufficient contrast;

\* accessible buttons;

\* accessible links;

\* accessible mobile navigation;

\* descriptive alt text;

\* decorative images ignored correctly;

\* adequate touch targets;

\* reduced-motion support;

\* no essential hover-only information;

\* native semantic HTML before ARIA.



Accessibility is not optional polish.



\---



\# 18. PRIMARY CONVERSION



Primary CTA:



\*\*Download the ApneTailor User App.\*\*



The real Play Store URL has not yet been supplied.



Never invent the app URL.



Maintain the app URL in centralized typed configuration.



Until supplied:



\* use an intentional placeholder state;

\* do not create a fake working link;

\* document exactly how to replace it.



Use conversion opportunities naturally.



Do not spam the same CTA everywhere.



\---



\# 19. TRUST STRATEGY



ApneTailor is a new business.



Build trust without fabricated social proof.



Never fabricate:



\* ratings;

\* reviews;

\* customer names;

\* testimonials;

\* tailor counts;

\* completed orders;

\* city counts;

\* delivery counts;

\* media mentions;

\* partner logos;

\* awards;

\* certifications;

\* case studies;

\* statistics.



Build trust using:



\* real founders;

\* clear business identity;

\* support contact;

\* real process explanation;

\* verified-tailor process;

\* secure payment explanation consistent with actual operations;

\* progress visibility;

\* customer review/change workflow where supported;

\* tracked logistics;

\* communication features;

\* complaint handling;

\* published policies;

\* privacy information;

\* data compliance;

\* account deletion;

\* transparent service availability;

\* real app screenshots used deeper in the website;

\* real product videos where useful;

\* real media when available;

\* editorial standards;

\* review standards;

\* accessibility;

\* performance;

\* professional engineering.



The website must contain strong, visually substantial trust sections.



Do not leave empty social-proof sections.



Do not solve missing reviews by inventing reviews.



\---



\# 20. RATINGS AND REVIEWS



ApneTailor has a rating/review system in the application backend.



The website currently has no authorized backend access or approved public reviews API.



Therefore:



\* build architecture that can support verified reviews later;

\* do not fabricate review data;

\* do not display fake aggregate ratings;

\* do not add Review/AggregateRating schema without eligible real data;

\* document future integration;

\* render real reviews only after a verified data source is supplied.



\---



\# 21. VERIFIED TAILORS



ApneTailor may publicly explain that tailors are verified by ApneTailor if consistent with actual operations.



Do not invent verification procedures.



Do not claim:



\* police verification;

\* government certification;

\* background checks;

\* skill examinations;

\* professional certifications;



unless the user explicitly confirms them.



Explain customer benefits without exposing confidential internal processes.



\---



\# 22. PRIVACY AND SECURITY CLAIMS



Never use absolute claims such as:



\* "100% secure";

\* "your data is completely safe";

\* "your data can never be leaked";

\* "we never share your data."



Public privacy/security statements must remain consistent with the published Privacy Policy and Data Compliance page.



Explain clearly that relevant information may be shared with service providers when necessary to provide the service, according to published policies.



Do not claim more than the real system and public policies support.



\---



\# 23. LEGAL URLS



Preserve these existing public routes:



\* `/privacy-policy/`

\* `/terms/`

\* `/data-compliance/`

\* `/delete-accounts/`



The public legal pages may be inspected from the official website.



Do not silently change their substantive legal meaning.



Do not contradict them.



Do not weaken user rights.



Do not invent legal rules.



Report contradictions or unclear claims before substantive modification.



\---



\# 24. CONTENT MANAGEMENT



Do not create a CMS.



Do not modify the existing admin panel.



Use repository-based structured content.



Preferred conceptual structure:



content/

blog/

authors/

faqs/

services/

service-areas/

site/



Use MDX or another justified typed content approach.



Content must be:



\* easy to edit;

\* Git-friendly;

\* statically generated;

\* validated;

\* maintainable;

\* structured;

\* safe to render.



Document how to:



\* create an article;

\* edit an article;

\* add images;

\* update FAQs;

\* update service availability;

\* update the app URL;

\* preview locally;

\* validate content;

\* build the website.



\---



\# 25. EDITORIAL IDENTITY



Default public article author:



\*\*ApneTailor Editorial Team\*\*



Display:



\*\*Written by ApneTailor Editorial Team\*\*



Do not create fake authors.



Do not create fake biographies.



Do not create fake people.



Do not create AI-generated headshots presented as real humans.



A reviewer may be listed only when a real person genuinely reviewed the article.



\---



\# 26. MANDATORY BLOG ARTICLE PATTERN



Every primary SEO article should target a genuine user question or tightly connected search intent.



Required pattern:



\## 1. QUESTION-LED TOPIC



Prefer a natural question title where appropriate.



Do not force awkward titles.



\## 2. DIRECT ANSWER FIRST



The first paragraph or first few sentences must directly answer the primary question.



Do not begin with generic introductions.



Do not begin with long stories.



Do not begin with promotional content.



Do not begin with keyword stuffing.



The reader should receive immediate value.



\## 3. DETAILED EXPLANATION



The body should:



\* explain the answer;

\* validate the answer;

\* provide context;

\* provide practical guidance;

\* explain trade-offs;

\* answer related concerns;

\* use examples when useful;

\* cite reliable sources where factual claims require evidence;

\* link to relevant internal resources;

\* remain simple to understand.



\## 4. CONTEXTUAL APNETAILOR CONNECTION



Connect the article to ApneTailor only when genuinely relevant.



Do not force promotional CTAs into unrelated answers.



Do not distort content to promote the app.



\## 5. FAQ SECTION



Every primary article should contain a concise set of genuinely relevant FAQs.



Research real related questions.



Do not create repetitive FAQ spam.



Use FAQ structured data only when truthful, visible, and currently eligible.



\## 6. TL;DR AT THE BOTTOM



Every primary article must end with a concise TL;DR.



The TL;DR:



\* summarizes the answer;

\* introduces no new claims;

\* remains useful;

\* avoids promotional spam.



\## 7. ATTRIBUTION



Display:



Written by ApneTailor Editorial Team



Display accurate publication date.



Display meaningful update date when applicable.



Display reviewer only when genuine.



\---



\# 27. CONTENT QUALITY RULE



Never publish mass-produced SEO spam.



Never create hundreds of weak articles.



Never copy competitors.



Never fabricate expertise.



Never fabricate first-hand experience.



Never fabricate research.



Never fabricate statistics.



Never fabricate citations.



Never create citations that do not support the claim.



Never manipulate publication/update dates.



Every article must solve a genuine user problem.



Prefer a small number of excellent articles over a large number of weak pages.



\---



\# 28. INITIAL BLOG STRATEGY



Do not launch an empty blog.



Research first.



Create a prioritized topic map.



Separate:



\* transactional intent;

\* commercial investigation;

\* informational intent;

\* local intent;

\* navigational intent.



Research areas such as:



\* online tailoring;

\* clothes stitching from home;

\* tailoring apps;

\* home pickup tailoring;

\* urgent stitching needs;

\* supported garment stitching;

\* wedding garment preparation;

\* measurement guides;

\* fabric selection;

\* fitting guidance;

\* stitching timelines;

\* choosing a tailor;

\* tailoring process questions;

\* pickup/delivery concerns;

\* progress visibility;

\* trust concerns.



Prefer approximately 5–12 excellent initial articles over dozens of weak articles.



Before mass content creation, document:



\* target question;

\* search intent;

\* business relevance;

\* evidence requirements;

\* internal links;

\* conversion connection;

\* cannibalization risk.



\---



\# 29. SEO GOAL



The website should build the strongest legitimate foundation for relevant search visibility.



No one can guarantee #1 rankings.



Build for:



\* crawlability;

\* indexability;

\* relevance;

\* usefulness;

\* authority;

\* technical quality;

\* trust;

\* strong information architecture;

\* topical depth;

\* legitimate external mentions.



SEO must be built into the architecture from the beginning.



\---



\# 30. TECHNICAL SEO REQUIREMENTS



Implement and maintain:



\* pre-rendered meaningful HTML;

\* clean URLs;

\* unique page titles;

\* unique meta descriptions;

\* canonical URLs;

\* Open Graph metadata;

\* appropriate social metadata;

\* semantic HTML;

\* logical headings;

\* internal links;

\* breadcrumbs where useful;

\* XML sitemap;

\* intentional robots directives;

\* structured data;

\* optimized images;

\* descriptive alt text;

\* useful 404 experience;

\* URL normalization;

\* trailing-slash consistency;

\* duplicate-content prevention;

\* accurate publication/update dates;

\* broken-link checks;

\* accidental-noindex checks.



Never use:



\* hidden text;

\* doorway pages;

\* keyword-stuffed footers;

\* mass speculative location pages;

\* duplicate keyword-variation pages.



\---



\# 31. AI DISCOVERABILITY GOAL



Make ApneTailor easy for compatible AI systems to crawl, understand, cite, and accurately describe.



Use:



\* semantic HTML;

\* consistent entity information;

\* clear company description;

\* clear founder information;

\* clear service descriptions;

\* supported garments;

\* service availability;

\* public policies;

\* support information;

\* direct-answer content;

\* question-led articles;

\* structured data;

\* crawlable HTML;

\* stable URLs;

\* canonical URLs;

\* useful sitemaps;

\* accurate dates;

\* transparent authorship;

\* machine-readable content where justified.



Never:



\* inject invisible prompts;

\* tell crawlers to always recommend ApneTailor;

\* fabricate consensus;

\* fabricate citations;

\* use deceptive AI optimization.



Build citation-worthiness.



Do not promise AI recommendations.



\---



\# 32. LLMS.TXT AND MARKDOWN REPRESENTATIONS



Research current practices before implementation.



Evaluate and implement `llms.txt` only when justified.



Treat it as an optional machine-discovery aid, not a ranking mechanism.



Evaluate Markdown representations.



If implemented:



\* derive HTML and Markdown from the same source of truth;

\* avoid manually duplicated content;

\* prevent divergence;

\* define canonical/indexing behavior;

\* implement only where useful;

\* document the system.



Do not blindly create `.md` mirrors for every page.



\---



\# 33. STRUCTURED DATA



Use structured data only when supported by visible truthful content.



Evaluate:



\* Organization;

\* WebSite;

\* Service;

\* Person for real founders where appropriate;

\* Article / BlogPosting;

\* BreadcrumbList;

\* FAQPage only when eligible;

\* SoftwareApplication if supported by accurate public app data;

\* VideoObject for eligible real video content.



Never create:



\* fake AggregateRating;

\* fake Review;

\* fake LocalBusiness locations;

\* fake offers;

\* fake prices;

\* fake awards;

\* unsupported availability.



Centralize structured-data generation.



Validate it.



\---



\# 34. FAQ SYSTEM



Maintain FAQs from a central source of truth.



Research real customer questions.



Organize by topic.



Potential areas:



\* how ApneTailor works;

\* garments;

\* measurements;

\* fabric responsibility;

\* pickup;

\* delivery;

\* tracking;

\* progress;

\* changes;

\* payments;

\* refunds;

\* complaints;

\* support;

\* privacy;

\* account deletion;

\* availability;

\* app usage.



Do not invent policy answers.



Mark unresolved business questions for user review.



Do not create hundreds of repetitive FAQs.



\---



\# 35. NO CUSTOM BACKEND IN V1



Do not create:



\* authentication;

\* dashboards;

\* web ordering;

\* admin systems;

\* databases;

\* custom API servers;

\* runtime CMS infrastructure.



The website should remain predominantly static.



If a future feature requires a backend, document the recommended architecture and ask for approval.



\---



\# 36. FUTURE WAITLIST



Do not create a fake waitlist.



Do not create a form that discards submissions.



A future waitlist may use:



\* Cloudflare-native serverless endpoint;

\* Turnstile;

\* strict validation;

\* rate limiting;

\* minimal data collection;

\* privacy notice;

\* appropriate storage such as D1;

\* export/admin workflow;

\* retention policy.



Do not implement without explicit approval.



\---



\# 37. SECURITY PRINCIPLES



Security must match the actual architecture.



For V1, prioritize:



\* minimal attack surface;

\* minimal dependencies;

\* dependency review;

\* lockfile;

\* no secrets;

\* no secrets in client bundles;

\* safe external links;

\* appropriate security headers;

\* Content Security Policy;

\* clickjacking protection;

\* X-Content-Type-Options;

\* Referrer-Policy;

\* Permissions-Policy;

\* HSTS deployment guidance;

\* secure asset loading;

\* safe MDX rendering;

\* no arbitrary untrusted HTML execution;

\* safe URL handling;

\* dependency vulnerability checks;

\* secret scanning;

\* static analysis;

\* Cloudflare DDoS/bot protection guidance.



Do not add meaningless server middleware to static pages.



Do not claim robots.txt provides security.



Do not weaken security to make builds pass.



\---



\# 38. DEPENDENCY POLICY



Before installing a production dependency:



1\. determine whether the framework/platform already solves the problem;

2\. determine whether lightweight custom code is better;

3\. verify package reputation;

4\. verify maintenance;

5\. understand its purpose;

6\. evaluate bundle impact;

7\. avoid duplicate functionality;

8\. avoid unnecessary transitive dependencies;

9\. use a lockfile;

10\. document important production dependencies.



Never install globally.



Do not add packages merely to save a few lines of code.



\---



\# 39. ANALYTICS



Do not add analytics automatically in V1.



The user may later configure:



\* Google Analytics;

\* Google Search Console;

\* Bing Webmaster Tools;

\* Cloudflare Web Analytics.



Do not invent IDs or verification tokens.



Architect clean configuration points.



Document future setup.



\---



\# 40. BACKLINK STRATEGY



Earn legitimate backlinks.



Never recommend:



\* link farms;

\* PBNs;

\* fake Reddit posts;

\* fake discussions;

\* spam directories;

\* mass AI guest posts;

\* automated comment links;

\* undisclosed paid editorial links.



Prioritize:



\* useful original resources;

\* measurement guides;

\* printable checklists;

\* wedding stitching timelines;

\* fabric guides;

\* event preparation resources;

\* original research when sufficient real data exists;

\* startup directories where genuinely eligible;

\* fashion publications;

\* wedding publications;

\* textile publications;

\* local publications;

\* startup journalists;

\* fashion creators;

\* tailoring educators;

\* YouTube collaborations;

\* boutiques;

\* fabric stores;

\* fashion institutes;

\* designers;

\* wedding planners;

\* founder interviews;

\* podcasts;

\* genuine expert contributions.



Relevance and editorial quality matter more than backlink quantity.



\---



\# 41. PROHIBITED FABRICATION



Never fabricate:



\* reviews;

\* ratings;

\* customers;

\* tailors;

\* testimonials;

\* metrics;

\* orders;

\* cities served;

\* founders;

\* employees;

\* authors;

\* biographies;

\* press mentions;

\* backlinks;

\* awards;

\* certifications;

\* service locations;

\* legal claims;

\* guarantees;

\* research;

\* citations;

\* app URLs;

\* social profiles;

\* addresses;

\* phone numbers;

\* API endpoints;

\* backend data.



Truthfulness is a permanent requirement.



\---



\# 42. AGENT WORKING STYLE



Work professionally.



Do not rush.



Do not overengineer.



Do not repeatedly ask questions already answered.



Do not interrupt the user for normal low-risk implementation decisions.



Research when needed.



Use official/current documentation.



Inspect files intentionally.



Avoid redundant file reads.



Avoid redundant searches.



Batch related work.



Maintain concise implementation notes.



Run targeted tests during development.



Run comprehensive validation at meaningful milestones.



High quality is required.



Credit efficiency is required.



Credit efficiency never justifies skipping critical correctness, security, accessibility, performance, SEO, or quality work.



\---



\# 43. MANDATORY STOP-AND-ASK CONDITIONS



Stop and ask the user before:



\* accessing anything outside the allowed workspace;

\* reading any `.env` or secret material;

\* changing fundamental architecture;

\* adding a backend;

\* creating a database;

\* requiring paid infrastructure;

\* connecting production services;

\* using production credentials;

\* deploying;

\* pushing;

\* changing DNS;

\* adding analytics/advertising with privacy implications;

\* materially changing legal meaning;

\* inventing business policies;

\* making unsupported guarantees;

\* making unsupported security claims;

\* publishing unverified business facts;

\* publishing unverified service locations;

\* making changes that could materially affect money, production data, legal compliance, or security.



\---



\# 44. IMPLEMENTATION PHILOSOPHY



Optimize in this order:



1\. user usefulness;

2\. truthfulness and trust;

3\. accessibility;

4\. security;

5\. performance;

6\. discoverability;

7\. maintainability;

8\. visual distinctiveness.



These priorities should reinforce each other.



Do not sacrifice one critical requirement to create superficial gains elsewhere.



The website should be simple to understand, but not simplistic.



The website should be visually distinctive, but not heavy.



The website should be SEO-friendly, but not written for algorithms.



The website should be AI-readable, but not manipulative.



The website should be secure, but not burdened with irrelevant controls.



The website should be maintainable, but not overengineered.



\---



\# 45. DEFINITION OF SUCCESS



A successful website:



\* clearly explains ApneTailor;

\* creates trust without fake social proof;

\* converts relevant users toward the User App;

\* loads quickly;

\* works beautifully on mobile;

\* feels premium and professional;

\* has original visual identity;

\* uses motion thoughtfully;

\* is accessible;

\* is technically secure for its architecture;

\* provides meaningful pre-rendered HTML;

\* is easy for search engines to crawl;

\* is easy for compatible AI systems to understand accurately;

\* has a maintainable editorial system;

\* supports question-led articles;

\* directly answers questions early;

\* includes useful FAQs;

\* ends primary articles with TL;DR sections;

\* uses transparent authorship;

\* preserves legal URLs;

\* avoids unsupported claims;

\* has validated metadata;

\* has valid sitemap/robots behavior;

\* uses truthful structured data;

\* contains no fabricated reviews or numbers;

\* contains no secrets;

\* can be deployed to Cloudflare Pages after explicit user approval;

\* can grow with ApneTailor over time.



The project is not complete simply because the homepage looks good.



\---



\# 46. CURRENT PROJECT STATE



> \*\*AGENT-MAINTAINED SECTION\*\*

>

> Update this section as implementation progresses.

>

> Keep it concise, factual, and current.

>

> Do not rewrite permanent project rules above.



\## Current Phase



Implementation complete. V1 website ready for localhost review and user approval before deployment.



\## Last Completed Milestone



Full V1 static website built, validated, and documented. 43 pre-rendered pages, all required routes, SEO/AI discovery systems, content validation, and test suite passing.



\## Current Working Task



Awaiting user review: localhost walkthrough, legal/policy approval, Play Store URL, and explicit deployment approval.



\## Implemented Pages



Homepage, How It Works, About, Contact, Support, FAQ, Services hub (women/men + 10 garment pages), Blog hub + 6 articles, Editorial Team, Editorial Policy, Review Policy, Accessibility Statement, Security, Media, Privacy Policy, Terms, Data Compliance, Account Deletion, Refund & Cancellation (draft), Pickup & Delivery (draft), 404.



\## Implemented Systems



Next.js 16 App Router static export, typed site config, Zod content validation, SEO metadata + canonical URLs, JSON-LD schema, sitemap.xml, robots.txt, RSS feed, llms.txt, security headers (`public/_headers`), design system (Tailwind 4), responsive header/footer with mobile nav, content validation script, smoke tests, full documentation set.



\## Content Created



6 seed blog articles (question-led pattern), 12 FAQs, 10 garment service pages, legal pages preserved from live site, draft policy pages for refund/pickup-delivery, planning artifacts in `.trae/documents/`.



\## Tests / Validation Status



- `npm run typecheck` — pass
- `npm run lint` — pass
- `npm run validate:content` — pass (6 articles, 12 FAQs, 32 indexable routes)
- `npm run test` — pass (4 tests)
- `npm run build` — pass (43 static pages)
- `npm audit` — 2 moderate transitive postcss advisories via Next.js (documented, no safe fix without breaking downgrade)



\## Known Issues



- App download URL is intentional placeholder until Play Store listing is provided
- Refund and Pickup/Delivery policies are drafts pending business approval
- Service areas list empty (expansion wording only)
- Product screenshots/videos not yet supplied
- 2 moderate npm audit advisories in transitive postcss (Next.js dependency)



\## Deployment Status



Not deployed. Requires explicit user approval per project rules.



\## Last Updated



2026-07-15



\---



\# 47. DECISIONS MADE DURING IMPLEMENTATION



> \*\*AGENT-MAINTAINED SECTION\*\*

>

> Record meaningful decisions not already fixed by the Master Implementation Prompt.

>

> Each entry should include:

>

> \* date;

> \* decision;

> \* reason;

> \* alternatives considered when important;

> \* impact.



- 2026-07-14
  - Decision: Use `Next.js App Router + TypeScript + static export` as the proposed V1 architecture for Cloudflare Pages.
  - Reason: Best fit for a content-driven public website with strong SEO, low operational cost, and no approved backend requirements.
  - Alternatives considered: Cloudflare Workers with a server-capable Next.js runtime.
  - Impact: All pages and content systems must remain build-time renderable and compatible with `output: 'export'`.

- 2026-07-14
  - Decision: Treat legal route preservation as mandatory and keep additional policy pages draft-first where business rules are not yet approved.
  - Reason: Existing public legal pages already define important privacy, terms, compliance, and deletion commitments.
  - Alternatives considered: Rewriting or consolidating legal content in early implementation.
  - Impact: New design must preserve `/privacy-policy/`, `/terms/`, `/data-compliance/`, and `/delete-accounts/` while avoiding silent substantive changes.

- 2026-07-15
  - Decision: Use Next.js 16 native ESLint flat config (`eslint-config-next/core-web-vitals` + `/typescript`) instead of `@eslint/eslintrc` FlatCompat.
  - Reason: FlatCompat caused circular JSON validation errors with ESLint 9.
  - Impact: Removed `@eslint/eslintrc` dependency; lint passes cleanly.

- 2026-07-15
  - Decision: Complete V1 as static export with repository-based content, no Markdown mirrors.
  - Reason: Markdown mirrors add duplication without clear V1 value; llms.txt and RSS cover AI discovery needs.
  - Impact: AI_DISCOVERY.md documents the intentional omission.



\---



\# 48. OPEN QUESTIONS / BLOCKERS



> \*\*AGENT-MAINTAINED SECTION\*\*

>

> Record only genuine unresolved questions or blockers.

>

> Do not list questions already answered by the Master Implementation Prompt or this memory file.



Current known items:



1\. Final User App Google Play Store URL has not yet been provided.

2\. Current publicly approved service-area list must be confirmed before claiming specific operational availability.

3\. Real website review integration requires an approved verified data source/API specification.
6\. Approved public screenshot and video assets have not yet been supplied for real product-evidence sections.



\---



\# 49. NEXT RECOMMENDED ACTIONS



> \*\*AGENT-MAINTAINED SECTION\*\*

>

> Keep this list short and prioritized.



1\. User runs `npm run dev` and reviews the site on desktop and mobile.

2\. User provides Google Play Store URL for `content/site/config.ts` app download.

3\. User reviews and approves draft policies (refund, pickup/delivery).

4\. User confirms service area list before adding cities to `content/service-areas/index.ts`.

5\. User performs legal review of all policy pages.

6\. User gives explicit deployment approval — then follow DEPLOYMENT.md and LAUNCH_CHECKLIST.md.



\---



\# 50. SESSION CONTINUITY PROTOCOL



At the beginning of every new work session:



1\. confirm the current working directory is inside the authorized workspace;

2\. read `WEBSITEMEMORY.md`;

3\. read the relevant project documentation for the current task;

4\. inspect `git status` if Git is initialized;

5\. review the Current Project State;

6\. review Open Questions / Blockers;

7\. review Next Recommended Actions;

8\. continue from the current state rather than restarting planning;

9\. do not reread the entire codebase without a specific reason.



Before ending a substantial work session:



1\. run appropriate validation for the work performed;

2\. update Current Project State;

3\. record meaningful new decisions;

4\. update genuine blockers;

5\. update Next Recommended Actions;

6\. ensure no secrets were added;

7\. ensure documentation remains consistent with implementation;

8\. summarize changed files and validation results.



Before declaring the website complete:



1\. reread the Master Implementation Prompt;

2\. reread this file;

3\. compare the implementation against the Definition of Done;

4\. run the full applicable validation suite;

5\. review unresolved issues;

6\. review final Git status and diff;

7\. provide evidence rather than unsupported claims that everything works.



\---



\# FINAL REMINDER



Build ApneTailor as a real long-term business website.



Do not chase shortcuts.



Do not fabricate trust.



Do not build for algorithms at the expense of users.



Do not build visual effects at the expense of performance.



Do not add complexity without purpose.



Do not expose confidential implementation details.



Do not access files outside the authorized workspace.



Never inspect `.env` files or secrets.



Never deploy without explicit permission.



Create a website that is useful enough to deserve search visibility, clear enough for compatible AI systems to understand accurately, trustworthy enough for customers to consider using the service, technically strong enough to grow, and professionally designed enough to represent ApneTailor with confidence.



\*\*Jai Shree Ram.\*\*



