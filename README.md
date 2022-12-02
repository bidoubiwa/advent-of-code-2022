# bun-aoc-2022

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v0.2.2. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.


<h1 align="center"> Advent of code 2021 with Deno </h1>

<p align="center">
  <img src="./assets/advent.jpeg" width="400" height="auto" />
</p>

<p align="center">
  <img src="./assets/logo.svg" width="100" height="auto" />
</p>

### Requirements 

I only guarantee the scripts working with the following configuration

```
deno 1.16.4
v8 9.7.106.15
typescript 4.4.2
```

### Usage

```bash
bun run index.ts day_1 part_1
```

### Hot reload

```bash
npx nodemon --exec bun run days/day_X/part_1/index.ts
```

#### Example

```
deno run --watch -A src/day_13/part_1/index.ts
```

### Generate new day

The scripts automatically creates a new `day_x` folder based on the last day number already existing.
It adds two directories `part_1` and `part_2` and copies the `README.md` from the [repo of irevoire](git@github.com:irevoire/aoc2021.git).
Let's hope he ran his script before you launch this script. 

```bash
deno run --unstable -A scripts/init_day/index.ts
```

### Day 1

- **Part 1** [code](src/day_01/part_1/aoc.ts)

- **Part 2** [code](./src/day_01/part_2/aoc.ts)


