import { NextRequest } from "next/server";
import { enquirySchema, type EnquiryInput } from "@/lib/forms/enquiry";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_BODY_BYTES = 16 * 1024;
const MAX_TRACKED_CLIENTS = 5000;
const attempts = new Map<string, { count: number; resetAt: number }>();

function getClientKey(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || request.headers.get("x-real-ip") || "anonymous";
  const agent = request.headers.get("user-agent")?.slice(0, 120) || "unknown";
  return `${ip}:${agent}`;
}

function cleanupRateLimits(now: number) {
  if (attempts.size < MAX_TRACKED_CLIENTS) return;

  for (const [key, value] of attempts) {
    if (value.resetAt <= now) attempts.delete(key);
  }

  while (attempts.size >= MAX_TRACKED_CLIENTS) {
    const oldestKey = attempts.keys().next().value;
    if (!oldestKey) break;
    attempts.delete(oldestKey);
  }
}

function isRateLimited(key: string) {
  const now = Date.now();
  cleanupRateLimits(now);
  const current = attempts.get(key);

  if (!current || current.resetAt <= now) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { limited: false, retryAfter: 0 };
  }

  if (current.count >= MAX_REQUESTS) {
    return {
      limited: true,
      retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  return { limited: false, retryAfter: 0 };
}

function isSameSiteRequest(request: NextRequest) {
  const fetchSite = request.headers.get("sec-fetch-site");
  if (fetchSite && !["same-origin", "same-site", "none"].includes(fetchSite)) {
    return false;
  }

  const origin = request.headers.get("origin");
  if (!origin) return true;

  const allowedOrigins = new Set([request.nextUrl.origin]);
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (configuredUrl) {
    try {
      allowedOrigins.add(new URL(configuredUrl).origin);
    } catch {
      // Production validation handles malformed configuration.
    }
  }

  return allowedOrigins.has(origin);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function line(label: string, value?: string) {
  if (!value) return "";
  return `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`;
}

function json(
  body: Record<string, unknown>,
  init: ResponseInit & { status?: number } = {},
) {
  const headers = new Headers(init.headers);
  headers.set("Cache-Control", "no-store");
  return Response.json(body, { ...init, headers });
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
      ? `Availability enquiry from ${safeHeader(data.name)}`
      : `Website contact from ${safeHeader(data.name)}`;

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
    signal: AbortSignal.timeout(8000),
  });

  return { configured: true, delivered: response.ok };
}

export async function POST(request: NextRequest) {
  if (!isSameSiteRequest(request)) {
    return json({ ok: false, message: "Forbidden request." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") || "0");
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return json({ ok: false, message: "Request too large." }, { status: 413 });
  }

  if (request.headers.get("content-type")?.includes("application/json") !== true) {
    return json({ ok: false, message: "Unsupported request." }, { status: 415 });
  }

  const key = getClientKey(request);
  const rateLimit = isRateLimited(key);
  if (rateLimit.limited) {
    return json(
      { ok: false, message: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimit.retryAfter),
        },
      },
    );
  }

  let body: unknown;
  try {
    const raw = await request.text();
    if (Buffer.byteLength(raw, "utf8") > MAX_BODY_BYTES) {
      return json({ ok: false, message: "Request too large." }, { status: 413 });
    }
    body = JSON.parse(raw);
  } catch {
    return json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);

  if (!parsed.success) {
    return json(
      {
        ok: false,
        message: "Please check the form.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  // Honeypot: return a generic success so bots do not learn the trap.
  if (parsed.data.company) {
    return json({ ok: true, delivered: false, demo: true });
  }

  try {
    const delivery = await deliverEnquiry(parsed.data);

    if (delivery.configured && !delivery.delivered) {
      return json(
        { ok: false, message: "The enquiry could not be delivered. Please try again." },
        { status: 502 },
      );
    }

    return json({
      ok: true,
      delivered: delivery.delivered,
      demo: !delivery.configured,
    });
  } catch {
    return json(
      { ok: false, message: "The enquiry could not be delivered. Please try again." },
      { status: 502 },
    );
  }
}
