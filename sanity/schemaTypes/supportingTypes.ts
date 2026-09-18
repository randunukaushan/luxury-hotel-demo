import { defineField, defineType } from "sanity";

export const experienceType = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({ name: "category", type: "string" }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "verified", type: "boolean", initialValue: false }),
  ],
});

export const diningType = defineType({
  name: "dining",
  title: "Dining",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "summary", type: "text", rows: 4 }),
    defineField({ name: "cuisine", type: "string" }),
    defineField({ name: "openingHours", type: "string" }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
  ],
});

export const offerType = defineType({
  name: "offer",
  title: "Offer",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "active", type: "boolean", initialValue: false }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({ name: "conditions", type: "text", rows: 5 }),
  ],
});

export const faqType = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "question", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "answer", type: "text", rows: 5, validation: (rule) => rule.required() }),
    defineField({ name: "sortOrder", type: "number", initialValue: 10 }),
  ],
});

export const reviewType = defineType({
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    defineField({ name: "excerpt", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "source", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "sourceUrl", type: "url" }),
    defineField({ name: "checkedAt", type: "date" }),
  ],
});

export const galleryItemType = defineType({
  name: "galleryItem",
  title: "Gallery item",
  type: "document",
  fields: [
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "alt", type: "string" }),
    defineField({ name: "category", type: "string" }),
    defineField({ name: "sortOrder", type: "number", initialValue: 10 }),
  ],
});

export const attractionType = defineType({
  name: "attraction",
  title: "Attraction",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({ name: "travelContext", type: "string" }),
    defineField({ name: "mapUrl", type: "url" }),
    defineField({ name: "verified", type: "boolean", initialValue: false }),
  ],
});
