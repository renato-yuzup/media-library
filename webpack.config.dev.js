var path = require('path');
var config = require('./webpack.config.js');

var devConfig = {
  ...config,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'app'),
    port: 7000,
  },
};

module.exports = devConfig;
