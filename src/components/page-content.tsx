import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { pathFor, type PageKey } from "@/i18n/routes";
import { brands, industries, machineCategories, pageCopy, services } from "@/data/content";
import { projects } from "@/data/projects";
import { whatsappLink } from "@/lib/whatsapp";
import { SahibindenButton } from "@/components/sahibinden-button";
import { WhatsAppForm } from "@/components/forms";

function ServiceCards({ locale }: { locale: Locale }) {
  return (
    <div className="grid-auto">
      {services[locale].map((service, index) => (
        <article className="service-card card" key={service.title}>
          <div className="industrial-visual" aria-hidden="true">
            <span>0{index + 1}</span>
          </div>
          <div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function ContactBlock({ locale }: { locale: Locale }) {
  const tr = locale === "tr";
  return (
    <div className="grid-auto">
      <a className="contact-card card" href={siteConfig.phoneHref}>
        <strong>{tr ? "Telefon" : "Phone"}</strong>
        <span>{siteConfig.phoneDisplay}</span>
      </a>
      <a className="contact-card card" href={whatsappLink(locale)}>
        <strong>WhatsApp</strong>
        <span>{tr ? "Hızlı teklif ve destek" : "Quick quote and support"}</span>
      </a>
      <a className="contact-card card" href={siteConfig.emailHref}>
        <strong>E-posta</strong>
        <span>{siteConfig.email}</span>
      </a>
      <div className="contact-card card">
        <strong>{tr ? "Konum" : "Location"}</strong>
        <span>{siteConfig.location}</span>
      </div>
    </div>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const tr = locale === "tr";

  return (
    <>
      <section className="home-gateway" aria-label={tr ? "Acertech ana hizmet girişleri" : "Acertech main service entries"}>
        <div className="gateway-grid">
          <HomeEntryPanel
            href={pathFor(locale, "machines")}
            image="/images/kapak0.png"
            title={tr ? "Sıfır Makinalar" : "New Machinery"}
            text={tr ? "Proje danışmanlık ve fabrika kurulumları" : "Project consulting and factory installations"}
            action={tr ? "Sıfır makinaları incele" : "Explore new machinery"}
            alt={tr ? "Acertech sıfır makina ve fabrika kurulumu tanıtım görseli" : "Acertech new machinery and factory installation visual"}
          />
          <HomeEntryPanel
            href={pathFor(locale, "services")}
            image="/images/kapakpro.png"
            title={tr ? "Bakım, Servis ve Kurulum" : "Maintenance, Service and Installation"}
            text={tr ? "Makina bakım, teknik servis, kurulum ve devreye alma" : "Machine maintenance, technical service, installation and commissioning"}
            action={tr ? "Teknik servisi incele" : "Explore technical service"}
            alt={tr ? "Acertech makina bakım ve teknik servis tanıtım görseli" : "Acertech machine maintenance and technical service visual"}
            featured
          />
          <HomeEntryPanel
            href={pathFor(locale, "used")}
            image="/images/kapak2.png"
            title={tr ? "İkinci El Makina" : "Used Machinery"}
            text={tr ? "İkinci el makina alım, satım, ekspertiz ve kurulum çözümleri" : "Used machinery sourcing, sales, inspection and installation solutions"}
            action={tr ? "İkinci eli incele" : "Explore used machinery"}
            alt={tr ? "Acertech ikinci el makina tanıtım görseli" : "Acertech used machinery visual"}
          />
        </div>
      </section>
      <section className="stats-band">
        <div className="container stats-grid">
          {(tr
            ? ["2005'ten Beri", "25 Yıllık Tecrübe", "Türkiye ve Yurt Dışı", "Satıştan Servise Uçtan Uca Destek"]
            : ["Since 2005", "25 Years of Experience", "Turkiye and International Markets", "End-to-End Support from Sales to Service"]
          ).map((item) => (
            <strong key={item}>{item}</strong>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle
            title={tr ? "Üç Ana Hizmet Alanı" : "Three Core Service Areas"}
            text={tr ? "Sıfır makina, teknik servis ve ikinci el makina çözümlerini net bir akışta topluyoruz." : "New machinery, technical service and used machinery solutions are organized in one clear flow."}
          />
          <ServiceCards locale={locale} />
        </div>
      </section>
      <SharedSections locale={locale} />
    </>
  );
}

function HomeEntryPanel({
  href,
  image,
  title,
  text,
  action,
  alt,
  featured = false
}: {
  href: string;
  image: string;
  title: string;
  text: string;
  action: string;
  alt: string;
  featured?: boolean;
}) {
  return (
    <Link className={featured ? "gateway-panel gateway-panel-featured" : "gateway-panel"} href={href}>
      <Image src={image} alt={alt} fill priority sizes="(max-width: 900px) 100vw, 33vw" />
      <span className="gateway-shade" />
      <span className="gateway-content">
        <span className="gateway-kicker">ACERTECH</span>
        <span className="gateway-title">{title}</span>
        <span className="gateway-text">{text}</span>
        <span className="gateway-action">{action}</span>
      </span>
    </Link>
  );
}

function SectionTitle({ title, text }: { title: string; text?: string }) {
  return (
    <div className="section-title">
      <span className="eyebrow">ACERTECH</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function SharedSections({ locale }: { locale: Locale }) {
  const tr = locale === "tr";
  return (
    <>
      <section className="section light-section">
        <div className="container">
          <SectionTitle title={tr ? "Makine ve Çözüm Kategorileri" : "Machine and Solution Categories"} />
          <div className="tag-grid">
            {machineCategories[locale].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="section split">
        <div className="container split-grid">
          <div>
            <SectionTitle title={tr ? "Proje ve Mühendislik Yaklaşımı" : "Project and Engineering Approach"} />
            <p>{tr ? "İhtiyaç analizi, kapasite planlama, uygun ekipman seçimi, kurulum ve devreye alma adımları aynı teknik bütünlük içinde yürütülür." : "Needs analysis, capacity planning, equipment selection, installation and commissioning are handled as one technical workflow."}</p>
          </div>
          <div>
            <SectionTitle title={tr ? "Teknik Servis Süreci" : "Technical Service Process"} />
            <ol className="steps">
              {(tr ? ["Ön görüşme", "Saha analizi", "Teknik plan", "Uygulama ve destek"] : ["Initial review", "Field analysis", "Technical plan", "Execution and support"]).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="container">
          <SectionTitle title={tr ? "Hizmet Verdiğimiz Sektörler" : "Industries We Serve"} />
          <div className="tag-grid">
            {industries[locale].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle title={tr ? "Marka Bağımsız Endüstriyel Çözümler" : "Brand-Independent Industrial Solutions"} text={tr ? "Farklı üreticilere ait makine, ekipman, kalıp ve yedek parçalar için tedarik, kurulum, devreye alma, bakım ve teknik destek." : "Sourcing, installation, commissioning, maintenance and technical support for machinery, equipment, tooling and spare parts from different manufacturers."} />
          <div className="brand-list">
            {brands.map((brand) => (
              <span key={brand}>{brand}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="container">
          <SectionTitle title={tr ? "Gerçek Projeler" : "Verified Projects"} />
          {projects.length === 0 ? (
            <div className="empty-state card">
              <p>{tr ? "Gerçek saha projelerimiz ve uygulama çalışmalarımız bu alana eklenecektir." : "Our verified field projects and application work will be added to this area."}</p>
              <Link className="btn btn-primary" href={pathFor(locale, "contact")}>
                {tr ? "İletişime Geçin" : "Contact Us"}
              </Link>
            </div>
          ) : null}
        </div>
      </section>
      <section className="section cta">
        <div className="container cta-inner">
          <h2>{tr ? "Makine, servis veya proje ihtiyacınızı birlikte değerlendirelim." : "Let us evaluate your machinery, service or project needs together."}</h2>
          <Link className="btn btn-primary" href={pathFor(locale, "contact")}>
            {tr ? "Teklif Talep Edin" : "Request a Quote"}
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle title={tr ? "İletişim" : "Contact"} />
          <ContactBlock locale={locale} />
        </div>
      </section>
    </>
  );
}

export function StandardPage({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const tr = locale === "tr";
  const copy = pageCopy[locale][pageKey];
  const isContact = pageKey === "contact";
  const isSell = pageKey === "sell";
  const isLegal = pageKey === "privacyNotice" || pageKey === "privacyPolicy" || pageKey === "cookiePolicy";

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">ACERTECH</p>
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>
        </div>
      </section>
      <section className="section">
        <div className="container page-grid">
          <main className="prose-card card">
            <p>{copy.body}</p>
            {pageKey === "machines" ? <CategoryList locale={locale} /> : null}
            {pageKey === "services" || pageKey === "used" ? <ServiceCards locale={locale} /> : null}
            {pageKey === "industries" ? <CategoryTags items={industries[locale]} /> : null}
            {pageKey === "projects" ? <div className="empty-state"><p>{copy.body}</p></div> : null}
            {pageKey === "about" ? <AboutDetails locale={locale} /> : null}
            {isLegal ? <LegalDetails locale={locale} pageKey={pageKey} /> : null}
            {isSell ? <WhatsAppForm locale={locale} kind="sell" /> : null}
            {isContact ? (
              <>
                <ContactBlock locale={locale} />
                <div className="map-placeholder card">{siteConfig.location}</div>
                <WhatsAppForm locale={locale} kind="quote" />
              </>
            ) : null}
          </main>
          <aside className="side-card card">
            <h2>{tr ? "Hızlı İletişim" : "Quick Contact"}</h2>
            <a className="btn btn-primary" href={whatsappLink(locale)}>
              WhatsApp
            </a>
            <a className="btn btn-ghost" href={siteConfig.phoneHref}>
              {siteConfig.phoneDisplay}
            </a>
            <SahibindenButton label={tr ? "Sahibinden Mağazamız" : "Sahibinden Store"} disabledLabel={tr ? "Yakında aktif" : "Coming soon"} />
          </aside>
        </div>
      </section>
    </>
  );
}

function CategoryList({ locale }: { locale: Locale }) {
  return <CategoryTags items={machineCategories[locale]} />;
}

function CategoryTags({ items }: { items: string[] }) {
  return (
    <div className="tag-grid inner-tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function AboutDetails({ locale }: { locale: Locale }) {
  const tr = locale === "tr";
  const values = tr
    ? ["Teknik doğruluk", "Güvenilirlik", "Şeffaf ticaret", "İhtiyaca uygun çözüm", "Satış sonrası sorumluluk", "Verimlilik", "Sürekli gelişim", "Uzun vadeli iş ortaklığı"]
    : ["Technical accuracy", "Reliability", "Transparent trade", "Fit-for-need solutions", "After-sales responsibility", "Efficiency", "Continuous improvement", "Long-term partnership"];
  return (
    <>
      <h2>{tr ? "Misyon" : "Mission"}</h2>
      <p>{tr ? "Sanayi kuruluşlarının ihtiyaçlarına uygun, verimli ve sürdürülebilir makine çözümleri sunmak." : "To provide efficient and sustainable machinery solutions suitable for industrial organizations."}</p>
      <h2>{tr ? "Vizyon" : "Vision"}</h2>
      <p>{tr ? "Türkiye'den uluslararası pazarlara teknik uzmanlık ve marka bağımsız çözüm yaklaşımıyla hizmet veren bir mühendislik ve makine şirketi olmak." : "To be an engineering and machinery company serving international markets from Turkiye with technical expertise and brand-independent solutions."}</p>
      <CategoryTags items={values} />
    </>
  );
}

function LegalDetails({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const tr = locale === "tr";
  return (
    <>
      <h2>{tr ? "Veri sorumlusu" : "Data controller"}</h2>
      <p>{siteConfig.owner} - {siteConfig.company}</p>
      <h2>{tr ? "İletişim" : "Contact"}</h2>
      <p>{siteConfig.email} - {siteConfig.phoneDisplay}</p>
      {pageKey === "cookiePolicy" ? <p>{tr ? "Çerez tercihlerinizi sayfanın altındaki Çerez Tercihleri düğmesiyle değiştirebilirsiniz." : "You can change cookie preferences using the Cookie Preferences button at the bottom of the page."}</p> : null}
    </>
  );
}
