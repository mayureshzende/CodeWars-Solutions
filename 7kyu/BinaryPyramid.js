function BinaryPyramid(m, n) {
  let res = [];

  for (let i = m; i <= n; i++) {
    res.push(+i.toString(2));
  }

  return res.reduce((acc, curr) => (acc += curr), 0).toString(2);
}

console.log(BinaryPyramid(1, 4), "1111010");
console.log(BinaryPyramid(1, 6), "101001101");
console.log(BinaryPyramid(6, 20), "1110010110100011");
console.log(BinaryPyramid(21, 60), "1100000100010001010100");
