const MiniCssExtractPlugin = require('mini-css-extract-plugin').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  devServer: {
    port: 3000,
    historyApiFallback: true
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|svg)$/i,
        type: 'asset/resource'
      }
    ],
  },
}