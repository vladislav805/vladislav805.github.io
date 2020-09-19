const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const PATH = (_static => ({
    SRC: path.resolve('src'),
    DIST: path.resolve('dist'),
    ROOT: path.resolve('.'),
    STATIC: _static,
    STATIC_CSS: `${_static}/css`,
    STATIC_IMAGES: `${_static}/images`
}))('static');

const isProduction = true // process.env.NODE_ENV === 'production';

const mode = isProduction ? 'production' : 'development';

module.exports = {
    mode,
    target: 'web',
    context: PATH.SRC,

    entry: {
        main: path.resolve(PATH.SRC, 'index.tsx'),
    },

    output: {
        path: PATH.DIST,
        filename: `${PATH.STATIC}/js/[name].js`,
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
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            useRelativePath: true,
                            publicPath: url => path.join(path.relative(PATH.STATIC_CSS, PATH.STATIC_IMAGES), url),
                            outputPath: PATH.STATIC_IMAGES,
                        },
                    },
                ],
            },
        ],
    },

    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        alias: {
            'react': 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat',
        },
    },

    optimization: {
        minimize: isProduction,
        minimizer: [
            new TerserPlugin({ extractComments: false }),
        ],
    },

    /*...(isProduction ? {
        externals: {
            'react': 'React',
            'react-dom' : 'ReactDOM',
        },
    } : {}),*/

    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATH.STATIC_CSS}/[name].css`,
            chunkFilename: `${PATH.STATIC_CSS}/[id].css`,
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
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
                    { property: 'og:url', content: 'https://velu.ga/' },
                    { property: 'og:locale', content: 'en_US' },
                    { property: 'og:locale:alternate', content: 'ru_RU' },
                ],
            }),
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve('src', 'images'),
                    to: path.resolve('dist', 'static', 'images'),
                },
            ],
        }),
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve('src'),
        host: '0.0.0.0',
        port: 8080,
    },

    stats: 'minimal',
};
