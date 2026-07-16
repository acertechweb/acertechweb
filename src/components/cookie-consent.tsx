"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";

const key = "acertech-cookie-consent";

export function CookieConsent({ locale }: { locale: Locale }) {
  const [choice, setChoice] = useState<"accepted" | "rejected" | null>(null);
  const tr = locale === "tr";

  useEffect(() => {
    const stored = window.localStorage.getItem(key);
    if (stored === "accepted" || stored === "rejected") setChoice(stored);
  }, []);

  const save = (value: "accepted" | "rejected") => {
    window.localStorage.setItem(key, value);
    setChoice(value);
  };

  return (
    <>
      {choice === "accepted" ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaId}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${siteConfig.gaId}',{anonymize_ip:true});`}
          </Script>
        </>
      ) : null}
      {!choice ? (
        <div className="cookie-panel" role="region" aria-label={tr ? "Çerez tercihleri" : "Cookie preferences"}>
          <p>
            {tr
              ? "Zorunlu çerezler site için kullanılır. Analitik ölçüm yalnızca onayınızla etkinleşir."
              : "Required cookies keep the site working. Analytics measurement is enabled only with your consent."}
          </p>
          <div>
            <button className="btn btn-primary" type="button" onClick={() => save("accepted")}>
              {tr ? "Kabul et" : "Accept"}
            </button>
            <button className="btn btn-ghost" type="button" onClick={() => save("rejected")}>
              {tr ? "Reddet" : "Reject"}
            </button>
          </div>
        </div>
      ) : (
        <button className="cookie-preferences" type="button" onClick={() => setChoice(null)}>
              {tr ? "Çerez Tercihleri" : "Cookie Preferences"}
        </button>
      )}
    </>
  );
}
