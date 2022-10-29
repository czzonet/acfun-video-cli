#!/usr/bin/env node

import { parseUrl, parseM3u8 } from "./parser";
import { downloadM3u8Videos, mergeVideo } from "./video";

async function main() {
  const url = process.argv[2];
  console.log("Your input: ", url);
  if (typeof url !== "string") {
    console.log("[E] Url input required.");
    return;
  }
  if (url.match(/^https:\/\/www\.acfun\.cn\/v\/ac\d+$/) === null) {
    console.log(
      "[E] Url input invalid.Valid input example: https://www.acfun.cn/v/ac4621380"
    );
    return;
  }

  console.log("\n------\nParse url");
  const m3u8Urls = await parseUrl(url);
  console.log("ok");

  console.log("\n------\nParse m3u8");
  const m3u8Url1080p = m3u8Urls[0];
  console.log("[1080p] ", m3u8Url1080p);
  const info = await parseM3u8(m3u8Url1080p);
  console.log("ok");

  console.log("\n------\nDownload ts videos");
  const { m3u8FullUrls, tsNames, outputFolderName, outputFileName } = info;
  await downloadM3u8Videos(m3u8FullUrls, outputFolderName);
  console.log("ok");

  console.log("\n------\nMerge video");
  await mergeVideo(tsNames, outputFileName, outputFolderName);
  console.log("ok");
}

main().then();
