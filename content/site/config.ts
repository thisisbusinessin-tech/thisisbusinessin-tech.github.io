export const siteConfig = {
  brand: {
    name: "ApneTailor",
    tagline: "Chahiye darji? Done ji.",
    description:
      "ApneTailor connects customers with nearby verified tailors for custom stitching with doorstep pickup and delivery, progress visibility, and transparent pricing."
  },
  domain: "https://apnetailor.com",
  supportEmail: "support@apnetailor.com",
  founders: [
    { name: "Pushpit Trehan", role: "Co-founder" },
    { name: "Yugank Trehan", role: "Co-founder" }
  ],
  appDownload: {
    url: null as string | null,
    status: "placeholder" as "placeholder" | "live",
    label: "Download the ApneTailor App",
    placeholderMessage:
      "The app download link will be available here once the Google Play Store listing is finalized."
  },
  expansionWording: "ApneTailor is expanding to more cities across India.",
  legalRoutes: {
    privacyPolicy: "/privacy-policy/",
    terms: "/terms/",
    dataCompliance: "/data-compliance/",
    deleteAccounts: "/delete-accounts/"
  },
  supportedGarments: {
    women: [
      { slug: "suit", name: "Suit", description: "Custom-stitched suits tailored to your measurements and style." },
      { slug: "saree", name: "Saree", description: "Saree-related tailoring including blouse pairing and finishing." },
      { slug: "kurti", name: "Kurti", description: "Everyday and occasion kurtis stitched to your fit and design." },
      { slug: "lehenga", name: "Lehenga", description: "Custom lehengas for weddings, festivals, and special occasions." },
      { slug: "blouse", name: "Blouse", description: "Designer and everyday blouses stitched from your measurements." }
    ],
    men: [
      { slug: "kurta", name: "Kurta", description: "Custom kurtas for daily wear, festivals, and celebrations." },
      { slug: "formal-suit", name: "Formal Suit", description: "Professional formal suits tailored to your measurements." },
      { slug: "shirt", name: "Shirt", description: "Custom shirts for office wear and everyday use." },
      { slug: "sherwani", name: "Sherwani", description: "Sherwanis for weddings and formal occasions." },
      { slug: "pant", name: "Pant", description: "Custom trousers and pants tailored to your fit." }
    ]
  },
  defaultMetadata: {
    titleTemplate: "%s | ApneTailor",
    defaultTitle: "ApneTailor — Custom Tailoring at Your Doorstep",
    defaultDescription:
      "Get clothes custom-stitched from home. Connect with verified local tailors, track your order, and enjoy doorstep pickup and delivery with ApneTailor."
  }
} as const;

export type SiteConfig = typeof siteConfig;
