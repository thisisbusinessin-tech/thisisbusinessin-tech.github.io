import Image from "next/image";

const trustScenes = [
  {
    title: "Verified\nTailors",
    alt: "Verified Tailors",
    image: "/images/trust/verified-tailors-placeholder.webp"
  },
  {
    title: "Track\nDeliveries",
    alt: "Track Deliveries",
    image: "/images/trust/tracked-deliveries-placeholder.webp"
  },
  {
    title: "Secure\nPayments",
    alt: "Secure Payments",
    image: "/images/trust/order-within-10-minutes-placeholder.webp"
  },
  {
    title: "Clear\nSupport",
    alt: "Clear Support",
    image: "/images/trust/clear-support-placeholder.webp"
  }
] as const;

export function TrustScenes() {
  return (
    <div className="trust-stage" aria-label="ApneTailor trust highlights">
      {trustScenes.map((scene, index) => (
        <article
          key={scene.title}
          className={`trust-scene${index === 0 ? " is-landscape" : ""}`}
          style={{ ["--scene-delay" as string]: `${index * 2}s` }}
        >
          <p className="trust-scene-title" aria-hidden="true">
            {scene.title}
          </p>
          {/* Image fills the full card area — no nested container */}
          <div className="trust-full-image">
            <Image
              src={scene.image}
              alt={scene.alt}
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="trust-full-image-media"
            />
          </div>
        </article>
      ))}
    </div>
  );
}
