import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { pathFor, type PageKey } from "@/i18n/routes";
import { brands, industries, machineItems, pageCopy, projectServices, services } from "@/data/content";
import { whatsappLink } from "@/lib/whatsapp";
import { SahibindenButton } from "@/components/sahibinden-button";
import { WhatsAppForm } from "@/components/forms";

const pageImages: Partial<Record<PageKey, string>> = {
  machines: "/images/machines/cnc-lazer-kesim.png",
  services: "/images/service/service-cover.png",
  used: "/images/used/used-cover.png",
  projects: "/images/projects/project-cover.png",
  industries: "/images/machines/sac-isleme-makineleri.png",
  about: "/images/projects/project-01.jpeg",
  contact: "/images/service/service-02.jpeg"
};

function slugify(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
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

function MachineGrid({ locale, limit }: { locale: Locale; limit?: number }) {
  const items = limit ? machineItems.slice(0, limit) : machineItems;

  return (
    <div className="machine-grid">
      {items.map((item) => (
        <Link className="machine-card" id={slugify(item.tr)} key={item.tr} href={pathFor(locale, "contact")}>
          <span className="machine-card-image">
            <Image src={item.image} alt={item[locale]} fill sizes="(max-width: 760px) 100vw, 25vw" />
          </span>
          <strong>{item[locale]}</strong>
        </Link>
      ))}
    </div>
  );
}

function ServiceCards({ locale }: { locale: Locale }) {
  return (
    <div className="grid-auto">
      {services[locale].map((service) => (
        <article className="service-card card" key={service.title}>
          <div className="service-image">
            <Image src={service.image} alt={service.title} fill sizes="(max-width: 760px) 100vw, 33vw" />
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

function ImagePair({ images, alt }: { images: string[]; alt: string }) {
  return (
    <div className="image-pair">
      {images.map((image, index) => (
        <div className="image-pair-item" key={image}>
          <Image src={image} alt={`${alt} ${index + 1}`} fill sizes="(max-width: 760px) 100vw, 50vw" />
        </div>
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
        <span>{tr ? "Makine, servis ve proje talepleri" : "Machinery, service and project requests"}</span>
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
            href={pathFor(locale, "projects")}
            image="/images/kapak0.png"
            title={tr ? "Proje Danışmanlık Fabrika Kurulumu" : "Project Consulting Factory Installation"}
            text={tr ? "Yeni yatırım, kapasite artırımı ve üretim hattı geliştirme desteği" : "New investment, capacity increase and production line support"}
            action={tr ? "Projeleri incele" : "Explore projects"}
            alt={tr ? "AcerTech proje danışmanlık ve fabrika kurulumu" : "AcerTech project consulting and factory installation"}
          />
          <HomeEntryPanel
            href={pathFor(locale, "services")}
            image="/images/kapakpro.png"
            title={tr ? "Bakım, Servis ve Kurulum" : "Maintenance, Service and Installation"}
            text={tr ? "Kurulum, arıza tespiti, bakım, taşıma ve devreye alma" : "Installation, diagnosis, maintenance, relocation and commissioning"}
            action={tr ? "Teknik servisi incele" : "Explore service"}
            alt={tr ? "AcerTech teknik servis ve bakım" : "AcerTech technical service and maintenance"}
            featured
          />
          <HomeEntryPanel
            href={pathFor(locale, "used")}
            image="/images/kapak2.png"
            title={tr ? "İkinci El Makine" : "Used Machinery"}
            text={tr ? "İkinci el makine alım, satış ve talebe özel araştırma" : "Used machine sales, sourcing and request-based search"}
            action={tr ? "İkinci eli incele" : "Explore used machinery"}
            alt={tr ? "AcerTech ikinci el makine" : "AcerTech used machinery"}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle title={pageCopy[locale].home.title} text={pageCopy[locale].home.body} />
          <div className="feature-list">
            {(tr
              ? ["Makine seçimi ve teknik karşılaştırma", "Kurulum, devreye alma ve teknik servis", "İkinci el makine alım ve satış desteği", "Üretim hattı, kapasite artırımı ve mühendislik projeleri"]
              : ["Machine selection and technical comparison", "Installation, commissioning and technical service", "Used machinery buying and selling support", "Production line, capacity increase and engineering projects"]
            ).map((item) => (
              <Link key={item} href={pathFor(locale, "contact")}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="container">
          <SectionTitle title={tr ? "Öne Çıkan Makine Kategorileri" : "Featured Machine Categories"} />
          <MachineGrid locale={locale} limit={8} />
        </div>
      </section>

      <SharedSections locale={locale} />
    </>
  );
}

function SharedSections({ locale }: { locale: Locale }) {
  const tr = locale === "tr";
  return (
    <>
      <section className="section">
        <div className="container work-model-grid">
          <div className="work-model-image">
            <Image src="/images/anasayfa-alti-acertech.png" alt={tr ? "AcerTech çalışma modeli" : "AcerTech working model"} fill sizes="(max-width: 900px) 100vw, 42vw" />
          </div>
          <div>
            <SectionTitle title={tr ? "Proje ve Mühendislik Yaklaşımı" : "Project and Engineering Approach"} />
            <p>{tr ? "İhtiyaç analizi, teknik planlama, tekliflendirme, uygulama, devreye alma ve destek adımları aynı teknik bütünlük içinde yürütülür." : "Needs analysis, technical planning, quotation, execution, commissioning and support are handled as one technical workflow."}</p>
          </div>
          <div>
            <SectionTitle title={tr ? "Servis Süreci" : "Service Process"} />
            <ol className="steps">
              {(tr
                ? ["Makine marka, model, şehir ve arıza bilgisi alınır.", "Fotoğraf, video ve hata kodları üzerinden ön değerlendirme yapılır.", "Uzaktan destek, yerinde servis veya çözüm ortağı yönlendirmesi planlanır.", "İşlem sonrası çalışma durumu ve bakım planı paylaşılır."]
                : ["Machine brand, model, city and issue details are collected.", "Photos, videos and error codes are reviewed.", "Remote support, on-site service or partner routing is planned.", "Operating condition and maintenance plan are shared after the work."]
              ).map((item) => (
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
              <Link key={item} href={pathFor(locale, "industries")}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container cta-inner">
          <h2>{tr ? "Makine, servis veya proje ihtiyacınızı birlikte değerlendirelim." : "Let us evaluate your machinery, service or project needs together."}</h2>
          <Link className="btn btn-primary" href={pathFor(locale, "contact")}>
            {tr ? "WhatsApp'tan Bilgi Al" : "Contact via WhatsApp"}
          </Link>
        </div>
      </section>
    </>
  );
}

export function StandardPage({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const tr = locale === "tr";
  const copy = pageCopy[locale][pageKey];
  const image = pageImages[pageKey];
  const isContact = pageKey === "contact";
  const isSell = pageKey === "sell";
  const isLegal = pageKey === "privacyNotice" || pageKey === "privacyPolicy" || pageKey === "cookiePolicy";

  return (
    <>
      <section className="page-hero">
        <div className={image ? "container page-hero-grid" : "container"}>
          <div>
            <p className="eyebrow">ACERTECH</p>
            <h1>{copy.title}</h1>
            <p>{copy.description}</p>
          </div>
          {image ? (
            <div className="page-hero-image">
              <Image src={image} alt={copy.title} fill priority sizes="(max-width: 900px) 100vw, 42vw" />
            </div>
          ) : null}
        </div>
      </section>

      <section className="section">
        <div className="container page-grid page-grid-single">
          <main className="prose-card card">
            <p>{copy.body}</p>

            {pageKey === "machines" ? (
              <>
                <h2>{tr ? "Makine Kategorileri" : "Machine Categories"}</h2>
                <MachineGrid locale={locale} />
                <h2>{tr ? "Teklif için gerekli bilgiler" : "Information Needed for a Quote"}</h2>
                <CategoryTags
                  locale={locale}
                  items={
                    tr
                      ? ["Makine türü ve tercih edilen marka", "İşlenecek malzeme ve ölçüler", "Hedef üretim kapasitesi", "Sıfır veya ikinci el tercihi", "Bütçe ve teslimat şehri"]
                      : ["Machine type and preferred brand", "Material and dimensions", "Target production capacity", "New or used preference", "Budget and delivery city"]
                  }
                />
              </>
            ) : null}

            {pageKey === "services" ? (
              <>
                <ServiceCards locale={locale} />
                <h2>{tr ? "Servis talebi oluştururken" : "When Creating a Service Request"}</h2>
                <p>{tr ? "Makine markası, model, üretim yılı, arıza açıklaması, varsa hata kodu, fotoğraf/video ve makinenin bulunduğu şehir bilgilerini paylaşmanız süreci hızlandırır." : "Sharing machine brand, model, year, fault description, error code if any, photos/videos and city speeds up the process."}</p>
              </>
            ) : null}

            {pageKey === "used" ? (
              <>
                <ImagePair images={["/images/used/used-01.jpeg", "/images/used/used-02.jpeg"]} alt={copy.title} />
                <h2>{tr ? "Makine almak isteyenler" : "For Buyers"}</h2>
                <p>{tr ? "Aradığınız makine ilanlarda bulunmuyorsa marka, model, üretim yılı, kapasite ve bütçe bilgilerinizi iletin. Uygun seçenekler bulunduğunda sizinle iletişime geçelim." : "If the machine you need is not listed, share brand, model, year, capacity and budget details. We will contact you when suitable options are found."}</p>
                <h2>{tr ? "Makinesini satmak isteyenler" : "For Sellers"}</h2>
                <p>{tr ? "Makinenizin marka-modeli, üretim yılı, çalışma durumu, bulunduğu şehir, talep edilen fiyat ile güncel fotoğraf ve videolarını paylaşın." : "Share the machine brand-model, year, condition, city, requested price and current photos or videos."}</p>
                <SahibindenButton label={tr ? "Sahibinden İlanlarını Gör" : "View Listings"} disabledLabel={tr ? "Yakında aktif" : "Coming soon"} />
              </>
            ) : null}

            {pageKey === "projects" ? (
              <>
                <ImagePair images={["/images/projects/project-01.jpeg", "/images/projects/project-02.jpeg"]} alt={copy.title} />
                <h2>{tr ? "Proje Hizmetleri" : "Project Services"}</h2>
                <CategoryTags locale={locale} items={projectServices[locale]} />
                <h2>{tr ? "Çalışma Modeli" : "Working Model"}</h2>
                <div className="wide-inline-image">
                  <Image src="/images/anasayfa-alti-acertech.png" alt={tr ? "AcerTech çalışma modeli" : "AcerTech working model"} fill sizes="(max-width: 760px) 100vw, 70vw" />
                </div>
                <p>{tr ? "İhtiyaç analizi → teknik planlama → tekliflendirme → uygulama → devreye alma ve destek." : "Needs analysis → technical planning → quotation → execution → commissioning and support."}</p>
              </>
            ) : null}

            {pageKey === "industries" ? <CategoryTags locale={locale} items={industries[locale]} /> : null}
            {pageKey === "about" ? <AboutDetails locale={locale} /> : null}
            {isLegal ? <LegalDetails locale={locale} pageKey={pageKey} /> : null}
            {isSell ? <WhatsAppForm locale={locale} kind="sell" /> : null}
            {isContact ? (
              <>
                <ContactBlock locale={locale} />
                <WhatsAppForm locale={locale} kind="quote" />
              </>
            ) : null}
          </main>
        </div>
      </section>
    </>
  );
}

function CategoryTags({ locale, items }: { locale: Locale; items: string[] }) {
  return (
    <div className="tag-grid inner-tags">
      {items.map((item) => (
        <Link key={item} href={pathFor(locale, "contact")}>
          {item}
        </Link>
      ))}
    </div>
  );
}

function AboutDetails({ locale }: { locale: Locale }) {
  const tr = locale === "tr";
  return (
    <>
      <h2>{tr ? "Yaklaşımımız" : "Our Approach"}</h2>
      <p>{tr ? "Ürün, malzeme, kapasite, çalışma alanı, enerji tüketimi, bakım ihtiyacı ve yatırım bütçesini birlikte değerlendiririz. Gereğinden düşük veya yüksek kapasitede yatırım yapılmasını önlemeye odaklanırız." : "We evaluate product, material, capacity, workspace, energy consumption, maintenance needs and investment budget together."}</p>
      <h2>{tr ? "Değerlerimiz" : "Values"}</h2>
      <CategoryTags locale={locale} items={tr ? ["Güven ve şeffaflık", "Teknik doğruluk", "Çözüm odaklılık", "Satış sonrası destek", "Sürekli gelişim"] : ["Trust and transparency", "Technical accuracy", "Solution focus", "After-sales support", "Continuous improvement"]} />
      <div className="brand-list">
        {brands.map((brand) => (
          <span key={brand}>{brand}</span>
        ))}
      </div>
    </>
  );
}

function LegalDetails({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const tr = locale === "tr";
  return (
    <>
      <h2>{tr ? "Veri sorumlusu" : "Data Controller"}</h2>
      <p>{siteConfig.owner} - {siteConfig.company}</p>
      <h2>{tr ? "İletişim" : "Contact"}</h2>
      <p>{siteConfig.email} - {siteConfig.phoneDisplay}</p>
      {pageKey === "cookiePolicy" ? <p>{tr ? "Çerez tercihleri site işleyişi ve ölçüm amaçlarıyla sınırlıdır." : "Cookie preferences are limited to site operation and measurement purposes."}</p> : null}
    </>
  );
}
