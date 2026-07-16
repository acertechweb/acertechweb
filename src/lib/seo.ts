import type { Metadata } from "next";
import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { pathFor, routeMap, type PageKey } from "@/i18n/routes";
import { pageCopy } from "@/data/content";

export function absoluteUrl(path: string) {
  return `${siteConfig.siteUrl}${path}`;
}

export function pageMetadata(locale: Locale, pageKey: PageKey): Metadata {
  const copy = pageCopy[locale][pageKey];
  const path = pathFor(locale, pageKey);
  const other = locale === "tr" ? "en" : "tr";
  const languages = {
    tr: absoluteUrl(pathFor("tr", pageKey)),
    en: absoluteUrl(pathFor("en", pageKey)),
    "x-default": absoluteUrl(pathFor("tr", pageKey))
  };

  return {
    title: `${copy.title} | ACERTECH`,
    description: copy.description,
    alternates: { canonical: absoluteUrl(path), languages },
    openGraph: {
      title: `${copy.title} | ACERTECH`,
      description: copy.description,
      url: absoluteUrl(path),
      siteName: "ACERTECH",
      images: [{ url: absoluteUrl(siteConfig.ogImage), width: 1200, height: 630 }],
      locale: locale === "tr" ? "tr_TR" : "en_US",
      alternateLocale: other === "tr" ? "tr_TR" : "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${copy.title} | ACERTECH`,
      description: copy.description,
      images: [absoluteUrl(siteConfig.ogImage)]
    },
    robots: { index: true, follow: true }
  };
}

export function allPageEntries() {
  return (Object.keys(routeMap) as PageKey[]).flatMap((pageKey) =>
    (["tr", "en"] as Locale[]).map((locale) => ({ locale, pageKey, path: pathFor(locale, pageKey) }))
  );
}

export function organizationJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.siteUrl}/#organization`,
        name: siteConfig.company,
        alternateName: siteConfig.brand,
        url: siteConfig.siteUrl,
        logo: absoluteUrl(siteConfig.logo),
        email: siteConfig.email,
        telephone: siteConfig.phoneDisplay,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Adana",
          addressCountry: "TR"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.siteUrl}/#service`,
        name: siteConfig.company,
        url: siteConfig.siteUrl,
        areaServed: ["Turkiye", "International"],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:00",
            closes: "18:00"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}/#website`,
        name: "ACERTECH",
        url: siteConfig.siteUrl,
        inLanguage: locale
      }
    ]
  };
}
