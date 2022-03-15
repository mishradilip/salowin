/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const { dest, buildPath, MODE } = require('./paths');

const conf = {
  entry: {
    script: path.resolve(__dirname, '../static/js/index.js'),
    categoryScript: path.resolve(__dirname, '../static/js/category.js'),
    productScript: path.resolve(__dirname, '../static/js/product.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, `../build/js/`),
    publicPath: `${buildPath}/`,
    chunkFilename: '[name].bundle.js'
  },
  devServer: {
    overlay: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx)$/,
        enforce: 'pre',
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env',
                {
                  targets: {
                    chrome: '58',
                    ie: '10'
                  },
                  loose: false,
                  modules: false,
                  useBuiltIns: 'entry'
                }
              ],
              'stage-2'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({ ...process.env })
    })
  ],
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin()],
    usedExports: false,
    sideEffects: false
  },
  watch: MODE === 'development'
};

module.exports = () => {
  conf.devtool = 'source-map';
  return conf;
};