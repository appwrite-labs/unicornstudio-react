import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    // Default React version (Vite-compatible)
    index: "src/index.tsx",
  },
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "next", "next/script", "next/image"],
});
