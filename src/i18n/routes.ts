import type { Locale } from "@/lib/site-config";

export type PageKey =
  | "home"
  | "machines"
  | "services"
  | "used"
  | "sell"
  | "projects"
  | "industries"
  | "about"
  | "contact"
  | "privacyNotice"
  | "privacyPolicy"
  | "cookiePolicy";

export const routeMap: Record<PageKey, Record<Locale, string>> = {
  home: { tr: "", en: "" },
  machines: { tr: "makineler", en: "machines" },
  services: { tr: "hizmetler", en: "services" },
  used: { tr: "ikinci-el", en: "used-machinery" },
  sell: { tr: "makinenizi-satin", en: "sell-your-machine" },
  projects: { tr: "projeler", en: "projects" },
  industries: { tr: "sektorler", en: "industries" },
  about: { tr: "hakkimizda", en: "about" },
  contact: { tr: "iletisim", en: "contact" },
  privacyNotice: { tr: "kvkk-aydinlatma-metni", en: "privacy-notice" },
  privacyPolicy: { tr: "gizlilik-politikasi", en: "privacy-policy" },
  cookiePolicy: { tr: "cerez-politikasi", en: "cookie-policy" }
};

export function pathFor(locale: Locale, key: PageKey) {
  const slug = routeMap[key][locale];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

export function pageKeyFromSlug(locale: Locale, slug?: string): PageKey | null {
  const normalized = slug || "";
  const found = (Object.keys(routeMap) as PageKey[]).find((key) => routeMap[key][locale] === normalized);
  return found || null;
}
