import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],

  server: {
    host: true,
    port: 8080,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // 🔐 IMPORTANT (THIS HIDES CLEAN CODE IN DEVTOOLS)
  build: {
    sourcemap: false, // ❌ disable readable source maps
    minify: "esbuild", // ✅ ensure minified output
  },
});