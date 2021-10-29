function repeatStr(n, s) {
  let res = "";
  while (n > 0) {
    res += s;
    n--;
  }
  return res;
}

console.log(repeatStr(2, "ha "), "ha ha ");
