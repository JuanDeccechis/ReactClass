var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './index.js',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader'},
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}