import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

module.exports = {
  entry: {
    main: "./src/main/index.js",
    sub: "./src/sub/index.js"
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /(\.js[x]?$)/,
        exclude: /(node_modules|\.spec\.js$)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["main"],
      filename: "main.html",
      template: "./src/main/index.html",
      inject: "body"
    }),

    new HtmlWebpackPlugin({
      chunks: ["sub"],
      filename: "sub.html",
      template: "./src/sub/index.html",
      inject: "body"
    })
  ]
};
