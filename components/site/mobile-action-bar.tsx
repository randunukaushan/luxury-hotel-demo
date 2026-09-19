"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics/events";
import { propertyPublicSnapshot } from "@/lib/property-public-snapshot";

export function MobileActionBar() {
  return (
    <div className="mobile-action-bar" aria-label="Quick actions">
      <a href={propertyPublicSnapshot.phoneHref}>Call hotel</a>
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
