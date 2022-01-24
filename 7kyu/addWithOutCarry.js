function add(num1, num2) {
  let n1 = num1.toString().split("");
  let n2 = num2.toString().split("");
  let res = [];

  for (let i = Math.max(n1.length, n2.length) - 1; i >= 0; i--) {
    let temp1 = n1.pop();
    let temp2 = n2.pop();
    res.push((!temp1 ? 0 : +temp1) + (!temp2 ? 0 : +temp2));
  }

  return +res.reverse().join("");
}

// console.log(add(1222, 30277), 31499);
// console.log(add(13, 29));
// console.log(add(1236, 30977), 31111013);
// console.log(add(38810, 1383), 391193);
console.log(add(26, 39), 515);
// console.log(add(122, 81), 1103);
