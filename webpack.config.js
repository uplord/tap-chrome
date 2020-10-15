const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const TerserPlugin = require('terser-webpack-plugin');

// webpack.config.js
module.exports = {

	mode: process.env.NODE_ENV,
    resolve: {
        extensions: ['.js'],
    },
    entry: {
        'min': './assets/js/app.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './assets/min/' ),
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
	            sourceMap: false,
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
	    new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ],
    module: {
        rules: [
	        {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: false
                        }
                    },
                    'less-loader',
                ],
            }
        ]
    },
    resolve: {
        alias: {
	        vue: process.env.NODE_ENV == 'production' ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js',
        }
    }
}
