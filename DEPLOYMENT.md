# ACERTECH Deployment Rehberi

Bu proje Vercel üzerinde standart Next.js projesi olarak yayınlanmak üzere hazırlanmıştır.

## GitHub ve Vercel

1. Projeyi GitHub repository'sine bağlayın.
2. Vercel'de yeni proje oluşturup repository'yi seçin.
3. Framework preset olarak Next.js kullanılmalıdır.
4. `main` branch production deployment olarak kalmalıdır.
5. Diğer branch'ler preview deployment üretmelidir.

## Environment Variables

Vercel Project Settings > Environment Variables alanına `.env.example` dosyasındaki değerleri ekleyin.

`NEXT_PUBLIC_SAHIBINDEN_URL` boş bırakılırsa mağaza butonu pasif görünür. URL tanımlandığında buton otomatik aktif olur.

## Domain ve DNS

Canonical domain:

```text
https://acertech.com.tr
```

`www.acertech.com.tr` ana domaine yönlendirilmelidir.

Natro üzerinde e-posta hizmeti korunacağı için şu kayıtlara dokunulmamalıdır:

- MX
- SPF
- DKIM
- DMARC
- E-posta doğrulama kayıtları

Web sitesi için yalnızca Vercel'in göstereceği A ve CNAME kayıtları düzenlenmelidir.

## Yeni Değişiklik Yayınlama

1. `git status` kontrol edilir.
2. `npm run lint` çalıştırılır.
3. `npm run build` çalıştırılır.
4. Hatalar düzeltilir.
5. Anlamlı commit oluşturulur.
6. Kullanıcı açıkça "yayına al" dediyse `main` branch'e push edilir.
7. Vercel deployment durumu kontrol edilir.

## Geri Alma

Vercel dashboard üzerinde önceki başarılı deployment seçilerek rollback yapılabilir. Git tarafında ayrıca düzeltme commit'i hazırlanmalıdır.

## Build Hatası

Build hatasında önce TypeScript ve ESLint çıktısı incelenmeli, ardından dependency veya environment variable eksikleri kontrol edilmelidir.
