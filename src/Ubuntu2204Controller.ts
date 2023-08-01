import { spawn } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";

export default class Ubuntu2204Controller {
  async start() {
    if (process.env.OS_RUNNER !== "Linux") {
      throw new DOMException();
    }
    const etcOSRelease = await readFile("/etc/os-release");
    const name = etcOSRelease.match(/^NAME=(.*)$/m)[1];
    if (!name.includes("Ubuntu 22.04")) {
      throw new DOMException();
    }
  }

  async spawn(
    cmd: string,
    args: string[] = [],
    options: { env?: Record<string, string> } = {}
  ) {
    return spawn(cmd, args, options);
  }

  async writeFile(path: string | URL, contents: string): Promise<void> {
    await writeFile(path, contents);
  }
}
