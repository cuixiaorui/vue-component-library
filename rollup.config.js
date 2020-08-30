import packageJson from "./package.json";
import vuePlugin from "rollup-plugin-vue";
import scss from "rollup-plugin-scss";
export default {
  input: "src/index.js",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    vuePlugin({
      css: true,
    }),
    scss(),
  ],
};
