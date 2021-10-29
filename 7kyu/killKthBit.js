function killKthBit(n, k) {
  //   let binary = n.toString(2);
  //   let res = "";
  //   for (let i = 0; i < binary.length; i++) {
  //     if (i + 1 === k) {
  //       res += "0";
  //     } else {
  //       res += binary[i];
  //     }
  //     console.log(`res at index ${i}  is = ${res}`);
  //   }

  //   console.log(` binary number is ${binary}`);
  //   console.log(`and the res is in ${res}`);
  //   //   console.log(parseInt(res, 2));
  //   return parseInt(res, 2);

  return n & ~(1 << (k - 1));
}

// console.log(killKthBit(37, 3), 33);
// console.log(killKthBit(2147483647, 16), 2147450879);
console.log(killKthBit(374823748, 13), 374819652);
// console.log(killKthBit(37, 4), 37);
// console.log(killKthBit(0, 4), 0);
// console.log(Number(2147450879).toString(2));
