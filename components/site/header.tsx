"use client";

import { useEffect, useState } from "react";
import { navigation, siteConfig } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <a className="wordmark" href="#top" aria-label={`${siteConfig.name} home`}>
          <span className="wordmark__eyebrow">KANDY VICTORIA</span>
          <span className="wordmark__title">ECO RESORT</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#availability">
          Check availability
        </a>

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
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
          <a className="mobile-menu__cta" href="#availability" onClick={() => setOpen(false)}>
            Check availability
          </a>
        </nav>
      </div>
    </header>
  );
}
