function doubleOrNothing(cash, wager, losses) {
  while (losses > 1) {
    wager *= 2;
    losses--;
  }
  cash = cash - wager;
  return cash >= 0 ? cash : "I'll pay you back later";
}
console.log(doubleOrNothing(11, 2, 3), 3);
console.log(doubleOrNothing(50, 5, 3), 30);
console.log(doubleOrNothing(66, 1, 7), 2);
console.log(doubleOrNothing(10, 2, 4), "I'll pay you back later");
