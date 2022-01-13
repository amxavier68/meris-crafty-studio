const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  target: "web",
  devtool: false,

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      linkType: 'text/css',
      filename: 'css/[name].css'
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: { loader: "babel-loader"}
      },
      {
        test: /\.(gif|jpe?g|png)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [ 
          MiniCssExtractPlugin.loader, 
          "css-loader", 
          "sass-loader",
          "postcss-loader" 
        ]
      }
    ],
  },

  resolve: {
    extensions: [".js",".jsx"]
  }
};