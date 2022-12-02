import getInput from "../../../utils/get_input";

// A for Rock, B for Paper, and C for Scissors.
// 1 for Rock, 2 for Paper, and 3 for Scissors
// 0 if you lost, 3 if the round was a draw, and 6 if you won

// rock > scissors 1 >< 3 -2
// scissors > paper 3 >< 2 1
// paper > rock 2 >< 1 1

// X = LOSE
// Y = DRAW
// Z = win

const symbolsPoints: Record<string, number> = {
  A: 1,
  B: 2,
  C: 3,
};

export default (): void => {
  const input = getInput(import.meta.dir)
    .split(/\r?\n/)
    .filter(line => line !== "");

  const totalScore = input.reduce((total, combat) => {
    const [symbol, outcome] = combat.split(" ");

    const point = symbolsPoints[symbol];
    if (outcome === "X") {
      total += point !== 1 ? point - 1 : 3;
    } else if (outcome === "Y") {
      total += 3;
      total += point;
    } else {
      total += 6;
      total += point !== 3 ? point + 1 : 1;
    }

    return total;
  }, 0);

  console.log(`Total score: ${totalScore}`);
};
