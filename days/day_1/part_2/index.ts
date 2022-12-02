import getInput from "../../../utils/get_input";

export default (): void => {
  const input = getInput(import.meta.dir);
  const elfsFood = input
    .split(/\n\s*\n/)
    .reduce((stashes: number[], rawStash) => {
      const elfStash = rawStash
        .split(/\r?\n/)
        .filter(line => line !== "")
        .map(calorie => parseInt(calorie))
        .reduce((totalCalorie, calorie) => totalCalorie + calorie, 0);

      stashes.push(elfStash);
      return stashes;
    }, []);

  const sortedStashes = elfsFood.sort((a, b) => b - a);
  const total = sortedStashes[0] + sortedStashes[1] + sortedStashes[2];

  console.log(
    `Combined calories of the tree elfs carrying the most is ${total}`
  );
};
