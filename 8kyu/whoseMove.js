function whoseMove(lastPlayer, win) {
  if (win) {
    return lastPlayer;
  }
  return lastPlayer === "black" ? "white" : "black";
}

console.log(whoseMove("black", false), "white");
console.log(whoseMove("white", true), "white");
console.log(whoseMove("white", false), "black");
