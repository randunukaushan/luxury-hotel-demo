import { NextRequest } from "next/server";
import { enquirySchema, type EnquiryInput } from "@/lib/forms/enquiry";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const attempts = new Map<string, { count: number; resetAt: number }>();

function getClientKey(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip") || "anonymous";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const current = attempts.get(key);

  if (!current || current.resetAt <= now) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (current.count >= MAX_REQUESTS) return true;
  current.count += 1;
  return false;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function line(label: string, value?: string) {
  if (!value) return "";
  return `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`;
}

async function deliverEnquiry(data: EnquiryInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return { configured: false, delivered: false };
  }

  const subject =
    data.kind === "availability"
      ? `Availability enquiry from ${data.name}`
      : `Website contact from ${data.name}`;

  const html = [
    "<h2>Luxury Hotel Website Enquiry</h2>",
    line("Type", data.kind),
    line("Name", data.name),
    line("Email", data.email),
    line("Phone", data.phone),
    line("Check in", data.checkIn),
    line("Check out", data.checkOut),
    line("Guests", data.guests),
    line("Room", data.roomSlug),
    line("Subject", data.subject),
    line("Message", data.message),
  ].join("");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email || undefined,
      subject,
      html,
    }),
    cache: "no-store",
  });

  return { configured: true, delivered: response.ok };
}

export async function POST(request: NextRequest) {
  if (request.headers.get("content-type")?.includes("application/json") !== true) {
    return Response.json({ ok: false, message: "Unsupported request." }, { status: 415 });
  }

  const key = getClientKey(request);
  if (isRateLimited(key)) {
    return Response.json(
      { ok: false, message: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);

  if (!parsed.success) {
    return Response.json(
      {
        ok: false,
        message: "Please check the form.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  // Honeypot: pretend the request succeeded so bots do not learn the trap.
  if (parsed.data.company) {
    return Response.json({ ok: true, delivered: false, demo: true });
  }

  try {
    const delivery = await deliverEnquiry(parsed.data);

    if (delivery.configured && !delivery.delivered) {
      return Response.json(
        { ok: false, message: "The enquiry could not be delivered. Please try again." },
        { status: 502 },
      );
    }

    return Response.json({
      ok: true,
      delivered: delivery.delivered,
      demo: !delivery.configured,
    });
  } catch {
    return Response.json(
      { ok: false, message: "The enquiry could not be delivered. Please try again." },
      { status: 502 },
    );
  }
}
