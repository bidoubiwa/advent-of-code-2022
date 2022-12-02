import * as fs from "fs";
import * as path from "path";

const pathToDays = path.resolve(import.meta.dir, "../", "days");
const dayDirs = fs.readdirSync(pathToDays);
const dayNumbers = dayDirs.map(day => parseInt(day.substring("day_".length)));

const lastDay = Math.max(...dayNumbers);
const newDay = `day_${lastDay + 1}`;

const template = fs.readFileSync(
  path.resolve(import.meta.dir, "./day_template"),
  {
    encoding: "utf-8",
  }
);
const README = `
  ## run

  bun run index.ts
`;
fs.mkdirSync(`${pathToDays}/${newDay}`, { recursive: true });
fs.writeFileSync(`${pathToDays}/${newDay}/README.md`, README, {
  flag: "wx",
});

fs.mkdirSync(`${pathToDays}/${newDay}/part_1`, { recursive: true });
fs.writeFileSync(`${pathToDays}/${newDay}/input`, "", { flag: "wx" });

// part 1
fs.writeFileSync(`${pathToDays}/${newDay}/part_1/index.ts`, template, {
  flag: "wx",
});

// part 2
fs.mkdirSync(`${pathToDays}/${newDay}/part_2`, { recursive: true });
fs.writeFileSync(`${pathToDays}/${newDay}/part_2/index.ts`, "", { flag: "wx" });

console.log(`${newDay} files are created`);
