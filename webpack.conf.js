const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const prod = process.argv.indexOf('-p') !== -1;

const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules : [
      {test: /\.css$/, use: ['style-loader','css-loader']},
      {test: /\.(js|jsx)$/, use: 'babel-loader'},
      {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=/public/[name].[ext]"}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public/index.html')})
  ],
  devtool: 'source-map',

  devServer: {
    compress: false,
    port: 9000
  }
};

/*
This code was seperated from the config for multiple reasons.
Other conditional things can be added very simply.
Also, the check for config.plugins is so it is not dependent on the structure above.
*/

config.plugins = config.plugins||[];
if (prod) {
  config.plugins.push(new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': `"production"`
      }
  }));
} else {
  config.plugins.push(new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': `""`
      }
  }));
}

module.exports = config;
