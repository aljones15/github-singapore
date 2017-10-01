const path = require('path');
const webpack = require('webpack');
const src = path.resolve(__dirname, 'src');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {filename: 'index.js', path: path.resolve(__dirname, 'dist')}, 
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.jsx?$/,
      },
      { test: /\.css$/, loader: "style-loader!css-loader!sass-loader" }
      ]
  },
  plugins:[ 
    new HtmlWebpackPlugin(), 
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV || 'dev',
      GITHUBTOKEN: process.env.GITHUBTOKEN || 'please_add_token' 
    })
  ],
  resolve: {
    alias: {
      Components: path.resolve(src, 'Components'),
      Containers: path.resolve(src, 'Containers'),
      Services: path.resolve(src, 'Services')
    },
    extensions: ['.js', '.jsx']
  }
};
