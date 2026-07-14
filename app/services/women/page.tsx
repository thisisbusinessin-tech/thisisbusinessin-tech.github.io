import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";

export const metadata = createMetadata({
  title: "Women's Tailoring",
  description:
    "Custom stitching for women's garments — suits, sarees, kurtis, lehengas, and blouses with doorstep pickup and delivery.",
  path: "/services/women/"
});

export default function WomensServicesPage() {
  return (
    <section className="section-padding">
      <div className="container-site">
        <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 mb-6">
          <Link href="/" className="no-underline hover:underline">Home</Link>
          <span aria-hidden="true"> / </span>
          <Link href="/services/" className="no-underline hover:underline">Services</Link>
          <span aria-hidden="true"> / </span>
          <span>Women</span>
        </nav>

        <h1 className="mb-4">Women&apos;s tailoring</h1>
        <p className="text-lg text-neutral-600 max-w-2xl mb-10">
          Get women&apos;s garments custom-stitched to your measurements and style. From
          everyday kurtis to occasion lehengas, ApneTailor connects you with verified tailors
          who handle the stitching while you track progress from home.
        </p>

        <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl">
          {siteConfig.supportedGarments.women.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/services/women/${g.slug}/`}
                className="block p-6 border border-neutral-200 rounded-lg hover:border-brand-300 hover:bg-brand-50 no-underline transition-colors h-full"
              >
                <h2 className="text-xl mb-2">{g.name}</h2>
                <p className="text-sm text-neutral-600">{g.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
