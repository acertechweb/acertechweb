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
    machines: "Makineler",
    services: "Teknik Servis",
    used: "İkinci El",
    sell: "Makinenizi Satın",
    projects: "Projeler",
    industries: "Sektörler",
    about: "Hakkımızda",
    contact: "İletişim",
    quote: "Teklif Al",
    menu: "Menü",
    close: "Kapat"
  },
  en: {
    home: "Home",
    machines: "Machines",
    services: "Technical Service",
    used: "Used Machinery",
    sell: "Sell Your Machine",
    projects: "Projects",
    industries: "Industries",
    about: "About",
    contact: "Contact",
    quote: "Get a Quote",
    menu: "Menu",
    close: "Close"
  }
};

type NavKey = "home" | "machines" | "services" | "used" | "projects" | "industries" | "about" | "contact";
const nav: NavKey[] = ["home", "machines", "services", "used", "projects", "industries", "about", "contact"];

function ExchangeRates({ locale }: { locale: Locale }) {
  const [rates, setRates] = useState<{ usdTry: number; eurTry: number } | null>(null);

  useEffect(() => {
    let active = true;

    fetch("https://open.er-api.com/v6/latest/USD")
      .then((response) => response.json())
      .then((data) => {
        const tryRate = Number(data?.rates?.TRY);
        const eurRate = Number(data?.rates?.EUR);
        if (!active || !tryRate || !eurRate) return;
        setRates({ usdTry: tryRate, eurTry: tryRate / eurRate });
      })
      .catch(() => {
        if (active) setRates(null);
      });

    return () => {
      active = false;
    };
  }, []);

  const formatter = new Intl.NumberFormat(locale === "tr" ? "tr-TR" : "en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  return (
    <div className="exchange-rates" aria-label={locale === "tr" ? "Güncel döviz kuru" : "Current exchange rates"}>
      <span>$ {rates ? formatter.format(rates.usdTry) : "--"}</span>
      <span>€ {rates ? formatter.format(rates.eurTry) : "--"}</span>
    </div>
  );
}

export function Header({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const [open, setOpen] = useState(false);
  const t = labels[locale];
  const otherLocale = locale === "tr" ? "en" : "tr";
  const isHome = pageKey === "home";

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
      <div className={isHome ? "topbar topbar-home" : "topbar"}>
        <div className="container topbar-inner">
          <div className="topbar-contact">
            <a href={siteConfig.emailHref} onClick={() => trackEvent("email_click", "topbar")}>
              {siteConfig.email}
            </a>
            <span>{siteConfig.location}</span>
            <span>{siteConfig.hours[locale]}</span>
          </div>
          <ExchangeRates locale={locale} />
        </div>
      </div>
      <header className={isHome ? "site-header site-header-home" : "site-header"}>
        <div className="container header-inner">
          <Link className="brand" href={pathFor(locale, "home")} aria-label="ACERTECH">
            <Image src={siteConfig.logo} alt="ACERTECH" width={190} height={48} priority />
          </Link>
          <nav className="desktop-nav" aria-label={locale === "tr" ? "Ana menü" : "Main menu"}>
            {nav.map((item) => (
              <Link key={item} href={pathFor(locale, item)}>
                {t[item]}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link className="lang-switch" href={pathFor(otherLocale, pageKey)} aria-label={locale === "tr" ? "Switch to English" : "Türkçeye geç"}>
              <span className={locale === "tr" ? "active" : ""}>TR</span>
              <span> / </span>
              <span className={locale === "en" ? "active" : ""}>EN</span>
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
