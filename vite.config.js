import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Bookify/", // Set the base path for your app
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Custom chunking logic
          if (id.includes("node_modules")) {
            return "vendor"; // Separate vendor modules
          }
          if (id.includes("src/components")) {
            return "components"; // Separate components
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust the warning limit as needed
  },
});
