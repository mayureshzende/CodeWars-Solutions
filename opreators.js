function logicalCalc(array, op) {
  //your code here
  //   console.log(" === ", array.includes(false));
  let res = true;

  for (let i = 0; i < array.length; i++) {
    if (op == "AND") {
      res = res & array[i];
    }

    if (op == "OR") {
      res = res || array[i];
    }

    if (op == "XOR") {
      res = res ^ array[i];
    }
  }

  return res;
}

console.log(logicalCalc([true, true, true, false], "AND"), false);
console.log(logicalCalc([true, true, true, false], "OR"), true);
console.log(logicalCalc([true, true, true, false], "XOR"), true);
console.log(logicalCalc([true, true, false, false], "AND"), false);
console.log(logicalCalc([true, true, false, false], "OR"), true);
console.log(logicalCalc([true, true, false, false], "XOR"), false);
console.log(logicalCalc([true, false, false, false], "AND"), false);
console.log(logicalCalc([true, false, false, false], "OR"), true);
console.log(logicalCalc([true, false, false, false], "XOR"), true);
console.log(logicalCalc([true, true], "AND"), true);
console.log(logicalCalc([true, true], "OR"), true);
console.log(logicalCalc([true, true], "XOR"), false);
console.log(logicalCalc([false, false], "AND"), false);
console.log(logicalCalc([false, false], "OR"), false);
console.log(logicalCalc([false, false], "XOR"), false);
console.log(logicalCalc([false], "AND"), false);
console.log(logicalCalc([false], "OR"), false);
console.log(logicalCalc([false], "XOR"), false);
console.log(logicalCalc([true], "AND"), true);
console.log(logicalCalc([true], "OR"), true);
console.log(logicalCalc([true], "XOR"), true);

// let res = [1, 2, 3, 4, 5];

// console.log(
//   res.map((ele, index) => {
//     console.log(index);
//     return ele + 1;
//   })
// );

// console.log(res.filter(cus));

// function cus(n) {
//   return (n >= 3) & (n <= 4);
// }
