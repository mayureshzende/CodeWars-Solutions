function rentalCarCost(d) {
  // Your solution here
  if (d >= 7) {
    return d * 40 - 50;
  }
  if (d >= 3) {
    return d * 40 - 20;
  }
}

console.log(rentalCarCost(6), 220);
console.log(rentalCarCost(9), 310);
// const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));
