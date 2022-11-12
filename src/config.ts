import { resolve } from "path";

export const CONFIG = {
  aria2cPath: {
    linux: resolve(__dirname, "../public/aria2c/linux/engine/aria2c"),
    win: resolve(__dirname, "../public/aria2c/win32/engine/aria2c.exe"),
    mac: resolve(__dirname, "../public/aria2c/darwin/engine/aria2c"),
  },
  ffmpegPath: {
    linux: resolve(__dirname, "../public/ffmpeg/linux/ffmpeg"),
    win: resolve(__dirname, "../public/ffmpeg/win32/ffmpeg.exe"),
    mac: resolve(__dirname, "../public/ffmpeg/darwin/ffmpeg"),
  },
};
