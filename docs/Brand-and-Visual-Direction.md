# Brand and Visual Direction

## 1. Document Purpose

### 1.1 Objective
This document converts the benchmark and property research into a precise visual system for the Luxury Hotel Website Demo.

### 1.2 Design Principle
The website should feel like a **quiet, scenic boutique retreat near Kandy** rather than a generic eco-lodge, a flashy luxury template, or an imitation of a global hotel brand.

## 2. Brand Character

### 2.1 Core Mood
The visual direction is:

**Quiet Luxury / Tropical Hill Country / Nature-Led Boutique Retreat**

### 2.2 Personality Attributes
The interface should feel:

- calm;
- warm;
- refined;
- grounded;
- scenic;
- trustworthy;
- personal;
- contemporary;
- unhurried.

### 2.3 Attributes to Avoid
The interface must not feel:

- neon or overly saturated;
- tech-startup-like;
- crowded;
- overly rustic;
- fake-gold luxury;
- overly animated;
- generic tropical;
- aggressively sales-driven.

## 3. Visual Positioning

### 3.1 Reference Blend
The final language should combine:

- Aman-style restraint and whitespace;
- Rosewood-style editorial structure;
- Capella-style room-detail clarity;
- Soneva-style nature storytelling;
- Four Seasons-style practical information;
- Raffles-style conversion and service visibility.

### 3.2 Originality Rule
No page should be a layout clone. References inform principles only. The visual identity must be shaped around the Kandy/Victoria landscape and the actual property.

## 4. Colour System

### 4.1 Primary Palette

#### 4.1.1 Midnight Forest
**#17201D**

Use for hero overlays, premium dark sections, footer, menu panels, and selected CTA backgrounds.

#### 4.1.2 Warm Ivory
**#F3EFE6**

Use as the primary light background. It should replace harsh pure white across most editorial sections.

#### 4.1.3 Antique Bronze
**#8E643C**

Use as a restrained accent for dividers, large decorative labels, icons, active states, and selected hover treatments.

#### 4.1.4 Lake Slate
**#526563**

Use for muted secondary text, location-related visual details, and nature-linked supporting UI.

#### 4.1.5 Warm Stone
**#C9C0B2**

Use for borders, inactive states, subtle cards, and layered neutral surfaces.

#### 4.1.6 Ink
**#20211F**

Use for primary text on light backgrounds.

#### 4.1.7 Soft Linen
**#FAF8F3**

Use for alternate light sections, cards, and elevated content surfaces.

### 4.2 Accessibility Rules
Midnight Forest and Ink provide strong contrast on Warm Ivory. Antique Bronze is not a default small-body-text colour; use it primarily for accents, larger labels, or accessible combinations. Lake Slate should be used only where measured contrast remains suitable for the text size and background.

### 4.3 Colour Distribution
Recommended visual balance:

- 55-65% warm light neutrals;
- 20-30% photography;
- 10-15% deep dark surfaces;
- less than 5% bronze/slate accents.

### 4.4 Prohibited Colour Behaviour
Do not use bright emerald green as a shortcut for “eco”. Do not use metallic gradients, shiny gold buttons, or large bronze text blocks.

## 5. Typography

### 5.1 Display Typeface
Primary candidate: **Cormorant Garamond**.

Use for:

- hero headlines;
- section statements;
- room names;
- editorial pull quotes;
- selected destination headings.

### 5.2 Interface and Body Typeface
Primary candidate: **Manrope**.

Use for:

- navigation;
- body copy;
- buttons;
- labels;
- forms;
- room facts;
- metadata;
- FAQ;
- footer.

### 5.3 Typography Scale

#### 5.3.1 Desktop
- Hero display: clamp(4.25rem, 7vw, 7.5rem)
- H1: clamp(3.5rem, 5vw, 6rem)
- H2: clamp(2.5rem, 4vw, 4.5rem)
- H3: 1.75-2.25rem
- Body large: 1.125-1.25rem
- Body: 1rem
- Small/meta: 0.8125-0.875rem

#### 5.3.2 Mobile
- Hero display: 3.1-4rem
- H1: 2.7-3.4rem
- H2: 2.1-2.8rem
- H3: 1.5-1.8rem
- Body: 1rem minimum for standard content

### 5.4 Typesetting Rules
Display serif should use relatively tight line-height and controlled line length. Body text should remain highly readable with generous line-height. Avoid centre-aligning long paragraphs.

## 6. Layout System

### 6.1 Grid
Use a responsive 12-column desktop grid, 8-column tablet grid, and 4-column mobile grid.

### 6.2 Maximum Content Width
Editorial content maximum width: approximately 1440px.

Reading columns should normally remain between 620px and 760px.

### 6.3 Page Gutters
Recommended starting points:

- desktop: 64-96px;
- tablet: 32-48px;
- mobile: 20-24px.

### 6.4 Vertical Rhythm
Major sections should use generous vertical spacing. Desktop sections may use 120-180px vertical padding where photography and composition allow. Mobile sections should usually use 72-104px.

### 6.5 Asymmetry
Use controlled asymmetry for editorial luxury: offset text, unequal image columns, overlapping captions, and varied aspect ratios. Avoid random masonry that harms scanability.

## 7. Photography Direction

### 7.1 Priority Order
Photography should prioritise:

1. landscape/view;
2. exterior context;
3. room atmosphere;
4. balcony/terrace;
5. food and breakfast;
6. human hospitality moments;
7. bathroom/details;
8. Kandy destination context.

### 7.2 Image Style
Prefer natural light, authentic colour, controlled contrast, and wide environmental compositions. Avoid aggressive HDR, oversaturated greens, artificial sky replacement, and excessive warm filters.

### 7.3 Human Presence
Use selective lifestyle imagery to communicate scale and hospitality, but do not turn the site into a stock-photo campaign.

### 7.4 Cropping
Define intentional crops per breakpoint instead of allowing the same desktop crop to fail on mobile.

## 8. Hero Design

### 8.1 Desktop Hero
Use a full-viewport or near-full-viewport image/video with:

- transparent-to-solid navigation behaviour;
- restrained property name/eyebrow;
- one emotional headline;
- one concise supporting statement;
- primary booking action;
- secondary discovery action;
- subtle scroll cue.

### 8.2 Mobile Hero
Use a still image or carefully optimised short video poster-first experience. Keep primary actions reachable without forcing the user to scroll through excessive overlay text.

### 8.3 Hero Media Rule
Video is optional, not mandatory. A strong still image is preferable to slow cinematic media.

## 9. Component Styling

### 9.1 Buttons

#### 9.1.1 Primary Button
Dark or bronze-backed rectangular button with modest radius, clear label, and no heavy shadow.

#### 9.1.2 Secondary Button
Text/link or outlined treatment with animated underline or arrow.

#### 9.1.3 Touch Size
Interactive targets should meet modern accessibility expectations and remain easy to use on mobile.

### 9.2 Cards
Cards should not look like SaaS dashboard tiles. Prefer borderless editorial compositions or subtle neutral surfaces.

### 9.3 Room Cards
Each room card should include:

- image;
- room name;
- verified view;
- occupancy;
- bed;
- size;
- 2-4 distinguishing features;
- View Room action;
- Check Availability action where appropriate.

### 9.4 Review Cards
Keep testimonial treatment minimal. Use short attributed excerpts, source label, and current rating context. Avoid giant quotation-mark decoration.

### 9.5 Forms
Forms should be quiet and spacious with clear labels, strong focus states, concise helper text, and no unnecessary fields.

## 10. Navigation

### 10.1 Desktop Header
Primary navigation:

**Stay / Experience / Dine / Gallery / Kandy / Offers**

Utility actions:

**Contact / Check Availability**

### 10.2 Header Behaviour
Start transparent over suitable hero media, then transition to an opaque Warm Ivory or Midnight Forest header as the user scrolls.

### 10.3 Mobile Navigation
Use a full-screen or large-sheet menu with:

- major navigation;
- phone;
- WhatsApp;
- email/contact;
- Check Availability.

## 11. Iconography

### 11.1 Style
Use a single thin-line icon family with consistent stroke weight.

### 11.2 Usage
Icons support facts such as guests, bed, room size, view, Wi-Fi, parking, dining, and air conditioning. Do not replace clear text with ambiguous icons.

## 12. Motion System

### 12.1 Motion Character
Motion should feel slow, calm, and deliberate.

### 12.2 Allowed Motion
Use:

- subtle image reveal;
- short fade/translate transitions;
- gentle hover zoom;
- underline/arrow movement;
- restrained parallax on large editorial media;
- crossfade where it supports storytelling.

### 12.3 Motion Limits
Avoid:

- continuous floating objects;
- scroll-jacking;
- excessive text splitting;
- 3D gimmicks;
- cursor replacement;
- long intro loaders;
- autoplay audio.

### 12.4 Reduced Motion
Respect `prefers-reduced-motion` and provide equivalent non-animated states.

## 13. Section Composition

### 13.1 Light Editorial Sections
Use Warm Ivory / Soft Linen with Ink text and wide photography.

### 13.2 Dark Immersive Sections
Use Midnight Forest for selected experience, dining, booking, or footer moments. Dark surfaces should be occasional so they retain impact.

### 13.3 Visual Sequence
Recommended homepage rhythm:

**Cinematic Hero → Light Story → Rooms → Immersive View → Experiences → Dining → Proof → Gallery → Kandy → Direct Booking → Footer**

## 14. Responsive Direction

### 14.1 Mobile Recomposition
Do not simply stack desktop columns. Reorder content by decision priority.

### 14.2 Sticky Mobile Actions
A compact sticky action bar may expose:

**Call / WhatsApp / Check Availability**

It must not cover content or accessibility controls.

### 14.3 Gallery Behaviour
Desktop may use editorial grids; mobile should use controlled swipe galleries and larger tap targets.

## 15. Design Tokens

### 15.1 Radius
Use restrained radii:

- small UI: 4-6px;
- cards: 0-8px depending on composition;
- pills only for metadata filters, not as a dominant aesthetic.

### 15.2 Borders
Use subtle 1px neutral borders. Avoid card shadows as the primary separation device.

### 15.3 Shadows
Use only where functional elevation is needed, such as the mobile booking sheet or sticky controls.

## 16. Quality-Control Checklist

### 16.1 Premium Test
A screen passes when it feels composed, not decorated.

### 16.2 Clarity Test
A guest can tell what the property offers and what to do next without reading every paragraph.

### 16.3 Authenticity Test
Visual treatment elevates real property qualities without pretending the property is something it is not.

### 16.4 Mobile Test
The mobile design feels intentionally art-directed rather than compressed.

## 17. Locked Visual Decisions

### 17.1 Decisions
The following are locked for the first demo:

- quiet-luxury direction;
- warm neutral foundation;
- Midnight Forest dark surfaces;
- restrained bronze accent;
- serif display + sans interface pairing;
- photography-led composition;
- no bright eco-green;
- no heavy shadows;
- no flashy motion;
- conversion controls visually integrated into the luxury experience.

## 18. Next Document

### 18.1 Information Architecture
The next document defines the sitemap, navigation, page hierarchy, section order, and booking/enquiry pathways that this visual system will support.
