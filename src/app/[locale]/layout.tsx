import { notFound } from "next/navigation";
import type { Locale } from "@/lib/site-config";
import { locales } from "@/lib/site-config";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { CookieConsent } from "@/components/cookie-consent";
import { organizationJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  const jsonLd = organizationJsonLd(locale);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
      <Footer locale={locale} />
      <WhatsAppButton locale={locale} />
      <CookieConsent locale={locale} />
    </>
  );
}
