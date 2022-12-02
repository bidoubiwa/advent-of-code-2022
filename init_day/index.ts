import * as fs from "fs";
import * as path from "path";

const pathToDays = path.resolve(__dirname, "../", "days");
const dayDirs = fs.readdirSync(pathToDays);
const dayNumbers = dayDirs.map(day => parseInt(day.substring("day_".length)));

const lastDay = Math.max(...dayNumbers);
const newDay = `day_${lastDay + 1}`;

const template = fs.readFileSync(path.resolve(__dirname, "./day_template.ts"), {
  encoding: "utf-8",
});
const README = `
  ## run

  bun run index.ts
`;

fs.mkdirSync(`${pathToDays}/${newDay}/part_1`, { recursive: true });
fs.writeFileSync(`${pathToDays}/${newDay}/part_1/index.ts`, template, {
  flag: "wx",
});
fs.writeFileSync(`${pathToDays}/${newDay}/part_1/input`, "", { flag: "wx" });
fs.writeFileSync(`${pathToDays}/${newDay}/part_1/readme.md`, README, {
  flag: "wx",
});

fs.mkdirSync(`${pathToDays}/${newDay}/part_2`, { recursive: true });
fs.writeFileSync(`${pathToDays}/${newDay}/part_2/index.ts`, "", { flag: "wx" });
fs.writeFileSync(`${pathToDays}/${newDay}/part_2/input`, "", { flag: "wx" });
fs.writeFileSync(`${pathToDays}/${newDay}/part_2/readme.md`, README, {
  flag: "wx",
});

console.log(`${newDay} files are created`);
