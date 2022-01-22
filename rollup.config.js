import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: "./src/index.tsx",
  output: [
    {
      file: `dist/${pkg.name}.js`,
      format: "umd",
      name: pkg.name,
      esModule: false,
      exports: "named",
      sourcemap: true,
    },
    {
      dir: "dist/esm",
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
    {
      dir: "dist/cjs",
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [typescript()],
};

export default config;
