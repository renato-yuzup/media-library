var path = require('path');
var HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'app'),
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'app'),
    port: 7000,
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'My Media Library',
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
