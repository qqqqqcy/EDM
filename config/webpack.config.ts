import webpack, { DefinePlugin } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { getProjectUrl } from "./until";
// const StyleLintPlugin = require("stylelint-webpack-plugin");
// const stylelint = require("stylelint");
// const postImport = require("postcss-import");
// const postcssFlexbugsFixes = require("postcss-flexbugs-fixes");

import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

const devMode: boolean = process.env.NODE_ENV !== "production";
const tsconfig = getProjectUrl(`tsconfig${devMode ? "" : ".prod"}.json`);

const config: webpack.Configuration = {
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"]
        // modules: [getProjectUrl("lib"), "node_modules"]
        // plugins: [
        //   new StyleLintPlugin({
        // configFile: getProjectUrl("stylelint.config.js"),
        // files: ["examples/**/*.s(a|c)ss", "component/**/*.s(a|c)ss"],
        //     context: getProjectUrl()
        //   })
        // ]
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
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            // postImport,
                            plugins: () => [
                                //   stylelint({
                                //     fix: true,
                                //     configFile: getProjectUrl(".stylelintrc"),
                                //     configBasedir: getProjectUrl()
                                //   }),
                                //   postcssFlexbugsFixes,
                                autoprefixer({
                                    browsers: [
                                        "last 2 versions",
                                        "Firefox ESR",
                                        "> 1%",
                                        "ie >= 9",
                                        "iOS >= 8",
                                        "Android >= 4"
                                    ]
                                }),
                                cssnano({
                                    preset: "default"
                                })
                            ]
                        }
                    },
                    "sass-loader"
                ]
            }
        ]
    },

    plugins: [
        new DefinePlugin({
            $PREFIX: JSON.stringify("edm")
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
