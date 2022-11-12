// import CopyWebpackPlugin from "copy-webpack-plugin";
// import { Compiler } from "webpack";
// import { projectRoot, resolvePath } from "../env";

// type pluginType = (this: Compiler, compiler: Compiler) => void;

// export const copyWebpackPluginInstance = new CopyWebpackPlugin({
//   patterns: [
//     {
//       from: "**/*",
//       to: resolvePath(projectRoot, "./dist/web"),
//       context: resolvePath(projectRoot, "../dist"),
//       // filter: (resourcePath) =>
//       //   resourcePath != resolvePath(projectRoot, "./public/index.html"),
//     },
//   ],
// }) as pluginType;
