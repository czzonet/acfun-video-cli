import filenamify from "filenamify";

export const parseVideoName = (videoInfo: any) => {
  const strAc号 = "ac" + (videoInfo?.dougaId || "");
  const str标题 = videoInfo?.title;
  const str作者 = videoInfo?.user.name;
  const str上传时间 = videoInfo?.createTime;
  const str描述 = videoInfo?.description;

  const raw = [strAc号, str标题, str作者, str上传时间, str描述]
    .map((d) => d || "")
    .join("_")
    .slice(0, 100);

  return raw;
};

export const parseVideoNameFixed = (videoInfo: any) => {
  return filenamify(parseVideoName(videoInfo), {
    replacement: "-",
  });
};
