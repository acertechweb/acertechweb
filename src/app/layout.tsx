import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "ACERTECH",
  description: "Acertech Makine Sanayi ve Ticaret",
  applicationName: "ACERTECH",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon",
    shortcut: "/icon",
    apple: "/icon"
  },
  appleWebApp: {
    capable: true,
    title: "ACERTECH",
    statusBarStyle: "black-translucent"
  },
  verification: siteConfig.googleVerification ? { google: siteConfig.googleVerification } : undefined
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
