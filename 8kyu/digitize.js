function digitize(n) {
  //code here
  let res = n;
  const arr = [];
  while (res > 0) {
    arr.push(res % 10);
    res = Math.floor(res / 10);
  }

  return arr;
}
console.log(digitize(35231), [1, 3, 2, 5, 3]);
//   return String(n).split('').map(Number).reverse()
