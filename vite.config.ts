import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { handleContactRequest } from "./server/contact-email.mjs";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  for (const [key, value] of Object.entries(env)) {
    process.env[key] ||= value;
  }

  return {
    plugins: [
      react(),
      {
        name: "contact-api-dev",
        configureServer(server) {
          server.middlewares.use("/api/contact", (req, res) => {
            void handleContactRequest(req, res);
          });
        },
      },
    ],

    server: {
      host: true,
      port: 8080,
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    build: {
      sourcemap: false,
      minify: "esbuild",
    },
  };
});
