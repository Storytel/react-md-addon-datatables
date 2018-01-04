const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  name: 'react-md-addon-datatables',
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
    filename: `react-md-addon-datatables.js`,
    library: 'react-md-addon-datatables',
    libraryTarget: 'umd',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
              compilerOptions: {
                declaration: true,
                declarationDir: '.'
              },
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin(),
  ]
};
