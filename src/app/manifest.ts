import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Push",
    description: "Push web app with Next.js",
    display: "standalone",
    start_url: "/",
    theme_color: "#000000",
    background_color: "#FFFFFF",
    icons: [
      {
        src: "icons/icon-96.png",
        type: "image/png",
        sizes: "96x96",
      },
      {
        src: "icons/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
      {
        src: "icons/icon-maskable-640.png",
        type: "image/png",
        sizes: "640x640",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: "/bg.png",
        sizes: "1280x720",
        type: "image/png",
      },
    ],
  };
}
