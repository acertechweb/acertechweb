import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale } from "@/lib/site-config";
import { allPageEntries, pageMetadata } from "@/lib/seo";
import { pageKeyFromSlug } from "@/i18n/routes";
import { Header } from "@/components/header";
import { HomePage, StandardPage } from "@/components/page-content";

type Params = { locale: string; slug?: string[] };

export function generateStaticParams() {
  return allPageEntries().map(({ locale, path }) => {
    const slug = path.replace(`/${locale}`, "").replace(/^\//, "");
    return { locale, slug: slug ? slug.split("/") : [] };
  });
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const key = pageKeyFromSlug(locale, slug?.join("/"));
  if (!key) return {};
  return pageMetadata(locale, key);
}

export default async function LocalePage({ params }: { params: Promise<Params> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const pageKey = pageKeyFromSlug(locale, slug?.join("/"));
  if (!pageKey) notFound();

  return (
    <>
      <Header locale={locale} pageKey={pageKey} />
      <main id="main">{pageKey === "home" ? <HomePage locale={locale} /> : <StandardPage locale={locale} pageKey={pageKey} />}</main>
    </>
  );
}
