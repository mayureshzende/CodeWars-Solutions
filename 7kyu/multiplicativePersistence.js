function per(n) {
  const res = [];
  let prdt = n;
  while ((prdt > 0) & (prdt > 9)) {
    prdt = getProduct(prdt);
    res.push(prdt);
    if (prdt < 9) prdt = 0;
  }

  return res;
}

function getProduct(num) {
  let str = "" + num;

  return [...str].reduce((acc, curr) => (acc *= curr), 1);
}

console.log(per(1), []);
console.log(per(10), [0]);
console.log(per(69), [54, 20, 0]);

/* 
function per(n) {
  let res = []
  while(n.toString().length > 1) {
    n = n.toString().split('').reduce(
      (p,c) => p * c
    )
    res.push(n)
  }
  return res
}
*/
