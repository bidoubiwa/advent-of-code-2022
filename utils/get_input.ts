import * as fs from "fs";
import * as path from "path";

export default function (dirname: string): string {
  const inputPath = path.resolve(dirname, "input");

  const input = fs.readFileSync(inputPath, { encoding: "utf-8" });
  return input;
}
