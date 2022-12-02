import getInput from "../../../utils/get_input";

// A for Rock, B for Paper, and C for Scissors.
//  X for Rock, Y for Paper, and Z for Scissors
// 1 for Rock, 2 for Paper, and 3 for Scissors
// 0 if you lost, 3 if the round was a draw, and 6 if you won

// rock > scissors 1 >< 3 -2
// scissors > paper 3 >< 2 1
// paper > rock 2 >< 1 1

export default (): void => {
  const input = getInput(import.meta.dir)
    .replaceAll(/X|A/g, "1")
    .replaceAll(/Y|B/g, "2")
    .replaceAll(/Z|C/g, "3")
    .split(/\r?\n/)
    .filter(line => line !== "");

  const totalScore = input.reduce((total, combat) => {
    const [opponent, me] = combat.split(" ").map(symbol => parseInt(symbol));

    total += me;
    if (opponent === me) total += 3;
    else if (me - opponent === -2 || me - opponent === 1) total += 6;

    return total;
  }, 0);

  console.log(`Total score: ${totalScore}`);
};
