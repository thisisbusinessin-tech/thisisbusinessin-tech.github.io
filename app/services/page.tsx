import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";
import { AppDownloadButton } from "@/components/ui/AppDownloadButton";

export const metadata = createMetadata({
  title: "Tailoring Services",
  description:
    "Explore ApneTailor's supported garment categories for custom stitching — women's and men's tailoring with doorstep pickup and delivery.",
  path: "/services/"
});

export default function ServicesPage() {
  return (
    <section className="section-padding">
      <div className="container-site">
        <h1 className="mb-4">Tailoring services</h1>
        <p className="page-intro max-w-2xl mb-12">
          ApneTailor supports custom stitching for a range of women&apos;s and men&apos;s
          garments. Select a category to learn what to prepare and how the process works.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl mb-6">
              <Link href="/services/women/" className="no-underline hover:underline">
                Women&apos;s tailoring
              </Link>
            </h2>
            <ul className="space-y-3">
              {siteConfig.supportedGarments.women.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/services/women/${g.slug}/`}
                    className="surface-panel block p-5 no-underline transition-colors"
                  >
                    <span className="font-semibold text-brand-800">{g.name}</span>
                    <p className="mt-2 leading-7 text-neutral-600">{g.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl mb-6">
              <Link href="/services/men/" className="no-underline hover:underline">
                Men&apos;s tailoring
              </Link>
            </h2>
            <ul className="space-y-3">
              {siteConfig.supportedGarments.men.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/services/men/${g.slug}/`}
                    className="surface-panel block p-5 no-underline transition-colors"
                  >
                    <span className="font-semibold text-brand-800">{g.name}</span>
                    <p className="mt-2 leading-7 text-neutral-600">{g.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="surface-panel mt-16 p-8 text-center">
          <p className="text-neutral-600 mb-4 leading-7">
            Alterations are not currently offered as a supported service.
          </p>
          <AppDownloadButton />
        </div>
      </div>
    </section>
  );
}
