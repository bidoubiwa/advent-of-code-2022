import * as fs from 'fs';

if (process.argv.length < 3) {
  throw new Error('you must provide a day number following this format day_[NUMBER]')  
}

const day_number = process.argv[2]
const template = fs.readFileSync('./day_template.ts', { encoding: 'utf-8'})
const README = `
  ## run

  bun run index.ts
`

fs.mkdirSync(`../days/${day_number}/part_1`, {recursive: true})
fs.writeFileSync(`../days/${day_number}/part_1/index.ts`, template, { flag: 'wx'})
fs.writeFileSync(`../days/${day_number}/part_1/input`, '', { flag: 'wx'})
fs.writeFileSync(`../days/${day_number}/part_1/readme.md`, README, { flag: 'wx'})

fs.mkdirSync(`../days/${day_number}/part_2`, {recursive: true})
fs.writeFileSync(`../days/${day_number}/part_2/index.ts`, "", { flag: 'wx'})
fs.writeFileSync(`../days/${day_number}/part_2/input`, '', { flag: 'wx'})
fs.writeFileSync(`../days/${day_number}/part_2/readme.md`, README, { flag: 'wx'})

console.log(`${day_number} files are created`)
