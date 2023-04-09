import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name: "app",
      remotes: {
        remoteApp: "http://localhost:3001/app/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),

    react(),
  ],
  build: {
    assetsDir: "app",
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
