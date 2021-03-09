const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CleanPlugin = new CleanWebpackPlugin();
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HTMLPlugin = require("html-webpack-plugin");

const assetsPath = "/assets";
const resolve = (dir) => {
  return path.resolve(__dirname, dir);
};
const name = require("./package.json").name;
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "[name].js",
    library: `${name}`,
    libraryTarget: "umd", // 把微应用打包成 umd 库格式
    jsonpFunction: `webpackJsonp_${name}`,
  },
  mode: "development",
  devServer: {
    contentBase: "./dist",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  module: {
    rules: [
      {
        // enforce: 'pre',
        test: /\.vue$/,
        include: path.resolve(__dirname, "./src"),
        exclude: /node_modules/,
        loader: "vue-loader",
      },
      {
        test: /.jsx?$/,
        include: path.resolve(__dirname, "./src"),
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: "file-loader",
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              esModule: true,
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]",
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
    alias: {
      "@": resolve("src"),
    },
  },
  plugins: [
    CleanPlugin,
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"development"',
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[hash].css",
    }),
    new HTMLPlugin({
      title: "demo",
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.html"),
      templateParameters: {
        publicPath: assetsPath,
      },
    }),
    new VueLoaderPlugin(),
  ],
  devtool: "inline-source-map",
};
