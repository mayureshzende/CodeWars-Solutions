function sumOfIntegersInString(s) {
  let str = s.replace(/[`a-z~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, " ");
  console.log(str);
  return str.split(" ").reduce((acc, curr) => (acc += +curr), 0);
}

console.log(
  sumOfIntegersInString("Xohja)8065hNSa8808X§Jk)CX : (=8065+8808)"),
  16873
);

// console.log(
//   sumOfIntegersInString(
//     "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
//   ),
//   3635
// );

// console.log(
//   sumOfIntegersInString("The Great Depression lasted from 1929 to 1939."),
//   3868
// );
