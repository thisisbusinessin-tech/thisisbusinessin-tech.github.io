import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";
import { AppDownloadButton } from "@/components/ui/AppDownloadButton";
import { faqs } from "@/content/faqs";

export const metadata = createMetadata({
  title: "ApneTailor — Custom Tailoring at Your Doorstep",
  description: siteConfig.defaultMetadata.defaultDescription,
  path: "/"
});

export default function HomePage() {
  const previewFaqs = faqs.slice(0, 5);
  const allGarments = [
    ...siteConfig.supportedGarments.women.map((g) => ({ ...g, category: "women" as const })),
    ...siteConfig.supportedGarments.men.map((g) => ({ ...g, category: "men" as const }))
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.3) 20px, rgba(255,255,255,0.3) 21px)"
            }}
          />
        </div>
        <div className="container-site relative section-padding">
          <div className="max-w-3xl">
            <p className="text-accent-thread text-sm font-semibold tracking-widest uppercase mb-4">
              {siteConfig.brand.tagline}
            </p>
            <h1 className="text-white mb-6">
              Custom tailoring, delivered to your doorstep
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
              Place stitching orders from home, connect with verified local tailors,
              track every stage of your order, and get your finished garment delivered — all
              from one app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <AppDownloadButton />
              <Link href="/how-it-works/" className="btn-secondary border-white/30 text-white hover:bg-white/10 hover:text-white">
                See how it works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Value */}
      <section className="section-padding bg-neutral-50">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2>Tailoring shouldn&apos;t mean ten trips to the darji</h2>
            <p className="text-neutral-600 mt-4 text-lg">
              Visiting multiple tailors, explaining your design repeatedly, dropping off fabric,
              checking progress in person, and collecting the finished garment — it takes time
              you don&apos;t have.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "From home",
                desc: "Select your garment, enter measurements, and share requirements — all in under 10 minutes."
              },
              {
                title: "Verified tailors",
                desc: "Nearby registered tailors review your order and respond with transparent pricing and timelines."
              },
              {
                title: "To your door",
                desc: "Fabric pickup, stitching progress, and final delivery — tracked and coordinated for you."
              }
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <h3 className="text-brand-700 mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works snapshot */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">How ApneTailor works</h2>
              <ol className="space-y-5">
                {[
                  "Choose a garment and enter your measurements",
                  "Share tailoring details, fabric info, and design references",
                  "Nearby verified tailors respond with price and timeline",
                  "Review, pay, and track pickup through to delivery"
                ].map((step, i) => (
                  <li key={step} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <span className="text-neutral-700 pt-1">{step}</span>
                  </li>
                ))}
              </ol>
              <Link href="/how-it-works/" className="inline-block mt-8 text-brand-600 font-semibold no-underline hover:underline">
                Full process explained →
              </Link>
            </div>
            <div className="bg-brand-50 rounded-xl p-8 border border-brand-100">
              <h3 className="text-brand-800 mb-4">Two fabric flows</h3>
              <div className="space-y-4 text-neutral-700 text-sm leading-relaxed">
                <p>
                  <strong className="text-brand-700">You provide fabric:</strong> Share fabric
                  details and a photo. After payment, pickup is arranged to deliver your fabric to
                  the tailor. Stitching begins once fabric arrives.
                </p>
                <p>
                  <strong className="text-brand-700">Tailor provides fabric:</strong> Specify the
                  fabric type you need. The tailor sources it and stitching can begin immediately
                  after payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garment marquee */}
      <section className="py-10 bg-brand-800 overflow-hidden" aria-label="Supported garments">
        <div className="overflow-hidden">
          <div className="marquee-track text-white/90 text-sm font-medium tracking-wide uppercase">
            {[...allGarments, ...allGarments].map((g, i) => (
              <span key={`${g.slug}-${i}`} className="whitespace-nowrap flex items-center gap-2">
                {g.name}
                <span className="text-accent-thread" aria-hidden="true">
                  ◆
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Supported garments */}
      <section className="section-padding">
        <div className="container-site">
          <h2 className="text-center mb-4">Supported garments</h2>
          <p className="text-center text-neutral-600 mb-10 max-w-xl mx-auto">
            ApneTailor currently supports custom stitching for these garment categories.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-brand-600 text-sm font-semibold uppercase tracking-wider mb-4">
                Women
              </h3>
              <ul className="space-y-3">
                {siteConfig.supportedGarments.women.map((g) => (
                  <li key={g.slug}>
                    <Link
                      href={`/services/women/${g.slug}/`}
                      className="flex justify-between items-center p-4 border border-neutral-200 rounded-lg hover:border-brand-300 hover:bg-brand-50 no-underline transition-colors group"
                    >
                      <span className="font-medium text-brand-800 group-hover:text-brand-600">
                        {g.name}
                      </span>
                      <span className="text-neutral-400 group-hover:text-brand-500" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-brand-600 text-sm font-semibold uppercase tracking-wider mb-4">
                Men
              </h3>
              <ul className="space-y-3">
                {siteConfig.supportedGarments.men.map((g) => (
                  <li key={g.slug}>
                    <Link
                      href={`/services/men/${g.slug}/`}
                      className="flex justify-between items-center p-4 border border-neutral-200 rounded-lg hover:border-brand-300 hover:bg-brand-50 no-underline transition-colors group"
                    >
                      <span className="font-medium text-brand-800 group-hover:text-brand-600">
                        {g.name}
                      </span>
                      <span className="text-neutral-400 group-hover:text-brand-500" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center mt-8">
            <Link href="/services/" className="text-brand-600 font-semibold no-underline hover:underline">
              View all services →
            </Link>
          </p>
        </div>
      </section>

      {/* Trust */}
      <section className="section-padding bg-neutral-50">
        <div className="container-site">
          <h2 className="text-center mb-4">Built on transparency, not promises</h2>
          <p className="text-center text-neutral-600 mb-10 max-w-2xl mx-auto">
            ApneTailor is a new platform. We build trust through clear processes, published
            policies, and real product evidence — not fabricated numbers.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Verified tailors",
                desc: "Registered tailors go through a verification process before accepting orders."
              },
              {
                title: "Progress visibility",
                desc: "See stitching progress through images shared by your tailor during the workflow."
              },
              {
                title: "Tracked logistics",
                desc: "Pickup and delivery stages are coordinated and trackable where applicable."
              },
              {
                title: "Clear support",
                desc: "Reach us at support@apnetailor.com or through in-app support features."
              },
              {
                title: "Published policies",
                desc: "Privacy, terms, data compliance, and account deletion policies are publicly available."
              },
              {
                title: "Secure payments",
                desc: "Review pricing before confirming. Payment is processed securely through the app."
              }
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-brand-700 text-base mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm text-neutral-500 mb-2">Founded by</p>
            <p className="font-medium text-brand-800">
              {siteConfig.founders.map((f) => f.name).join(" & ")}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <h2 className="text-center mb-10">Common questions</h2>
          <div className="space-y-4">
            {previewFaqs.map((faq) => (
              <details key={faq.id} className="card group">
                <summary className="cursor-pointer font-medium text-brand-800 list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-neutral-400 ml-4 flex-shrink-0" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-neutral-600 text-sm leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
          <p className="text-center mt-8">
            <Link href="/faq/" className="text-brand-600 font-semibold no-underline hover:underline">
              View all FAQs →
            </Link>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-brand-900 text-white text-center">
        <div className="container-site max-w-2xl">
          <h2 className="text-white mb-4">Ready to stitch from home?</h2>
          <p className="text-neutral-300 mb-8 text-lg">
            {siteConfig.expansionWording} Download the ApneTailor app to get started.
          </p>
          <AppDownloadButton />
        </div>
      </section>
    </>
  );
}
