import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { SiteHeader } from "@/components/layout/SiteHeader";
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
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  openGraph: {
    title: siteConfig.defaultMetadata.defaultTitle,
    description: siteConfig.defaultMetadata.defaultDescription,
    url: siteConfig.domain,
    siteName: siteConfig.brand.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: siteConfig.socialPreview.path,
        width: 1200,
        height: 630,
        alt: siteConfig.socialPreview.alt
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultMetadata.defaultTitle,
    description: siteConfig.defaultMetadata.defaultDescription,
    images: [siteConfig.socialPreview.path]
  },
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
      <body className="site-shell">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="site-main">
          {children}
        </main>
        <Footer />
        <GlobalJsonLd />
      </body>
    </html>
  );
}
