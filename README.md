<h1 align="center"> Advent of code 2022 with Bun </h1>

<p align="center">
  <img src="./assets/advent.jpeg" width="400" height="auto" />
</p>


### Usage

```bash
bun run index.ts [day_number] [part_number]
```

### Hot reload

```bash
npx nodemon --exec bun run index.ts [day_number] [part_number]
```

#### Example

```bash
npx nodemon --exec bun run index.ts 3 1
```

runs day 3, part 1.

### Generate new day

The scripts automatically creates a new `day_x` folder based on the last day number already existing.

```bash
bun run init_day/index.ts
```

### Day 1

- **Part 1** [code](src/day_01/part_1/aoc.ts)

- **Part 2** [code](./src/day_01/part_2/aoc.ts)


