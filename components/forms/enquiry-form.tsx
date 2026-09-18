"use client";

import { FormEvent, useState } from "react";

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

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult({ state: "submitting" });

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
        return;
      }

      setResult({ state: "success", delivered: Boolean(data.delivered) });
      formElement.reset();
    } catch {
      setResult({
        state: "error",
        message: "The form could not connect. Please try again.",
      });
    }
  }

  const availability = kind === "availability";

  return (
    <form className="enquiry-form" onSubmit={onSubmit} noValidate>
      <div className="enquiry-form__grid">
        <label>
          <span>Name</span>
          <input name="name" autoComplete="name" required maxLength={100} />
          {result.state === "error" && result.issues?.name?.[0] && (
            <small className="field-error">{result.issues.name[0]}</small>
          )}
        </label>

        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" maxLength={160} />
          {result.state === "error" && result.issues?.email?.[0] && (
            <small className="field-error">{result.issues.email[0]}</small>
          )}
        </label>

        <label>
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" maxLength={40} />
          {result.state === "error" && result.issues?.phone?.[0] && (
            <small className="field-error">{result.issues.phone[0]}</small>
          )}
        </label>

        {availability && (
          <>
            <label>
              <span>Check in</span>
              <input name="checkIn" type="date" required />
              {result.state === "error" && result.issues?.checkIn?.[0] && (
                <small className="field-error">{result.issues.checkIn[0]}</small>
              )}
            </label>
            <label>
              <span>Check out</span>
              <input name="checkOut" type="date" required />
              {result.state === "error" && result.issues?.checkOut?.[0] && (
                <small className="field-error">{result.issues.checkOut[0]}</small>
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

        <div className="form-status" aria-live="polite">
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
