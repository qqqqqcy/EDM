import webpack from 'webpack';
import base from './webpack.config';

import HtmlWebpackPlugin from 'html-webpack-plugin';
// import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { getProjectUrl } from './until';

// 使用 awesome-typescript-loader 插件打包 tsx，文件无法生成类型文件
// https://github.com/s-panferov/awesome-typescript-loader/issues/411
import { TsConfigPathsPlugin } from 'awesome-typescript-loader';
// import TsConfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

import webpackMerge from 'webpack-merge';

const config: webpack.Configuration = {
    mode: 'development',
    devServer: {
        // port: 80,
        headers: { 'Access-Control-Allow-Origin': '*' },
        disableHostCheck: true,
        // 如果不启用无法使用 BrowserRouter
        // historyApiFallback: true
    },
    entry: {
        example: getProjectUrl('examples', 'index.tsx'),
    },
    devtool: 'source-map',
    resolve: {
        plugins: [new TsConfigPathsPlugin({})],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'eled-mobile',
            template: 'index.html',
        }),
    ],
};

module.exports = webpackMerge(base, config);
