import webpack from "webpack";

import base from "./webpack.config";
import * as webpackMerge from "webpack-merge";
import { getProjectUrl } from "./until";

const config: webpack.Configuration = {
  mode: "production",
  output: {
    path: getProjectUrl("lib"),
    library: "eled-mobile",
    libraryTarget: "umd"
  },
  externals: {
    "react": {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "ReactDOM"
    }
  },
};
module.exports = webpackMerge(base, config);
