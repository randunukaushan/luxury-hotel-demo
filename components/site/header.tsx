"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics/events";
import { navigation, siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isCurrent = (href: string) =>
    href === "/stay"
      ? pathname === "/stay" || pathname.startsWith("/stay/")
      : pathname === href;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={`site-header ${scrolled || open ? "site-header--solid" : ""}`}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="site-header__inner">
        <Link className="wordmark" href="/" aria-label={`${siteConfig.name} home`}>
          <span className="wordmark__eyebrow">KANDY VICTORIA</span>
          <span className="wordmark__title">ECO RESORT</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          className="header-cta"
          href="/availability"
          aria-current={pathname === "/availability" ? "page" : undefined}
          onClick={() => trackEvent("check_availability_click", { source: "header" })}
        >
          Check availability
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span className="menu-button__icon" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
          <Link
            className="mobile-menu__cta"
            href="/availability"
            aria-current={pathname === "/availability" ? "page" : undefined}
            onClick={() => {
              trackEvent("check_availability_click", { source: "mobile_menu" });
              setOpen(false);
            }}
          >
            Check availability
          </Link>
        </nav>
      </div>
    </header>
  );
}
