import webpack from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import StyleLintPluginfrom from 'stylelint-webpack-plugin';
import getStyleLoader from './getStyleLoader';

import { getProjectUrl } from './until';
interface EnvMap {
    build: string;
    dist: string;
    development: string;
    [key: string]: string;
}
const devMode: boolean = (process.env.NODE_ENV as keyof EnvMap) === 'development';
const envMap: EnvMap = {
    // build: '.build',
    build: '',
    // dist: '.dist',
    dist: '',
    development: '',
};
const tsconfig = getProjectUrl(`tsconfig${envMap[process.env.NODE_ENV || 'development']}.json`);

const config: webpack.Configuration = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
        alias: {
            '@component': getProjectUrl('component'),
            '@lib': getProjectUrl('lib'),
            '@tests': getProjectUrl('tests'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        // options: {
                        // configFile: tsconfig,
                        // disable type checker - we will use it in fork plugin
                        // transpileOnly: true,
                        // },
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            configFile: getProjectUrl('.eslintrc.js'),
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            },
            getStyleLoader(devMode),
        ],
    },

    plugins: [
        // new DefinePlugin({
        //     $PREFIX: JSON.stringify('edm'),
        // }),
        new StyleLintPluginfrom({
            configFile: getProjectUrl('.stylelintrc.js'),
            context: getProjectUrl(),
            files: ['**/*.scss', '**/*.sass'],
            emitErrors: true,
            lintDirtyModulesOnly: true,
        }),
        // 检查代码中的类型错误
        new ForkTsCheckerWebpackPlugin({
            tsconfig,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            // filename: devMode ? "[name].css" : "[name].[hash].css",
            // chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
        }),
    ],
    resolveLoader: {
        modules: ['node_modules', getProjectUrl('loaders')],
    },
};
export default config;
