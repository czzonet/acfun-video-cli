import * as https from "https";

export async function getUrlData(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res === null) {
          reject(new Error("[E] No Response."));
        }

        const { statusCode } = res;
        const contentType = res.headers["content-type"];
        const allowTypes = [
          "application/json; charset=utf-8",
          "application/octet-stream",
          "application/vnd.apple.mpegurl",
        ];

        let error;
        if (statusCode !== 200) {
          error = new Error("[E] Response code: " + statusCode);
        } else if (
          !(contentType !== undefined && allowTypes.includes(contentType))
        ) {
          error = new Error(
            "[E] Invalid content-type.\n" +
              `Expected one of ${allowTypes} but received ${contentType}`
          );
        }

        if (error) {
          res.resume();
          reject(error);
        }

        res.setEncoding("utf8");
        let rawData = "";
        res.on("data", (chunk) => (rawData += chunk));

        res.on("close", () => {
          resolve(rawData);
        });
      })
      .on("error", (error) => {
        reject(new Error("[E] Https.Get error: " + error));
      });
  });
}
