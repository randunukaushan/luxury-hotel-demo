import { z } from "zod";

const optionalText = (max: number) =>
  z.string().trim().max(max).optional().or(z.literal(""));

export const enquirySchema = z
  .object({
    kind: z.enum(["availability", "contact"]),
    name: z.string().trim().min(2, "Please enter your name.").max(100),
    email: optionalText(160).refine(
      (value) => !value || z.email().safeParse(value).success,
      "Enter a valid email address.",
    ),
    phone: optionalText(40),
    checkIn: optionalText(20),
    checkOut: optionalText(20),
    guests: optionalText(20),
    roomSlug: optionalText(120),
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
