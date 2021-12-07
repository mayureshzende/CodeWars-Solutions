function points(games) {
  //   let sum = 0;
  //   console.log(games[0].charAt(0) < games[0].charAt(2));

  //   for (let i = 0; i < games.length; i++) {
  //     if (games[i].charAt(0) < games[i].charAt(2)) {
  //       sum += 0;
  //     } else if (games[i].charAt(0) > games[i].charAt(2)) {
  //       sum += 3;
  //     } else {
  //       sum += 1;
  //     }
  //   }

  //   return sum;

  return games.reduce((acc, curr) => {
    return (acc += curr[0] > curr[2] ? 3 : curr[0] === curr[2] ? 1 : 0);
  }, 0);
}

console.log(
  points([
    "1:1",
    "2:2",
    "3:3",
    "4:4",
    "2:2",
    "3:3",
    "4:4",
    "3:3",
    "4:4",
    "4:5",
  ]),
  10
);
