function stickyCalc(operation, val1, val2) {
  let stcky = "" + Math.round(val1) + "" + Math.round(val2);
  return Math.round(eval(` ${stcky} ${operation} ${val2}`));
}

// console.log(stickyCalc("+", 4, 7), 54);
// console.log(stickyCalc("-", 15, 10), 1500);
// console.log(stickyCalc("*", 5, 5), 275);
// console.log(stickyCalc("/", 10, 7), 15);
// console.log(stickyCalc("+", 4.2, 7), 54); //Output : (47) + 7 = 54
// console.log(stickyCalc("+", 4.7, 7), 64); //Output : (57) + 7 = 54
console.log(stickyCalc("/", 10, 7), 15); //Output : (107) / 7 = 15  Not 15.2857...
console.log(stickyCalc("/", 433, 930), 467);
