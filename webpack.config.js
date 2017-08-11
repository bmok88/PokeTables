var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'client/public');
var APP_DIR = path.resolve(__dirname, 'client/src');

module.exports = {
  entry: APP_DIR + '/poketable.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: path.join(__dirname, 'client/public'),
    compress: true,
    open: true,
    hot: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};

