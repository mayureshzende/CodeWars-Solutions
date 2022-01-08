// function squaresOnly(array) {
//   return array.reduce((acc, curr) => {
//     if (Math.sqrt(curr) % 1 === 0) {
//       acc.push(curr);
//     }
//     return acc;
//   }, []);
// }

console.log(squaresOnly([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [0, 1, 4, 9]);
// console.log(squaresOnly([31, 33, 35, 37, 39, 38, 36, 34, 32]), [36]);
// console.log(
//   squaresOnly([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]),
//   [0, 100]
// );

// function squaresOnly(array) {
//   return array.filter((n) => Number.isInteger(Math.sqrt(n)));
// }
function squaresOnly(array) {
  return array.filter((n) => Math.sqrt(n) % 1 === 0);
}
