import { Configuration } from "webpack";
import { projectName, projectRoot, resolvePath } from "../env";
import webpackBar from "webpackbar";
import webpackBuildNotifier from "webpack-build-notifier";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { tslOption } from "./tslOption";
// import { copyWebpackPluginInstance } from "./copyWebpackPlugin";

/** webpack的基础打包配置 */
export const commonConfig: Configuration = {
  context: projectRoot,

  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: tslOption,
        },
        exclude: /node_modules/,
      },

      // {
      //   test: /\.(tsx?|js)$/,
      //   loader: "babel-loader",
      //   options: {},
      //   exclude: /node_modules/,
      // },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     "style-loader",
      //     {
      //       loader: "css-loader",
      //       options: {
      //         modules: {
      //           localIdentName: "[local]--[hash:base64:5]",
      //           exportLocalsConvention: "camelCase",
      //         },
      //         sourceMap: true,
      //         importLoaders: 1,
      //       },
      //     },
      //     {
      //       loader: "sass-loader",
      //       options: {
      //         sourceMap: true,
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.css$/,
      //   use: [
      //     "style-loader",
      //     {
      //       loader: "css-loader",
      //       options: {
      //         sourceMap: true,
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.svg$/,
      //   use: ["file-loader"],
      // },
    ],
  },
  plugins: [
    new webpackBar({
      name: "template",
      color: "#61dafb",
    }),
    new webpackBuildNotifier(),
    // new CleanWebpackPlugin(),
    // copyWebpackPluginInstance,
  ],
};
