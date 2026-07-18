import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ApneTailor",
    short_name: "ApneTailor",
    description:
      "Get clothes custom-stitched from home with guided ordering, verified tailors, and clearer delivery visibility.",
    start_url: "/",
    display: "standalone",
    background_color: "#004899",
    theme_color: "#004899",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
