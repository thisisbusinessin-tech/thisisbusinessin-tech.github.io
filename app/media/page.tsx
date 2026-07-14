import { createMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";

export const metadata = createMetadata({
  title: "Media & Press",
  description:
    "Media resources, company information, and press contact details for ApneTailor.",
  path: "/media/"
});

export default function MediaPage() {
  const allGarments = [
    ...siteConfig.supportedGarments.women.map((g) => g.name),
    ...siteConfig.supportedGarments.men.map((g) => g.name)
  ];

  return (
    <section className="section-padding">
      <div className="container-site max-w-3xl">
        <h1 className="mb-4">Media &amp; Press</h1>
        <p className="text-lg text-neutral-600 leading-relaxed mb-10">
          Resources for journalists, publications, and partners covering ApneTailor.
        </p>

        <div className="space-y-10 prose-content text-neutral-700">
          <div>
            <h2>About ApneTailor</h2>
            <p>
              <strong>Short description:</strong> ApneTailor is a technology-enabled tailoring
              platform connecting customers with nearby verified tailors for custom stitching
              with doorstep pickup and delivery.
            </p>
            <p>
              <strong>Tagline:</strong> {siteConfig.brand.tagline}
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href={siteConfig.domain}>{siteConfig.domain}</a>
            </p>
          </div>

          <div>
            <h2>What ApneTailor does</h2>
            <p>
              ApneTailor brings custom tailoring online. Customers place stitching orders from
              home, connect with skilled local tailors, enjoy doorstep pickup and delivery, and
              track every stage of their order — all from one app.
            </p>
            <p>{siteConfig.expansionWording}</p>
          </div>

          <div>
            <h2>Founders</h2>
            <ul>
              {siteConfig.founders.map((f) => (
                <li key={f.name}>
                  {f.name} — {f.role}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Supported garment categories</h2>
            <p>ApneTailor currently supports custom stitching for:</p>
            <ul>
              {allGarments.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Brand name usage</h2>
            <p>
              Please use <strong>ApneTailor</strong> (one word, capital A and T) when
              referencing the brand. Do not abbreviate or alter the brand name.
            </p>
          </div>

          <div>
            <h2>Media contact</h2>
            <p>
              For media inquiries, interview requests, or partnership discussions, contact:
            </p>
            <p>
              <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
            </p>
          </div>

          <div>
            <h2>Assets</h2>
            <p>
              Approved logos, app screenshots, and product imagery will be made available here
              once supplied. For immediate asset requests, contact the media email above.
            </p>
          </div>

          <div>
            <h2>Press coverage</h2>
            <p>
              ApneTailor does not display press mentions that have not occurred. As genuine
              media coverage becomes available, it may be listed here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
