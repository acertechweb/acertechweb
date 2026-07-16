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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M2.9 21.1 4.2 16.5A9.1 9.1 0 1 1 7.7 20L2.9 21.1Z"
          fill="currentColor"
          opacity="0.16"
        />
        <path
          d="M12.1 3.4a8.4 8.4 0 0 0-7.2 12.7l-1 3.5 3.6-.9a8.4 8.4 0 1 0 4.6-15.3Zm4.9 11.9c-.2.6-1.1 1.1-1.6 1.2-.4.1-.9.2-3-.7-2.5-1.1-4.1-3.6-4.2-3.8-.1-.1-1-1.4-1-2.6s.6-1.9.9-2.1c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .5.4.2.5.7 1.7.7 1.8.1.1.1.3 0 .5-.1.2-.2.3-.3.5l-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2 .1.1 1.3 1 2.2 1.3.3.1.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.2.7-.1.3.1 1.8.9 2.1 1 .3.2.5.3.6.4.1.1.1.7-.1 1.2Z"
          fill="currentColor"
        />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}
