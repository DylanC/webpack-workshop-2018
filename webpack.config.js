const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
  	filename: "bundle.js"
  },
  plugins: [
  	new HtmlWebpackPlugin(),
  	new webpack.ProgressPlugin()
  ]
};
