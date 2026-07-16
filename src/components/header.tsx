"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { pathFor, type PageKey } from "@/i18n/routes";
import { whatsappLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

const labels = {
  tr: {
    home: "Ana Sayfa",
    machines: "Makineler ve Çözümler",
    services: "Hizmetler",
    used: "İkinci El",
    sell: "Makinenizi Satın",
    projects: "Projeler",
    industries: "Sektörler",
    about: "Hakkımızda",
    contact: "İletişim",
    quote: "Teklif Al",
    menu: "Menü",
    close: "Kapat",
    store: "Sahibinden yakında"
  },
  en: {
    home: "Home",
    machines: "Machines and Solutions",
    services: "Services",
    used: "Used Machinery",
    sell: "Sell Your Machine",
    projects: "Projects",
    industries: "Industries",
    about: "About",
    contact: "Contact",
    quote: "Get a Quote",
    menu: "Menu",
    close: "Close",
    store: "Sahibinden soon"
  }
};

type NavKey = "home" | "machines" | "services" | "used" | "projects" | "industries" | "about" | "contact";
const nav: NavKey[] = ["home", "machines", "services", "used", "projects", "industries", "about", "contact"];

export function Header({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const [open, setOpen] = useState(false);
  const t = labels[locale];
  const otherLocale = locale === "tr" ? "en" : "tr";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <a href={siteConfig.phoneHref} onClick={() => trackEvent("phone_click", "topbar")}>
            {siteConfig.phoneDisplay}
          </a>
          <a href={siteConfig.emailHref} onClick={() => trackEvent("email_click", "topbar")}>
            {siteConfig.email}
          </a>
          <span>{siteConfig.location}</span>
          <span>{siteConfig.hours[locale]}</span>
          <a href={whatsappLink(locale)} onClick={() => trackEvent("whatsapp_click", "topbar")}>
            WhatsApp
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href={pathFor(locale, "home")} aria-label="ACERTECH">
            <Image src={siteConfig.logo} alt="ACERTECH" width={190} height={48} priority />
          </Link>
          <nav className="desktop-nav" aria-label="Ana menü">
            <div className="mega-wrap">
              <Link href={pathFor(locale, "machines")}>{t.machines}</Link>
              <div className="mega-menu" aria-label={t.machines}>
                <Link href={pathFor(locale, "machines")}>Fiber lazer, CNC abkant, giyotin makas</Link>
                <Link href={pathFor(locale, "services")}>{t.services}</Link>
                <Link href={pathFor(locale, "used")}>{t.used}</Link>
              </div>
            </div>
            {nav
              .filter((item) => item !== "machines")
              .map((item) => (
                <Link key={item} href={pathFor(locale, item)}>
                  {t[item]}
                </Link>
              ))}
          </nav>
          <div className="header-actions">
            <Link className="lang" href={pathFor(otherLocale, pageKey)}>
              {otherLocale.toUpperCase()}
            </Link>
            <Link className="btn btn-primary" href={pathFor(locale, "contact")}>
              {t.quote}
            </Link>
            <button className="menu-button" type="button" aria-expanded={open} onClick={() => setOpen(true)}>
              {t.menu}
            </button>
          </div>
        </div>
      </header>
      {open ? (
        <div className="mobile-panel" role="dialog" aria-modal="true" aria-label={t.menu}>
          <div className="mobile-panel-head">
            <Image src={siteConfig.logo} alt="ACERTECH" width={170} height={42} />
            <button type="button" className="btn btn-ghost" onClick={() => setOpen(false)}>
              {t.close}
            </button>
          </div>
          <nav className="mobile-nav">
            {nav.map((item) => (
              <Link key={item} href={pathFor(locale, item)} onClick={() => setOpen(false)}>
                {t[item]}
              </Link>
            ))}
            <Link href={pathFor(locale, "sell")} onClick={() => setOpen(false)}>
              {t.sell}
            </Link>
            <Link href={pathFor(otherLocale, pageKey)} onClick={() => setOpen(false)}>
              {otherLocale.toUpperCase()}
            </Link>
            <a href={whatsappLink(locale)} onClick={() => trackEvent("whatsapp_click", "mobile_menu")}>
              WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </>
  );
}
