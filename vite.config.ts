import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      useCredentials: true,
      manifest: {
        display: "standalone",
        name: "モバイル",
        short_name: "モバイル",
        background_color: "#ffffff",
        theme_color: "#0D7A81",
        icons: [
          {
            src: "test.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "test.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable any",
          },
        ],
      },
      injectRegister: "script",
      registerType: "autoUpdate",
      // registerType: "",
    }),
  ],
});
