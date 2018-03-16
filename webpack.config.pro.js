const webpack = require('webpack')
const devConfig = require('./webpack.config')

const ASSET_PATH = process.env.ASSET_PATH || '/static/'

module.exports = Object.assign(devConfig, {
  entry: {
    bundle: './src/index.js',
  },
  output: Object.assign(devConfig.output, {
    filename: '[name].[chunkhash].js',
    publicPath: ASSET_PATH,
  }),
  module: {
    rules: [
      ...devConfig.module.rules,
    ]
  },
  mode: 'production',
  devtool: 'none',
})
