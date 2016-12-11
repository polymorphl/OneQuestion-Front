var helpers = require('./helpers');
var path = require('path');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

/**
 * Webpack Plugins
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Webpack Constants
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const HMR = helpers.hasProcessFlag('hot');
const METADATA = webpackMerge(commonConfig({env: ENV}).metadata, {
  host: HOST,
  port: PORT,
  ENV: ENV,
  HMR: HMR
});




module.exports = function(opt) {
  return webpackMerge(commonConfig({env: ENV}), {
    devtool: 'cheap-module-eval-source-map',

    output: {
      path: helpers.root('dist'),
      publicPath: 'http://localhost:8080/',
      filename: '[name].bundle.js',
      chunkFilename: '[id].chunk.js'
    },

    plugins: [
      new ExtractTextPlugin('[name].css')
    ],

    devServer: {
      port: 8080,
      historyApiFallback: true,
      stats: 'minimal',
      contentBase: path.join(__dirname, "src"),
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
    }
  });
};
