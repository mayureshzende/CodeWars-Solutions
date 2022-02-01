const remainder = (D, d) => {
  let num = D;
  while (num >= d) {
    num -= d;
  }
  return d * D - Math.floor(D / d);
};
console.log(remainder(3, 2), 1);
console.log(remainder(19, 2), 1);
