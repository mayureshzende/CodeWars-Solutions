function warnTheSheep(queue) {
  let watch = queue.reverse();
  for (let i = 0; i < watch.length; i++) {
    if ((watch[i] === "wolf") & (i > 0)) {
      return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`;
    } else if (watch[0] === "wolf") {
      return "Pls go away and stop eating my sheep";
    }
  }
}

/*  function warnTheSheep(q) {
  return q[q.length-1] === 'wolf' ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${q.length - (q.indexOf('wolf')+1)}! You are about to be eaten by a wolf!`
} */
console.log(
  warnTheSheep([
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "wolf",
    "sheep",
    "sheep",
  ]),
  "Oi! Sheep number 2! You are about to be eaten by a wolf!"
);

console.log(
  warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]),
  "Oi! Sheep number 6! You are about to be eaten by a wolf!"
);
