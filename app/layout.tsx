import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { GoogleTranslateUiCleanup } from "@/components/GoogleTranslateUiCleanup";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/siteConfig";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.slogan,
    template: `%s · ${siteConfig.slogan}`,
  },
  description:
    "PVC wall panels and marble-effect interior finishes in North Macedonia—premium materials at honest prices.",
  openGraph: {
    title: siteConfig.slogan,
    description:
      "PVC wall panels and marble-look décor for refined interiors. Serving North Macedonia.",
    type: "website",
    locale: "en",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <GoogleTranslateUiCleanup />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
