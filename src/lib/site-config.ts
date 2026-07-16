export const siteConfig = {
  brand: "ACERTECH",
  company: "Acertech Makine Sanayi ve Ticaret",
  owner: "Cavit Fatih Acer",
  foundationYear: "2005",
  experienceYears: "25",
  location: "Adana / Türkiye",
  phoneDisplay: "+90 532 546 68 50",
  phoneHref: "tel:+905325466850",
  whatsappNumber: "905325466850",
  email: "fatih@acertech.com.tr",
  emailHref: "mailto:fatih@acertech.com.tr",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://acertech.com.tr",
  gaId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-Q7HNFVWEPK",
  sahibindenUrl: process.env.NEXT_PUBLIC_SAHIBINDEN_URL || "",
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  logo: "/brand/acertech-logo.png",
  ogImage: "/opengraph-image",
  hours: {
    tr: "Pazartesi-Cumartesi 08.00-18.00, Pazar Kapalı",
    en: "Monday-Saturday 08:00-18:00, Sunday closed"
  },
  mapsUrl: "",
  socials: [] as Array<{ label: string; href: string }>
};

export type Locale = "tr" | "en";
export const locales: Locale[] = ["tr", "en"];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
