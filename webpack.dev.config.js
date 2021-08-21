/**
 * Development-only webpack settings.
 */
const webpack = require('webpack');
const config = require('./webpack.config.js');

config.devtool = 'eval-cheap-module-source-map';
config.mode = 'development';
config.entry.unshift('webpack-hot-middleware/client');
config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development')
    }
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  })
];

module.exports = config;
