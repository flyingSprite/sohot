const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
// const isProd = nodeEnv === 'production';

// Get more configuration information
// To see http://webpack.github.io/docs/configuration.html
module.exports = {
  // devtool: isProd ? 'hidden-source-map' : 'cheap-eval-source-map',
  context: path.join(__dirname, 'src'),
  entry: {
    js: ['./app'],
    vendor: [
      'react', 'react-dom'
    ]
  },
  output: {
    path: path.join(__dirname, 'builds'),
    filename: 'bundle.js',
    publicPath: '/builds/'
  },
  module: {
    loaders: [
      {
        test: /\.(html|ejs)$/,
        loader: 'file',
        query: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.scss$/,
        loaders: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.css$/,
        loaders: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader'
        })
      },
       {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.md/,
        loaders: [ 'html-loader', 'markdown-loader']
      },
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        loaders: [
          {
            loader: 'babel',
            query: {
              cacheDirectory: true,
              presets: ['es2015', 'stage-2', 'react'],
              plugins: ['transform-decorators-legacy']
            }
          },
          {
            loader: 'eslint'
          }
        ]
      },
      {
        test: /\.(gif|png|jpg|jpeg|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'
      }
    ],
  },
  resolve: {
    extensions: [ '.js', '.jsx'],
    modules: [
      path.resolve('/src'),
      'node_modules'
    ]
  },
  plugins: [
    new CleanPlugin('builds'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    }),
    new ExtractTextPlugin({ filename: 'style.css',  allChunks: true }),
    new webpack.ProvidePlugin({
        Promise: 'es6-promise-promise', // works as expected
    })
  ],
  devtool: 'source-map    '
};
