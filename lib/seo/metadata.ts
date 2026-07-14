import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";

export interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

export function createMetadata({
  title,
  description,
  path,
  noindex = false,
  ogType = "website",
  publishedTime,
  modifiedTime
}: PageMetadataInput): Metadata {
  const canonical = `${siteConfig.domain}${path}`;

  return {
    title,
    description,
    alternates: { canonical },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: ogType,
      title,
      description,
      url: canonical,
      siteName: siteConfig.brand.name,
      locale: "en_IN"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    },
    ...(ogType === "article" && publishedTime
      ? {
          other: {
            ...(publishedTime ? { "article:published_time": publishedTime } : {}),
            ...(modifiedTime ? { "article:modified_time": modifiedTime } : {})
          }
        }
      : {})
  };
}
