import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { pathFor, type PageKey } from "@/i18n/routes";
import { machineCategories } from "@/data/content";

const footerLinks: Array<[PageKey, Record<Locale, string>]> = [
  ["home", { tr: "Ana Sayfa", en: "Home" }],
  ["machines", { tr: "Makineler", en: "Machines" }],
  ["services", { tr: "Teknik Servis", en: "Technical Service" }],
  ["used", { tr: "İkinci El", en: "Used Machinery" }],
  ["projects", { tr: "Projeler", en: "Projects" }],
  ["contact", { tr: "İletişim", en: "Contact" }]
];

export function Footer({ locale }: { locale: Locale }) {
  const tr = locale === "tr";

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Image className="footer-logo" src={siteConfig.logoWhite} alt="ACERTECH" width={170} height={43} />
          <p>
            {tr
              ? "Acertech, metal işleme makineleri, teknik servis, proje ve mühendislik çözümleri sunar."
              : "Acertech provides metalworking machinery, technical service, project and engineering solutions."}
          </p>
          <strong>{tr ? "2005'ten beri" : "Since 2005"}</strong>
        </div>

        <div className="footer-link-list">
          {footerLinks.map(([key, label]) => (
            <Link key={key} href={pathFor(locale, key)}>
              {label[locale]}
            </Link>
          ))}
        </div>

        <div className="footer-link-list">
          {machineCategories[locale].slice(0, 6).map((item) => (
            <Link key={item} href={pathFor(locale, "machines")}>
              {item}
            </Link>
          ))}
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.company}</span>
        <div className="footer-legal">
          <Link href={pathFor(locale, "privacyNotice")}>{tr ? "KVKK" : "Privacy Notice"}</Link>
          <Link href={pathFor(locale, "privacyPolicy")}>{tr ? "Gizlilik" : "Privacy"}</Link>
        </div>
      </div>
    </footer>
  );
}
