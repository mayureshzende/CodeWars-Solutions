function productArray(numbers) {
  let res = [];
  let product = numbers.reduce((curr, acc) => curr * acc);

  //   for (let i = 0; i < numbers.length; i++) {
  //     res.push(product / numbers[i]);
  //   }
  //   return res;
  return numbers.map((ele) => product / ele);
}

console.log(productArray([12, 20, 10]), [200, 120, 240]);

console.log(
  productArray([16, 17, 4, 3, 5, 2]),
  [2040, 1920, 8160, 10880, 6528, 16320]
);

/* 
return numbers.map(x => numbers.reduce((a,b) => a * b) / x)
*/
