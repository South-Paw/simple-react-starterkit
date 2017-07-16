var webpack = require('webpack');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
  entry: [
    APP_DIR + '/js/App.jsx',
    APP_DIR + '/scss/main.scss'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'js/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      include: APP_DIR,
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        loader: 'css-loader?importLoaders=1',
      }),
    },
    {
      test: /\.(sass|scss)$/,
      loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
    }]
  },
  plugins: [
    //new CleanWebpackPlugin(['dist/css', 'dist/js']),
    new ExtractTextPlugin({
      filename: 'css/bundle.css',
      allChunks: true
    })
  ]
};

module.exports = config;
