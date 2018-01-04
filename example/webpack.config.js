const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    inline: true
  },
  name: 'truncated-table-column-example',
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
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, '../src'),
        use: 'ts-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ inject: 'head', title: 'Truncated Table Column' })
  ]
};

module.exports = config;
