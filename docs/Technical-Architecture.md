# Technical Architecture

## 1. Document Purpose

### 1.1 Objective
Define a production-quality technical architecture that Codex can implement consistently for the Luxury Hotel Website Demo and later adapt for real hospitality clients.

### 1.2 Architecture Goals
The system should be:

- fast on Sri Lankan mobile networks;
- SEO-friendly;
- easy to maintain;
- editable by non-developers where appropriate;
- secure enough for public business use;
- straightforward to deploy;
- reusable for future hospitality projects;
- compatible with a future external booking engine.

### 1.3 Research Snapshot
Technical decisions in this document were reviewed on **19 September 2026**. Package versions should be rechecked immediately before implementation and security-sensitive packages should use current patched releases.

## 2. Recommended Stack

### 2.1 Frontend Framework
Use **Next.js 16 Active LTS** with the App Router and TypeScript.

At the research snapshot, Next.js recommends patched **16.3.3 Active LTS** following the August 2026 security release.

### 2.2 React
Use the React version supported by the selected current Next.js 16 release.

### 2.3 Styling
Use:

- CSS custom properties for design tokens;
- Tailwind CSS for utility composition where it improves speed and consistency;
- component-level CSS only where editorial layouts or animation require clearer ownership.

The design system must not depend on hundreds of arbitrary one-off values.

### 2.4 Motion
Use CSS transitions for simple interaction and a modern React motion library only for animation that genuinely requires orchestration.

### 2.5 Validation
Use **Zod** or an equivalent typed schema validator for server-handled forms and environment configuration.

## 3. Rendering Strategy

### 3.1 Server-First
Prefer React Server Components for content-heavy pages.

### 3.2 Client Components
Use client components only for interactive features such as:

- mobile menu;
- gallery lightbox;
- availability form;
- date selection;
- selected motion;
- accordions;
- interactive map activation.

### 3.3 Static and Cached Content
Hotel marketing content changes relatively infrequently. Prefer static generation/cached rendering with controlled revalidation rather than dynamic rendering on every request.

### 3.4 Revalidation
When CMS content changes, use webhook-triggered revalidation or tag/path revalidation so editors do not need a full manual deployment for normal content updates.

## 4. Content Management System

### 4.1 Recommended CMS
Use **Sanity** for the first implementation.

### 4.2 Why Sanity
It supports:

- structured content;
- hosted content database;
- image asset pipeline;
- live preview tooling;
- flexible schemas;
- strong Next.js integration;
- room/offer/experience relationships;
- future multilingual fields.

### 4.3 Demo Plan
The Sanity Free plan is sufficient for a small demo/public-content project if quotas remain within current limits.

### 4.4 Production Permission Caution
At the 2026 research snapshot, the Free plan exposes limited permission roles. If hotel staff require least-privilege Editor/Contributor roles or private datasets, use an appropriate paid plan rather than giving unnecessary administrator access.

### 4.5 Public Dataset Rule
Public website content may live in a public content dataset. **Guest enquiry personal data must not be stored in a public Sanity dataset.**

## 5. CMS Content Types

### 5.1 Site Settings
Fields:

- propertyName;
- logo;
- phone;
- whatsapp;
- reservationEmail;
- address;
- mapUrl;
- socialLinks;
- bookingEngineUrl;
- defaultSeo;
- ratingSnapshots.

### 5.2 Room
Fields:

- title;
- slug;
- status;
- shortDescription;
- description;
- heroImage;
- gallery;
- size;
- occupancy;
- bed;
- view;
- features;
- amenityGroups;
- policyNotes;
- sortOrder;
- seo.

### 5.3 Experience
Fields:

- title;
- slug;
- category;
- summary;
- description;
- image;
- gallery;
- duration;
- availability;
- operatorType;
- enquiryEnabled;
- seo.

### 5.4 Dining
Fields:

- title;
- summary;
- description;
- cuisine;
- openingHours;
- breakfastDetails;
- dietaryOptions;
- menuUrl;
- gallery;
- enquiryEnabled.

### 5.5 Offer
Fields:

- title;
- slug;
- status;
- summary;
- image;
- bookingWindow;
- stayWindow;
- inclusions;
- conditions;
- ctaLabel;
- ctaUrl;
- seo.

### 5.6 Supporting Types
Also support:

- FAQ;
- Review;
- GalleryItem;
- Attraction;
- EditorialSection.

## 6. Repository Structure

### 6.1 Proposed Structure
Use a structure similar to:

```text
/
├─ app/
│  ├─ (site)/
│  ├─ api/
│  ├─ layout.tsx
│  ├─ sitemap.ts
│  └─ robots.ts
├─ components/
│  ├─ layout/
│  ├─ navigation/
│  ├─ sections/
│  ├─ room/
│  ├─ forms/
│  ├─ gallery/
│  └─ ui/
├─ lib/
│  ├─ sanity/
│  ├─ analytics/
│  ├─ validation/
│  ├─ booking/
│  └─ utils/
├─ styles/
├─ public/
├─ sanity/
│  ├─ schemaTypes/
│  └─ structure/
├─ docs/
├─ tests/
└─ AGENTS.md
```

### 6.2 Component Rule
Components should be reusable by content role rather than copied page-by-page.

## 7. Design System Implementation

### 7.1 Tokens
Create typed/CSS tokens for:

- colours;
- spacing;
- typography;
- radii;
- borders;
- shadows;
- z-index;
- container widths;
- transition durations.

### 7.2 Token Ownership
The Brand and Visual Direction document is the source of truth for visual tokens.

### 7.3 No Magic-Value Drift
Codex should not introduce new colours, font families, or arbitrary spacing scales without updating the design documentation.

## 8. Image Architecture

### 8.1 Next.js Image
Use `next/image` for responsive image delivery where appropriate.

### 8.2 Responsive Sizes
Every responsive fill image must define a correct `sizes` strategy so browsers do not unnecessarily download viewport-width assets.

### 8.3 CMS Images
Use Sanity image transformations for useful crop/size combinations and preserve hotspot/focal data where configured.

### 8.4 LCP Image
Only the true primary LCP image should be prioritised. Do not preload entire galleries.

### 8.5 Formats
Prefer modern formats supplied by the image pipeline/browser negotiation.

## 9. Video Architecture

### 9.1 Optional Enhancement
Hero video is optional.

### 9.2 Rules
If used:

- provide a poster;
- mute autoplay;
- no audio autoplay;
- compress aggressively;
- avoid large mobile downloads;
- provide reduced-motion/still fallback;
- do not block first render.

### 9.3 Hosting
Use an appropriate video/CDN service or properly optimised static delivery rather than uploading huge raw video files to the repository.

## 10. Font Architecture

### 10.1 Loading
Use Next.js font optimisation or self-hosted licensed font files.

### 10.2 Weights
Load only the weights actually used.

### 10.3 Fallback
Define fallback stacks that preserve approximate metrics to reduce layout shift.

## 11. Availability Form Architecture

### 11.1 Client Layer
Collect the minimal fields defined in the Feature Specification.

### 11.2 Server Layer
Use a server action or route handler with:

- schema validation;
- sanitised/normalised fields;
- rate limiting;
- spam controls;
- structured error responses.

### 11.3 Email Delivery
Use a transactional email provider such as **Resend**.

At the research snapshot, Resend offers a free tier suitable for low-volume development/small usage, with paid tiers available as volume grows.

### 11.4 Data Retention
The base implementation should email the enquiry to the hotel and avoid building a custom guest database.

### 11.5 PII Rule
Do not send personal enquiry fields to analytics and do not store them in public CMS content.

## 12. Spam Protection

### 12.1 Baseline
Use:

- hidden honeypot;
- timing/basic bot heuristics;
- server-side rate limiting;
- input length limits.

### 12.2 Escalation
Add a privacy-conscious challenge provider such as Turnstile only if abuse requires it.

## 13. Booking Integration Layer

### 13.1 Adapter Principle
Do not hard-wire page components directly to one booking vendor.

### 13.2 Booking Interface
Create a small adapter abstraction capable of:

- opening external booking URL;
- passing dates where supported;
- passing guest counts where supported;
- passing promo code where supported later.

### 13.3 Initial Mode
Initial mode is **direct enquiry**.

### 13.4 Future Mode
Future mode may switch to a client-selected booking/PMS engine without redesigning the whole site.

## 14. WhatsApp Integration

### 14.1 Link Builder
Create one utility for WhatsApp deep links.

### 14.2 Context
Allow non-sensitive context such as room slug, check-in, check-out, and guest count.

### 14.3 Sanitisation
Encode URLs properly and never place private free-form messages or form contact details into analytics.

## 15. Analytics Architecture

### 15.1 Provider
Use Google Analytics 4 if the client wants standard free analytics, or another approved analytics product if requirements change.

### 15.2 Event Layer
Create a provider-neutral analytics helper so UI components do not directly embed vendor calls.

### 15.3 Events
Implement events documented in UX and Conversion Strategy.

### 15.4 Privacy
Never send names, emails, phone numbers, enquiry text, or other PII as event parameters.

## 16. SEO Architecture

### 16.1 Metadata
Use the Next.js Metadata API for page titles, descriptions, canonicals, social previews, and robots directives.

### 16.2 Structured Data
Generate JSON-LD from verified CMS data.

### 16.3 Sitemap
Generate sitemap entries from published routes/content.

### 16.4 Redirects
Maintain redirects for any changed room or offer slug in production.

## 17. Security Architecture

### 17.1 Secrets
All private tokens and API keys live in environment variables or platform secret storage.

### 17.2 Client Exposure
Only variables explicitly safe for browsers may use public prefixes.

### 17.3 Headers
Configure appropriate:

- Content-Security-Policy;
- Referrer-Policy;
- X-Content-Type-Options;
- Permissions-Policy;
- HSTS after correct HTTPS production configuration.

### 17.4 Input
Validate all server inputs regardless of client-side validation.

### 17.5 Dependencies
Use supported patched dependencies. The Next.js August 2026 security release demonstrates why version pinning and timely updates matter.

## 18. Deployment Architecture

### 18.1 Recommended Hosting
Use **Vercel Pro** for a commercial client deployment when using Vercel.

### 18.2 Hobby Plan Caution
At the research snapshot, Vercel describes Hobby as intended for personal/non-commercial use. Do not rely on Hobby for a paying hotel production deployment.

### 18.3 Ownership
Production hosting should ideally live in a client-owned account with developer access granted to the project team.

### 18.4 Domain
The client owns the domain and DNS account.

### 18.5 SSL
Use platform-managed HTTPS.

## 19. Environments

### 19.1 Local
Local developer environment.

### 19.2 Preview
Every pull request/branch may receive a preview deployment.

### 19.3 Production
Only approved changes merge/deploy to production.

### 19.4 CMS
Separate draft/preview behaviour from published public content.

## 20. Testing Strategy

### 20.1 Unit Tests
Test utilities such as:

- validation;
- date logic;
- booking URL generation;
- WhatsApp link generation;
- schema helpers.

### 20.2 Component Tests
Test:

- forms;
- menu;
- FAQ accordion;
- gallery controls;
- room facts.

### 20.3 End-to-End Tests
Cover:

- main navigation;
- room exploration;
- availability form;
- success/error states;
- mobile booking actions.

### 20.4 Accessibility Tests
Use automated checks plus manual keyboard and screen-reader spot checks.

## 21. Observability

### 21.1 Error Monitoring
Use deployment/platform logs initially and add a dedicated error-monitoring provider if production needs justify it.

### 21.2 Form Monitoring
Log delivery success/failure without logging sensitive form content.

### 21.3 Performance Monitoring
Use field data where available and periodic Lighthouse/PageSpeed checks.

## 22. Cost Boundaries

### 22.1 Build Price Versus Recurring Cost
The LKR 120,000 website build price should not silently include indefinite third-party subscription costs.

### 22.2 Client-Paid Recurring Services
Potential recurring costs include:

- commercial hosting;
- domain renewal;
- paid CMS tier if required;
- email service if usage exceeds free allowance;
- premium booking engine;
- premium analytics;
- ongoing maintenance.

### 22.3 Demo Cost
The internal demo may use free development tiers where their terms permit demo/non-production use.

## 23. Current Technical Source Register

### 23.1 Next.js
- https://nextjs.org/blog
- https://nextjs.org/blog/next-16
- https://nextjs.org/docs/app/api-reference/components/image

### 23.2 Hosting
- https://vercel.com/pricing
- https://vercel.com/docs/plans/hobby

### 23.3 CMS
- https://www.sanity.io/pricing
- https://www.sanity.io/docs/platform-management/plans-and-payments
- https://www.sanity.io/docs/apis-and-sdks/asset-cdn

### 23.4 Email
- https://resend.com/pricing

## 24. Architecture Acceptance Criteria

### 24.1 Maintainability
A new room or offer can be added without creating a new bespoke page implementation.

### 24.2 Performance
Most content renders server-first and interactive JavaScript is limited to features that need it.

### 24.3 Security
No secrets or guest PII leak to the client bundle, public CMS, repository, or analytics.

### 24.4 Portability
Booking and analytics providers can change without rewriting page components.

### 24.5 Ownership
The client can own domain, hosting, CMS, and service accounts at production handoff.

## 25. Next Document

### 25.1 SEO, Performance and Accessibility
The next document sets measurable quality targets for discoverability, Core Web Vitals, semantics, accessibility, and media delivery.
