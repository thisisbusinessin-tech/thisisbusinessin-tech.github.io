import { siteConfig } from "@/lib/config/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brand.name,
    url: siteConfig.domain,
    description: siteConfig.brand.description,
    email: siteConfig.supportEmail,
    founder: siteConfig.founders.map((f) => ({
      "@type": "Person",
      name: f.name
    }))
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brand.name,
    url: siteConfig.domain,
    description: siteConfig.brand.description
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function articleSchema({
  title,
  description,
  url,
  publishedAt,
  updatedAt
}: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  updatedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: {
      "@type": "Organization",
      name: "ApneTailor Editorial Team"
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.brand.name,
      url: siteConfig.domain
    }
  };
}

export function serviceSchema({
  name,
  description,
  url
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: siteConfig.brand.name,
      url: siteConfig.domain
    },
    areaServed: {
      "@type": "Country",
      name: "India"
    }
  };
}
