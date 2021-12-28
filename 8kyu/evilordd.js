function evil(n) {
  return n.toString(2).replace(/0/g, "").length % 2 !== 0
    ? "It's Odious!"
    : "It's Evil!";
}

console.log(evil(1), "It's Odious!");
console.log(evil(2), "It's Odious!");
console.log(evil(3), "It's Evil!");
