import { z } from "zod";

const noNullByte = (value: string) => !value.includes("\u0000");

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .refine(noNullByte, "Invalid characters.")
    .optional()
    .or(z.literal(""));

const optionalIsoDate = z
  .string()
  .trim()
  .refine((value) => value === "" || /^\d{4}-\d{2}-\d{2}$/.test(value), "Invalid date.")
  .optional()
  .or(z.literal(""));

export const enquirySchema = z
  .object({
    kind: z.enum(["availability", "contact"]),
    name: z
      .string()
      .trim()
      .min(2, "Please enter your name.")
      .max(100)
      .refine(noNullByte, "Invalid characters."),
    email: optionalText(160).refine(
      (value) => !value || z.email().safeParse(value).success,
      "Enter a valid email address.",
    ),
    phone: optionalText(40).refine(
      (value) => !value || /^[+()\d\s.-]{5,40}$/.test(value),
      "Enter a valid phone number.",
    ),
    checkIn: optionalIsoDate,
    checkOut: optionalIsoDate,
    guests: z.enum(["", "1", "2", "3", "4", "5+"]).optional().or(z.literal("")),
    roomSlug: optionalText(120).refine(
      (value) => !value || /^[a-z0-9-]+$/.test(value),
      "Invalid room selection.",
    ),
    subject: optionalText(160),
    message: optionalText(1500),
    company: optionalText(120),
  })
  .superRefine((data, context) => {
    if (!data.email && !data.phone) {
      context.addIssue({
        code: "custom",
        path: ["email"],
        message: "Add an email address or phone number.",
      });
    }

    if (data.kind === "availability") {
      if (!data.checkIn) {
        context.addIssue({
          code: "custom",
          path: ["checkIn"],
          message: "Choose a check-in date.",
        });
      }
      if (!data.checkOut) {
        context.addIssue({
          code: "custom",
          path: ["checkOut"],
          message: "Choose a check-out date.",
        });
      }
      if (data.checkIn && data.checkOut && data.checkOut <= data.checkIn) {
        context.addIssue({
          code: "custom",
          path: ["checkOut"],
          message: "Check-out must be after check-in.",
        });
      }
    }
  });

export type EnquiryInput = z.infer<typeof enquirySchema>;
