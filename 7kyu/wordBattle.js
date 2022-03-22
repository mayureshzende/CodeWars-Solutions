function battle(x, y) {
  // Lets the battle begin!
  const obj = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };

  let one = [...x].reduce((acc, curr) => (acc += obj[curr]), 0);
  let two = [...y].reduce((acc, curr) => (acc += obj[curr]), 0);

  return one > two ? x : two > one ? y : "Tie!";
}

console.log(battle("AAA", "Z"), "Z", "Unfair fight!");
console.log(battle("ONE", "TWO"), "TWO", "Unfair fight!");
console.log(battle("ONE", "NEO"), "Tie!", "Unfair fight!");
console.log(battle("FOUR", "FIVE"), "FOUR", "Unfair fight!");
