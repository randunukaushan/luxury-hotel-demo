import { defineField, defineType } from "sanity";

export const roomType = defineType({
  name: "room",
  title: "Room",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Official room name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "active", type: "boolean", initialValue: true }),
    defineField({ name: "sortOrder", type: "number", initialValue: 10 }),
    defineField({ name: "eyebrow", type: "string" }),
    defineField({
      name: "summary",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(260),
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 7,
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "size", title: "Room size", type: "string" }),
    defineField({ name: "occupancy", type: "string" }),
    defineField({ name: "bed", title: "Bed configuration", type: "string" }),
    defineField({ name: "view", type: "string" }),
    defineField({
      name: "features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "amenities",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "heroImage",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alternative text",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "visualTone",
      title: "Fallback visual tone",
      type: "string",
      options: {
        list: [
          { title: "Lake", value: "lake" },
          { title: "Forest", value: "forest" },
          { title: "Stone", value: "stone" },
        ],
        layout: "radio",
      },
      initialValue: "forest",
    }),
    defineField({
      name: "isConcept",
      title: "Concept / unverified room",
      type: "boolean",
      initialValue: false,
      description:
        "Keep enabled for demo-only room concepts. Disable only after the property confirms the room data.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "view",
      media: "heroImage",
    },
  },
});
