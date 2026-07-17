import type { Metadata } from "next";
import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { pathFor, routeMap, type PageKey } from "@/i18n/routes";
import { pageCopy } from "@/data/content";

export function absoluteUrl(path: string) {
  return `${siteConfig.siteUrl}${path}`;
}

const pageKeywords: Record<PageKey, Record<Locale, string[]>> = {
  home: {
    tr: ["AcerTech", "endüstriyel makine", "makine teknolojileri", "teknik servis", "ikinci el makine"],
    en: ["AcerTech", "industrial machinery", "machine technologies", "technical service", "used machinery"]
  },
  machines: {
    tr: ["sanayi makineleri", "metal işleme makineleri", "CNC lazer kesim", "abkant pres", "giyotin makas"],
    en: ["industrial machinery", "metalworking machinery", "CNC laser cutting", "press brake", "guillotine shear"]
  },
  services: {
    tr: ["endüstriyel makine teknik servisi", "makine kurulumu", "arıza tespiti", "periyodik bakım"],
    en: ["industrial machine technical service", "machine installation", "fault diagnosis", "periodic maintenance"]
  },
  used: {
    tr: ["ikinci el makine", "ikinci el sanayi makineleri", "satılık makine", "makine alım satım"],
    en: ["used machinery", "used industrial machinery", "machinery sales", "machine sourcing"]
  },
  sell: {
    tr: ["makinemi satmak istiyorum", "ikinci el makine satışı", "sanayi makinesi satışı"],
    en: ["sell my machine", "used machinery sale", "industrial machine sale"]
  },
  projects: {
    tr: ["fabrika kurulumu", "üretim hattı kurulumu", "proje danışmanlık", "kapasite artırımı"],
    en: ["factory installation", "production line setup", "project consulting", "capacity increase"]
  },
  industries: {
    tr: ["metal işleme sektörü", "otomotiv yan sanayi", "makine imalatı", "sac şekillendirme"],
    en: ["metalworking industry", "automotive supplier industry", "machine manufacturing", "sheet forming"]
  },
  about: {
    tr: ["AcerTech hakkında", "Acertech Makine", "endüstriyel makine çözüm ortağı"],
    en: ["about AcerTech", "Acertech Machinery", "industrial machinery partner"]
  },
  contact: {
    tr: ["AcerTech iletişim", "makine teklifi", "teknik servis talebi", "Adana makine"],
    en: ["AcerTech contact", "machine quote", "technical service request", "Adana machinery"]
  },
  privacyNotice: { tr: ["KVKK", "kişisel veri"], en: ["privacy notice", "personal data"] },
  privacyPolicy: { tr: ["gizlilik politikası"], en: ["privacy policy"] },
  cookiePolicy: { tr: ["çerez politikası"], en: ["cookie policy"] }
};

const pageImages: Partial<Record<PageKey, string>> = {
  home: "/images/anasayfa-alti-acertech.png",
  machines: "/images/machines/cnc-lazer-kesim.png",
  services: "/images/service/service-cover.png",
  used: "/images/used/used-cover.png",
  projects: "/images/projects/project-cover.png",
  industries: "/images/machines/sac-isleme-makineleri.png",
  about: "/brand/acertech-logo-black.svg",
  contact: "/images/service/service-02.jpeg"
};

export function pageImage(pageKey: PageKey) {
  return pageImages[pageKey] || siteConfig.ogImage;
}

export function pageMetadata(locale: Locale, pageKey: PageKey): Metadata {
  const copy = pageCopy[locale][pageKey];
  const path = pathFor(locale, pageKey);
  const other = locale === "tr" ? "en" : "tr";
  const title = `${copy.title} | ACERTECH`;
  const image = pageImage(pageKey);
  const languages = {
    tr: absoluteUrl(pathFor("tr", pageKey)),
    en: absoluteUrl(pathFor("en", pageKey)),
    "x-default": absoluteUrl(pathFor("tr", pageKey))
  };

  return {
    title,
    description: copy.description,
    keywords: pageKeywords[pageKey][locale],
    authors: [{ name: siteConfig.company }],
    creator: siteConfig.company,
    publisher: siteConfig.company,
    category: "Industrial machinery",
    alternates: { canonical: absoluteUrl(path), languages },
    openGraph: {
      title,
      description: copy.description,
      url: absoluteUrl(path),
      siteName: "ACERTECH",
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: title }],
      locale: locale === "tr" ? "tr_TR" : "en_US",
      alternateLocale: other === "tr" ? "tr_TR" : "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: copy.description,
      images: [absoluteUrl(image)]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    }
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
        logo: absoluteUrl(siteConfig.logoBlack),
        image: absoluteUrl(siteConfig.logoBlack),
        email: siteConfig.email,
        telephone: siteConfig.phoneDisplay,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Adana",
          addressRegion: "Adana",
          addressCountry: "TR"
        },
        foundingDate: siteConfig.foundationYear
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.siteUrl}/#service`,
        name: siteConfig.company,
        url: siteConfig.siteUrl,
        image: absoluteUrl(siteConfig.logoBlack),
        telephone: siteConfig.phoneDisplay,
        email: siteConfig.email,
        areaServed: ["Türkiye", "International"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Adana",
          addressRegion: "Adana",
          addressCountry: "TR"
        },
        serviceType: ["Endüstriyel makine tedariki", "Teknik servis", "İkinci el makine", "Proje danışmanlık"],
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
        publisher: { "@id": `${siteConfig.siteUrl}/#organization` },
        inLanguage: locale
      }
    ]
  };
}

export function pageJsonLd(locale: Locale, pageKey: PageKey) {
  const copy = pageCopy[locale][pageKey];
  const path = pathFor(locale, pageKey);
  const pageUrl = absoluteUrl(path);
  const homeLabel = locale === "tr" ? "Ana Sayfa" : "Home";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: copy.title,
        description: copy.description,
        inLanguage: locale,
        isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
        about: { "@id": `${siteConfig.siteUrl}/#organization` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(pageImage(pageKey))
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: homeLabel,
            item: absoluteUrl(pathFor(locale, "home"))
          },
          ...(pageKey === "home"
            ? []
            : [
                {
                  "@type": "ListItem",
                  position: 2,
                  name: copy.title,
                  item: pageUrl
                }
              ])
        ]
      }
    ]
  };
}
