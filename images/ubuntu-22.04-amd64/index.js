import { spawn } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";

export default class Ubuntu2204AMD64Controller {
  static {
    this.prototype.spawn = spawn;
    this.prototype.writeFile = writeFile;
  }

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
}
