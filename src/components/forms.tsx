"use client";

import { FormEvent, useState } from "react";
import type { Locale } from "@/lib/site-config";
import { whatsappLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

type Kind = "quote" | "sell";

export function WhatsAppForm({ locale, kind }: { locale: Locale; kind: Kind }) {
  const tr = locale === "tr";
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const detail = String(data.get("detail") || "").trim();
    const consent = data.get("consent");

    if (!name || !phone || !detail || !consent) {
      setError(tr ? "Lütfen zorunlu alanları doldurun ve KVKK kutusunu işaretleyin." : "Please complete required fields and confirm the privacy notice.");
      return;
    }

    const subject =
      kind === "sell"
        ? tr
          ? "Makine satış değerlendirme talebi"
          : "Machine sale evaluation request"
        : tr
          ? "Teklif talebi"
          : "Quotation request";
    const message = `${subject}\nAd: ${name}\nTelefon: ${phone}\nDetay: ${detail}`;
    trackEvent("form_whatsapp", kind);
    window.open(whatsappLink(locale, message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="form-card" onSubmit={submit} noValidate>
      <label>
        {tr ? "Ad Soyad" : "Full Name"}
        <input name="name" autoComplete="name" required />
      </label>
      <label>
        {tr ? "Telefon" : "Phone"}
        <input name="phone" autoComplete="tel" required />
      </label>
      <label>
        {kind === "sell" ? (tr ? "Makine bilgileri" : "Machine details") : tr ? "İhtiyaç özeti" : "Request summary"}
        <textarea name="detail" rows={5} required />
      </label>
      <label className="check">
        <input name="consent" type="checkbox" required />
        <span>{tr ? "KVKK aydınlatma metnini okudum." : "I have read the privacy notice."}</span>
      </label>
      {error ? <p className="form-error">{error}</p> : null}
      <button className="btn btn-primary" type="submit">
        {tr ? "WhatsApp ile Gönder" : "Send via WhatsApp"}
      </button>
    </form>
  );
}
