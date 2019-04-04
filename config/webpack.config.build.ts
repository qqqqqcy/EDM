import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsConfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

import base from './webpack.config';
import webpackMerge from 'webpack-merge';
import { getProjectUrl } from './until';

const config: webpack.Configuration = {
    entry: {
        example: getProjectUrl('examples', 'index.tsx'),
    },
    resolve: {
        plugins: [new TsConfigPathsPlugin({})],
    },
    mode: 'production',
    output: {
        path: getProjectUrl('build'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'EDM',
            template: 'index.html',
        }),
    ],
};
module.exports = webpackMerge(base, config);
