const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  return `Player ${getWin(p1, p2)} won!`;
};
function getWin(p1, p2) {
  if (p1 === p2) return "Draw!";

  if ((p1 === "rock") & (p2 === "scissors")) {
    return 1;
  }

  if ((p1 === "paper") & (p2 === "rock")) {
    return 1;
  }

  if ((p1 === "scissors") & (p2 === "paper")) {
    return 1;
  }
  return 2;
}

const getMsg = (n) => `Player ${n} won!`;
console.log(rps("rock", "scissors"), getMsg(1));
console.log(rps("scissors", "paper"), getMsg(1));
console.log(rps("paper", "rock"), getMsg(1));
console.log(rps("paper", "paper"), "Draw!");
