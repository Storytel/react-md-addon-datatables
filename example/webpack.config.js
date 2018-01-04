const { DefinePlugin } = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
  devtool: process.env.NODE_ENV === 'development' ? 'cheap-module-eval-source-map' : 'source-map',
  name: 'react-md-addon-datatables-example',
  entry: [
    path.join(__dirname, 'index.jsx')
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.jsx', '.js', '.json' ]
  },
  output: {
    path: path.join(__dirname, '..', 'dist-example'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [ __dirname, path.join(__dirname, '..', 'src/') ],
        use: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, '../src'),
        use: [ 'babel-loader', 'ts-loader' ]
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ inject: 'head', title: 'react-md-addon-datatables' }),
    new UglifyJSPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};

module.exports = config;
