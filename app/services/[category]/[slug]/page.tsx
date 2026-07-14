import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/config/site";
import { AppDownloadButton } from "@/components/ui/AppDownloadButton";

interface GarmentPageProps {
  params: Promise<{ category: string; slug: string }>;
}

function findGarment(category: string, slug: string) {
  if (category === "women") {
    return siteConfig.supportedGarments.women.find((g) => g.slug === slug);
  }
  if (category === "men") {
    return siteConfig.supportedGarments.men.find((g) => g.slug === slug);
  }
  return undefined;
}

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  for (const g of siteConfig.supportedGarments.women) {
    params.push({ category: "women", slug: g.slug });
  }
  for (const g of siteConfig.supportedGarments.men) {
    params.push({ category: "men", slug: g.slug });
  }
  return params;
}

export async function generateMetadata({ params }: GarmentPageProps) {
  const { category, slug } = await params;
  const garment = findGarment(category, slug);
  if (!garment) return {};

  const categoryLabel = category === "women" ? "Women's" : "Men's";
  return createMetadata({
    title: `${garment.name} Stitching — ${categoryLabel} Tailoring`,
    description: `${garment.description} Get ${garment.name.toLowerCase()} custom-stitched through ApneTailor with doorstep pickup and delivery.`,
    path: `/services/${category}/${slug}/`
  });
}

const garmentGuidance: Record<string, { prepare: string[]; measurements: string; fabric: string }> = {
  suit: {
    prepare: ["Design references or style preferences", "Measurement details for top and bottom", "Fabric or fabric type preference", "Lining and bottom requirements"],
    measurements: "Provide bust, waist, hip, shoulder, sleeve length, and garment length measurements.",
    fabric: "Suits can be stitched from your fabric or tailor-sourced fabric depending on your preference."
  },
  saree: {
    prepare: ["Blouse design references if needed", "Saree draping style preference", "Any specific finishing requirements"],
    measurements: "For saree-related tailoring, blouse measurements are typically required.",
    fabric: "You may provide your own saree fabric or discuss fabric needs with the tailor."
  },
  kurti: {
    prepare: ["Style references (neckline, sleeve type, length)", "Measurement details", "Fabric or fabric type"],
    measurements: "Provide bust, waist, shoulder, sleeve length, and kurti length.",
    fabric: "Kurtis work well with cotton, rayon, georgette, and other common fabrics."
  },
  lehenga: {
    prepare: ["Design references with embroidery details", "Blouse and skirt style preferences", "Occasion and timeline details"],
    measurements: "Provide bust, waist, hip, lehenga length, and blouse measurements.",
    fabric: "Lehengas often require specific fabrics — discuss your preferences with the tailor."
  },
  blouse: {
    prepare: ["Design references (neckline, back design, sleeve type)", "Padded or non-padded preference", "Measurement details or sample blouse"],
    measurements: "Provide bust, waist, shoulder, armhole, sleeve length, blouse length, and neck depth.",
    fabric: "Blouses are commonly stitched from customer-provided fabric matched to a saree."
  },
  kurta: {
    prepare: ["Style references (collar, placket, length)", "Measurement details", "Fabric preference"],
    measurements: "Provide chest, waist, shoulder, sleeve length, and kurta length.",
    fabric: "Kurtas work with cotton, linen, silk, and blended fabrics."
  },
  "formal-suit": {
    prepare: ["Style references for jacket and trousers", "Measurement details", "Fabric preference", "Lining requirements"],
    measurements: "Provide chest, waist, shoulder, sleeve length, jacket length, trouser waist, inseam, and outseam.",
    fabric: "Formal suits typically require structured fabrics like wool blends or premium cotton."
  },
  shirt: {
    prepare: ["Collar style preference", "Sleeve length (full or half)", "Fit preference (slim or regular)"],
    measurements: "Provide chest, waist, shoulder, sleeve length, shirt length, and neck size.",
    fabric: "Shirts are commonly stitched in cotton, linen, or cotton blends."
  },
  sherwani: {
    prepare: ["Design references with embroidery and collar details", "Occasion and timeline", "Measurement details"],
    measurements: "Provide chest, waist, shoulder, sleeve length, and sherwani length.",
    fabric: "Sherwanis typically use silk, brocade, or raw silk fabrics."
  },
  pant: {
    prepare: ["Style preference (formal, casual, chinos)", "Fit preference", "Measurement details"],
    measurements: "Provide waist, hip, inseam, outseam, and thigh measurements.",
    fabric: "Pants can be stitched in cotton, wool blends, or stretch fabrics."
  }
};

export default async function GarmentPage({ params }: GarmentPageProps) {
  const { category, slug } = await params;
  const garment = findGarment(category, slug);
  if (!garment) notFound();

  const categoryLabel = category === "women" ? "Women's" : "Men's";
  const path = `/services/${category}/${slug}/`;
  const guidance = garmentGuidance[slug];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.domain },
            { name: "Services", url: `${siteConfig.domain}/services/` },
            { name: categoryLabel, url: `${siteConfig.domain}/services/${category}/` },
            { name: garment.name, url: `${siteConfig.domain}${path}` }
          ]),
          serviceSchema({
            name: `${garment.name} Stitching`,
            description: garment.description,
            url: `${siteConfig.domain}${path}`
          })
        ]}
      />

      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 mb-6">
            <Link href="/" className="no-underline hover:underline">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/services/" className="no-underline hover:underline">Services</Link>
            <span aria-hidden="true"> / </span>
            <Link href={`/services/${category}/`} className="no-underline hover:underline">
              {categoryLabel}
            </Link>
            <span aria-hidden="true"> / </span>
            <span>{garment.name}</span>
          </nav>

          <h1 className="mb-4">{garment.name} stitching</h1>
          <p className="text-lg text-neutral-600 leading-relaxed mb-10">{garment.description}</p>

          {guidance && (
            <div className="space-y-8 prose-content text-neutral-700">
              <div>
                <h2>What to prepare</h2>
                <ul>
                  {guidance.prepare.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2>Measurements</h2>
                <p>{guidance.measurements}</p>
              </div>
              <div>
                <h2>Fabric considerations</h2>
                <p>{guidance.fabric}</p>
              </div>
            </div>
          )}

          <div className="mt-10 p-6 bg-brand-50 rounded-xl border border-brand-100">
            <h2 className="text-xl mb-3">How ApneTailor handles {garment.name.toLowerCase()} stitching</h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Select {garment.name} in the app, provide your measurements and design details,
              choose your fabric option, and share your location. Verified tailors in your area
              respond with pricing and timelines. After you review and pay, the stitching
              workflow begins with progress tracking and doorstep delivery.
            </p>
          </div>

          <div className="mt-10 text-center">
            <AppDownloadButton />
            <p className="mt-4 text-sm text-neutral-500">
              <Link href="/how-it-works/" className="font-medium">Learn how the process works</Link>
              {" · "}
              <Link href="/faq/" className="font-medium">FAQ</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
