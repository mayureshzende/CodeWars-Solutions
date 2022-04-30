function howManyGifts(maxBudget, gifts) {
  let bud = maxBudget,
    count = 0;

  for (let i = 0, len = gifts.length; i < len; i++) {
    if (bud >= gifts[i]) {
      bud -= gifts[i];
      count++;
    }
  }
  return count;
}

console.log(howManyGifts(20, [13, 2, 4, 6, 1]), 4);

console.log(howManyGifts(0, [1]), 0);
