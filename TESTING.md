# Testing

## Strategy

Lightweight validation appropriate for a static content site. Prioritize failures that harm users, SEO, or deployment.

## Commands

```bash
npm run typecheck      # TypeScript
npm run lint           # ESLint
npm run validate:content  # Content structure
npm run test           # Node test runner
npm run build          # Static export (required before route tests)
npm run check          # All of the above except build
```

Full pre-handoff:

```bash
npm run build && npm run test
```

## Test layers

| Layer | Location | Covers |
|-------|----------|--------|
| TypeScript | `tsc --noEmit` | Type safety across app and content |
| ESLint | `eslint.config.mjs` | Code quality |
| Content validation | `scripts/validate-content.mjs` | Slugs, routes, FAQ ids |
| Schema smoke tests | `tests/schema.test.mjs` | Structured data and config invariants |
| Export smoke tests | `tests/routes.test.mjs` | Core routes exist in `out/` |

## Manual checks

Before localhost review:

- [ ] Keyboard navigation (Tab, Enter, Escape)
- [ ] Mobile layout at 375px width
- [ ] `prefers-reduced-motion` — marquee stops
- [ ] Skip link focuses main content
- [ ] App download placeholder is accessible (not a broken link)
- [ ] Legal pages readable and linked from footer
- [ ] No horizontal overflow on mobile

## CI recommendation

Future GitHub Actions workflow:

1. `npm ci`
2. `npm run check`
3. `npm run build`
4. `npm run test`
5. Optional: `npm audit --audit-level=high`

## Not automated in V1

- Lighthouse performance audits (run manually)
- axe accessibility scan (run manually)
- Broken external link checks (run manually before launch)
