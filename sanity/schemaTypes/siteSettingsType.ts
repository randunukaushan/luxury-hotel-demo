import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({
      name: "propertyName",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "whatsapp", type: "string" }),
    defineField({ name: "reservationEmail", type: "string" }),
    defineField({ name: "address", type: "text", rows: 3 }),
    defineField({ name: "mapUrl", type: "url" }),
    defineField({ name: "bookingEngineUrl", type: "url" }),
  ],
});
