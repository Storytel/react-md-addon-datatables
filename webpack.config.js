const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  name: 'react-md-addon-truncatedtablecolumn',
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'react-md': 'react-md'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.json' ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `react-md-addon-truncatedtablecolumn.js`,
    library: 'react-md-addon-truncatedtablecolumn',
    libraryTarget: 'umd',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, 'src'),
        use: 'ts-loader'
      },
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
  ]
};
