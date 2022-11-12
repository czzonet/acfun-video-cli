import { renameSync } from "fs";
import { resolve } from "path";
import { from, map, mergeMap, of, tap } from "rxjs";
import { parseM3u8, parseUrl } from "../../parser";
import { downloadM3u8Videos, mergeVideo } from "../../video";

export const indexRun = (url: string) => {
  console.log("run");

  let outputFolderName = "";

  of(url)
    .pipe(
      // map((d) => d),
      mergeMap((url) => parseUrl(url)),
      tap(({ urlM3u8s, videoName }) => {
        console.log("\n------\n");
        console.log(videoName);
        console.log("解析清晰度：" + urlM3u8s.length + "个");
        outputFolderName = videoName;
      }),
      map(({ urlM3u8s, videoName }) => urlM3u8s[0]),
      tap((m3u8Url1080p) => {
        console.log("[I] 最高清晰度", m3u8Url1080p);
      }),
      mergeMap((m3u8Url1080p) => parseM3u8(m3u8Url1080p))
    )
    .subscribe((info) => {
      // console.log("\n------\nDownload ts videos", info);
      const { m3u8FullUrls, tsNames } = info;
      if (m3u8FullUrls.length == 1) {
        console.log("parse error");
      } else {
        downloadM3u8Videos(m3u8FullUrls, outputFolderName).then((d) => {
          console.log("ok");
          console.log("\n------\nMerge video");
          mergeVideo(tsNames, outputFolderName + ".mp4", outputFolderName).then(
            () => {
              console.log("ok");
              const s = resolve(
                process.cwd(),
                outputFolderName,
                outputFolderName + ".mp4"
              );
              const t = resolve(
                process.cwd(),
                // outputFolderName,
                outputFolderName + ".mp4"
              );
              renameSync(s, t);
              console.log("Done.");
            }
          );
        });
      }
    });
};
