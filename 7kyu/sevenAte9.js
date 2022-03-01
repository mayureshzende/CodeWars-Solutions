function sevenAte9(str) {
  let res = str[0];

  for (let i = 1; i < str.length - 1; i++) {
    res +=
      str[i] === "9" && str[i + 1] === "7" && str[i - 1] === "7" ? "" : str[i];
  }
  res += str[str.length - 1];
  return res;
  //   return str.replace(/79(?=7)/g, "7");
  // str =  str.replace(/797/g, "77");
}

// console.log(sevenAte9("165561786121789797"), "16556178612178977");
console.log(sevenAte9("797"), "77");
// console.log(sevenAte9("7979797"), "7777");
