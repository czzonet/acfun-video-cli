import { from, map, mergeMap, of, tap } from "rxjs";
import { parseM3u8, parseUrl } from "../../parser";
import { downloadM3u8Videos, mergeVideo } from "../../video";

export const indexRun = (url: string) => {
  console.log("run");

  of(url)
    .pipe(
      // map((d) => d),
      mergeMap((url) => parseUrl(url)),
      tap((m3u8Urls) => {
        console.log("\n------\n解析清晰度：" + m3u8Urls.length + "个");
      }),
      map((m3u8Urls) => m3u8Urls[0]),
      tap((m3u8Url1080p) => {
        console.log("[I] 最高清晰度", m3u8Url1080p);
      }),
      mergeMap((m3u8Url1080p) => parseM3u8(m3u8Url1080p))
    )
    .subscribe((info) => {
      console.log("\n------\nDownload ts videos", info);
      const { m3u8FullUrls, tsNames, outputFolderName, outputFileName } = info;
      if (m3u8FullUrls.length == 1) {
        console.log("parse error");
      } else {
        downloadM3u8Videos(m3u8FullUrls, outputFolderName).then((d) => {
          console.log("ok");
          console.log("\n------\nMerge video");
          mergeVideo(tsNames, outputFileName, outputFolderName).then(() => {
            console.log("ok");
            console.log("Done.");
          });
        });
      }
    });
};
