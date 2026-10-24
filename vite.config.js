import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" lets the built site run from any folder (Live Server, Netlify, GitHub Pages)
export default defineConfig({
  base: "./",
  plugins: [react()],
});
