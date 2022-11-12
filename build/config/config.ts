import { Configuration } from "webpack";
import { projectName, projectRoot, resolvePath } from "../env";
// import { copyWebpackPluginInstance } from "./copyWebpackPlugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

export const devConf: Configuration = {
  mode: "development",
  devtool: "inline-source-map",
};

export const prodConf: Configuration = {
  mode: "production",
  devtool: false,
};

export const mainConf: Configuration = {
  target: "node",
  entry: {
    main: resolvePath(projectRoot, "./src/index.ts"),
  },
  output: {
    // publicPath: "/",
    path: resolvePath(projectRoot, "./dist/"),
    filename: "[name].js",
    hashSalt: projectName,
  },
  plugins: [
    /** 清除并拷贝一次最新的前端资源 */
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [resolvePath(projectRoot, "./dist")],
    }),
    // copyWebpackPluginInstance,
  ],
};
