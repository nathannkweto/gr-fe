// vite.config.ts
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./",
  publicDir: "public",
  build: {
    outDir: "dist",
  },
});
