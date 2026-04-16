import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    proxy: {
      "/.netlify/functions": {
        target: "http://localhost:9000",
        changeOrigin: true,
        rewrite: (path) => path.replace("/.netlify/functions", ""),
      },
    },
  },
});
