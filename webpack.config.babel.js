import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

module.exports = {
  entry: {
    main: "./src/main/index.js"
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
      template: "./src/main/index.html",
      inject: "body"
    })
  ]
};
