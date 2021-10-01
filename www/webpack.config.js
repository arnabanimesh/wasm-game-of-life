const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');
var BrotliPlugin = require('brotli-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  mode: "development",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new CopyWebpackPlugin(['index.html', 'favicon.ico']),
    new BrotliPlugin({
      asset: '[file].br',
      test: /\.(js|wasm)$/
    })
  ],
};
