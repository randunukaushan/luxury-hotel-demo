# Luxury Hotel Website Demo

A premium hospitality website concept and sales demo, initially tailored to Kandy Victoria Eco Resort, Sri Lanka.

## 1. Purpose

This repository is the canonical workspace for research, product/design documentation, UX strategy, technical specifications, and implementation of a premium hotel website demo intended to demonstrate a high-value hospitality web offering.

## 2. Commercial Positioning

- Initial quote target: LKR 120,000
- Positioning: premium custom hospitality website, not a low-cost template build
- Primary business outcome: improve brand perception and increase direct enquiries / booking intent
- Initial prospect context: Kandy Victoria Eco Resort

## 3. Current Phase

**Phase 2 — Implementation in Progress**

The documentation set is complete. The application foundation, design system, homepage, CMS foundation, Stay listing, and dynamic Room Detail routes are implemented and passing CI.

## 4. Documentation

See `docs/Documentation-Roadmap.md` for the full sequence and status.

## 5. Documentation Status

- [x] Repository structure defined
- [x] Project brief
- [x] Documentation roadmap
- [x] Global luxury-hotel website benchmark research
- [x] Property research and positioning
- [x] Brand and visual direction
- [x] Information architecture
- [x] UX and conversion strategy
- [x] Feature specification
- [x] Content strategy
- [x] Technical architecture
- [x] SEO, performance and accessibility
- [x] Demo build plan
- [x] Client handoff and commercial package

## 6. Implementation Status

- [x] Application foundation
- [x] Design system implementation
- [x] CMS foundation
- [x] Homepage vertical slice
- [x] Stay and room pages
- [ ] Supporting pages
- [ ] Availability/contact forms
- [ ] SEO and analytics implementation
- [ ] Performance/accessibility QA
- [ ] Client-ready deployment

## 7. CMS Status

### 7.1 Implemented

The project now includes:

- Sanity dependencies and configuration;
- room and supporting content schemas;
- GROQ room queries;
- a typed content repository;
- Sanity image CDN support;
- safe demo fallback content.

### 7.2 Live Connection

The site intentionally uses fallback demo content until a real Sanity project ID and dataset are configured. Once those environment variables are supplied, the Stay and Room Detail routes can read published CMS content without changing page architecture.

## 8. Quality Status

### 8.1 Automated CI

Current GitHub Actions quality gate passes:

- dependency installation;
- ESLint;
- TypeScript typecheck;
- production build.

### 8.2 Current Demo Safety

Current room categories and visuals are explicitly labelled as concept content where the property has not confirmed definitive room inventory. Unlicensed property photography is not committed.

## 9. Working Rules

### 9.1 Documentation First
Implementation must follow the repository documentation. If a major product, design, commercial, or technical decision changes, update the relevant document before coding.

### 9.2 Verified Property Content
Do not publish unverified room facts, amenities, offers, ratings, or experiences as factual claims.

### 9.3 Original Design
Reference sites inform principles only. Do not clone their layouts, copy, or proprietary assets.

## 10. Next Step

Continue with **Supporting Pages** — Experiences, Dining, Gallery, Kandy, Offers, FAQ and Contact — then implement the real availability/contact form flow.
