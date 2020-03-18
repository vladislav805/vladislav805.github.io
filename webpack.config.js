const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const mode = isProduction ? 'production' : 'development';

module.exports = {
    mode,
    target: 'web',

    entry: {
        main: path.resolve('src', 'index.tsx'),
    },

    output: {
        path: path.resolve('dist'),
        filename: 'static/js/[name].js',
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: require.resolve('awesome-typescript-loader'),
                        options: {
                            useBabel: true,
                            silent: isProduction,
                        },
                    },
                ],
                exclude: /node_modules/,

            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
                sideEffects: true,
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                exclude: /(node_modules)/,
                use: ['file-loader'],
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

    /*...(isProduction ? {
        externals: {
            'react': 'React',
            'react-dom' : 'ReactDOM',
        },
    } : {}),*/

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].css',
            chunkFilename: 'static/css/[id].css',
        }),
        /*new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),*/
        new webpack.EnvironmentPlugin({
            VERSION: process.env.npm_package_version,
        }),

        new HtmlWebpackPlugin({
            template: path.resolve('public', 'index.html'),
            chunks: ['main'],
            minify: true,
            filename: 'index.html',
        }),
    ],

    devtool: '#sourcemap',
    devServer: {
        contentBase: path.resolve('src'),
        host: '0.0.0.0',
        port: 8080,
    },

    stats: 'minimal',
};
