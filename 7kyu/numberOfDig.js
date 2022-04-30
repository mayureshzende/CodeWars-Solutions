function nbDig(n, d) {
  const sqr = getSquare(n);
  const regex = new RegExp(d, "g");
  return sqr.reduce((acc, curr) => {
    const match = curr.match(regex);
    return (acc += match !== null ? match.length : 0);
  }, 0);
}

const getSquare = (n) => {
  let res = [];
  for (let i = 0; i <= n; i++) {
    res.push("" + Math.pow(i, 2));
  }
  return res;
};

console.log(nbDig(10, 1), 4, "n = 10, d = 1");
console.log(nbDig(11011, 2), 9481, "n = 11011, d = 2");
console.log(nbDig(12224, 8), 7733, "n = 12224, d = 8");
console.log(nbDig(5750, 0), 4700, "n = 5750, d = 0");
