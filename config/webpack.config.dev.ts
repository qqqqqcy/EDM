import webpack from "webpack";
import base from "./webpack.config";
// import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

import * as HtmlWebpackPlugin from "html-webpack-plugin";
import { getProjectUrl } from "./until";
import { TsConfigPathsPlugin } from "awesome-typescript-loader";
import * as webpackMerge from "webpack-merge";

const config: webpack.Configuration = {
  mode: "development",
  entry: {
    example: getProjectUrl("examples", "index.tsx")
  },
  devtool: "source-map",
  resolve: {
    plugins: [new TsConfigPathsPlugin({ forceIsolatedModules: true })]
  },
  plugins: [
    ...(base.plugins as webpack.Plugin[]),
    new HtmlWebpackPlugin({
      title: "eled-mobile",
      template: "index.html"
    })
  ]
};

module.exports = webpackMerge(base, config);
