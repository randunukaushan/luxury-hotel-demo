"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics/events";

export function MobileActionBar() {
  return (
    <div className="mobile-action-bar" aria-label="Quick actions">
      <Link href="/stay">Explore stays</Link>
      <Link
        className="mobile-action-bar__primary"
        href="/availability"
        onClick={() => trackEvent("check_availability_click", { source: "mobile_bar" })}
      >
        Check availability
      </Link>
    </div>
  );
}
