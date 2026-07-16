"use client";

import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

export function SahibindenButton({ label, disabledLabel }: { label: string; disabledLabel: string }) {
  if (!siteConfig.sahibindenUrl) {
    return (
      <span className="btn btn-disabled" role="link" aria-disabled="true" title={disabledLabel}>
        {label} - {disabledLabel}
      </span>
    );
  }

  return (
    <a
      className="btn btn-ghost"
      href={siteConfig.sahibindenUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("sahibinden_click", "cta")}
    >
      {label}
    </a>
  );
}
