import * as webpack from "webpack";
import base from "./webpack.config";

import HtmlWebpackPlugin from "html-webpack-plugin";
import { getProjectUrl } from "./until";
const config: webpack.Configuration = {
  mode: "development",
  entry: {
    example: getProjectUrl("examples", "index.tsx")
  },
  plugins: [
    ...base.plugins,
    new HtmlWebpackPlugin({
      title: "eled-mobile",
      template: "index.html"
    })
  ]
};

module.exports = Object.assign({}, base, config);
