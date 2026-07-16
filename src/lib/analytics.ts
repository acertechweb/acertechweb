"use client";

type EventName = "phone_click" | "email_click" | "whatsapp_click" | "sahibinden_click" | "form_whatsapp";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: EventName, location: string) {
  window.gtag?.("event", name, { event_location: location });
}
