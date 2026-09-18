# UX and Conversion Strategy

## 1. Document Purpose

### 1.1 Objective
Define guest journeys, conversion principles, interaction priorities, trust signals, and friction-reduction rules for the Luxury Hotel Website Demo.

### 1.2 Conversion Philosophy
The site should persuade through clarity, confidence, and desire rather than urgency tricks.

## 2. Primary Conversion Goals

### 2.1 Goal Hierarchy
Primary goal:

**Qualified direct availability enquiry or booking-engine handoff**

Secondary goals:

- WhatsApp conversation;
- phone call;
- room exploration;
- dining enquiry;
- offer enquiry;
- contact enquiry.

### 2.2 Non-Goals
Do not optimise for meaningless click volume, forced popups, fake scarcity, or manipulative countdown timers.

## 3. Key Guest Journeys

### 3.1 Google/Maps Visitor
Typical path:

**Landing → understand property → inspect room → verify reviews/location → Check Availability**

### 3.2 OTA Comparison Visitor
Typical path:

**Property page → room facts → direct-booking value → proof → direct enquiry**

### 3.3 Social Media Visitor
Typical path:

**Visual landing → gallery/room → WhatsApp or availability**

### 3.4 Destination Research Visitor
Typical path:

**Kandy content → property positioning → rooms → availability**

### 3.5 Returning High-Intent Visitor
Typical path:

**Landing → Check Availability / WhatsApp / Call**

## 4. Above-the-Fold Strategy

### 4.1 Required Information
Within the first screen, communicate:

- property identity;
- scenic retreat positioning;
- strongest authentic visual;
- primary conversion action.

### 4.2 CTA Hierarchy
Primary: **Check Availability**

Secondary: **Explore the Stay**

Do not place five equally weighted buttons in the hero.

## 5. Booking and Enquiry Visibility

### 5.1 Desktop
Keep Check Availability visible in the header and repeat at high-intent content boundaries.

### 5.2 Mobile
Use a compact sticky conversion bar after the initial hero interaction, exposing:

- Call;
- WhatsApp;
- Check Availability.

### 5.3 Repetition Rule
Repeat the booking action contextually, not mechanically after every section.

## 6. Availability Form Strategy

### 6.1 Required Fields
Initial form fields:

- check-in;
- check-out;
- adults;
- children where relevant;
- preferred room optional;
- name;
- email or phone;
- WhatsApp preference;
- short notes optional.

### 6.2 Friction Reduction
Do not request passport details, home address, long message fields, or unnecessary personal data at enquiry stage.

### 6.3 Validation
Use inline validation, preserve user input after errors, and make error messages specific.

### 6.4 Confirmation
After submit:

- confirm receipt;
- explain expected response channel without promising unsupported response times;
- offer WhatsApp continuation;
- preserve submitted summary for the guest.

## 7. WhatsApp Conversion

### 7.1 Prefilled Message
Generate a concise message with known context:

- dates;
- guest count;
- room interest;
- source page.

### 7.2 Privacy
Do not place sensitive information in URL text.

### 7.3 Tracking
Track WhatsApp CTA click as an analytics event without capturing message content.

## 8. Phone Conversion

### 8.1 Mobile
Use native `tel:` action.

### 8.2 Desktop
Display the phone number clearly and allow copy.

### 8.3 Availability
Do not claim 24/7 support unless verified.

## 9. Room Decision UX

### 9.1 Decision Facts
Expose room size, occupancy, bed, view, and key features consistently.

### 9.2 Compare Without Overload
A guest should not need to memorize facts across pages.

### 9.3 Room CTA
Use two intents:

- **View Room** for exploration;
- **Check Availability** for conversion.

## 10. Trust Strategy

### 10.1 Rating Proof
Show current rating only with:

- source;
- review count when available;
- snapshot/update date in CMS or maintenance notes.

### 10.2 Review Excerpts
Use real excerpts with attribution and source. Avoid rewriting reviews to sound more flattering.

### 10.3 Property Facts
Trust increases when practical facts are easy to find.

### 10.4 Contact Legitimacy
Expose real address, phone, email, map, and business identity.

## 11. Direct-Booking Value

### 11.1 Principle
Explain why the guest should contact/book direct only using real client-approved benefits.

### 11.2 Possible Benefit Categories
Potential categories for client discussion:

- best direct rate;
- breakfast;
- flexible arrival/departure subject to availability;
- welcome amenity;
- transfer benefit;
- room upgrade subject to availability.

These are not public claims until approved.

## 12. Offers UX

### 12.1 Offer Clarity
Each offer must state:

- who it is for;
- benefit;
- dates;
- inclusions;
- conditions;
- action.

### 12.2 Avoid Discount Visual Language
Do not use red sale badges or e-commerce urgency styling.

## 13. Location UX

### 13.1 Reduce Distance Anxiety
Show honest travel context, map, transfer options, and nearby attractions.

### 13.2 Scenic Trade-Off
Frame the location honestly: removed from city noise while still usable as a Kandy base.

## 14. Dining UX

### 14.1 Decision Support
Show breakfast style, cuisine, hours, dietary support, and reservation path when verified.

### 14.2 Visual Role
Food imagery can materially increase perceived stay value and should not be hidden inside amenities.

## 15. Gallery UX

### 15.1 Purpose
Gallery should reduce uncertainty as well as inspire.

### 15.2 Category Structure
Allow users to find rooms, bathrooms, views, dining, and property images quickly.

### 15.3 Lightbox
Support:

- swipe;
- keyboard arrows;
- visible close;
- image count;
- captions where useful;
- focus management.

## 16. FAQ UX

### 16.1 Role
FAQ should remove common pre-booking friction.

### 16.2 Accordion Behaviour
Use accessible accordions with clear focus states and semantic buttons.

## 17. Error and Empty States

### 17.1 Form Error
Explain exactly what needs fixing.

### 17.2 No Offers
Do not show an empty Offers page. Hide the navigation item or show evergreen direct-booking value content.

### 17.3 Missing Room Data
Never fabricate metadata. Omit unverified fields until confirmed.

## 18. Mobile UX Rules

### 18.1 Thumb Reach
Place primary actions in reachable zones without covering system UI.

### 18.2 Tap Targets
Use sufficiently large interactive targets.

### 18.3 Text
Avoid tiny uppercase labels for essential information.

### 18.4 Media
Use mobile-specific crop and media loading decisions.

## 19. Ethical Conversion Rules

### 19.1 No Fake Scarcity
Do not show “Only 1 room left” unless supplied by a real inventory system.

### 19.2 No Fake Social Proof
Do not generate testimonials or inflated ratings.

### 19.3 No Hidden Costs
If the future booking engine supplies taxes/fees, present them transparently.

### 19.4 No Forced Consent
Cookie and marketing consent must not be bundled deceptively.

## 20. Analytics Events

### 20.1 Core Events
Track:

- check_availability_click;
- availability_form_start;
- availability_form_submit;
- whatsapp_click;
- phone_click;
- room_view;
- offer_view;
- offer_enquiry;
- dining_enquiry;
- gallery_open;
- map_open.

### 20.2 Data Minimisation
Do not send names, phone numbers, email addresses, message content, or other unnecessary personal data to analytics.

## 21. Conversion Acceptance Criteria

### 21.1 High-Intent Test
A returning user can reach availability, WhatsApp, or call in one or two interactions.

### 21.2 Research Test
A new user can validate room fit, location, and trust before converting.

### 21.3 Mobile Test
Conversion controls remain useful without obscuring content.

### 21.4 Ethical Test
No interaction depends on misleading urgency, fabricated proof, or hidden information.

## 22. Locked Decisions

### 22.1 Primary CTA
**Check Availability**

### 22.2 Mobile Secondary Actions
**Call + WhatsApp**

### 22.3 Enquiry Strategy
Short form first, with future booking-engine compatibility.

## 23. Next Document

### 23.1 Feature Specification
The next document translates the UX into explicit components, states, priorities, responsive behaviour, and acceptance requirements.
