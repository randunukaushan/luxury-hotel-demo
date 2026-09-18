# Feature Specification

## 1. Document Purpose

### 1.1 Objective
Define the complete demo feature set and the behaviour Codex must implement.

### 1.2 Priority Model
Features are classified as:

- **P0** required for the sales demo;
- **P1** important production-quality support;
- **P2** optional enhancement after the core demo.

## 2. Global Features

### 2.1 Responsive Layout — P0
Support mobile, tablet, laptop, and large desktop layouts with art-directed composition rather than simple stacking.

### 2.2 Header and Navigation — P0
Features:

- transparent hero state;
- solid scrolled state;
- desktop navigation;
- mobile menu;
- persistent Check Availability;
- keyboard accessibility.

### 2.3 Footer — P0
Include:

- verified contact details;
- address;
- key navigation;
- legal links;
- social links if provided;
- booking CTA.

### 2.4 Page Transitions — P1
Use subtle transitions only where they do not delay navigation.

## 3. Home Features

### 3.1 Cinematic Hero — P0
Support image-first hero and optional optimised video enhancement.

### 3.2 Story Block — P0
Editorial image + concise positioning copy.

### 3.3 Featured Rooms — P0
Reusable room cards linked to room detail.

### 3.4 Immersive View Section — P0
Large visual section with verified property highlights.

### 3.5 Experiences Preview — P0
3-4 items, CMS-editable.

### 3.6 Dining Preview — P0
Dining image, copy, hours or service highlights when verified.

### 3.7 Review Proof — P0
Rating/source and selected review excerpts.

### 3.8 Gallery Preview — P0
Curated gallery leading to full gallery.

### 3.9 Kandy Preview — P0
Location narrative and destination link.

### 3.10 Direct Enquiry Block — P0
Dates, guests, and availability CTA.

## 4. Stay Features

### 4.1 Room Listing — P0
Display all active room types.

### 4.2 Room Facts — P0
Support:

- room size;
- occupancy;
- bed;
- view;
- feature tags.

### 4.3 Room Filters — P2
Implement only if inventory justifies filtering.

### 4.4 Comparison — P2
Optional comparison view for larger inventory.

## 5. Room Detail Features

### 5.1 Room Hero — P0
Large image with room name and immediate facts.

### 5.2 Room Gallery — P0
Full gallery/lightbox.

### 5.3 Facts Grid — P0
Structured verified room metadata.

### 5.4 Amenities — P0
Grouped amenity list.

### 5.5 Room Enquiry — P0
Check Availability plus WhatsApp.

### 5.6 Related Rooms — P1
2-3 alternatives.

### 5.7 Floor Plan — P2
Support client-supplied floor plan later.

### 5.8 Virtual Tour — P2
Support external 360/virtual-tour link later.

## 6. Experiences Features

### 6.1 Experience Cards — P0
Image, name, excerpt, category, and details/enquiry.

### 6.2 Categories — P1
Optional category grouping.

### 6.3 Experience Detail — P1
Use dedicated route only when content depth warrants it.

## 7. Dining Features

### 7.1 Dining Overview — P0
Identity, imagery, description, cuisine, hours, and enquiry.

### 7.2 Breakfast Details — P0
Prominent breakfast information.

### 7.3 Menu Link — P1
CMS-controlled external/download link.

### 7.4 Dining Gallery — P1
Food/restaurant imagery.

## 8. Gallery Features

### 8.1 Category Filters — P1
Property, Rooms, Views, Dining, Experiences, Kandy.

### 8.2 Lightbox — P0
Requirements:

- keyboard navigation;
- swipe;
- focus trap;
- visible close;
- image count;
- lazy loading.

### 8.3 Video — P2
Optional short video support.

## 9. Kandy and Location Features

### 9.1 Destination Content — P0
Editorial Kandy content.

### 9.2 Map — P0
Interactive or linked map with privacy/performance-conscious loading.

### 9.3 Attraction Cards — P1
Name, image, short description, approximate travel context.

### 9.4 Transfer Information — P1
Client-confirmed transfer details.

## 10. Offers Features

### 10.1 Offer Cards — P1
Title, benefit, validity, image, CTA.

### 10.2 Offer Detail — P2
Dedicated page for complex offers.

### 10.3 Offer Activation — P1
CMS active/inactive and validity fields.

## 11. FAQ Features

### 11.1 Accessible Accordion — P0
Keyboard-operable, semantic, and CMS-editable.

### 11.2 FAQ Categories — P1
Optional grouping if item count is large.

## 12. Contact Features

### 12.1 Contact Details — P0
Phone, WhatsApp, email, address.

### 12.2 General Contact Form — P0
Fields:

- name;
- email or phone;
- subject;
- message;
- consent where required.

### 12.3 Map — P0
Location map/link.

## 13. Availability Enquiry Features

### 13.1 Date Inputs — P0
Check-in and check-out with logical validation.

### 13.2 Guest Inputs — P0
Adults and children where relevant.

### 13.3 Room Interest — P1
Optional room selector.

### 13.4 Contact Fields — P0
Name and at least one reply channel.

### 13.5 Message — P1
Optional short note.

### 13.6 Submission — P0
Secure server-side submission to configured email/inbox.

### 13.7 Confirmation — P0
Success state with enquiry summary and WhatsApp option.

### 13.8 Spam Protection — P0
Use honeypot/rate limiting and an additional provider only if needed.

## 14. WhatsApp Features

### 14.1 Global CTA — P0
Available in header/menu/footer or mobile action bar.

### 14.2 Contextual Message — P1
Prefill dates/room context without sensitive information.

## 15. Mobile Action Bar

### 15.1 Actions — P0
Call, WhatsApp, Check Availability.

### 15.2 Behaviour — P0
Appear after initial hero, respect safe-area insets, and never cover key controls.

## 16. Content Management Features

### 16.1 CMS-Editable Types — P0
Support editable:

- site settings;
- rooms;
- experiences;
- dining;
- offers;
- FAQs;
- reviews;
- gallery;
- destination/attractions;
- contact details.

### 16.2 Draft/Publish — P1
Content editors should be able to preview or manage drafts where the selected CMS supports it.

### 16.3 Image Metadata — P0
Require alt text and focal/crop guidance.

## 17. SEO Features

### 17.1 Metadata — P0
Per-page title, description, canonical, Open Graph image.

### 17.2 Structured Data — P0
Property and room structured data where accurate.

### 17.3 Sitemap and Robots — P0
Generate valid sitemap and robots configuration.

## 18. Analytics Features

### 18.1 Event Tracking — P1
Track the conversion events defined in UX strategy.

### 18.2 Consent Mode — P1
Configure analytics according to the chosen privacy/consent approach.

## 19. Performance Features

### 19.1 Responsive Images — P0
Use appropriate sizes, formats, lazy loading, and priority only for true LCP media.

### 19.2 Video Optimisation — P0 if video is used
Use poster, compressed source, mobile fallback, and no autoplay audio.

### 19.3 Font Optimisation — P0
Self-host or framework-optimise fonts and minimise weight variants.

## 20. Accessibility Features

### 20.1 Keyboard — P0
All navigation, menus, forms, accordions, and lightboxes usable without a mouse.

### 20.2 Focus — P0
Visible focus indication.

### 20.3 Motion — P0
Reduced-motion support.

### 20.4 Semantics — P0
Correct headings, landmarks, buttons, links, labels, and image alternatives.

## 21. Security and Reliability Features

### 21.1 Input Validation — P0
Validate all server-handled form input.

### 21.2 Secrets — P0
No API keys or credentials in client code or repository.

### 21.3 Rate Limiting — P0
Protect form endpoints.

### 21.4 Dependency Hygiene — P0
Use supported package versions and apply security updates.

## 22. Admin-Editable Versus Developer-Controlled

### 22.1 Admin-Editable
Rooms, text content, offers, gallery, reviews, FAQ, contact details, and destination content.

### 22.2 Developer-Controlled
Layout system, design tokens, component logic, schema mapping, analytics implementation, security, and deployment config.

## 23. Out of Scope for Initial LKR 120,000 Base Package

### 23.1 Exclusions
Unless explicitly added:

- custom payment gateway;
- full PMS/channel manager;
- real-time room inventory engine;
- customer account system;
- multilingual CMS;
- loyalty programme;
- native mobile app;
- custom 360 capture;
- professional photography;
- custom CRM;
- large-scale email marketing automation.

## 24. Demo Acceptance Criteria

### 24.1 Functional
Every P0 feature works across target breakpoints.

### 24.2 Visual
Components follow the locked design system.

### 24.3 Content
No unverified property claim is presented as fact.

### 24.4 Conversion
Availability, WhatsApp, and phone paths work clearly.

### 24.5 Quality
No placeholder lorem ipsum, broken links, obvious layout shifts, inaccessible modal behaviour, or console errors in the client demo.

## 25. Next Document

### 25.1 Content Strategy
The next document defines page-by-page copy, media, proof, and client asset requirements for these features.
