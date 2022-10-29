import * as fs from "fs";
import * as path from "path";
import { runShell } from "./runShell";

export async function downloadM3u8Videos(
  m3u8FullUrls: string[],
  outputFolderName: string
) {
  // 检查下载文件夹名
  if (outputFolderName == "") {
    throw new Error("[E] Download folder name is empty.");
  }
  /** 已存在需要重名文件夹 加后缀_避免冲突 */
  while (fs.existsSync(path.resolve(process.cwd(), outputFolderName))) {
    outputFolderName += "_";
    if (outputFolderName.length > 100) {
      throw new Error(
        "[E] Download folder exists and try to rename too many times."
      );
    }
  }

  /** 新建下载文件夹 在当前运行目录下 */
  const outPath = path.resolve(process.cwd(), outputFolderName);
  fs.mkdirSync(outPath);

  /** 写入下载链接列表文件 */
  fs.writeFileSync(path.resolve(outPath, "urls.txt"), m3u8FullUrls.join("\n"));

  /** aria2c多线程下载 */
  await runShell("aria2c", ["-i", "./urls.txt"], {
    cwd: path.resolve(outPath),
  });
}

export async function mergeVideo(
  tsNames: string[],
  outputFileName: string,
  outputFolderName: string
) {
  const outPath = path.resolve(process.cwd(), outputFolderName);

  /** 合并参数列表 格式file path */
  const concatStrs = tsNames.map((d) => `file '${outPath}/${d}'`);
  /** 写入合并参数列表文件 */
  fs.writeFileSync(path.resolve(outPath, "files.txt"), concatStrs.join("\n"));

  /** ffmpeg合并 */
  await runShell(
    "ffmpeg",
    [
      "-f",
      "concat",
      "-safe",
      "0",
      "-i",
      "./files.txt",
      "-c",
      "copy",
      outputFileName,
    ],
    { cwd: path.resolve(outPath) }
  );
}
