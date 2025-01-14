import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

/* https://vitejs.dev/config/ */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@components", replacement: "/src/components" },
      { find: "@context", replacement: "/src/context" },
      { find: "@script", replacement: "/src/script" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@store", replacement: "/src/store" },
      { find: "@", replacement: "/src" },
    ],
  },
});