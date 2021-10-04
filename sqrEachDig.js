function squareDigits(num) {
  let str = num + "";
  console.log(str);
  let res = "";
  for (const char of str) {
    console.log("char is  ", char);
    res += char * char;
    console.log(res);
  }
  return +res;
}

console.log(squareDigits(3212));
