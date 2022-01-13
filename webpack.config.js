const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  target: "web",

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html'
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: { loader: "babel-loader"}
      }
    ],
  },

  resolve: {
    extensions: [".js",".jsx"]
  }
};