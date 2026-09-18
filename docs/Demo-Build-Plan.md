# Demo Build Plan

## 1. Document Purpose

### 1.1 Objective
Translate the approved research, design, UX, content, and technical documentation into a disciplined implementation sequence that Codex can follow without design drift.

### 1.2 Build Principle
Implementation proceeds in vertical quality gates. A phase is not considered complete because files exist; it is complete only when its acceptance criteria pass.

## 2. Pre-Build Gate

### 2.1 Required Documents
Before implementation begins, the following must exist and be treated as source-of-truth:

- Project Brief
- Luxury Hospitality Benchmark Research
- Property Research and Positioning
- Brand and Visual Direction
- Information Architecture
- UX and Conversion Strategy
- Feature Specification
- Content Strategy
- Technical Architecture
- SEO, Performance and Accessibility
- Client Handoff and Commercial Package

### 2.2 Technical Recheck
Immediately before scaffold:

- confirm current patched Next.js 16 release;
- confirm React compatibility;
- confirm current CMS SDK;
- confirm current hosting requirements;
- audit known security advisories.

### 2.3 Repository Rule
All implementation work must happen in the existing GitHub repository with meaningful commits.

## 3. Phase 1 — Application Foundation

### 3.1 Scaffold
Create a current Next.js 16 App Router project with:

- TypeScript;
- linting;
- formatting;
- environment validation;
- initial test setup;
- responsive viewport defaults.

### 3.2 Repository Files
Add:

- `.gitignore`;
- `.env.example`;
- `AGENTS.md`;
- project scripts;
- contribution/build notes where useful.

### 3.3 Base Quality
The application must build cleanly before visual work starts.

### 3.4 Acceptance Criteria
Phase 1 passes when:

- install succeeds;
- development server starts;
- production build succeeds;
- TypeScript has no errors;
- lint passes;
- no secrets are committed.

## 4. Phase 2 — Design System Foundation

### 4.1 Tokens
Implement documented:

- colours;
- typography;
- spacing;
- containers;
- borders;
- radii;
- motion timing;
- z-index layers.

### 4.2 Fonts
Implement the approved display/body pairing with optimised loading.

### 4.3 Core UI
Build:

- Container;
- Section;
- Button;
- TextLink;
- Eyebrow;
- Heading;
- Divider;
- IconText;
- MediaFrame.

### 4.4 Visual Test Page
Create an internal design-system route or Storybook-like development surface only if it materially speeds QA.

### 4.5 Acceptance Criteria
No undocumented colour or font family appears in core UI.

## 5. Phase 3 — Global Shell

### 5.1 Header
Implement desktop and mobile navigation.

### 5.2 Mobile Menu
Implement:

- keyboard behaviour;
- body-scroll handling;
- focus management;
- contact actions;
- availability action.

### 5.3 Footer
Implement complete contact/navigation/legal structure.

### 5.4 Sticky Mobile Actions
Implement Call, WhatsApp, and Check Availability with safe-area support.

### 5.5 Acceptance Criteria
Global navigation works at all target breakpoints and with keyboard-only input.

## 6. Phase 4 — CMS Foundation

### 6.1 Sanity Project
Configure project, dataset, environment variables, and Studio.

### 6.2 Schemas
Implement:

- Site Settings;
- Room;
- Experience;
- Dining;
- Offer;
- FAQ;
- Review;
- Gallery Item;
- Attraction;
- reusable SEO fields.

### 6.3 Queries
Create typed query functions with central ownership.

### 6.4 Preview
Add draft/preview workflow if the selected plan/setup supports the desired client workflow.

### 6.5 Acceptance Criteria
A content change can be reflected without editing React page source.

## 7. Phase 5 — Homepage Vertical Slice

### 7.1 Hero
Build final-quality hero first.

### 7.2 Story and Rooms
Build property story and featured-room section.

### 7.3 Conversion
Wire Check Availability, WhatsApp, and room links.

### 7.4 Remaining Home Sections
Implement:

- view/landscape;
- experiences;
- dining;
- review proof;
- gallery preview;
- Kandy;
- final booking block.

### 7.5 Acceptance Criteria
Homepage should already be strong enough to use as an early private sales preview.

## 8. Phase 6 — Stay and Room Detail

### 8.1 Stay Listing
Build CMS-driven room cards.

### 8.2 Room Detail
Build:

- hero;
- decision facts;
- story;
- amenity groups;
- gallery;
- practical information;
- related rooms;
- booking actions.

### 8.3 Dynamic Routing
Implement stable room slugs and not-found handling.

### 8.4 Acceptance Criteria
Adding a new room in CMS should create a valid room experience without bespoke page code.

## 9. Phase 7 — Supporting Experience Pages

### 9.1 Experiences
Build experience listing and optional detail treatment.

### 9.2 Dining
Build dining story, breakfast details, gallery, and enquiry.

### 9.3 Gallery
Build category-aware gallery and accessible lightbox.

### 9.4 Kandy
Build destination editorial content, attractions, map activation, and travel context.

### 9.5 Offers
Build conditional offer listing and detail only where useful.

### 9.6 FAQ and Contact
Build accessible FAQ and contact page.

## 10. Phase 8 — Availability and Contact Forms

### 10.1 Availability Form
Implement date, guest, room-interest, contact, and notes fields.

### 10.2 Validation
Implement client convenience validation and authoritative server validation.

### 10.3 Email
Configure transactional email.

### 10.4 Spam Protection
Implement honeypot, rate limit, and escalation option.

### 10.5 Success and Error States
Complete all states before calling the form finished.

### 10.6 Acceptance Criteria
No guest PII appears in analytics, public CMS content, browser logs, or repository files.

## 11. Phase 9 — SEO and Structured Data

### 11.1 Metadata
Implement per-page metadata from CMS/content.

### 11.2 Sitemap and Robots
Implement environment-aware sitemap/robots behaviour.

### 11.3 JSON-LD
Implement verified hotel/property and room structured data.

### 11.4 Social Preview
Create final social sharing image strategy.

## 12. Phase 10 — Analytics

### 12.1 Event Wrapper
Implement provider-neutral event helper.

### 12.2 Events
Add documented core events.

### 12.3 Privacy QA
Confirm no event includes PII.

## 13. Phase 11 — Performance Pass

### 13.1 Images
Audit dimensions, `sizes`, lazy loading, and LCP priority.

### 13.2 JavaScript
Remove unnecessary client boundaries and heavy dependencies.

### 13.3 Video
Test video cost or replace with still image.

### 13.4 Fonts
Audit weights and loading.

### 13.5 Third Parties
Defer or remove unnecessary scripts.

## 14. Phase 12 — Accessibility Pass

### 14.1 Keyboard
Test every interactive surface.

### 14.2 Focus
Test menu, lightbox, accordions, and form states.

### 14.3 Contrast
Validate real component combinations.

### 14.4 Reduced Motion
Test full site with reduced motion.

### 14.5 Zoom
Test 200% zoom and narrow layouts.

## 15. Phase 13 — Responsive QA

### 15.1 Target Widths
Test representative widths including:

- small Android;
- common modern phone;
- tablet portrait;
- tablet landscape;
- laptop;
- large desktop.

### 15.2 Real Device
At minimum, test on a real Android device before client demonstration.

### 15.3 Network
Test on throttled/slow mobile conditions.

## 16. Phase 14 — Content QA

### 16.1 Verification
Check every:

- room name;
- room fact;
- amenity;
- contact detail;
- rating;
- review excerpt;
- attraction;
- travel claim;
- offer.

### 16.2 Rights
Replace all unlicensed research imagery before public production.

## 17. Phase 15 — Sales Demo Polish

### 17.1 Demo Data
Use complete, coherent sample/client-approved content.

### 17.2 No Development Debris
Remove:

- lorem ipsum;
- placeholder icons;
- debug controls;
- console errors;
- unfinished routes;
- test navigation;
- broken image states.

### 17.3 Demo Script
Prepare a short owner walkthrough:

1. first impression;
2. mobile view;
3. rooms;
4. direct enquiry;
5. CMS edit;
6. speed/SEO quality;
7. package and handoff.

## 18. Phase 16 — Deployment

### 18.1 Preview
Deploy private/staging preview.

### 18.2 Production
Production deployment occurs only after factual content approval and commercial agreement.

### 18.3 Ownership
Move/create production services under client ownership where practical.

## 19. Codex Working Rules

### 19.1 Read Before Coding
Codex must read the relevant docs before modifying a feature.

### 19.2 Small Commits
Commit coherent units with descriptive messages.

### 19.3 No Design Drift
Do not invent:

- new colours;
- new fonts;
- new layout language;
- new property claims;
- new major features.

If a change is necessary, update the relevant documentation first.

### 19.4 Verify
After each feature:

- lint;
- typecheck;
- test relevant behaviour;
- production build when appropriate.

## 20. Definition of Done

### 20.1 Design
The site looks intentionally premium on desktop and mobile.

### 20.2 Function
All P0 features work.

### 20.3 Content
No known unverified factual claim remains.

### 20.4 Performance
No obvious media or JavaScript regression undermines the experience.

### 20.5 Accessibility
No known critical keyboard/focus/form blocker remains.

### 20.6 Commercial
The owner can understand what they are buying and how the site supports direct enquiries.

## 21. Final Pre-Client Checklist

### 21.1 Build
Production build passes.

### 21.2 Browser
Test current Chromium plus at least one non-Chromium browser where possible.

### 21.3 Device
Test real mobile.

### 21.4 Links
No broken internal/external actions.

### 21.5 Forms
Test success, validation, delivery failure, and rate-limit states.

### 21.6 SEO
Metadata, sitemap, robots, canonicals, and structured data checked.

### 21.7 Analytics
Events fire without PII.

### 21.8 Content
Client-facing claims verified.

## 22. Next Document

### 22.1 Client Handoff and Commercial Package
The final documentation phase defines the LKR 120,000 package, deliverables, boundaries, ownership, payment, and handoff.
