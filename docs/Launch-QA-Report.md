# Launch QA Report

## 1. Purpose

### 1.1 Objective
Record the quality checks completed for the Luxury Hotel Website Demo and define the remaining live-environment checks required before a public client launch.

## 2. Automated Quality Gate

### 2.1 CI Checks
The repository quality workflow runs:

- dependency installation;
- ESLint;
- TypeScript typecheck;
- Next.js production build;
- production-server smoke tests.

### 2.2 Smoke-Test Coverage
The smoke test starts the built application and verifies successful responses for:

- Home
- Stay
- Experiences
- Dining
- Gallery
- Kandy
- Offers
- FAQ
- Contact
- Availability
- robots.txt
- sitemap.xml
- health endpoint

It also verifies that an invalid enquiry payload is rejected with HTTP 400.

## 3. Accessibility Review

### 3.1 Keyboard and Focus
Implemented and reviewed:

- skip-to-content link;
- visible focus states;
- keyboard-accessible mobile navigation;
- native accessible FAQ disclosure controls;
- gallery Escape and arrow-key controls;
- gallery focus return;
- gallery focus trap;
- form labels;
- form error associations with aria-describedby;
- aria-invalid state for invalid fields;
- reduced-motion support.

### 3.2 Colour Contrast
Core text combinations were checked against WCAG AA contrast targets.

Measured ratios:

- Midnight Forest #17201D on Warm Linen #FAF8F3: approximately 15.69:1
- Bronze #8E643C on Warm Linen #FAF8F3: approximately 4.90:1
- Muted text #6C6D68 on Warm Ivory #F3EFE6: approximately 4.55:1
- Primary Ink #20211F on Warm Ivory #F3EFE6: approximately 14.09:1

The listed combinations meet the 4.5:1 target for normal text where they are used as text colours.

## 4. Performance Review

### 4.1 Rendering
Content-heavy routes use server rendering/server components by default. Client JavaScript is limited to navigation, forms, analytics event hooks, and gallery interaction.

### 4.2 Media
Implemented:

- Next.js image optimisation;
- AVIF and WebP negotiation;
- Sanity CDN allowlist;
- responsive image sizes;
- priority only for true hero media;
- no unlicensed heavyweight hotel photography in the repository.

### 4.3 Fonts
The site uses Next.js font optimisation and only the required display/body families.

### 4.4 Third-Party Scripts
Google Analytics is disabled by default and loads only when:

- the site is in production mode;
- analytics is explicitly enabled;
- a GA measurement ID is supplied.

## 5. SEO Review

### 5.1 Implemented
The site includes:

- title templates;
- page-specific descriptions;
- canonical URLs;
- Open Graph metadata;
- Twitter/X card metadata;
- generated Open Graph image;
- favicon;
- dynamic sitemap;
- dynamic robots rules;
- Google site-verification support;
- WebSite JSON-LD.

### 5.2 Preview Safety
Preview mode is noindex/nofollow and robots.txt blocks crawling.

### 5.3 Production Indexing
Index/follow behaviour activates only when NEXT_PUBLIC_SITE_STATUS=production.

### 5.4 Hotel Structured Data Boundary
Hotel, room-rate, aggregate-rating, address, and offer markup is not published yet because those values require verified client data. Add that markup only after the visible production content is confirmed.

## 6. Analytics Review

### 6.1 Events
Implemented event hooks include:

- check_availability_click;
- availability_form_start;
- availability_form_submit;
- availability_form_success;
- availability_form_error;
- contact_form_start;
- contact_form_submit;
- contact_form_success;
- contact_form_error;
- gallery_open.

### 6.2 Privacy Boundary
Names, emails, phone numbers, dates, free-form messages, and other enquiry personal data are not sent as analytics event parameters.

## 7. Security and Reliability

### 7.1 Headers
Configured:

- X-Content-Type-Options;
- Referrer-Policy;
- X-Frame-Options;
- Permissions-Policy;
- HSTS in production mode.

### 7.2 Forms
Implemented:

- server-side schema validation;
- honeypot;
- request-rate limiting;
- input length limits;
- optional secure transactional email delivery;
- no public CMS storage of guest enquiry data.

### 7.3 Health Check
The application exposes a non-sensitive /api/health endpoint for deployment verification.

## 8. Live-Environment QA Required Before Public Launch

### 8.1 Required Final Checks
After a real preview deployment exists, run:

1. Lighthouse/PageSpeed on representative mobile and desktop pages.
2. Real Android mobile test.
3. Keyboard-only full-site pass.
4. Screen-reader spot check.
5. 200% browser zoom.
6. Slow-network media check.
7. Real enquiry delivery to the client inbox.
8. GA4 DebugView/event verification if analytics is enabled.
9. Search Console verification.
10. Structured-data validation after verified hotel data is added.

## 9. Current QA Status

### 9.1 Code-Level Status
The latest implementation quality gate passed:

- dependency installation;
- ESLint;
- TypeScript typecheck;
- Next.js production build;
- production-server smoke tests.

All primary routes, robots.txt, sitemap.xml, the health endpoint, and invalid-enquiry handling passed the automated smoke test.

### 9.2 Public Launch Status
Public launch remains blocked until the client-owned production accounts, verified hotel content, and production environment variables are connected.

## 10. Next Action

### 10.1 Deployment
Follow Deployment-Runbook.md to create the real preview deployment, connect client services, run the final live-environment checks, and then switch the site from preview to production mode.
