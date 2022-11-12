import {
  pipe,
  split,
  slice,
  join,
  concat,
  converge,
  map,
  partial,
  compose,
} from "ramda";

export const parseM3u8 = (m3u8File: string, m3u8Url: string): string[] => {
  /** 分离ts文件链接 */
  const rawPieces = m3u8File.split(/\n#EXTINF:.{8},\n/);
  /** 过滤头部 */
  const m3u8RelativeLinks = rawPieces.slice(1);
  /** 修改尾部 去掉尾部多余的结束符 */
  const patchedTail =
    m3u8RelativeLinks[m3u8RelativeLinks.length - 1].split("\n")[0];
  m3u8RelativeLinks[m3u8RelativeLinks.length - 1] = patchedTail;
  /** 完整链接，直接加m3u8Url的通用前缀 */
  const m3u8Prefix = m3u8Url.split("/").slice(0, -1).join("/");
  const m3u8FullUrls = m3u8RelativeLinks.map((d) => m3u8Prefix + "/" + d);
  return m3u8FullUrls;
};

const fn去除数组末尾元素: (strArr: string[]) => string[] = slice(0, -1);
const fn去除数组头部元素: (strArr: string[]) => string[] = slice(1, Infinity);

const fn获取数组末尾元素 = (strArr: string[]): string =>
  strArr[strArr.length - 1] || "";
const fn获取数组头部元素 = (strArr: string[]): string => strArr[0] || "";
const fn添加数组包裹 = (str: string): [string] => [str];
export const fn去掉尾部多余的结束符: (s: string) => string = pipe(
  split("\n"),
  fn获取数组头部元素
);
const fn切分m3u8文件的子地址字段: (file: string) => string[] =
  split(/\n#EXTINF:.{8},\n/);
const fn过滤头部非地址的头部字段: (subUrls: string[]) => string[] = slice(
  1,
  Infinity
);
const fn连接数组: (strArr: string[], strArr2: string[]) => string[] = concat;
const fn修改尾部 = converge(fn连接数组, [
  fn去除数组末尾元素,
  pipe(fn获取数组末尾元素, fn去掉尾部多余的结束符, fn添加数组包裹),
]);
const fn获取m3u8Url的通用前缀: (m3u8Url: string) => string = pipe(
  split("/"),
  fn去除数组末尾元素,
  join("/")
);

export const parseM3u8ByRamda = (m3u8File: string, m3u8Url: string): string[] =>
  map(
    pipe(concat("/"), concat(fn获取m3u8Url的通用前缀(m3u8Url))),
    pipe(
      fn切分m3u8文件的子地址字段,
      fn过滤头部非地址的头部字段,
      fn修改尾部
    )(m3u8File)
  );

type ArraySlice = (strArr: string[]) => string[];
type ArrayConcat = (strArr: string[], strArr2: string[]) => string[];
export const parseM3u8ByRamdaFull = (
  m3u8File: string,
  m3u8Url: string
): string[] =>
  map(
    pipe(
      concat("/"),
      concat(pipe(split("/"), slice(0, -1) as ArraySlice, join("/"))(m3u8Url))
    ),
    pipe(
      split(/\n#EXTINF:.{8},\n/),
      slice(1, Infinity) as ArraySlice,
      converge(concat as ArrayConcat, [
        slice(0, -1) as ArraySlice,
        pipe(
          (strArr) => strArr[strArr.length - 1] || "",
          pipe(split("\n"), (strArr) => strArr[0] || ""),
          (str) => [str]
        ),
      ])
    )(m3u8File)
  );
