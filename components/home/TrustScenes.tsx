import Image from "next/image";

const trustScenes = [
  {
    title: "Verified\nTailors",
    alt: "Verified Tailors",
    image: "/images/trust/verified-tailors-placeholder.webp"
  },
  {
    title: "Tracked\nDeliveries",
    alt: "Tracked Deliveries",
    image: "/images/trust/tracked-deliveries-placeholder.webp"
  },
  {
    title: "Clear\nSupport",
    alt: "Clear Support",
    image: "/images/trust/clear-support-placeholder.webp"
  },
  {
    title: "Order Within\n10 Minutes",
    alt: "Order Within 10 Minutes",
    image: "/images/trust/order-within-10-minutes-placeholder.webp"
  }
] as const;

export function TrustScenes() {
  return (
    <div className="trust-stage" aria-label="ApneTailor trust highlights">
      {trustScenes.map((scene, index) => (
        <article
          key={scene.title}
          className="trust-scene"
          style={{ ["--scene-delay" as string]: `${index * 2}s` }}
        >
          <p className="trust-scene-title" aria-hidden="true">
            {scene.title}
          </p>
          <div className="trust-figure trust-placeholder-figure">
            <div className="trust-person trust-placeholder-card">
              <Image
                src={scene.image}
                alt={scene.alt}
                fill
                sizes="(max-width: 768px) 72vw, 24rem"
                className="object-contain object-right"
              />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
