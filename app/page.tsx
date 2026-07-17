import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";
import { AppDownloadButton } from "@/components/ui/AppDownloadButton";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/content/faqs";

export const metadata = createMetadata({
  title: "ApneTailor — Custom Tailoring at Your Doorstep",
  description: siteConfig.defaultMetadata.defaultDescription,
  path: "/"
});

export default function HomePage() {
  const previewFaqs = faqs.slice(0, 5);
  const allGarments = [
    ...siteConfig.supportedGarments.women,
    ...siteConfig.supportedGarments.men
  ];
  const processSteps = [
    {
      title: "Choose a garment",
      description:
        "Start with the garment you want stitched, then follow the guided flow for measurements and design details."
    },
    {
      title: "Share your tailoring brief",
      description:
        "Add fabric responsibility, notes, reference images, and the details your tailor needs to understand the job clearly."
    },
    {
      title: "Nearby verified tailors respond",
      description:
        "Review pricing and expected timelines from relevant tailors before you decide how to proceed."
    },
    {
      title: "Track progress to delivery",
      description:
        "Once you confirm, follow pickup, stitching updates, and final delivery from one place."
    }
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="hero-mesh hero-grid absolute inset-0" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,27,55,0.08),rgba(3,27,55,0.55))]"
          aria-hidden="true"
        />
        <div className="container-site relative section-padding pt-12 md:pt-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
            <Reveal>
              <div className="max-w-3xl">
                <p className="section-kicker border-white/12 bg-white/8 text-white">
                  {siteConfig.brand.tagline}
                </p>
                <h1 className="mt-6 max-w-3xl text-white">
                  Custom tailoring that feels premium from the first step to doorstep delivery
                </h1>
                <p className="mt-6 max-w-2xl text-[1.05rem] leading-8 text-white/74 md:text-[1.15rem]">
                  Place stitching orders from home, connect with nearby verified tailors, share
                  exact requirements, and follow your garment through pickup, progress updates,
                  and delivery without repeated market trips.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <AppDownloadButton />
                  <Link
                    href="/how-it-works/"
                    className="btn-secondary border-white/20 bg-white/10 text-white hover:border-white/28 hover:bg-white/14 hover:text-white"
                  >
                    See how it works
                  </Link>
                </div>
                <div className="mt-8 grid gap-3 text-sm text-white/74 sm:grid-cols-3">
                  {[
                    "Verified tailors in a structured flow",
                    "Progress visibility during stitching",
                    "Pickup and delivery coordination"
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 backdrop-blur-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delayMs={120}>
              <div className="surface-panel overflow-hidden bg-white/6 p-4 text-white backdrop-blur-xl md:p-5">
                <div className="grid gap-4">
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/8 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-thread">
                      Seamless order flow
                    </p>
                    <div className="mt-4 grid gap-3">
                      {[
                        { title: "Choose garment", text: "Suit, lehenga, blouse, kurta, shirt and more." },
                        { title: "Share details", text: "Measurements, fabric flow, notes, and references." },
                        { title: "Track stitching", text: "Review progress and stay updated till delivery." }
                      ].map((item, index) => (
                        <div
                          key={item.title}
                          className="rounded-2xl border border-white/10 bg-brand-900/44 p-4"
                        >
                          <div className="mb-2 flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/12 text-sm font-bold text-white">
                              {index + 1}
                            </span>
                            <p className="font-semibold text-white">{item.title}</p>
                          </div>
                          <p className="text-sm leading-7 text-white/68">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-[1.4rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-thread">
                        Fabric flow
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/72">
                        You can either share your own fabric for pickup or choose a tailor flow
                        where fabric is sourced as needed.
                      </p>
                    </div>
                    <div className="rounded-[1.4rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-thread">
                        Tailor response
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/72">
                        Review price and timeline before you confirm, with the process staying
                        clear and structured throughout.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-site">
          <Reveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="section-kicker">Why it feels easier</p>
            <h2 className="mt-5">Tailoring should not demand repeated visits just to get one garment stitched</h2>
            <p className="page-intro mt-4">
              Explaining the same design again and again, dropping fabric manually, checking
              progress in person, and collecting the final garment takes more time than it
              should. ApneTailor is designed to reduce that friction.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Start from home",
                desc: "Choose the garment, enter measurements, and share your order details in one guided flow."
              },
              {
                title: "Review with clarity",
                desc: "Nearby verified tailors can respond with price and expected completion timing before you decide."
              },
              {
                title: "Follow it through",
                desc: "Pickup, stitching progress, and final delivery stay clearer so the process feels more dependable."
              }
            ].map((item, index) => (
              <Reveal key={item.title} delayMs={index * 90}>
                <div className="card interactive-card h-full text-center">
                  <h3 className="mb-3 text-brand-700">{item.title}</h3>
                  <p className="leading-7 text-neutral-600">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-brand-800 py-10" aria-label="Supported garments">
        <div className="marquee-track text-sm font-semibold uppercase tracking-[0.18em] text-white/88">
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              className="marquee-group"
              aria-hidden={groupIndex === 1 ? "true" : undefined}
            >
              {allGarments.map((g) => (
                <span key={`${groupIndex}-${g.slug}`} className="marquee-chip whitespace-nowrap">
                  {g.name}
                  <span className="text-accent-thread" aria-hidden="true">
                    ◆
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <Reveal className="mx-auto mb-14 max-w-3xl text-center">
            <p className="section-kicker">How it works</p>
            <h2 className="mt-5">A clear four-step flow from garment selection to final delivery</h2>
            <p className="page-intro mt-4">
              Instead of scattered follow-ups, the experience is structured so each stage feels
              easier to understand.
            </p>
          </Reveal>

          <div className="grid gap-6">
            {processSteps.map((step, index) => (
              <Reveal
                key={step.title}
                direction={index % 2 === 0 ? "left" : "right"}
                delayMs={index * 80}
              >
                <div className="surface-panel grid gap-6 p-6 md:grid-cols-[auto_minmax(0,1fr)] md:items-center md:p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-lg font-extrabold text-white shadow-[0_18px_36px_rgba(0,72,153,0.22)]">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="mb-3 text-brand-800">{step.title}</h3>
                    <p className="page-intro">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="surface-panel p-7">
                <p className="section-kicker">Fabric option one</p>
                <h3 className="mt-4 mb-3 text-brand-800">You provide fabric</h3>
                <p className="page-intro">
                  Share the fabric details and a photo, then pickup is arranged after payment so
                  the fabric reaches the tailor before stitching begins.
                </p>
              </div>
              <div className="surface-panel p-7">
                <p className="section-kicker">Fabric option two</p>
                <h3 className="mt-4 mb-3 text-brand-800">Tailor provides fabric</h3>
                <p className="page-intro">
                  If you need the tailor to source fabric, stitching can begin more directly once
                  the order is confirmed and paid for.
                </p>
              </div>
            </div>
          </Reveal>

          <p className="mt-8 text-center">
            <Link
              href="/how-it-works/"
              className="font-semibold no-underline hover:underline"
            >
              Full process explained →
            </Link>
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <Reveal className="mx-auto mb-10 max-w-3xl text-center">
            <p className="section-kicker">Supported garments</p>
            <h2 className="mt-5">Built around the categories ApneTailor currently supports</h2>
            <p className="page-intro mt-4">
              Explore the current women&apos;s and men&apos;s garment categories and move into the
              right service page quickly.
            </p>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal direction="left">
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-600">
                  Women
                </h3>
                <ul className="space-y-3">
                  {siteConfig.supportedGarments.women.map((g) => (
                    <li key={g.slug}>
                      <Link
                        href={`/services/women/${g.slug}/`}
                        className="surface-panel flex items-center justify-between gap-4 p-4 no-underline transition-colors group"
                      >
                        <span className="font-semibold text-brand-800 group-hover:text-brand-600">
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
            </Reveal>
            <Reveal direction="right">
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-600">
                  Men
                </h3>
                <ul className="space-y-3">
                  {siteConfig.supportedGarments.men.map((g) => (
                    <li key={g.slug}>
                      <Link
                        href={`/services/men/${g.slug}/`}
                        className="surface-panel flex items-center justify-between gap-4 p-4 no-underline transition-colors group"
                      >
                        <span className="font-semibold text-brand-800 group-hover:text-brand-600">
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
            </Reveal>
          </div>
          <p className="mt-8 text-center">
            <Link href="/services/" className="text-brand-600 font-semibold no-underline hover:underline">
              View all services →
            </Link>
          </p>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-site">
          <Reveal className="mx-auto mb-10 max-w-3xl text-center">
            <p className="section-kicker">Trust by design</p>
            <h2 className="mt-5">Built on transparency, not promises</h2>
            <p className="page-intro mt-4">
              We build trust through clear processes, published policies, and real product
              evidence, not fabricated numbers.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            ].map((item, index) => (
              <Reveal key={item.title} delayMs={index * 70}>
                <div className="card interactive-card h-full">
                  <h3 className="mb-2 text-base text-brand-700">{item.title}</h3>
                  <p className="leading-7 text-neutral-600">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="mb-2 text-sm text-neutral-500">Founded by</p>
            <p className="font-medium text-brand-800">
              {siteConfig.founders.map((f) => f.name).join(" & ")}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <Reveal className="text-center">
            <p className="section-kicker">Common questions</p>
            <h2 className="mt-5 mb-10">Answers that are easier to scan and easier to read</h2>
          </Reveal>
          <div className="space-y-4">
            {previewFaqs.map((faq, index) => (
              <Reveal key={faq.id} delayMs={index * 60}>
                <details className="card group">
                  <summary className="list-none flex cursor-pointer items-center justify-between gap-4 text-[1.02rem] font-semibold text-brand-800">
                    {faq.question}
                    <span className="ml-4 flex-shrink-0 text-neutral-400" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[0.98rem] leading-8 text-neutral-600">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link href="/faq/" className="text-brand-600 font-semibold no-underline hover:underline">
              View all FAQs →
            </Link>
          </p>
        </div>
      </section>

      <section className="section-padding bg-brand-900 text-center text-white">
        <div className="container-site max-w-3xl">
          <Reveal>
            <p className="section-kicker border-white/12 bg-white/8 text-white">Ready when you are</p>
            <h2 className="mt-5 text-white">Ready to stitch from home with a clearer process?</h2>
            <p className="mx-auto mt-4 mb-8 max-w-2xl text-lg leading-8 text-white/74">
              {siteConfig.expansionWording} Download the ApneTailor app to get started.
            </p>
            <AppDownloadButton />
          </Reveal>
        </div>
      </section>
    </>
  );
}
