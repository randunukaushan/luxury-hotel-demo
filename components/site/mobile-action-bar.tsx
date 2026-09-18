import Link from "next/link";

export function MobileActionBar() {
  return (
    <div className="mobile-action-bar" aria-label="Quick actions">
      <Link href="/stay">Explore stays</Link>
      <Link className="mobile-action-bar__primary" href="/availability">
        Check availability
      </Link>
    </div>
  );
}
