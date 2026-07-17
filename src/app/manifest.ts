import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ACERTECH Endüstriyel Makine Teknolojileri",
    short_name: "ACERTECH",
    description: "Endüstriyel makine, teknik servis, ikinci el makine ve proje danışmanlık çözümleri.",
    start_url: "/tr",
    scope: "/",
    display: "standalone",
    background_color: "#252a2e",
    theme_color: "#f26a21",
    lang: "tr",
    icons: [
      {
        src: "/icon",
        sizes: "64x64",
        type: "image/png"
      },
      {
        src: "/brand/acertech-logo-black.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any"
      }
    ]
  };
}
