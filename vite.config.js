import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        dtcnm: resolve(__dirname, "/dtcnm/index.html"),
        upsell: resolve(__dirname, "/upsell/index.html"),
      },
    },
  },
  plugins: [tailwindcss()],
});
