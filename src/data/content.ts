import type { Locale } from "@/lib/site-config";
import type { PageKey } from "@/i18n/routes";

export const machineItems = [
  { tr: "CNC Lazer Kesim", en: "CNC Laser Cutting", image: "/images/machines/cnc-lazer-kesim.png" },
  { tr: "Hidrolik Pres", en: "Hydraulic Press", image: "/images/machines/hidrolik-pres.png" },
  { tr: "Abkant Pres", en: "Press Brake", image: "/images/machines/abkant-pres.png" },
  { tr: "Profil ve Boru Bükme", en: "Profile and Pipe Bending", image: "/images/machines/profil-boru-bukme.png" },
  { tr: "Giyotin Makas", en: "Guillotine Shear", image: "/images/machines/giyotin-makas.png" },
  { tr: "Kaynak Makineleri", en: "Welding Machines", image: "/images/machines/kaynak-makineleri.png" },
  { tr: "CNC Torna", en: "CNC Lathe", image: "/images/machines/cnc-torna.png" },
  { tr: "Kompresör", en: "Compressor", image: "/images/machines/kompresor.png" },
  { tr: "CNC İşleme Merkezi", en: "CNC Machining Center", image: "/images/machines/cnc-isleme-merkezi.png" },
  { tr: "Sac İşleme Makineleri", en: "Sheet Metal Machines", image: "/images/machines/sac-isleme-makineleri.png" },
  { tr: "Plazma Kesim", en: "Plasma Cutting", image: "/images/machines/plazma-kesim.png" },
  { tr: "Talaşlı İmalat Makineleri", en: "Machining Equipment", image: "/images/machines/talasli-imalat.png" },
  { tr: "Şerit Testere", en: "Band Saw", image: "/images/machines/serit-testere.png" },
  { tr: "Diğer Sanayi Makineleri", en: "Other Industrial Machines", image: "/images/machines/diger-sanayi-makineleri.png" }
] as const;

export const machineCategories = {
  tr: machineItems.map((item) => item.tr),
  en: machineItems.map((item) => item.en)
} satisfies Record<Locale, string[]>;

export const industries = {
  tr: [
    "Metal işleme ve sac şekillendirme",
    "Çelik konstrüksiyon ve yapı sistemleri",
    "Makine imalatı",
    "Otomotiv ve yan sanayi",
    "Tarım makineleri",
    "Metal mobilya ve dekorasyon",
    "Enerji, altyapı ve pano üretimi",
    "Gıda ve paslanmaz ekipman",
    "Savunma ve hassas üretim"
  ],
  en: [
    "Metalworking and sheet forming",
    "Steel construction and building systems",
    "Machine manufacturing",
    "Automotive and supplier industry",
    "Agricultural machinery",
    "Metal furniture and decoration",
    "Energy, infrastructure and panel production",
    "Food and stainless equipment",
    "Defense and precision manufacturing"
  ]
} satisfies Record<Locale, string[]>;

export const services = {
  tr: [
    {
      title: "Kurulum ve Devreye Alma",
      text: "Yeni veya ikinci el makinelerin yerleşimi, bağlantı kontrolleri, ilk çalıştırma testleri ve üretime hazırlık süreci.",
      image: "/images/service/service-cover.png"
    },
    {
      title: "Arıza Tespiti ve Periyodik Bakım",
      text: "Mekanik, elektriksel, elektronik ve yazılımsal problemlerin tespiti; çalışma süresine göre bakım planlaması.",
      image: "/images/service/service-01.jpeg"
    },
    {
      title: "Söküm, Taşıma ve Yeniden Kurulum",
      text: "Fabrika içi yer değişikliği veya farklı şehre taşınacak makinelerin teknik süreçlerinin koordine edilmesi.",
      image: "/images/service/service-02.jpeg"
    }
  ],
  en: [
    {
      title: "Installation and Commissioning",
      text: "Positioning, connection checks, first-run tests and production readiness for new or used machines.",
      image: "/images/service/service-cover.png"
    },
    {
      title: "Fault Diagnosis and Maintenance",
      text: "Diagnosis of mechanical, electrical, electronic and software issues with usage-based maintenance planning.",
      image: "/images/service/service-01.jpeg"
    },
    {
      title: "Dismantling, Relocation and Reinstallation",
      text: "Coordination of technical workflows for in-factory moves or machines relocated to another city.",
      image: "/images/service/service-02.jpeg"
    }
  ]
} satisfies Record<Locale, Array<{ title: string; text: string; image: string }>>;

export const projectServices = {
  tr: [
    "Yeni üretim tesisi ve makine parkuru planlaması",
    "Kapasite artırımı ve darboğaz analizi",
    "Fabrika içi makine yerleşimi",
    "Makine yenileme ve modernizasyon",
    "Özel makine, aparat ve yardımcı ekipman çözümleri",
    "Kurulum ve devreye alma koordinasyonu"
  ],
  en: [
    "New production facility and machine park planning",
    "Capacity increase and bottleneck analysis",
    "In-factory machine layout",
    "Machine renewal and modernization",
    "Custom machine, fixture and auxiliary equipment solutions",
    "Installation and commissioning coordination"
  ]
} satisfies Record<Locale, string[]>;

export const brands = ["Sinomak", "Plasarf", "Mekotek", "Durma", "Ermaksan", "MAC Italy", "Eurostamp"];

export const pageCopy: Record<Locale, Record<PageKey, { title: string; description: string; body: string }>> = {
  tr: {
    home: {
      title: "Endüstriyel Makine Teknolojilerinde Güvenilir Çözüm Ortağınız",
      description: "Endüstriyel makine yatırımlarında teknik, güvenilir ve sonuç odaklı çözümler.",
      body: "AcerTech; endüstriyel makine tedariki, teknik servis, kurulum, ikinci el makine ve proje desteğiyle işletmelerin üretim süreçlerine değer katar. İhtiyacınızı analiz eder, doğru kapasiteyi belirler ve yatırım sürecini teknik açıdan destekler."
    },
    machines: {
      title: "Sanayi ve Metal İşleme Makineleri",
      description: "Üretim kapasitenize ve bütçenize uygun sanayi makinelerini birlikte belirleyelim.",
      body: "AcerTech; metal işleme, talaşlı imalat ve genel sanayi makinelerinde teknik bilgilendirme, ürün karşılaştırma, tekliflendirme, kurulum ve devreye alma desteği sunar."
    },
    services: {
      title: "Endüstriyel Makine Teknik Servis ve Destek Hizmetleri",
      description: "Makine kurulumu, arıza tespiti, bakım, taşıma ve devreye alma hizmetleri.",
      body: "Plansız makine duruşları üretim kaybı, teslimat gecikmesi ve ek maliyet oluşturur. AcerTech, makinelerin güvenli ve verimli çalışması için kurulumdan periyodik bakıma kadar farklı aşamalarda teknik destek sağlar."
    },
    used: {
      title: "İkinci El Endüstriyel Makineler",
      description: "Güncel ikinci el makine ilanları ve talebe özel makine araştırması.",
      body: "Satılık ikinci el makinelerin güncel fotoğraf, teknik bilgi ve fiyatları için AcerTech ile doğrudan iletişime geçebilirsiniz. Aradığınız makine ilanlarda bulunmuyorsa marka, model, üretim yılı, kapasite ve bütçe bilgilerinizi iletin."
    },
    sell: {
      title: "Makinenizi Satın",
      description: "Satmak istediğiniz endüstriyel makine için AcerTech'e teknik bilgi ve fotoğraf ile ön başvuru iletin.",
      body: "Makinenizin marka-modeli, üretim yılı, çalışma durumu, bulunduğu şehir, talep edilen fiyat ile güncel fotoğraf ve videolarını paylaşın. Teknik değerlendirme sonrası uygun alıcı veya satış kanalı için yönlendirme yapılır."
    },
    projects: {
      title: "Endüstriyel Proje ve Mühendislik",
      description: "Yeni yatırım, kapasite artırımı ve üretim hattı geliştirme desteği.",
      body: "Her işletmenin ürünü, kapasitesi ve çalışma alanı farklıdır. AcerTech, makine seçimini proje bütünlüğü içinde değerlendirerek uygulanabilir ve verimli çözümler geliştirir."
    },
    industries: {
      title: "Sektörel Endüstriyel Makine Çözümleri",
      description: "Farklı üretim alanlarına uygun makine ve teknik çözüm desteği.",
      body: "Makine ve proje çözümlerimizi sektörün üretim standardı, kapasite ihtiyacı, malzeme türü ve hassasiyet beklentisine göre şekillendiriyoruz."
    },
    about: {
      title: "AcerTech Hakkında",
      description: "Makine satışından öte, üretim odaklı teknik çözüm ortaklığı.",
      body: "AcerTech Endüstriyel Makine Teknolojileri; sanayi makineleri, teknik servis, ikinci el makine ve proje çözümleri alanlarında faaliyet gösterir. Amacımız yalnızca makine sunmak değil, işletmenin uzun vadeli üretim hedeflerine uygun çözümü belirlemektir."
    },
    contact: {
      title: "AcerTech İletişim",
      description: "Makine, servis ve proje talepleriniz için doğrudan iletişim.",
      body: "Makine yatırımı, teknik servis, ikinci el makine veya proje ihtiyacınız için formu doldurun ya da WhatsApp üzerinden bize ulaşın."
    },
    privacyNotice: {
      title: "KVKK Aydınlatma Metni",
      description: "AcerTech kişisel verilerin korunması aydınlatma metni.",
      body: "Bu metin; iletişim, teklif talebi ve hizmet süreçlerinde paylaşılan kişisel verilerin hangi amaçlarla işlenebileceğini açıklamak için hazırlanmıştır."
    },
    privacyPolicy: {
      title: "Gizlilik Politikası",
      description: "AcerTech web sitesi gizlilik politikası.",
      body: "Bu web sitesi yalnızca iletişim ve teklif süreçleri için gerekli bilgileri kullanır. Formlar WhatsApp mesajı oluşturur; bu sitede veritabanı veya üyelik sistemi bulunmaz."
    },
    cookiePolicy: {
      title: "Çerez Politikası",
      description: "AcerTech çerez kullanımı ve tercihleri.",
      body: "Zorunlu çerezler site işleyişi için kullanılır. Analitik çerezler yalnızca ziyaretçi onayı verilirse ölçümü etkinleştirir."
    }
  },
  en: {
    home: {
      title: "Your Trusted Partner in Industrial Machinery Technologies",
      description: "Technical, reliable and result-oriented solutions for industrial machinery investments.",
      body: "AcerTech adds value to production workflows with industrial machinery sourcing, technical service, installation, used machinery and project support."
    },
    machines: {
      title: "Industrial and Metalworking Machinery",
      description: "Let us define the right industrial machines for your capacity and budget.",
      body: "AcerTech provides technical guidance, product comparison, quotation, installation and commissioning support for metalworking, machining and general industrial machinery."
    },
    services: {
      title: "Industrial Machine Technical Service and Support",
      description: "Machine installation, fault diagnosis, maintenance, relocation and commissioning services.",
      body: "Unplanned machine downtime creates production loss and extra cost. AcerTech supports safe and efficient machine operation from installation to periodic maintenance."
    },
    used: {
      title: "Used Industrial Machinery",
      description: "Current used machine listings and request-based machine search.",
      body: "Contact AcerTech for current photos, technical information and prices of used machinery. If the machine you need is not listed, share brand, model, year, capacity and budget information."
    },
    sell: {
      title: "Sell Your Machine",
      description: "Send AcerTech technical information and photos for the industrial machine you want to sell.",
      body: "Share brand, model, production year, operating condition, location, requested price and current photos or videos. After technical review, we guide the suitable buyer or sales channel."
    },
    projects: {
      title: "Industrial Project and Engineering",
      description: "Support for new investments, capacity increases and production line development.",
      body: "Every operation has different products, capacities and working areas. AcerTech evaluates machinery selection within the full project context."
    },
    industries: {
      title: "Sector-Focused Industrial Machinery Solutions",
      description: "Machine and technical solution support for different production fields.",
      body: "We shape machinery and project solutions around sector standards, capacity needs, material types and precision expectations."
    },
    about: {
      title: "About AcerTech",
      description: "Production-focused technical solution partnership beyond machinery sales.",
      body: "AcerTech Industrial Machinery Technologies operates in industrial machinery, technical service, used machinery and project solutions. Our aim is to define the right solution for long-term production goals."
    },
    contact: {
      title: "AcerTech Contact",
      description: "Direct contact for machinery, service and project requests.",
      body: "For machinery investment, technical service, used machinery or project needs, fill out the form or reach us via WhatsApp."
    },
    privacyNotice: {
      title: "Privacy Notice",
      description: "AcerTech personal data privacy notice.",
      body: "This notice explains how personal data shared during contact, quotation and service processes may be processed."
    },
    privacyPolicy: {
      title: "Privacy Policy",
      description: "AcerTech website privacy policy.",
      body: "This website uses only information needed for contact and quotation workflows. Forms create WhatsApp messages; there is no database or membership system."
    },
    cookiePolicy: {
      title: "Cookie Policy",
      description: "AcerTech cookie usage and preferences.",
      body: "Required cookies are used for site operation. Analytics cookies enable measurement only after visitor consent."
    }
  }
};
