'use strict';

const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: `${__dirname}/src/main.js`,
  output: {
    filename: 'bundle.[hash].js',
    path: `${__dirname}/build`,
  },
  plugins: [
    new HtmlPlugin(),
    new ExtractTextPlugin('bundle-[hash].css'),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
};
