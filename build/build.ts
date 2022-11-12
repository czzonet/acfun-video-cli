import webpack from "webpack";
import { merge } from "webpack-merge";
import { devConf, prodConf, mainConf } from "./config/config";
import { commonConfig } from "./config/webpack.common";

const devConfig = merge(commonConfig, mainConf, devConf);

const prodConfig = merge(commonConfig, mainConf, prodConf);

const runCompile = async (config: any) => {
  return new Promise((resolve) => {
    const compiler = webpack(config);
    compiler.run((error, stats) => {
      if (error) {
        console.error(error);
        resolve(true);

        return;
      }

      console.log(
        stats!.toString({
          preset: "normal",
          modules: true,
          colors: true,
        })
      );

      resolve(true);
    });
  });
};

export const runBuild = async (isProd?: boolean) => {
  if (!isProd) {
    await runCompile(devConfig);
    console.log("\n[I] Main compiled!");
  } else {
    await runCompile(prodConfig);
    console.log("\n[I] Main compiled!");
  }

  process.exit(0);
};
