"use client";

import { FormEvent, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics/events";

type EnquiryFormProps = {
  kind: "availability" | "contact";
  rooms?: Array<{ slug: string; title: string }>;
  initialRoomSlug?: string;
};

type ResultState =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; delivered: boolean }
  | { state: "error"; message: string; issues?: Record<string, string[]> };

export function EnquiryForm({
  kind,
  rooms = [],
  initialRoomSlug = "",
}: EnquiryFormProps) {
  const [result, setResult] = useState<ResultState>({ state: "idle" });
  const hasTrackedStart = useRef(false);

  const issues = result.state === "error" ? result.issues : undefined;
  const eventPrefix = kind === "availability" ? "availability_form" : "contact_form";

  function trackStart() {
    if (hasTrackedStart.current) return;
    hasTrackedStart.current = true;
    trackEvent(`${eventPrefix}_start`);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult({ state: "submitting" });
    trackEvent(`${eventPrefix}_submit`);

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, kind }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        setResult({
          state: "error",
          message: data.message || "Please check the form and try again.",
          issues: data.issues,
        });
        trackEvent(`${eventPrefix}_error`, { status: response.status });
        return;
      }

      setResult({ state: "success", delivered: Boolean(data.delivered) });
      trackEvent(`${eventPrefix}_success`, { delivered: Boolean(data.delivered) });
      formElement.reset();
    } catch {
      setResult({
        state: "error",
        message: "The form could not connect. Please try again.",
      });
      trackEvent(`${eventPrefix}_error`, { status: "network" });
    }
  }

  const availability = kind === "availability";

  return (
    <form
      className="enquiry-form"
      onSubmit={onSubmit}
      onFocusCapture={trackStart}
      noValidate
    >
      <div className="enquiry-form__grid">
        <label>
          <span>Name</span>
          <input
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            aria-invalid={Boolean(issues?.name?.[0])}
            aria-describedby={issues?.name?.[0] ? "name-error" : undefined}
          />
          {issues?.name?.[0] && (
            <small id="name-error" className="field-error">{issues.name[0]}</small>
          )}
        </label>

        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            maxLength={160}
            aria-invalid={Boolean(issues?.email?.[0])}
            aria-describedby={issues?.email?.[0] ? "email-error" : undefined}
          />
          {issues?.email?.[0] && (
            <small id="email-error" className="field-error">{issues.email[0]}</small>
          )}
        </label>

        <label>
          <span>Phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
            aria-invalid={Boolean(issues?.phone?.[0])}
            aria-describedby={issues?.phone?.[0] ? "phone-error" : undefined}
          />
          {issues?.phone?.[0] && (
            <small id="phone-error" className="field-error">{issues.phone[0]}</small>
          )}
        </label>

        {availability && (
          <>
            <label>
              <span>Check in</span>
              <input
                name="checkIn"
                type="date"
                required
                aria-invalid={Boolean(issues?.checkIn?.[0])}
                aria-describedby={issues?.checkIn?.[0] ? "checkin-error" : undefined}
              />
              {issues?.checkIn?.[0] && (
                <small id="checkin-error" className="field-error">{issues.checkIn[0]}</small>
              )}
            </label>
            <label>
              <span>Check out</span>
              <input
                name="checkOut"
                type="date"
                required
                aria-invalid={Boolean(issues?.checkOut?.[0])}
                aria-describedby={issues?.checkOut?.[0] ? "checkout-error" : undefined}
              />
              {issues?.checkOut?.[0] && (
                <small id="checkout-error" className="field-error">{issues.checkOut[0]}</small>
              )}
            </label>
            <label>
              <span>Guests</span>
              <select name="guests" defaultValue="2">
                <option value="1">1 guest</option>
                <option value="2">2 guests</option>
                <option value="3">3 guests</option>
                <option value="4">4 guests</option>
                <option value="5+">5+ guests</option>
              </select>
            </label>
            <label>
              <span>Room interest</span>
              <select name="roomSlug" defaultValue={initialRoomSlug}>
                <option value="">Any suitable stay</option>
                {rooms.map((room) => (
                  <option key={room.slug} value={room.slug}>
                    {room.title}
                  </option>
                ))}
              </select>
            </label>
          </>
        )}

        {!availability && (
          <label className="enquiry-form__wide">
            <span>Subject</span>
            <input name="subject" maxLength={160} />
          </label>
        )}

        <label className="enquiry-form__wide">
          <span>{availability ? "Anything we should know?" : "Message"}</span>
          <textarea name="message" rows={5} maxLength={1500} />
        </label>

        <label className="hp-field" aria-hidden="true">
          <span>Company</span>
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="enquiry-form__footer">
        <button
          className="button button--bronze"
          type="submit"
          disabled={result.state === "submitting"}
        >
          {result.state === "submitting"
            ? "Sending…"
            : availability
              ? "Send availability enquiry"
              : "Send message"}
        </button>

        <div className="form-status" aria-live="polite" aria-atomic="true">
          {result.state === "success" && result.delivered && (
            <p>Your enquiry was sent successfully.</p>
          )}
          {result.state === "success" && !result.delivered && (
            <p>
              Demo validated successfully. Email delivery will activate when the property inbox is
              connected.
            </p>
          )}
          {result.state === "error" && <p className="field-error">{result.message}</p>}
        </div>
      </div>
    </form>
  );
}
