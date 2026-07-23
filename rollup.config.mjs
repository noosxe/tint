import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";

import pkg from "./package.json" with { type: "json" };

/**
 * @type {import('rollup').RollupOptions}
 */
const config = [
  {
    input: "./src/index.tsx",
    output: [
      {
        file: pkg.module,
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "types",
      }),
    ],
    external: ["react", "react-dom", "@emotion/react", "@emotion/styled", "@emotion/css"],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];

export default config;
