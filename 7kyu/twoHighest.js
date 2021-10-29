function twoHighest(arr) {
  //   console.log(arr.sort());
  if (arr.length === 0) return [];

  let min = arr[0];
  if (arr.length === 1) return [min];

  let srt = arr.sort((a, b) => b - a);
  //   console.log(srt);
  let uqSet = new Set(srt);

  //   console.log([...uqSet]);
  let srtarr = [...uqSet];
  let res = [];
  for (let i = 0; i < 2; i++) {
    // console.log(srtarr[i]);
    res.push(srtarr[i]);
  }
  return res;
}
/* 
effective solution is 
function twoHighest(arr) {
  return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
}
*/
//   let max = arr[1];
// console.log(
//   ` min is ${min} and max ${max} and array length is ${arr.length}`
// );

//   for (let [index, ele] of arr.entries()) {
//     if (max < ele) {
//       min = max;
//       max = ele;
//     }
// console.log(
//   `max is ${max} and min is ${min} ==== ${ele} ------------- ${index} `
// );
//   }
// console.log(`max is ${max} and min is ${min}`);
//   if (min == max) return [min];
//   return [max, min].sort((a, b) => b - a);

console.log(twoHighest([15, 20, 20, 17]));
// console.log(
//   twoHighest([
//     99909, 70674, 21597, 34139, 93619, 10651, 85657, 81519, 82186, 7341, 90621,
//     55579, 45357, 2608, 98690, 36591, 66888, 74647, 33678, 12603, 69594, 53732,
//     68948, 92071, 26730, 66696, 5094, 78344, 724, 57752, 68001, 82416, 5098,
//     62056, 16275, 67263, 16216, 56761, 8924, 9948, 81938, 95865,
//   ])
// );

console.log([1, 2].slice(0, 2));
