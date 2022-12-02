if (process.argv.length < 3) {
  throw new Error('missing day argument')
}
if (process.argv.length < 4) {
  throw new Error('missing part 1 or 2 argument')
}

const imp = `./days/${process.argv[2]}/index.ts`

const day = await import(imp)

day.default()
