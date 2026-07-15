# Security

## Scope

ApneTailor Website V1 is a static site. Security controls match that architecture.

## Reporting vulnerabilities

Report security concerns to **support@apnetailor.com** with enough detail to reproduce the issue. Do not publicly disclose unresolved vulnerabilities.

## Repository practices

- Never commit `.env` files or secrets
- Use lockfile (`package-lock.json`) for reproducible installs
- Review dependency updates before merging
- Run `npm audit` periodically

## Client-side

- No secrets in client bundles
- `dangerouslySetInnerHTML` used only for JSON-LD (static, trusted data)
- External links use `rel="noopener noreferrer"` where appropriate
- App download button does not link to invented URLs

## Content Security Policy

Configured via `public/_headers` for Cloudflare Pages:

- Restricts default sources to `'self'`
- Allows inline scripts/styles required by Next.js static export
- Blocks framing (`frame-ancestors 'none'`)
- See file for full policy — test after deployment

## Security headers

Also set via `public/_headers`:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` restricting camera, microphone, geolocation

## HSTS

Enable HSTS at the Cloudflare dashboard level after confirming HTTPS works correctly on the production domain.

## Future endpoints

If forms or serverless endpoints are added later, require rate limiting, input validation, bot protection, and CSRF protection where applicable.

## Claims

Public copy avoids absolute security claims ("100% secure", "never shared"). Statements align with published Privacy Policy and Data Compliance pages.

## Known transitive dependency advisories

`npm audit` reports 2 moderate severity advisories in `postcss` (bundled with Next.js). No safe fix is available without a breaking downgrade. Review periodically as Next.js updates ship.
