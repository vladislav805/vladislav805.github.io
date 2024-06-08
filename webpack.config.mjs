import { resolve } from 'path';

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

const isProduction = process.env.NODE_ENV === 'production';

const mode = isProduction ? 'production' : 'development';

const root = resolve(process.cwd());
const src = resolve(root, 'src');
const dist = resolve(root, 'dist');

/** @type {import('webpack').Configuration} */
export default {
    mode,
    target: 'web',
    context: src,

    entry: {
        main: resolve(src, 'index.tsx'),
    },

    output: {
        path: dist,
        filename: 'static/js/[name]-[contenthash:8].js',
        assetModuleFilename: 'static/asset/[name]-[contenthash:8][ext]',
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'swc-loader',
                exclude: /node_modules/,

            },
            {
                test: /\.s?css$/,
                use: [
                    isProduction ? {
                        loader: MiniCssExtractPlugin.loader,
                    } : {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
                sideEffects: true,
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                exclude: /node_modules/,
                type: 'asset/resource',
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],

        plugins: [
            new TsconfigPathsPlugin(),
        ],
    },

    optimization: {
        minimize: isProduction,
        minimizer: [
            new TerserPlugin({ extractComments: false }),
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: `static/css/[name]-[contenthash:8].css`,
        }),
        new webpack.EnvironmentPlugin({
            VERSION: process.env.npm_package_version,
        }),
        new HtmlWebpackPlugin({
            template: resolve(root, 'public', 'index.ejs'),
            minify: {
                collapseWhitespace: true,
                html5: true,
            },
            inject: false,
            filename: 'index.html',
            templateParameters: (compilation, assets, options) => ({
                title: 'Vladislav Veluga',
                files: assets,
                options: options,
                webpackConfig: compilation.options,
                metaOG: [
                    { property: 'og:title', content: 'Vladislav Veluga' },
                    { property: 'og:description', content: 'Web-developer from Saint-Petersburg' },
                    { property: 'og:image', content: 'static/images/photo-main.jpg' },
                    { property: 'og:type', content: 'website' },
                    { property: 'og:url', content: 'https://veluga.dev/' },
                    { property: 'og:locale', content: 'en_US' },
                    { property: 'og:locale:alternate', content: 'ru_RU' },
                ],
            }),
        }),
    ],
    devtool: 'source-map',
    devServer: {
        static: src,
        host: '0.0.0.0',
        port: 8080,
    },

    stats: 'minimal',
};
