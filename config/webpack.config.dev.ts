import webpack from "webpack";
import base from "./webpack.config";

import HtmlWebpackPlugin from "html-webpack-plugin";
import { getProjectUrl } from "./until";
// ts-loader 提供的 TsConfigPathsPlugin 插件会报错，待抽出
// import TsConfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import { TsConfigPathsPlugin } from "awesome-typescript-loader";
import webpackMerge from "webpack-merge";

const config: webpack.Configuration = {
  mode: "development",
  devServer: {
    // todo： 删除 port
    // port: 80,
    headers: { "Access-Control-Allow-Origin": "*" },
    disableHostCheck: true
    // 如果不启用无法使用 BrowserRouter
    // historyApiFallback: true
  },
  entry: {
    example: getProjectUrl("examples", "index.tsx")
  },
  devtool: "source-map",
  resolve: {
    plugins: [new TsConfigPathsPlugin()]
    // plugins: [new TsConfigPathsPlugin()]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "eled-mobile",
      template: "index.html"
    })
  ]
};

module.exports = webpackMerge(base, config);
