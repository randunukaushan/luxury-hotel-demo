import { defineArrayMember, defineField, defineType } from "sanity";

export const heroCarouselType = defineType({
  name: "heroCarousel",
  title: "Hero slideshow",
  type: "document",
  fields: [
    defineField({
      name: "page",
      title: "Page",
      type: "string",
      validation: (rule) => rule.required(),
      options: {
        list: [
          { title: "Home", value: "home" },
          { title: "Stay", value: "stay" },
          { title: "Experience", value: "experiences" },
          { title: "Dining", value: "dining" },
          { title: "Gallery", value: "gallery" },
          { title: "Kandy", value: "kandy" },
          { title: "Offers", value: "offers" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "intervalSeconds",
      title: "Auto-rotate interval",
      description: "Seconds each image remains visible. Recommended: 6–8 seconds.",
      type: "number",
      initialValue: 6.5,
      validation: (rule) => rule.required().min(4).max(12),
    }),
    defineField({
      name: "slides",
      title: "Slides",
      description: "Upload, drag to reorder, or remove photos. The first image is shown first.",
      type: "array",
      validation: (rule) => rule.required().min(1).max(12),
      of: [
        defineArrayMember({
          type: "object",
          name: "carouselSlide",
          fields: [
            defineField({
              name: "image",
              title: "Photo",
              type: "image",
              options: { hotspot: true },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "alt",
              title: "Alternative text",
              description: "Describe the image for accessibility.",
              type: "string",
              validation: (rule) => rule.required().max(180),
            }),
          ],
          preview: {
            select: {
              title: "alt",
              media: "image",
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "page",
      slides: "slides",
    },
    prepare({ title, slides }) {
      return {
        title: `${title || "Page"} hero slideshow`,
        subtitle: `${slides?.length ?? 0} photo(s)`,
        media: slides?.[0]?.image,
      };
    },
  },
});
