function sequence(x) {
  let res = [];

  for (let i = 1; i <= x; i++) {
    res.push(i);
  }

  //   if (x < 10) {
  //     for (let i = 1; i <= x; i++) {
  //       res.push(i);
  //     }
  //   } else {
  //     for (let i = 1; i <= 9; i++) {
  //       res.push(i);
  //       let counter = i * 10;
  //       for (let j = counter; (j < counter + 10) & (j <= x); j++) {
  //         res.push(j);
  //       }
  //     }
  //   }
  return res.sort();
}

/* 
function sequence(x) {
    let array = [];
    for (let i = 1; i <= x; i++) array.push(i);
    return array.sort();
}
*/

const result = [1, 10, 11, 12, 13, 14, 15, 16, 2, 3, 4, 5, 6, 7, 8, 9];
const x = 16;
console.log(sequence(x), result);

const result1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const x1 = 9;
// console.log(sequence(x1), result1);
console.log(sequence(60), result1);
