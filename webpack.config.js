const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './app/index.js'
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, './public')
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        // plugins: ['lodash'],
        presets: ['react', 'env']
      }
    }, {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader?importLoaders=1&sourceMap', 'postcss-loader']
    }, {
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      loader: 'file-loader?limit=8192&name=assets/[name].[ext]?[hash]'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.ejs'
    }),
    new CopyWebpackPlugin([
      { from: './app/favicon.ico' },
      { from: './app/assets', to: 'assets' }
    ])
  ],
  devtool: 'eval'
}