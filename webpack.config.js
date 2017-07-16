var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var env = process.env.WEBPACK_ENV || 'dev';
var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist');

// Modify this to adjust the names of output files.
// Remember: If you change this, you'll need to adjust the `examples/index.html` link's as well.
var YOUR_APPLICATIONS_NAME = 'app';

// Modify this to change the dev server port.
var DEV_SERVER_PORT = '8080';

var devtools = '';
var plugins = [];
var outputFile;
var outputCssFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));

  outputFile = YOUR_APPLICATIONS_NAME + '.min.js';
  outputCssFile = YOUR_APPLICATIONS_NAME + '.min.css';
} else {
  devtools += 'source-map';

  outputFile = YOUR_APPLICATIONS_NAME + '.js';
  outputCssFile = YOUR_APPLICATIONS_NAME + '.css';
}

plugins.push(new ExtractTextPlugin({
  filename: './css/' + outputCssFile,
  allChunks: true
}));

let config = {
  entry: [
    APP_DIR + '/js/app.js',
    APP_DIR + '/scss/main.scss'
  ],
  output: {
    path: BUILD_DIR,
    filename: './js/' + outputFile
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: [/(node_modules|bower_components)/],
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /(\.jsx|\.js)$/,
        exclude: [/node_modules/],
        loader: 'eslint-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1'
        })
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: devtools,
  plugins: plugins,
  devServer: {
    contentBase: path.join(__dirname, 'example'),
    compress: true,
    port: DEV_SERVER_PORT
  }
};

module.exports = config;
