"use client";

import type { Locale } from "@/lib/site-config";
import { whatsappLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export function WhatsAppButton({ locale }: { locale: Locale }) {
  return (
    <a
      className="floating-whatsapp"
      href={whatsappLink(locale)}
      aria-label="WhatsApp"
      onClick={() => trackEvent("whatsapp_click", "floating_button")}
    >
      WhatsApp
    </a>
  );
}
