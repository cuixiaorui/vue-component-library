import packageJson from "./package.json";
import vuePlugin from "rollup-plugin-vue";
import scss from "rollup-plugin-scss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import babel from "rollup-plugin-babel";

export default {
  input: "src/index.js",
  output: [
    // {
    //   file: packageJson.main,
    //   format: "cjs",
    //   sourcemap: true,
    // },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: false,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    json(),
    vuePlugin({
      css: true,
    }),
    scss(),
    babel({ exclude: "node_modules/**" }),
  ],
};
