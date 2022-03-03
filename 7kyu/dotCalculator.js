function dotCalculator(equation) {
  let obj = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "//": (x, y) => Math.floor(x / y),
  };
  let str = equation.split(" ");
  //   return new Array(obj[str[1]](str[0].length, str[2].length) + 1).join(".");
  return new Array(
    eval(`${str[0].length} ${str[1]} ${str[2].length}`) + 1
  ).join(".");
}

console.log(dotCalculator("..... + ...............", "...................."));
console.log(dotCalculator("..... - ...", ".."));
console.log(dotCalculator("..... - .", "...."));
console.log(dotCalculator("..... * ...", "..............."));
console.log(dotCalculator("..... * ..", ".........."));
console.log(dotCalculator("..... // ..", ".."));
console.log(dotCalculator("..... // .", "....."));
console.log(dotCalculator(". // ..", ""));
console.log(dotCalculator(". - .", ""));
