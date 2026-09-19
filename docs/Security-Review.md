# Security Review

## 1. Review Scope

### 1.1 Date
19 September 2026

### 1.2 Reviewed Areas
This review covered:

- Next.js runtime and security headers;
- public enquiry API;
- input validation;
- email delivery;
- Sanity CMS integration;
- environment variables and secrets;
- analytics loading;
- dependency exposure;
- GitHub Actions CI;
- automated smoke tests;
- repository secret patterns.

## 2. Current Result

### 2.1 Automated Security Gate
The latest quality workflow passed:

- dependency installation;
- tracked-file secret scan;
- production dependency audit;
- ESLint;
- TypeScript typecheck;
- production build;
- production-server smoke tests.

### 2.2 Production Dependency Audit
`npm audit --omit=dev --audit-level=high` currently reports **0 production vulnerabilities**.

## 3. Findings Remediated

### 3.1 Production Sanity Dependency Surface
**Initial finding:** Sanity Studio/CLI transitive tooling introduced high-severity audit findings through packages such as `adm-zip`, `js-yaml`, and `smol-toml`.

**Remediation:**

- removed `next-sanity` from the public runtime;
- switched runtime reads to `@sanity/client`;
- kept `sanity` Studio/CLI as a development-only dependency;
- set runtime Sanity reads to the published perspective;
- production audit now passes with zero reported vulnerabilities.

### 3.2 Cross-Site Enquiry Submission
**Initial finding:** The enquiry endpoint accepted JSON POST requests without validating browser request origin.

**Remediation:**

- reject cross-site browser requests;
- validate `Origin` against the active/configured site origin;
- use `Sec-Fetch-Site` when available;
- automated smoke test verifies malicious-origin requests receive HTTP 403.

### 3.3 Request-Body Abuse
**Initial finding:** No explicit request-body byte limit existed.

**Remediation:**

- maximum enquiry body size is 16 KiB;
- both Content-Length and actual UTF-8 body size are checked;
- oversized requests return HTTP 413;
- automated smoke test verifies the limit.

### 3.4 Rate-Limit Memory Growth
**Initial finding:** The in-process rate-limit map could grow without a hard cap.

**Remediation:**

- tracked-client map now has a maximum size;
- expired entries are cleaned;
- oldest entries are evicted when required;
- 429 responses include `Retry-After`.

### 3.5 Email Header and Delivery Hardening
**Remediation:**

- line breaks are removed from user-controlled email subject data;
- HTML email values remain escaped;
- outbound email requests have an 8-second timeout;
- API responses use `Cache-Control: no-store`.

### 3.6 Input Validation
**Remediation:**

- phone format is constrained;
- dates must use ISO `YYYY-MM-DD`;
- guest-count values are enumerated;
- room slugs are constrained;
- null bytes are rejected;
- existing maximum lengths remain enforced.

### 3.7 Browser Security Headers
Implemented:

- Content-Security-Policy;
- frame-ancestors none;
- object-src none;
- base-uri self;
- form-action self;
- X-Content-Type-Options;
- Referrer-Policy;
- X-Frame-Options;
- Permissions-Policy;
- Cross-Origin-Opener-Policy;
- X-DNS-Prefetch-Control;
- HSTS in production mode.

The CSP permits only the external services currently required by the site, including Sanity media/content, Pexels concept media, and optional Google Analytics.

### 3.8 Secrets
Implemented:

- environment files remain ignored;
- production secrets are server-only variables;
- Sanity public identifiers are separated from credentials;
- CI scans tracked files for common high-risk secret patterns;
- current secret scan passes.

### 3.9 Dependency Maintenance
Implemented:

- production dependency audit in CI;
- npm package-manager version pin;
- Dependabot weekly checks for npm packages;
- Dependabot weekly checks for GitHub Actions;
- GitHub Actions workflow permissions reduced to read-only content access.

## 4. Sanity Security Boundary

### 4.1 Public Runtime
The public site uses only project ID and dataset name in public variables. No Sanity token is shipped to the browser.

### 4.2 Studio
Sanity Studio credentials and authenticated editing remain separate from the public runtime.

### 4.3 CORS
When the real Sanity project is connected:

- allow only required trusted Studio origins;
- avoid broad wildcard credentialed origins;
- do not expose write tokens to browser code;
- remove temporary preview origins when no longer required.

## 5. Analytics and Privacy

### 5.1 Analytics
Google Analytics remains production-only and opt-in through environment configuration.

### 5.2 Personal Data
Enquiry names, emails, phone numbers, dates, messages, and other guest-entered form values are not sent as analytics event parameters.

## 6. Remaining Risks and Production Recommendations

### 6.1 Distributed Rate Limiting
**Status:** Accepted for client preview; improve before meaningful public traffic.

The current rate limiter is process-local. On multi-instance/serverless hosting it is not a globally shared quota.

For public production, add one of:

- hosting-platform WAF/rate limiting;
- a shared Redis/KV-backed limiter;
- another provider-managed abuse-control layer.

### 6.2 Strict Nonce CSP
**Status:** Current CSP is meaningful but not maximally strict.

The current policy allows inline scripts/styles required by the current Next.js/analytics integration. A nonce-based CSP can be evaluated later if stricter browser injection controls are required.

### 6.3 Package Lockfile
**Status:** Recommended before public production.

A committed `package-lock.json` should be added to make dependency installation deterministic. Until then, CI generates dependency resolution from the pinned top-level package manifest.

### 6.4 Sanity Studio Development Toolchain
Sanity Studio remains a development dependency. Its toolchain should continue receiving updates, even though it is excluded from the production dependency audit and production runtime.

### 6.5 Stock Concept Media
Pexels media is for private concept presentation. Replace property-specific concept imagery with client-approved property media before public launch.

## 7. Security Smoke Tests

Automated tests currently verify:

- CSP contains required anti-embedding/object directives;
- invalid enquiry payload returns HTTP 400;
- cross-origin enquiry returns HTTP 403;
- oversized enquiry returns HTTP 413;
- all main routes respond successfully;
- health endpoint responds successfully.

## 8. Current Security Status

### 8.1 Client Preview
**Ready.**

### 8.2 Public Production
**Conditionally ready after:**

- client-owned production credentials are connected;
- real domain/HTTPS is active;
- Sanity CORS is configured narrowly;
- a package lockfile is committed;
- distributed/WAF rate limiting is enabled for meaningful public traffic;
- final live-environment QA is completed.

## 9. Security Review Sources

### 9.1 Next.js
- https://github.com/vercel/next.js/security
- https://nextjs.org/docs/15/app/guides/content-security-policy

### 9.2 Sanity
- https://www.sanity.io/docs/content-lake/keeping-your-data-safe
- https://www.sanity.io/docs/content-lake/browser-security-and-cors

### 9.3 Repository Controls
- `.github/workflows/ci.yml`
- `.github/dependabot.yml`
- `next.config.ts`
- `app/api/enquiries/route.ts`
- `scripts/scan-secrets.mjs`
- `scripts/smoke.mjs`
