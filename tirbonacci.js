// function tribonacci(signature, n) {
//   let arr = signature;
//   for (let i = 3; i < n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
//   }
//   return arr;
// }

console.log(tribonacci([300, 200, 100], 0), []);
// console.log(tribonacci([1, 1, 1], 10), [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]);
// console.log(tribonacci([0, 0, 1], 10), [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]);
// console.log(tribonacci([0, 1, 1], 10), [0, 1, 1, 2, 4, 7, 13, 24, 44, 81]);

function tribonacci(signature, n) {
  for (var i = 0; i < n - 3; i++) {
    // iterate n times
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}
