import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

module.exports = {
  target: "web",

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
      },
      {
        test: /(\.css$)/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  devtool: "inline-source-map",

  devServer: {
    host: "localhost",
    port: 3000,
    contentBase: path.resolve(__dirname, "dist")
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
