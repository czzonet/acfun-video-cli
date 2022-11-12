import * as fs from "fs";
import * as path from "path";
import { runShell } from "./runShell";
import { CONFIG } from "./config";

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

  const str下载参数文件 = m3u8FullUrls
    .map((d, i) => {
      return d + "\n  out=" + i + ".ts"; /** 指定文件名0.ts 1.ts ... */
    })
    .join("\n");

  /** 写入下载链接列表文件 */
  fs.writeFileSync(path.resolve(outPath, "urls.txt"), str下载参数文件);

  // for (let index = 0; index < m3u8FullUrls.length; index++) {
  //   const element = m3u8FullUrls[index];
  //   await runShell(
  //     CONFIG.aria2cPath.linux,
  //     [
  //       "--header",
  //       "Referer: https://www.acfun.cn/",
  //       "-o",
  //       index + ".ts",
  //       element,
  //     ],
  //     {
  //       cwd: path.resolve(outPath),
  //     }
  //   );
  // }

  /** aria2c 一一下载(-j 1) */
  await runShell(
    CONFIG.aria2cPath.linux,
    [
      "--header",
      "Referer: https://www.acfun.cn/",
      "-j",
      "1",
      "-i",
      "./urls.txt",
    ],
    {
      cwd: path.resolve(outPath),
    }
  );
}

export async function mergeVideo(
  tsNames: string[],
  outputFileName: string,
  outputFolderName: string
) {
  const outPath = path.resolve(process.cwd(), outputFolderName);

  /** 合并参数列表 格式file path */
  const concatStrs = tsNames.map((d, i) => `file '${outPath}/${i}.ts'`);
  /** 写入合并参数列表文件 */
  fs.writeFileSync(path.resolve(outPath, "files.txt"), concatStrs.join("\n"));

  /** ffmpeg合并 */
  await runShell(
    CONFIG.ffmpegPath.linux,
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

// fetch(
//   "https://tx-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/LFZWVnv3A4Tr1_Vqj-lsPnKXMyTbnggEhSfQv0XF2XWObC-7oqq0sVjkIvVQK-Rq.00000.ts?pkey=ABD9WssvKml_kCyLV9qMFe8DV66lwqETRF5TT6XtB-uxVfNwL2QNDwFWYeQfxwcHB-dp2REfGbq_m3XbXe9ciErG358SVVhLVxDbMBvHvODxHn8qoY_WkOM2EWZTQOYmsO38pGi_mbEI3o9GKUrcB1WRieuaAfxjWcX9c03KE3R-KE1yCnpo8WjgtNnwvRPyIu68h7yRqDqN-qwwyQ1O99Fa7esjJdoOaZA_ZZL3QXaxhI_IG5yUukboFU_tlsWD6XU&safety_id=AAL9hzGGzMzcXDX1_F_YaN9v",
//   {
//     headers: {
//       accept: "*/*",
//       "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
//       "cache-control": "no-cache",
//       pragma: "no-cache",
//       "sec-ch-ua":
//         '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": '"Windows"',
//       "sec-fetch-dest": "empty",
//       "sec-fetch-mode": "cors",
//       "sec-fetch-site": "same-site",
//       Referer: "https://www.acfun.cn/",
//       "Referrer-Policy": "strict-origin-when-cross-origin",
//     },
//     body: null,
//     method: "GET",
//   }
// );
// GET /mediacloud/acfun/acfun_video/hls/LFZWVnv3A4Tr1_Vqj-lsPnKXMyTbnggEhSfQv0XF2XWObC-7oqq0sVjkIvVQK-Rq.00000.ts?pkey=ABD9WssvKml_kCyLV9qMFe8DV66lwqETRF5TT6XtB-uxVfNwL2QNDwFWYeQfxwcHB-dp2REfGbq_m3XbXe9ciErG358SVVhLVxDbMBvHvODxHn8qoY_WkOM2EWZTQOYmsO38pGi_mbEI3o9GKUrcB1WRieuaAfxjWcX9c03KE3R-KE1yCnpo8WjgtNnwvRPyIu68h7yRqDqN-qwwyQ1O99Fa7esjJdoOaZA_ZZL3QXaxhI_IG5yUukboFU_tlsWD6XU&safety_id=AAL9hzGGzMzcXDX1_F_YaN9v HTTP/1.1
// Accept: */*
// Accept-Encoding: gzip, deflate, br
// Accept-Language: zh-CN,zh;q=0.9,en;q=0.8
// Cache-Control: no-cache
// Connection: keep-alive
// Host: tx-safety-video.acfun.cn
// Origin: https://www.acfun.cn
// Pragma: no-cache
// Referer: https://www.acfun.cn/
// Sec-Fetch-Dest: empty
// Sec-Fetch-Mode: cors
// Sec-Fetch-Site: same-site
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
// sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"
// sec-ch-ua-mobile: ?0
// sec-ch-ua-platform: "Windows"
