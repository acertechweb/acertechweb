# ACERTECH Kurumsal Web Sitesi

ACERTECH için Next.js App Router, TypeScript ve Tailwind CSS ile hazırlanmış iki dilli kurumsal web sitesidir. Site e-ticaret, üyelik, ödeme veya veritabanı içermez; kurumsal tanıtım, hizmet anlatımı ve WhatsApp üzerinden teklif akışı için tasarlanmıştır.

## Teknolojiler

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- Next Metadata API

## Kurulum

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Environment Variables

`.env.example` dosyasındaki değişkenler kullanılır.

- `NEXT_PUBLIC_SITE_URL`: canonical domain
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: GA4 ölçüm kimliği
- `NEXT_PUBLIC_SAHIBINDEN_URL`: boşken buton pasif kalır, dolunca yeni sekmede açılır
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: boşken verification meta üretilmez

## İçerik ve Görseller

- Logo: `public/brand/acertech-logo.png`
- Görsel alanları: `public/images`
- Çeviri ve rota altyapısı: `src/i18n`
- Site ayarları: `src/lib/site-config.ts`
- Makine, hizmet, sektör ve marka içerikleri: `src/data/content.ts`
- Gerçek proje verileri: `src/data/projects.ts`

Yeni gerçek proje ekleneceğinde yalnızca `src/data/projects.ts` içine doğrulanmış bilgiler ve görsel yolu eklenmelidir. Sahte müşteri, şehir, sayı, yorum veya logo eklenmemelidir.

## GA4 ve Çerezler

Google Analytics yalnızca ziyaretçi analitik çerezleri kabul ederse yüklenir. Analytics olaylarında kişisel veri gönderilmez.

## Deployment

Vercel üzerinde standart Next.js deployment yapısı hedeflenmiştir. `main` branch production, diğer branch'ler preview deployment olarak kullanılmalıdır. Yayına alma adımları için `DEPLOYMENT.md` dosyasına bakın.
