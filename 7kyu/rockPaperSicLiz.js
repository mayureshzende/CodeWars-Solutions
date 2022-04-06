/*
Scissors cuts Paper
Scissors decapitates Lizard
Lizard poisons Spock
Lizard eats Paper
Paper covers Rock
Paper disproves Spock
Spock smashes Scissors
Spock vaporizes Rock
Rock crushes Lizard
(and as it always has) Rock crushes Scissors 
*/

function rpsls(pl1, pl2) {
  //Your Magnificent Code here
  if (pl1 === pl2) return "Draw!";
  function one() {
    return "Player 1 Won!";
  }
  function two() {
    return "Player 2 Won!";
  }

  if ((pl1 === "rock") & (pl2 === "scissors" || pl2 === "lizard")) return one();
  if ((pl1 === "paper") & (pl2 === "spock" || pl2 === "rock")) return one();
  if ((pl1 === "scissors") & (pl2 === "paper" || pl2 === "lizard"))
    return one();
  if ((pl1 === "lizard") & (pl2 === "spock" || pl2 === "paper")) return one();
  if ((pl1 === "spock") & (pl2 === "scissors" || pl2 === "rock")) return one();

  return two();
}

/* 
const MATCH = {
  scissors: ['paper', 'lizard'],
  paper: ['rock', 'spock'],
  rock: ['lizard', 'scissors'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock'],
};


function rpsls(pl1, pl2) {
  return MATCH[pl1].indexOf(pl2) >= 0 ? 'Player 1 Won!' :
         MATCH[pl2].indexOf(pl1) >= 0 ? 'Player 2 Won!' : 'Draw!';
}
*/

console.log(rpsls("rock", "lizard"), "Player 1 Won!");
console.log(rpsls("paper", "rock"), "Player 1 Won!");
console.log(rpsls("scissors", "lizard"), "Player 1 Won!");
console.log(rpsls("lizard", "paper"), "Player 1 Won!");
console.log(rpsls("spock", "rock"), "Player 1 Won!");
console.log(rpsls("lizard", "scissors"), "Player 2 Won!");
console.log(rpsls("spock", "lizard"), "Player 2 Won!");
console.log(rpsls("paper", "lizard"), "Player 2 Won!");
console.log(rpsls("scissors", "spock"), "Player 2 Won!");
console.log(rpsls("rock", "spock"), "Player 2 Won!");
console.log(rpsls("rock", "rock"), "Draw!");
console.log(rpsls("spock", "spock"), "Draw!");
