function lastDigit(n, d) {
  let res = [];
  let str = "" + n;
  //   str = str.slice(-d);
  console.log([...str]);
  let op = [...str].slice(-d).map((x) => {
    +x;
  });
  //   console.log(op);
  //   for (let i = 0; i < str.length; i++) {
  //     res.push(Number(str.charAt(i)));
  //   }
  //   return res;
  //   return d <= 0 ? [] : [...("" + n)].slice(-d).map((x) => +x);
}

console.log(lastDigit(123767, 4), [3, 7, 6, 7]);
