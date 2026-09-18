# Deployment Runbook

## 1. Purpose

### 1.1 Objective
Define a safe, repeatable path from the private sales demo to a client-owned production deployment.

## 2. Ownership Model

### 2.1 Client-Owned Services
Production should ideally use client-owned accounts for:

- domain and DNS;
- commercial hosting;
- Sanity project;
- transactional email provider;
- Google Analytics;
- Google Search Console;
- booking engine when added later.

### 2.2 Developer Access
The developer receives only the access needed to build, deploy, and maintain the site.

### 2.3 No Account Lock-In
The domain and essential business services should not remain permanently owned only by the developer.

## 3. Environment Modes

### 3.1 Preview Mode
Set:

`NEXT_PUBLIC_SITE_STATUS=preview`

Preview mode:

- blocks search-engine indexing;
- disables production analytics loading;
- can use safe fallback content;
- is suitable for client review.

### 3.2 Production Mode
Set:

`NEXT_PUBLIC_SITE_STATUS=production`

Production mode:

- enables index/follow metadata;
- publishes sitemap URLs;
- allows robots crawling except API routes;
- enables HSTS;
- can load GA4 when analytics is explicitly enabled.

## 4. Required Production Variables

### 4.1 Site
Required:

- NEXT_PUBLIC_SITE_URL
- NEXT_PUBLIC_SITE_STATUS=production

### 4.2 CMS
Required:

- NEXT_PUBLIC_SANITY_PROJECT_ID
- NEXT_PUBLIC_SANITY_DATASET

### 4.3 Enquiry Delivery
Required:

- RESEND_API_KEY
- ENQUIRY_TO_EMAIL
- ENQUIRY_FROM_EMAIL

### 4.4 Optional Analytics
When analytics is approved:

- NEXT_PUBLIC_ANALYTICS_ENABLED=true
- NEXT_PUBLIC_GA_MEASUREMENT_ID
- NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION when Search Console verification uses the meta-tag method

## 5. Pre-Deployment Validation

### 5.1 Local or CI Quality
Run:

`npm run quality`

### 5.2 Production Configuration
With production environment variables loaded, run:

`npm run validate:production`

The production validator rejects:

- preview mode;
- missing core production variables;
- HTTP/non-HTTPS production URLs;
- localhost production URLs;
- analytics enabled without a measurement ID.

## 6. Preview Deployment

### 6.1 Build
Deploy the main branch to a private or unindexed preview URL.

### 6.2 Preview Checks
Verify:

- all routes load;
- mobile layout;
- gallery;
- availability form validation;
- contact form validation;
- CMS content;
- client-approved media;
- correct property contact details.

### 6.3 Content Sign-Off
Do not proceed to public production until the client confirms factual content.

## 7. Production Deployment

### 7.1 Domain
Point the client-owned domain to the selected hosting platform.

### 7.2 HTTPS
Confirm HTTPS is active before enabling production mode.

### 7.3 Services
Connect:

- Sanity;
- enquiry email;
- analytics if approved;
- Search Console;
- future booking engine if included.

### 7.4 Production Mode
Set the final canonical HTTPS URL and switch NEXT_PUBLIC_SITE_STATUS to production.

### 7.5 Rebuild
Rebuild/redeploy after changing NEXT_PUBLIC_ variables because they are embedded into the client build.

## 8. Post-Deployment Verification

### 8.1 Health
Verify:

`/api/health`

### 8.2 Search
Verify:

- robots.txt;
- sitemap.xml;
- canonical URLs;
- Open Graph image;
- no accidental noindex on production.

### 8.3 Forms
Submit one real availability enquiry and one real contact enquiry.

### 8.4 Analytics
If enabled, verify events in GA4 DebugView/Realtime without sending personal form fields.

### 8.5 Mobile
Test the final public site on a real Android device.

## 9. Search Engine Launch

### 9.1 Search Console
Verify the domain/property.

### 9.2 Sitemap
Submit:

`https://<production-domain>/sitemap.xml`

### 9.3 Structured Data
Add Hotel/HotelRoom/Offer/rating structured data only after current address, room, pricing, availability, and review information is verified and visible on the site.

## 10. Rollback

### 10.1 Application
If a launch regression occurs:

1. restore the previous known-good deployment;
2. keep the domain on HTTPS;
3. investigate the failed commit in preview;
4. rerun CI and smoke tests before redeploying.

### 10.2 Search Safety
If incorrect client content is public, fix the content immediately. Do not use misleading structured data to hide or replace inaccurate visible content.

## 11. Production Support

### 11.1 First 14 Days
Use the commercial package's defect-support window for implementation defects.

### 11.2 Ongoing Maintenance
Handle ongoing content updates, package/security updates, analytics reporting, and feature additions under a separate maintenance scope when required.

## 12. Current Deployment Status

### 12.1 Ready
The repository contains:

- environment-mode controls;
- SEO launch controls;
- analytics gating;
- security headers;
- health endpoint;
- production configuration validation;
- CI production build;
- production-server smoke testing.

### 12.2 External Inputs Still Required
A real public deployment cannot be completed until production hosting/domain access and the client service credentials are available.

## 13. Next Action

### 13.1 Client Preview
Create the client preview deployment using client-approved content and media, then complete the live-environment QA checklist before switching to production mode.
