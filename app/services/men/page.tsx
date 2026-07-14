import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";

export const metadata = createMetadata({
  title: "Men's Tailoring",
  description:
    "Custom stitching for men's garments — kurtas, formal suits, shirts, sherwanis, and pants with doorstep pickup and delivery.",
  path: "/services/men/"
});

export default function MensServicesPage() {
  return (
    <section className="section-padding">
      <div className="container-site">
        <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 mb-6">
          <Link href="/" className="no-underline hover:underline">Home</Link>
          <span aria-hidden="true"> / </span>
          <Link href="/services/" className="no-underline hover:underline">Services</Link>
          <span aria-hidden="true"> / </span>
          <span>Men</span>
        </nav>

        <h1 className="mb-4">Men&apos;s tailoring</h1>
        <p className="text-lg text-neutral-600 max-w-2xl mb-10">
          Get men&apos;s garments custom-stitched to your measurements. From everyday shirts
          and kurtas to formal suits and wedding sherwanis, ApneTailor connects you with
          verified tailors for professional stitching.
        </p>

        <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl">
          {siteConfig.supportedGarments.men.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/services/men/${g.slug}/`}
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
