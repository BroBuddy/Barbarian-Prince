import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "build",
    emptyOutDir: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) return "vendor";
          if (id.includes("/features/rule/")) return "rule";
          if (id.includes("/features/events/")) return "events";
          if (id.includes("/features/map/")) return "map";
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["html-react-parser"],
    exclude: ["js-big-decimal"],
  },
});
