const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const mode = isProduction ? 'production' : 'development';

/** @type {import('webpack').Configuration} */
module.exports = {
    mode,
    target: 'web',
    context: path.resolve('src'),

    entry: {
        main: path.resolve('src', 'index.tsx'),
    },

    output: {
        path: path.resolve('build'),
        filename: 'static/js/[name]-[contenthash:8].js',
        assetModuleFilename: 'static/asset/[name]-[contenthash:8][ext]',
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    'babel-loader',
                    'ts-loader',
                ],
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
                        options: {
                            modules: {
                                localIdentName: isProduction ? 'c[sha256:hash:hex:4]' : '[local]',
                            },
                        },
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
        extensions: [ '.tsx', '.ts', '.js' ],
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
            template: path.resolve('public', 'index.ejs'),
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
        static: path.resolve('src'),
        host: '0.0.0.0',
        port: 8080,
    },

    stats: 'minimal',
};
