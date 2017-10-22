const CommonsChunkPlugin = require('webpack').optimize.CommonsChunkPlugin;
const DefinePlugin = require('webpack').DefinePlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    app: './app/index.js'
  },
  output: {
    path: `${__dirname}/build`,
    filename: '[name].[hash].js'
  },
  plugins: [
    new ExtractTextPlugin('index.[hash].css'),
    new CommonsChunkPlugin({
      name: 'vendor'
    }),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/index.html',
      minify: {
        collapseWhitespace: true
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }, {
      test: /\.(png|jpg)$/i,
      loader: 'file-loader',
      options: { name: '[name]-[hash].[ext]' }
    }, {
      test: /favicon.ico$/i,
      loader: 'file-loader',
      options: { name: 'favicon.ico' }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
