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
        name: "aaaaaaaaaaaaaaaaaaaa",
        short_name: "あいうえおあいうえおあいうえおあいうえお",
        icons: [
          {
            src: "test.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
      injectRegister: "auto",
      registerType: "autoUpdate",
    }),
  ],
});
