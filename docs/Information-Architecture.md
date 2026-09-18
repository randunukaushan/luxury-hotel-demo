# Information Architecture

## 1. Document Purpose

### 1.1 Objective
Define the sitemap, navigation model, page hierarchy, content relationships, and booking/enquiry pathways for the Luxury Hotel Website Demo.

### 1.2 Architecture Principle
The structure must support two behaviours at the same time:

- emotional discovery for guests who are still deciding;
- fast access to facts and enquiry actions for high-intent guests.

## 2. Primary Sitemap

### 2.1 Top-Level Pages
The planned top-level structure is:

1. Home
2. Stay
3. Room Detail
4. Experiences
5. Dining
6. Gallery
7. Kandy
8. Offers
9. FAQ
10. Contact
11. Availability / Enquiry

### 2.2 Utility Pages
Production should also support:

- Privacy Policy
- Cookie / Tracking Notice where required
- Terms or Booking Terms when supplied by the client
- 404
- 500/error state where applicable

## 3. Primary Navigation

### 3.1 Desktop Navigation
Recommended order:

**Stay / Experience / Dine / Gallery / Kandy / Offers**

Persistent high-intent action:

**Check Availability**

Secondary utility access:

**Contact**

### 3.2 Mobile Navigation
The mobile menu should include:

- Stay
- Experiences
- Dining
- Gallery
- Kandy
- Offers
- FAQ
- Contact
- Call
- WhatsApp
- Check Availability

### 3.3 Naming Rule
Navigation labels should be short, familiar, and guest-centred. Avoid internal hotel terminology.

## 4. Home Page Architecture

### 4.1 Hero
Purpose:

- establish place and mood;
- show strongest authentic image;
- communicate the core positioning;
- surface Check Availability;
- provide a discovery path.

### 4.2 Property Story
Short editorial section explaining why the location feels different.

### 4.3 Featured Stays
Show 3-4 room types or a curated subset with verified facts.

### 4.4 Immersive View Section
Use one strong scenic image and a compact set of verified experience cues such as lake views, mountain air, balconies, or quiet mornings.

### 4.5 Experiences
Introduce verified activities or destination experiences. If client inventory is not confirmed, use destination-led Kandy content rather than invented resort activities.

### 4.6 Dining
Promote breakfast and restaurant experience with clear operating information when supplied.

### 4.7 Guest Proof
Current rating, source attribution, selected review excerpts, and review-source links where appropriate.

### 4.8 Gallery Preview
Curated visual set leading to the full gallery.

### 4.9 Kandy Context
Explain relationship to Kandy and selected nearby attractions with realistic travel context.

### 4.10 Direct Booking Block
High-intent date/guest enquiry entry point plus WhatsApp and phone.

### 4.11 Footer
Contact details, address, policies, social links, navigation, and booking action.

## 5. Stay Page Architecture

### 5.1 Purpose
Help the guest compare accommodation without opening every room detail page.

### 5.2 Intro
Short statement describing the stay philosophy and verified view/location advantage.

### 5.3 Room List
Each room card should expose:

- official room name;
- primary image;
- size;
- maximum occupancy;
- bed;
- view;
- 2-4 distinguishing features;
- View Room;
- Check Availability where appropriate.

### 5.4 Filtering
Do not add filters unless the final inventory is large enough to justify them. A small property should prefer a simple, elegant room list.

### 5.5 Comparison Support
If room facts are sufficiently complete, provide a simple comparison table or structured comparison section.

## 6. Room Detail Architecture

### 6.1 Hero Gallery
Primary image plus access to the complete room gallery.

### 6.2 Decision Summary
Immediately show:

- room name;
- occupancy;
- bed;
- size;
- view;
- availability/enquiry action.

### 6.3 Room Story
Short descriptive copy focused on atmosphere and real differentiators.

### 6.4 Features and Amenities
Group facts into understandable categories:

- sleep;
- bathroom;
- comfort;
- view/outdoor;
- connectivity;
- included services.

### 6.5 Gallery
Full-screen or large lightbox with keyboard, swipe, and close controls.

### 6.6 Practical Information
Show verified check-in/out, smoking rules, child/extra-bed rules, cancellation information, and relevant policies when supplied.

### 6.7 Related Stays
Show 2-3 alternative rooms rather than forcing the visitor back to the top-level Stay page.

### 6.8 Conversion
Repeat Check Availability and WhatsApp enquiry at the end.

## 7. Experiences Architecture

### 7.1 Purpose
Make the property and destination feel like a complete stay rather than only accommodation.

### 7.2 Content Types
Potential verified categories:

- Kandy culture;
- scenic/nature;
- food;
- relaxation;
- local excursions;
- property-specific activities.

### 7.3 Experience Detail
Each experience should include:

- name;
- short description;
- imagery;
- duration where known;
- availability/seasonality where relevant;
- whether arranged by the property or a third party;
- enquiry action.

### 7.4 Verification Rule
Do not publish an experience as a property service unless confirmed.

## 8. Dining Architecture

### 8.1 Dining Landing
Show:

- restaurant identity;
- atmosphere;
- cuisine;
- breakfast;
- dietary information;
- opening hours;
- reservation/enquiry action;
- dining gallery.

### 8.2 Menu Handling
If menus are frequently updated, use CMS content or downloadable PDFs only if the client can maintain them.

### 8.3 Conversion
Dining CTA can use WhatsApp, phone, or reservation enquiry depending on client operations.

## 9. Gallery Architecture

### 9.1 Categories
Recommended categories when enough images exist:

- Property
- Rooms
- Views
- Dining
- Experiences
- Kandy

### 9.2 Gallery Behaviour
Desktop can use an editorial grid. Mobile should use a performant list/carousel/lightbox pattern.

### 9.3 Media Metadata
Every image needs meaningful alt text or an explicit decorative treatment.

## 10. Kandy Page Architecture

### 10.1 Purpose
Turn location distance into destination value.

### 10.2 Content
Include:

- concise Kandy introduction;
- relationship of the property to Kandy;
- selected verified attractions;
- approximate travel context;
- map;
- transfer information;
- practical arrival notes.

### 10.3 Location Honesty
Do not imply city-centre walkability. Use realistic distance/travel wording.

## 11. Offers Architecture

### 11.1 Offer Cards
Each offer requires:

- name;
- benefit;
- validity;
- inclusions;
- exclusions/conditions;
- image;
- enquiry/book action.

### 11.2 Offer Detail
Create dedicated offer pages only if needed for SEO, campaign sharing, or detailed conditions.

### 11.3 Truth Rule
No placeholder “10% off” or “best rate guaranteed” may appear publicly unless approved by the client.

## 12. FAQ Architecture

### 12.1 Core Topics
FAQ should cover:

- check-in/check-out;
- parking;
- Wi-Fi;
- breakfast;
- restaurant;
- transfers;
- distance to Kandy;
- payment;
- children/families;
- cancellation;
- accessibility information if supplied;
- how to book directly.

### 12.2 SEO Rule
FAQ exists primarily to answer guest questions. Structured data should be added only if it follows current search-engine guidance.

## 13. Contact Architecture

### 13.1 Contact Details
Include verified:

- phone;
- WhatsApp;
- email;
- address;
- map;
- reception hours if relevant.

### 13.2 Contact Form
Use a short general-enquiry form separate from the availability form.

## 14. Availability and Enquiry Architecture

### 14.1 Initial Demo Flow
Until a real booking engine is confirmed:

1. select check-in;
2. select check-out;
3. select guests;
4. optional room interest;
5. enter contact details;
6. enter notes;
7. submit;
8. show confirmation;
9. optionally offer WhatsApp continuation.

### 14.2 Future Booking Engine
The architecture must permit replacement of the enquiry action with an external or embedded booking-engine deep link later.

## 15. Internal Linking

### 15.1 Home to Decision Pages
Home should link directly into room, dining, Kandy, gallery, and availability content.

### 15.2 Room to Enquiry
Every room detail page should have a clear conversion path.

### 15.3 Experience to Contact
Experiences that require arrangement should surface enquiry.

### 15.4 Kandy to Stay
Destination content should link back to relevant rooms or the availability flow.

## 16. URL Structure

### 16.1 Proposed Paths
Use clean paths:

- `/`
- `/stay`
- `/stay/[slug]`
- `/experiences`
- `/dining`
- `/gallery`
- `/kandy`
- `/offers`
- `/offers/[slug]` when needed
- `/faq`
- `/contact`
- `/availability`

## 17. Content Priority by Device

### 17.1 Desktop
Support immersive editorial browsing and wider comparative layouts.

### 17.2 Mobile
Prioritise:

1. property identity;
2. room decision facts;
3. price/availability route if available;
4. WhatsApp/call;
5. proof;
6. destination context;
7. secondary storytelling.

## 18. Architecture Acceptance Criteria

### 18.1 Guest Test
A first-time guest can understand the property, compare stays, verify important facts, and reach an enquiry path without confusion.

### 18.2 Client Test
The owner can see clear places to update rooms, offers, images, dining, experiences, reviews, and contact details.

### 18.3 Engineering Test
Routes and content types map cleanly to reusable components and CMS models.

## 19. Locked Decisions

### 19.1 Navigation
Stay, Experience, Dine, Gallery, Kandy, Offers, plus Check Availability.

### 19.2 Core Conversion
Availability enquiry + WhatsApp + call at launch, with booking-engine integration designed as a future replacement.

### 19.3 Destination Layer
Kandy gets a dedicated page and homepage section.

## 20. Next Document

### 20.1 UX and Conversion Strategy
The next document defines how guests move through this architecture and how the site reduces friction while increasing direct enquiry intent.
