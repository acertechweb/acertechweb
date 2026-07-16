import type { Locale } from "@/lib/site-config";
import type { PageKey } from "@/i18n/routes";

export const machineCategories = {
  tr: [
    "Fiber lazer kesim makineleri",
    "CNC abkant presler",
    "CNC giyotin makaslar",
    "Silindir bükme makineleri",
    "Roll form makineleri",
    "Çapak alma makineleri",
    "Azot jeneratörleri",
    "Yüksek basınçlı kompresörler",
    "Gıda dolum makineleri",
    "Üretim hattı kurulumları"
  ],
  en: [
    "Fiber laser cutting machines",
    "CNC press brakes",
    "CNC guillotine shears",
    "Plate rolling machines",
    "Roll forming machines",
    "Deburring machines",
    "Nitrogen generators",
    "High-pressure compressors",
    "Food filling machines",
    "Production line installations"
  ]
} satisfies Record<Locale, string[]>;

export const industries = {
  tr: [
    "Metal işleme sanayisi",
    "Sac işleme sanayisi",
    "Makine imalatçıları",
    "Gıda üretim tesisleri",
    "Gıda dolum tesisleri",
    "Silo üreticileri",
    "Depolama sistemleri",
    "Taşıma sistemleri",
    "İzolasyon üreticileri",
    "Sandviç panel üreticileri",
    "Endüstriyel üretim tesisleri"
  ],
  en: [
    "Metalworking industry",
    "Sheet metal processing",
    "Machine manufacturers",
    "Food production plants",
    "Food filling facilities",
    "Silo manufacturers",
    "Storage systems",
    "Conveying systems",
    "Insulation manufacturers",
    "Sandwich panel manufacturers",
    "Industrial production plants"
  ]
} satisfies Record<Locale, string[]>;

export const services = {
  tr: [
    {
      title: "İkinci El Makine Çözümleri",
      text: "Makine alım ve satımı, ekspertiz, değerleme, takas, revizyon, taşıma, kurulum ve devreye alma hizmetleri."
    },
    {
      title: "Sıfır Makine ve Üretim Hatları",
      text: "İhtiyaca uygun makine seçimi, tedarik, üretim hattı planlaması, kurulum, devreye alma ve operatör eğitimi."
    },
    {
      title: "Teknik Servis ve Mühendislik",
      text: "Bakım, onarım, arıza tespiti, makine kurulumu, taşıma, modernizasyon, üretim optimizasyonu ve teknik destek."
    }
  ],
  en: [
    {
      title: "Used Machinery Solutions",
      text: "Machine sourcing and sales, inspection, valuation, trade-in, refurbishment, relocation, installation and commissioning services."
    },
    {
      title: "New Machinery and Production Lines",
      text: "Machinery selection, sourcing, production line planning, installation, commissioning and operator training."
    },
    {
      title: "Technical Service and Engineering",
      text: "Maintenance, repair, fault diagnosis, relocation, modernization, production optimization and technical support."
    }
  ]
} satisfies Record<Locale, Array<{ title: string; text: string }>>;

export const brands = ["Sinomak", "Plasarf", "Mekotek", "Durma", "Ermaksan", "MAC Italy", "Eurostamp"];

export const pageCopy: Record<Locale, Record<PageKey, { title: string; description: string; body: string }>> = {
  tr: {
    home: {
      title: "Metal İşleme Teknolojilerinde Güvenilir Çözüm Ortağınız",
      description: "Sıfır ve ikinci el metal işleme makineleri; proje, kurulum, teknik servis, bakım ve onarım çözümleri.",
      body: "Acertech, 2005'ten beri endüstriyel makine ihtiyaçlarını teknik analiz, doğru tedarik, kurulum ve satış sonrası destekle ele alır."
    },
    machines: {
      title: "Makineler ve Çözümler",
      description: "Metal işleme, sac işleme, gıda dolum ve üretim hattı ihtiyaçları için marka bağımsız makine çözümleri.",
      body: "Sıfır makine tedariki ve üretim hattı planlamasında teknik kapasite, işlenecek malzeme, hedef verimlilik ve servis ihtiyacı birlikte değerlendirilir."
    },
    services: {
      title: "Hizmetler",
      description: "Kurulum, devreye alma, teknik servis, bakım, modernizasyon ve proje mühendisliği hizmetleri.",
      body: "Saha analiziyle başlayan süreç; makine seçimi, lojistik, kurulum, devreye alma, operatör bilgilendirmesi ve teknik destekle tamamlanır."
    },
    used: {
      title: "İkinci El Makine Çözümleri",
      description: "İkinci el metal işleme makineleri için alım, satım, ekspertiz, değerleme, takas ve kurulum desteği.",
      body: "İkinci el makine sürecinde teknik durum, revizyon ihtiyacı, taşıma koşulları ve devreye alma planı birlikte ele alınır."
    },
    sell: {
      title: "Makinenizi Satın",
      description: "Satmak istediğiniz endüstriyel makine için Acertech'e teknik bilgi ve fotoğraf ile ön başvuru iletin.",
      body: "Makinenizi satmak istiyorsanız marka, model, yıl, çalışma durumu ve konum bilgilerini paylaşarak WhatsApp üzerinden değerlendirme süreci başlatabilirsiniz."
    },
    projects: {
      title: "Projeler",
      description: "Gerçek saha projeleri ve uygulama çalışmaları için hazırlanan altyapı.",
      body: "Gerçek saha projelerimiz ve uygulama çalışmalarımız bu alana eklenecektir."
    },
    industries: {
      title: "Hizmet Verdiğimiz Sektörler",
      description: "Metal işleme, gıda, silo, depolama, taşıma ve endüstriyel üretim tesisleri için teknik çözümler.",
      body: "Acertech, farklı sektörlerin üretim akışı, kapasite hedefi ve teknik servis ihtiyacına göre çözüm geliştirir."
    },
    about: {
      title: "Hakkımızda",
      description: "Acertech Makine Sanayi ve Ticaret hakkında kurumsal bilgiler.",
      body: "Acertech Makine Sanayi ve Ticaret, 2005 yılından bu yana endüstriyel makine, üretim teknolojileri ve teknik hizmetler alanında faaliyet göstermektedir. 25 yıllık sektör ve saha tecrübesini doğru makine seçimi, proje mühendisliği, kurulum, devreye alma, teknik servis ve satış sonrası destek hizmetleriyle birleştirir."
    },
    contact: {
      title: "İletişim",
      description: "Acertech telefon, WhatsApp, e-posta, çalışma saatleri ve teklif formu.",
      body: "Acertech'e telefon, WhatsApp veya e-posta ile ulaşabilir; teklif talebinizi hızlıca iletebilirsiniz."
    },
    privacyNotice: {
      title: "KVKK Aydınlatma Metni",
      description: "Acertech kişisel verilerin korunması aydınlatma metni.",
      body: "Bu metin; iletişim, teklif talebi ve hizmet süreçlerinde paylaşılan kişisel verilerin hangi amaçlarla işlenebileceğini açıklamak için hazırlanmıştır. Yayına alınmadan önce tam adres ve hukuki son kontrol tamamlanmalıdır."
    },
    privacyPolicy: {
      title: "Gizlilik Politikası",
      description: "Acertech web sitesi gizlilik politikasi.",
      body: "Bu web sitesi yalnızca iletişim ve teklif süreçleri için gerekli bilgileri kullanır. Formlar WhatsApp mesajı oluşturur; bu sitede veritabanı veya üyelik sistemi bulunmaz."
    },
    cookiePolicy: {
      title: "Çerez Politikası",
      description: "Acertech çerez kullanımı ve tercihleri.",
      body: "Zorunlu çerezler site işleyişi için kullanılır. Analitik çerezler yalnızca ziyaretçi onayı verilirse Google Analytics ölçümünü etkinleştirir."
    }
  },
  en: {
    home: {
      title: "Your Trusted Partner in Metalworking Technologies",
      description: "New and used metalworking machinery, project engineering, installation, technical service, maintenance and repair solutions.",
      body: "Acertech has supported industrial machinery needs since 2005 with technical analysis, suitable sourcing, installation and after-sales support."
    },
    machines: {
      title: "Machines and Solutions",
      description: "Brand-independent machinery solutions for metalworking, sheet metal processing, food filling and production lines.",
      body: "For new machinery and production lines, technical capacity, material profile, productivity goals and service needs are evaluated together."
    },
    services: {
      title: "Services",
      description: "Installation, commissioning, technical service, maintenance, modernization and project engineering services.",
      body: "The process starts with field analysis and continues through machine selection, logistics, installation, commissioning, operator guidance and support."
    },
    used: {
      title: "Used Machinery Solutions",
      description: "Used metalworking machinery sourcing, sales, inspection, valuation, trade-in and installation support.",
      body: "Used machinery work includes technical condition, refurbishment needs, relocation requirements and commissioning planning."
    },
    sell: {
      title: "Sell Your Machine",
      description: "Send Acertech preliminary information and photos for the industrial machine you want to sell.",
      body: "Share brand, model, year, operating condition and location to start a WhatsApp-based evaluation for your machine."
    },
    projects: {
      title: "Projects",
      description: "Infrastructure for verified field projects and application work.",
      body: "Our verified field projects and application work will be added to this area."
    },
    industries: {
      title: "Industries We Serve",
      description: "Technical solutions for metalworking, food, silo, storage, conveying and industrial production facilities.",
      body: "Acertech develops solutions around each industry's production flow, capacity target and technical support needs."
    },
    about: {
      title: "About",
      description: "Corporate information about Acertech Makine Sanayi ve Ticaret.",
      body: "Acertech Makine Sanayi ve Ticaret has operated in industrial machinery, production technologies and technical services since 2005. The company combines 25 years of sector and field experience with machinery selection, project engineering, installation, commissioning, technical service and after-sales support."
    },
    contact: {
      title: "Contact",
      description: "Acertech phone, WhatsApp, email, working hours and quote form.",
      body: "Contact Acertech by phone, WhatsApp or email and send your quotation request quickly."
    },
    privacyNotice: {
      title: "Privacy Notice",
      description: "Acertech personal data privacy notice.",
      body: "This notice explains how personal data shared during contact, quotation and service processes may be processed. Full address and legal review should be completed before publication."
    },
    privacyPolicy: {
      title: "Privacy Policy",
      description: "Acertech website privacy policy.",
      body: "This website uses only the information needed for contact and quotation workflows. Forms create WhatsApp messages; there is no database or membership system on this site."
    },
    cookiePolicy: {
      title: "Cookie Policy",
      description: "Acertech cookie usage and preferences.",
      body: "Required cookies are used for site operation. Analytics cookies enable Google Analytics measurement only after visitor consent."
    }
  }
};
