function twoDecimalPlaces(n) {
  return +n.toFixed(2);
}

console.log(twoDecimalPlaces(4.659725356), 4.66, "didn't work for 4.659725356");
