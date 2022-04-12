function solve(n) {
  if (n % 10 !== 0) return -1;
  let notes = [500, 200, 100, 50, 20, 10];
  let amt = n;
  let count = 0;
  for (let i = 0; i < notes.length; i++) {
    while (notes[i] <= amt) {
      amt -= notes[i];
      count++;
    }
  }

  return count;
}

// console.log(solve(770), 4, "Wrong result for 770");
console.log(solve(550), 2, "Wrong result for 550");
// console.log(solve(10), 1, "Wrong result for 10");
// console.log(solve(1250), 4, "Wrong result for 1250");

// console.log(solve(125), -1, "Wrong result for 125");
// console.log(solve(666), -1, "Wrong result for 666");
// console.log(solve(42), -1, "Wrong result for 42");
