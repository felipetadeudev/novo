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
        up1b6: resolve(__dirname, "/up1b6/index.html"),
        up1b12: resolve(__dirname, "/up1b12/index.html"),
        up2: resolve(__dirname, "/up2/index.html"),
        dw1: resolve(__dirname, "/dw1/index.html"),
      },
    },
  },
  plugins: [tailwindcss()],
});
