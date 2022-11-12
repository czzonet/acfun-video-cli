export const getPlatform = () => {
  if (process.platform == "win32") {
    return "win";
  } else if (process.platform == "linux") {
    return "linux";
  } else if (process.platform == "darwin") {
    return "mac";
  } else {
    throw new Error("OS not support!");
  }
};
