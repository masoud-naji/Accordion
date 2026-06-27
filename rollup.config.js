import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import localResolve from "rollup-plugin-local-resolve";

export default {
  input: "src/index.js",

  output: [
    {
      file: "dist/index.js",
      format: "cjs"
    },
    {
      file: "dist/index.es.js",
      format: "es",
      exports: "named"
    }
  ],

  plugins: [
    external(),

    resolve(),

    localResolve(),

    postcss({
      extract: true,
      minimize: true
    }),

    babel({
      exclude: "node_modules/**",
      presets: [
        "@babel/preset-env",
        "@babel/preset-react"
      ]
    })
  ],

  watch: {
    include: "src/**"
  }
};