import { getUrlData } from "./api";

export async function parseUrl(videoUrlAddress: string) {
  // eg https://www.acfun.cn/v/ac4621380?quickViewId=videoInfo_new&ajaxpipe=1
  const urlSuffix = "?quickViewId=videoInfo_new&ajaxpipe=1";
  const url = videoUrlAddress + urlSuffix;

  const raw: string = await getUrlData(url);

  // Split
  const strsRemoveHeader = raw.split("window.pageInfo = window.videoInfo =");
  const strsRemoveTail = strsRemoveHeader[1].split("</script>");
  const strJson = strsRemoveTail[0];

  const strJsonEscaped = escapeSpecialChars(strJson);
  /** Object videoInfo */
  const videoInfo = JSON.parse(strJsonEscaped);

  const ksPlayJson = videoInfo.currentVideoInfo.ksPlayJson;
  /** Object ksPlay */
  const ksPlay = JSON.parse(ksPlayJson);

  const representations: any[] = ksPlay.adaptationSet[0].representation;
  const urlM3u8s: string[] = representations.map((d) => d.url);

  return urlM3u8s;
}

/**
 * 去除JSON的一些转义 \\" -> \" ->"
 * @param str
 */
function escapeSpecialChars(str: string) {
  return str.replace(/\\\\"/g, '\\"').replace(/\\"/g, '"');
}

export async function parseM3u8(m3u8Url: string) {
  const m3u8File = await getUrlData(m3u8Url);
  /** 分离ts文件链接 */
  const rawPieces = m3u8File.split(/\n#EXTINF:.{8},\n/);
  /** 过滤头部 */
  const m3u8RelativeLinks = rawPieces.slice(1);
  /** 修改尾部 去掉尾部多余的结束符 */
  const patchedTail = m3u8RelativeLinks[m3u8RelativeLinks.length - 1].split(
    "\n"
  )[0];
  m3u8RelativeLinks[m3u8RelativeLinks.length - 1] = patchedTail;

  /** 完整链接，直接加m3u8Url的通用前缀 */
  const m3u8Prefix = m3u8Url.split("/").slice(0, -1).join("/");
  const m3u8FullUrls = m3u8RelativeLinks.map((d) => m3u8Prefix + "/" + d);
  /** aria2c下载的文件名，就是取url最后一段，去掉末尾url参数(?之后是url参数) */
  const tsNames = m3u8RelativeLinks.map((d) => d.split("?")[0]);
  /** 文件夹名，去掉文件名末尾分片号 */
  let outputFolderName = tsNames[0].slice(0, -9);
  /** 输出最后合并的文件名，加个通用mp4后缀 */
  const outputFileName = outputFolderName + ".mp4";

  return {
    m3u8FullUrls,
    tsNames,
    outputFolderName,
    outputFileName,
  };
}
