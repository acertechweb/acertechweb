import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";

const greetings: Record<Locale, string> = {
  tr: "Merhaba, ACERTECH'e hoş geldiniz. Size nasıl yardımcı olabiliriz?",
  en: "Hello, welcome to ACERTECH. How can we assist you?"
};

export function whatsappLink(locale: Locale, message?: string) {
  const text = message || greetings[locale];
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
