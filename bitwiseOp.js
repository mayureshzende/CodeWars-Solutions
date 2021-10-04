function getMaxLessThanK(n, k) {
  let max = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      let x = i & j;
      if (x > max && max < k)
        // console.log(i, j);
        max = x;
    }
  }
  return max;
}

console.log(getMaxLessThanK(5, 5));

// console.log(decToBin(5, 2));

// function decToBin(i, j) {
//   let a = "";
//   //   let b = "";

//   while (i > 0) {
//     let st = Math.floor(i / 2);
//     i = i / 2;
//     a += st;
//   }

//   return a;
// }
