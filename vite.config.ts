import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: "src",
      outDir: "dist",
      rollupTypes: true,
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  build: {
    target: "es2020",
    lib: {
      entry: "./src/index.tsx",
      formats: ["es", "cjs"],
      // Keep the historical dist/esm + dist/cjs artifact layout so the
      // package.json entry points stay stable for consumers.
      fileName: (format) => (format === "es" ? "esm/index.mjs" : "cjs/index.cjs"),
    },
    // emotion packages are devDependencies here, so lib mode does not
    // externalize them automatically; they are peer-like for consumers.
    rollupOptions: {
      // Regex (not exact strings) so subpaths like react/jsx-runtime are
      // externalized too instead of being bundled into the output.
      external: [/^react/, /^react-dom/, /^@emotion\/react/, /^@emotion\/styled/, /^@emotion\/css/],
    },
  },
});
