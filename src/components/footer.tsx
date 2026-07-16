import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { pathFor } from "@/i18n/routes";
import { machineCategories } from "@/data/content";
import { whatsappLink } from "@/lib/whatsapp";

export function Footer({ locale }: { locale: Locale }) {
  const tr = locale === "tr";
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Image className="footer-logo" src={siteConfig.logo} alt="ACERTECH" width={190} height={48} />
          <p>
            {tr
              ? "Acertech, metal işleme makineleri, teknik servis, proje ve mühendislik çözümleri sunar."
              : "Acertech provides metalworking machinery, technical service, project and engineering solutions."}
          </p>
          <strong>{tr ? "2005'ten beri" : "Since 2005"}</strong>
        </div>
        <div>
          <h2>{tr ? "Hızlı Bağlantılar" : "Quick Links"}</h2>
          {(["machines", "services", "used", "sell", "projects", "contact"] as const).map((key) => (
            <Link key={key} href={pathFor(locale, key)}>
              {key}
            </Link>
          ))}
        </div>
        <div>
          <h2>{tr ? "Makine Kategorileri" : "Machine Categories"}</h2>
          {machineCategories[locale].slice(0, 6).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div>
          <h2>{tr ? "İletişim" : "Contact"}</h2>
          <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
          <a href={whatsappLink(locale)}>WhatsApp</a>
          <a href={siteConfig.emailHref}>{siteConfig.email}</a>
          <span>{siteConfig.location}</span>
          <span>{siteConfig.hours[locale]}</span>
          <Link href={pathFor(locale, "privacyNotice")}>{tr ? "KVKK Aydınlatma Metni" : "Privacy Notice"}</Link>
          <Link href={pathFor(locale, "privacyPolicy")}>{tr ? "Gizlilik Politikası" : "Privacy Policy"}</Link>
          <Link href={pathFor(locale, "cookiePolicy")}>{tr ? "Çerez Politikası" : "Cookie Policy"}</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.company}</span>
        <span>TR / EN</span>
      </div>
    </footer>
  );
}
