const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules : [
      {test: /\.css$/, use: 'css-loader'},
      {test: /\.(js|jsx)$/, use: 'babel-loader'},
      {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=/public/[name].[ext]"}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public/index.html')})
  ],

  devServer: {
    compress: false,
    port: 9000
  }
};

module.exports = config;
