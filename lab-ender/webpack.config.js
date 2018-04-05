'use strict';

const HtmlPlugin = require('html-webpack-plugin');
const webpackConfig = module.exports = {};
const ExtractTextPlugin = require('extract-text-webpack-plugin');

webpackConfig.entry = `${__dirname}/src/main.js`;

webpackConfig.output = {
  filename: 'bundle.[hash].js',
  path: `${__dirname}/build`,
};

webpackConfig.plugins = [
  new HtmlPlugin(),
  new ExtractTextPlugin('bundle-[hash].css'),
];

webpackConfig.module = {
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
};

webpackConfig.devServer = {
  historyApiFallback: true,
};
