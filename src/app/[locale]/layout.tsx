import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/site-config";
import { Footer } from "@/components/footer";
import { IntroSplash } from "@/components/intro-splash";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { organizationJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const jsonLd = organizationJsonLd(locale);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <IntroSplash />
      {children}
      <Footer locale={locale} />
      <WhatsAppButton locale={locale} />
    </>
  );
}
