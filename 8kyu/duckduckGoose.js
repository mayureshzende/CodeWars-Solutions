function duckDuckGoose(players, goose) {
  let position = goose % players.length;
  return position === 0
    ? players[players.length - 1].name
    : players[position - 1].name;
}
class Player {
  constructor(name) {
    this.name = name;
  }
}
let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

console.log(duckDuckGoose(players, 1), "a");
console.log(duckDuckGoose(players, 3), "c");
console.log(duckDuckGoose(players, 10), "z");
console.log(duckDuckGoose(players, 20), "z");
console.log(duckDuckGoose(players, 30), "z");
console.log(duckDuckGoose(players, 18), "g");
console.log(duckDuckGoose(players, 28), "g");
console.log(duckDuckGoose(players, 12), "b");
