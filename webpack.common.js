const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const SvgStorePlugin = require('webpack-svg-icon-system/lib/SvgStorePlugin');

module.exports = {
  entry: {
    main:  './src/main.js',
    landing: './src/landingPage.js',
    project: './src/projectPage.js',
    important: './src/loadImportant.js'
  },
  output: {
    filename: '[name].app.js',
    path: path.resolve(__dirname, 'assets'),
  },
  // TODO: Change to something faster in the future
  // TODO: Add webpack-dev-server 
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    //new webpack.optimize.CommonsChunkPlugin({
    //  name: 'common' // Specify the bundle name
    //}),
    new ExtractTextPlugin('style.css'),
    new SvgStorePlugin()
  ],
  resolve: {
    alias: {
      styles: './src/'
    }
  },
  // TODO: Minimize css/js
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader', options: {
              sourceMap: true,
              minimize: true
            }
          },{
            loader: 'postcss-loader', options: {
              sourceMap: true
            }
          },{
            loader: 'sass-loader', options: {
              sourceMap: true,
              options: {
                includePaths: [path.resolve(__dirname, "node_modules/breakpoint-sass/stylesheets")]
    
              }
            },
            
          }],
          // use style loader in development
          fallback: 'style-loader'
        }) 
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'webpack-svg-icon-system',
        options: {
          name: 'svg/sprite.svg'
        }
      }
    ]
  }
};
