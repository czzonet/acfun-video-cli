import { resolve } from "path";

export const CONFIG = {
  aria2cPath: {
    linux: resolve(__dirname, "../public/aria2c/linux/engine/aria2c"),
  },
  ffmpegPath: {
    linux: resolve(__dirname, "../public/ffmpeg/linux/ffmpeg"),
  },
};
