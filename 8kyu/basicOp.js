function basicOp(operation, value1, value2) {
  // Code
  //   console.log(value1 + operation + value2);
  return eval(value1 + operation + value2);
}

console.log(basicOp("+", 4, 7), 11);
