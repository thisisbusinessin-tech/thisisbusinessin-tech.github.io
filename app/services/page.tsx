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
        <p className="text-lg text-neutral-600 max-w-2xl mb-12">
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
                    className="block p-5 border border-neutral-200 rounded-lg hover:border-brand-300 hover:bg-brand-50 no-underline transition-colors"
                  >
                    <span className="font-medium text-brand-800">{g.name}</span>
                    <p className="text-sm text-neutral-600 mt-1">{g.description}</p>
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
                    className="block p-5 border border-neutral-200 rounded-lg hover:border-brand-300 hover:bg-brand-50 no-underline transition-colors"
                  >
                    <span className="font-medium text-brand-800">{g.name}</span>
                    <p className="text-sm text-neutral-600 mt-1">{g.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center p-8 bg-brand-50 rounded-xl">
          <p className="text-neutral-600 mb-4">
            Alterations are not currently offered as a supported service.
          </p>
          <AppDownloadButton />
        </div>
      </div>
    </section>
  );
}
