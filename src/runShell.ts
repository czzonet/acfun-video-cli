import { spawn } from "child_process";

/**
 * 执行shell命令
 * @param command 执行的shell
 * @param args shell参数
 * @param options shell选项
 * @description  
例子：

```ts
readUpdateOutputFromShell("sar", ["-n", "DEV", "1"])
```
 */
export const runShell = async (
  command: string,
  args: readonly string[],
  options: ShellOption
) =>
  new Promise((resolve, reject) => {
    const runpProcess = spawn(command, args, {
      stdio: "inherit",
      cwd: options.cwd ? options.cwd : process.cwd(),
      env: process.env,
      // detached: true,
      shell: true,
    });

    /** 结束处理 */
    runpProcess.on("close", (code) => {
      resolve(undefined);
    });
  });

type ShellOption = {
  cwd?: string;
};
