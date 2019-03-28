import webpack, { DefinePlugin } from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import StyleLintPluginfrom from "stylelint-webpack-plugin";
import getStyleLoader from "./getStyleLoader";

import { getProjectUrl } from "./until";
const devMode: boolean = process.env.NODE_ENV !== "production";
const tsconfig = getProjectUrl(`tsconfig${devMode ? "" : ".prod"}.json`);

const config: webpack.Configuration = {
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    configFile: tsconfig
                }
            },
            {
                test: /\.tsx?$/,
                enforce: "pre",
                use: [{ loader: "tslint-loader" }]
            },
            {
                test: /\.svg$/,
                loader: "svg-sprite-loader"
            },
            // {
            //   test: /guui\.svg$/,
            //   loader: 'file-loader',
            // },
            // {
            //   test: /\.md$/,
            //   loader: 'text-loader',
            // },
            getStyleLoader(devMode)
        ]
    },

    plugins: [
        new DefinePlugin({
            $PREFIX: JSON.stringify("edm")
        }),
        new StyleLintPluginfrom({
            configFile: getProjectUrl(".stylelintrc.js"),
            context: getProjectUrl(),
            files: ["**/*.scss", "**/*.sass"],
            emitErrors: true,
            lintDirtyModulesOnly: true
        }),
        // 检查代码中的类型错误
        new ForkTsCheckerWebpackPlugin({
            tsconfig
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
            // filename: devMode ? "[name].css" : "[name].[hash].css",
            // chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
        })
    ],
    resolveLoader: {
        modules: ["node_modules", getProjectUrl("loaders")]
    }
};
export default config;
