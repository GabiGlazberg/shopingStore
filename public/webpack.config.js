const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob');

module.exports = {

    entry: {
        app: './javascripts/index.js'
    },

    output: {

        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'

    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            },

            {

                test: /\.css$/,
                use: ['style-loaer', 'css-loader']

            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "./"),
        port: 9000
    },

    plugins: [

        new ExtractTextPlugin("styles.css"),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, 'index.html')),
        }),
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            // title: 'Hot Module Replacement'
            template: './index.html',
        }),
        new webpack.HotModuleReplacementPlugin()

    ]

}