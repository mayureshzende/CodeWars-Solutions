Math.round = function (number) {
  return number % 10 <= 0.5 ? 0 : 1; // TODO: fix this
};

Math.ceil = function (number) {
  return 0; // TODO: fix this
};

Math.floor = function (number) {
  return 0; // TODO: fix this
};

console.log(Math.round(0.4), 0, "Math.round(0.4)");
console.log(Math.round(0.5), 1, "Math.round(0.5)");
console.log(Math.ceil(0.4), 1, "Math.ceil(0.4)");
console.log(Math.ceil(0.5), 1, "Math.ceil(0.5)");
console.log(Math.floor(0.4), 0, "Math.floor(0.4)");
console.log(Math.floor(0.5), 0, "Math.floor(0.5)");
