# SEO, Performance and Accessibility

## 1. Document Purpose

### 1.1 Objective
Define measurable discoverability, speed, semantic, and accessibility requirements for the Luxury Hotel Website Demo.

### 1.2 Quality Principle
The site should feel visually rich without sacrificing mobile speed, keyboard usability, search clarity, or trustworthy structured information.

### 1.3 Standards Snapshot
This document was reviewed on **19 September 2026** against current Google Core Web Vitals guidance, WCAG 2.2, Next.js image guidance, and Schema.org hotel modelling.

## 2. SEO Foundations

### 2.1 Crawlability
Published marketing pages should be crawlable unless a deliberate noindex rule applies.

### 2.2 Indexable Routes
Expected indexable routes include:

- Home
- Stay
- Room pages
- Experiences
- Dining
- Gallery when it contains meaningful text/context
- Kandy
- Offers when active
- FAQ
- Contact

### 2.3 Non-Indexable Routes
Preview, staging, internal test, duplicate campaign, and private admin routes should not be indexed.

## 3. Metadata Strategy

### 3.1 Page Title
Every page requires a unique title.

### 3.2 Title Pattern
Working pattern:

**Primary Topic | Property Name**

Avoid stuffing repeated location keywords.

### 3.3 Meta Description
Write one accurate description per page, generally around 140-165 characters as an editorial working target rather than a hard ranking rule.

### 3.4 Canonical
Every indexable page should resolve to one canonical production URL.

### 3.5 Social Metadata
Provide:

- Open Graph title;
- Open Graph description;
- Open Graph image;
- Twitter/X-compatible card metadata where useful.

## 4. Heading Semantics

### 4.1 One Primary H1
Each page should normally contain one clear H1 representing the page topic.

### 4.2 Hierarchy
Do not choose heading levels for font size. Follow semantic order.

### 4.3 Hidden Headings
Avoid invisible SEO-only headings.

## 5. Structured Data

### 5.1 Property Type
Use accurate Schema.org types such as `Hotel`, `Resort`, or `LodgingBusiness` based on the verified property classification.

### 5.2 Room Modelling
Room structured data may use `HotelRoom` / accommodation modelling where accurate.

### 5.3 Offers
Only emit Offer/pricing data when it is current, structured, and maintained reliably.

### 5.4 Rating Data
Do not invent or freeze stale aggregate ratings. Use only data whose source and maintenance process are known.

### 5.5 FAQ
Do not add FAQ structured data merely to chase a rich result. Use it only when it accurately represents visible FAQ content and current search-engine guidance permits it.

### 5.6 Validation
Validate JSON-LD during QA with current structured-data tools.

## 6. Sitemap and Robots

### 6.1 Sitemap
Generate sitemap entries from published routes and CMS content.

### 6.2 Last Modified
Use meaningful modification dates where available.

### 6.3 Robots
Production robots rules should allow public content and block only routes that should not be crawled.

### 6.4 Staging
Staging must be protected from indexing through appropriate environment controls.

## 7. Local Discoverability

### 7.1 NAP Consistency
Property name, address, and phone information should match the client’s official business listings.

### 7.2 Map and Location
Provide a clear map/location route without implying inaccurate distance or travel time.

### 7.3 Destination Content
Kandy content should be genuinely useful rather than a thin keyword page.

## 8. Core Web Vitals Targets

### 8.1 Largest Contentful Paint
Target **LCP ≤ 2.5 seconds** at the 75th percentile where real-user data is available.

### 8.2 Interaction to Next Paint
Target **INP < 200 ms**.

### 8.3 Cumulative Layout Shift
Target **CLS < 0.1**.

### 8.4 Measurement
Use field data when available and lab tools during development. Lab scores are diagnostic, not a substitute for real-user measurements.

## 9. Internal Performance Budgets

### 9.1 Initial Page Weight
Aim for an initial mobile page experience that avoids unnecessary multi-megabyte downloads before interaction.

### 9.2 JavaScript
Keep client-side JavaScript limited. Content sections should not become client components without a real interaction need.

### 9.3 Fonts
Limit families and weights.

### 9.4 Third-Party Scripts
Every third-party script must justify its performance and privacy cost.

## 10. Image Performance

### 10.1 Responsive Delivery
Use responsive image sizes and generated source sets.

### 10.2 Correct `sizes`
When using responsive/fill images, specify realistic `sizes` values so the browser does not download oversized assets.

### 10.3 Priority
Prioritise only above-the-fold LCP imagery.

### 10.4 Lazy Loading
Lazy-load below-the-fold media.

### 10.5 Dimensions
Reserve image aspect ratio/dimensions to prevent layout shift.

### 10.6 Mobile Art Direction
Use mobile-specific crop/focal handling where desktop photography does not translate.

## 11. Video Performance

### 11.1 Optional Use
Do not use video simply because luxury sites often do.

### 11.2 Poster First
Provide a lightweight poster and usable experience before video finishes loading.

### 11.3 Mobile
Allow mobile to use a still image when video cost is too high.

### 11.4 Reduced Motion
Disable or replace autoplay motion when the user requests reduced motion.

## 12. Font Performance

### 12.1 Subsetting
Use only necessary character sets and weights.

### 12.2 Preload
Preload only fonts critical to first render.

### 12.3 Fallback Metrics
Use appropriate fallback stacks to reduce layout movement.

## 13. Caching

### 13.1 Static Assets
Use long-lived immutable caching for hashed assets.

### 13.2 CMS Content
Use cached/server-rendered content with controlled revalidation.

### 13.3 Images
Use the framework/CDN image pipeline rather than serving raw camera files directly.

## 14. Accessibility Standard

### 14.1 Target
Target **WCAG 2.2 Level AA** for the production site.

### 14.2 Principle
Accessibility is part of design quality, not a post-launch plugin.

## 15. Keyboard Accessibility

### 15.1 Complete Navigation
A keyboard user must be able to access:

- navigation;
- mobile menu;
- room links;
- forms;
- FAQ;
- lightbox;
- booking actions;
- footer links.

### 15.2 Focus Order
Focus order should follow the visual/logical reading order.

### 15.3 Focus Visibility
Never remove focus outlines without providing a clear replacement.

## 16. Forms Accessibility

### 16.1 Labels
Every input requires an explicit programmatic label.

### 16.2 Instructions
Date format, required state, and constraints should be understandable before errors occur.

### 16.3 Errors
Errors should be:

- specific;
- linked to the relevant input;
- understandable without colour alone;
- announced appropriately to assistive technology.

### 16.4 Autofill
Use appropriate autocomplete attributes for contact fields.

## 17. Colour and Contrast

### 17.1 Text
Normal body text should meet WCAG AA contrast.

### 17.2 Accent Colours
Bronze and slate accents should not be assumed accessible for small text without checking the exact combination.

### 17.3 Non-Text Contrast
Controls, focus states, and meaningful boundaries must remain perceivable.

### 17.4 Colour Independence
Do not communicate error, selected state, or availability using colour alone.

## 18. Motion Accessibility

### 18.1 Reduced Motion
Respect `prefers-reduced-motion`.

### 18.2 No Essential Motion
No core information should require animation to understand.

### 18.3 No Scroll Hijacking
Avoid scroll-locking storytelling that prevents normal page movement.

## 19. Image Accessibility

### 19.1 Informative Images
Provide concise meaningful alt text.

### 19.2 Decorative Images
Use empty alt or decorative handling when an image adds no information.

### 19.3 Gallery Captions
Use captions when location, room type, or content context materially helps the user.

## 20. Lightbox Accessibility

### 20.1 Requirements
The gallery lightbox must:

- move focus into the dialog;
- trap focus appropriately;
- provide labelled close/next/previous controls;
- support Escape;
- restore focus on close;
- expose image context.

## 21. Navigation Accessibility

### 21.1 Menu Button
The mobile menu trigger must expose expanded/collapsed state.

### 21.2 Skip Link
Provide a visible-on-focus skip-to-main-content link.

### 21.3 Landmarks
Use semantic header, nav, main, footer, and appropriate section structures.

## 22. Touch Accessibility

### 22.1 Target Size
Controls should be comfortably tappable and follow modern WCAG 2.2 target-size expectations.

### 22.2 Spacing
Avoid tightly packed text links in mobile conversion areas.

## 23. Language and Readability

### 23.1 Page Language
Set the correct document language.

### 23.2 Plain Language
Policies and booking information should be understandable without hotel-industry jargon.

### 23.3 Future Languages
If Sinhala or other languages are later added, use proper language tags and independent translated metadata.

## 24. Maps and Embeds

### 24.1 Performance
Do not load a heavy map iframe before it is needed.

### 24.2 Accessibility
Provide the property address and an external map/directions link as a non-map alternative.

## 25. Third-Party Widgets

### 25.1 Evaluation
Booking engines, chat widgets, review widgets, and maps must be reviewed for:

- performance;
- keyboard usability;
- mobile behaviour;
- privacy;
- visual integration.

### 25.2 Containment
Do not allow a low-quality third-party widget to dominate the site experience.

## 26. QA Tools and Process

### 26.1 Automated Checks
Use:

- Lighthouse/PageSpeed;
- accessibility linting;
- automated browser accessibility checks;
- HTML/metadata validation where useful.

### 26.2 Manual Checks
Manually test:

- keyboard-only navigation;
- 200% zoom;
- narrow mobile width;
- reduced motion;
- form errors;
- gallery;
- screen-reader spot checks;
- slow network conditions.

## 27. Launch Acceptance Criteria

### 27.1 SEO
Unique metadata, canonicals, sitemap, robots, structured-data validation, and no accidental staging indexation.

### 27.2 Performance
No obvious oversized hero media, unnecessary route-wide client rendering, or severe layout shift.

### 27.3 Accessibility
No known critical keyboard, form, focus, contrast, or semantic blockers.

### 27.4 Mobile
Primary content and conversion remain fast and usable on realistic mobile conditions.

## 28. Current Source Register

### 28.1 Google Core Web Vitals
https://developers.google.com/search/docs/appearance/core-web-vitals

### 28.2 WCAG 2.2
https://www.w3.org/TR/WCAG22/

### 28.3 Next.js Images
https://nextjs.org/docs/app/api-reference/components/image

### 28.4 Schema.org Hotel Modelling
https://schema.org/docs/hotels.html

## 29. Next Document

### 29.1 Demo Build Plan
The next document converts the complete specification into implementation milestones and Codex acceptance gates.
