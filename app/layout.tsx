import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlobalJsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.defaultMetadata.defaultTitle,
    template: siteConfig.defaultMetadata.titleTemplate
  },
  description: siteConfig.defaultMetadata.defaultDescription,
  robots: { index: true, follow: true },
  alternates: {
    types: {
      "application/rss+xml": `${siteConfig.domain}/feed.xml`
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <GlobalJsonLd />
      </body>
    </html>
  );
}
