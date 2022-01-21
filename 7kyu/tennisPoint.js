function tennisGamePoints(score) {
  let scoreCard = score.split("-");
  const obj = {
    love: 0,
    15: 1,
    30: 2,
    40: 3,
  };

  let p1 = scoreCard[0];
  let p2 = scoreCard[1];

  return p1 === "all" || p2 === "all" ? obj[p1] * 2 : obj[p1] + obj[p2];
}
console.log(tennisGamePoints("15-40"), 4);
console.log(tennisGamePoints("30-all"), 4);
console.log(tennisGamePoints("love-15"), 1);
console.log(tennisGamePoints("love-30"), 2);
