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
          const ruleMatch = id.match(/\/features\/rule\/data\/(.+)\.ts$/);
          if (ruleMatch) {
            const fileName = ruleMatch[1];
            return `${fileName}`;
          }

          const eventMatch = id.match(/\/features\/events\/data\/(.+)\.ts$/);
          if (eventMatch) {
            const fileName = eventMatch[1];
            return `${fileName}`;
          }

          if (id.includes("node_modules")) return "vendor";
          if (id.includes("/features/rule/data/")) return "rule-data";
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
