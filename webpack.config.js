const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const port = process.env.PORT || 3000

module.exports = {
  target: 'web',
  entry: {
    bundle: [
      './src/index.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      }
    ],
  },
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin(
      {
        filename: './src/index.html',
      }
    ),
  ]
}
