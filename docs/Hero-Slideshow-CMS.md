# Hero Slideshow CMS

## 1. Purpose

### 1.1 Goal
Allow the hotel team to upload, remove, reorder, and time the rotating hero photography used on the Home, Dining, Gallery, Kandy, and Offers pages.

## 2. Current Behaviour

### 2.1 Fallback Mode
Before a Sanity project is connected, each page uses curated concept photography from the repository.

### 2.2 CMS Mode
After Sanity is connected, a published `Hero slideshow` document for a page replaces that page's fallback photos automatically.

## 3. Supported Pages

### 3.1 Page Keys
The CMS supports:

- Home
- Experience
- Dining
- Gallery
- Kandy
- Offers

## 4. Uploading Photos

### 4.1 Start Studio
Configure the Sanity environment values first, then run:

`npm run studio`

### 4.2 Create a Slideshow
In Sanity Studio:

1. create a **Hero slideshow** document;
2. choose the page;
3. set the auto-rotate interval;
4. upload one or more photos;
5. add useful alternative text;
6. drag photos to reorder them;
7. publish the document.

The website reads the published slideshow without a page-code change.

## 5. Timing

### 5.1 Allowed Range
The interval can be set between 4 and 12 seconds.

### 5.2 Recommended Default
Use 6–8 seconds for a calm premium hospitality experience.

## 6. Accessibility

### 6.1 Motion Preference
Automatic rotation is disabled for visitors who request reduced motion.

### 6.2 Interaction
The slideshow includes previous, next, and direct-slide controls.

### 6.3 Pause Behaviour
Rotation pauses while a visitor hovers over the carousel or uses keyboard focus inside it.

## 7. Media Quality

### 7.1 Recommended Upload
Prefer:

- landscape orientation;
- approximately 2400px or wider;
- high-quality JPEG/WebP source;
- natural light;
- consistent colour grading;
- no watermarks;
- no heavy HDR.

### 7.2 Crop Safety
Use Sanity image hotspot/focal-point controls when property photography is connected.

## 8. Content Safety

### 8.1 Property Photos
Before public launch, replace stock concept photography with client-approved property imagery where the image could otherwise imply a real room, meal, facility, or service.

### 8.2 Page Copy
Changing a photo does not automatically change factual page copy. Verify any visible claim independently.
