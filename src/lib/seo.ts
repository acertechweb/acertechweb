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
    tr: ["AcerTech", "Fatih Acer", "Cavit Fatih Acer", "endüstriyel makine", "makine teknolojileri", "teknik servis", "ikinci el makine"],
    en: ["AcerTech", "Fatih Acer", "Cavit Fatih Acer", "industrial machinery", "machine technologies", "technical service", "used machinery"]
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
    tr: ["Fatih Acer", "Cavit Fatih Acer", "AcerTech hakkında", "Acertech Makine", "endüstriyel makine çözüm ortağı"],
    en: ["Fatih Acer", "Cavit Fatih Acer", "about AcerTech", "Acertech Machinery", "industrial machinery partner"]
  },
  contact: {
    tr: ["Fatih Acer iletişim", "Cavit Fatih Acer", "AcerTech iletişim", "makine teklifi", "teknik servis talebi", "Adana makine"],
    en: ["Fatih Acer contact", "Cavit Fatih Acer", "AcerTech contact", "machine quote", "technical service request", "Adana machinery"]
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

function pageDescription(locale: Locale, pageKey: PageKey, fallback: string) {
  if (pageKey === "about") {
    return locale === "tr"
      ? "Cavit Fatih Acer, Fatih Acer adıyla da bilinen AcerTech Makine Sanayi ve Ticaret kurucusu ve yetkilisidir."
      : "Cavit Fatih Acer, also known as Fatih Acer, is the founder and authorized contact of AcerTech Makine Sanayi ve Ticaret.";
  }

  if (pageKey === "contact") {
    return locale === "tr"
      ? "Fatih Acer ile AcerTech Makine Sanayi ve Ticaret için makine, teknik servis, ikinci el ve proje danışmanlık taleplerinizde iletişime geçin."
      : "Contact Fatih Acer for AcerTech Makine Sanayi ve Ticaret machinery, technical service, used machinery and project consulting requests.";
  }

  return fallback;
}

function personEntity() {
  return { "@id": `${siteConfig.siteUrl}/#fatih-acer` };
}

export function pageMetadata(locale: Locale, pageKey: PageKey): Metadata {
  const copy = pageCopy[locale][pageKey];
  const path = pathFor(locale, pageKey);
  const other = locale === "tr" ? "en" : "tr";
  const titlePrefix =
    pageKey === "about"
      ? locale === "tr"
        ? "Fatih Acer ve AcerTech Hakkında"
        : "Fatih Acer and About AcerTech"
      : pageKey === "contact"
        ? locale === "tr"
          ? "Fatih Acer İletişim ve AcerTech"
          : "Fatih Acer Contact and AcerTech"
        : copy.title;
  const fallbackDescription =
    pageKey === "about"
      ? locale === "tr"
        ? "Cavit Fatih Acer, Fatih Acer adıyla da bilinen AcerTech Makine Sanayi ve Ticaret kurucusu ve yetkilisidir."
        : "Cavit Fatih Acer, also known as Fatih Acer, is the founder and authorized contact of AcerTech Makine Sanayi ve Ticaret."
      : copy.description;
  const description = pageDescription(locale, pageKey, fallbackDescription);
  const title = `${titlePrefix} | ACERTECH`;
  const image = pageImage(pageKey);
  const languages = {
    tr: absoluteUrl(pathFor("tr", pageKey)),
    en: absoluteUrl(pathFor("en", pageKey)),
    "x-default": absoluteUrl(pathFor("tr", pageKey))
  };

  return {
    title,
    description,
    keywords: pageKeywords[pageKey][locale],
    authors: [{ name: siteConfig.company }],
    creator: siteConfig.company,
    publisher: siteConfig.company,
    category: "Industrial machinery",
    alternates: { canonical: absoluteUrl(path), languages },
    openGraph: {
      title,
      description,
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
      description,
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
  const personId = `${siteConfig.siteUrl}/#fatih-acer`;
  const organizationId = `${siteConfig.siteUrl}/#organization`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.company,
        alternateName: [siteConfig.brand, "AcerTech", "AcerTech Fatih Acer"],
        url: siteConfig.siteUrl,
        logo: absoluteUrl(siteConfig.logoBlack),
        image: absoluteUrl(siteConfig.logoBlack),
        email: siteConfig.email,
        telephone: siteConfig.phoneDisplay,
        founder: { "@id": personId },
        employee: { "@id": personId },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Adana",
          addressRegion: "Adana",
          addressCountry: "TR"
        },
        foundingDate: siteConfig.foundationYear
      },
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.owner,
        alternateName: ["Fatih Acer", "Cavit F. Acer"],
        jobTitle: locale === "tr" ? "Kurucu ve Yetkili" : "Founder and Authorized Contact",
        worksFor: { "@id": organizationId },
        affiliation: { "@id": organizationId },
        url: absoluteUrl(pathFor(locale, "about")),
        email: siteConfig.email,
        telephone: siteConfig.phoneDisplay,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Adana",
          addressRegion: "Adana",
          addressCountry: "TR"
        },
        knowsAbout: [
          "Endüstriyel makine",
          "Metal işleme makineleri",
          "Teknik servis",
          "İkinci el makine",
          "Proje danışmanlık"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.siteUrl}/#service`,
        name: siteConfig.company,
        alternateName: ["AcerTech", "AcerTech Fatih Acer"],
        url: siteConfig.siteUrl,
        image: absoluteUrl(siteConfig.logoBlack),
        telephone: siteConfig.phoneDisplay,
        email: siteConfig.email,
        founder: { "@id": personId },
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
        publisher: { "@id": organizationId },
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
  const description = pageDescription(locale, pageKey, copy.description);
  const mainEntity = pageKey === "about" || pageKey === "contact" ? personEntity() : undefined;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: copy.title,
        description,
        inLanguage: locale,
        isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
        about: { "@id": `${siteConfig.siteUrl}/#organization` },
        mainEntity,
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
