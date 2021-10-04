function reverseString(s) {
  let strArr, res;
  try {
    strArr = s.split("");
    for (let i = 0, j = strArr.length - 1; i < j; i++, j--) {
      let temp = strArr[i];
      strArr[i] = strArr[j];
      strArr[j] = temp;
    }
    res = strArr.join("");
    return res;
  } catch (err) {
    // console.log(err.message);
    return err.message;
  }
}

console.log(reverseString(Number(1234)));
console.log(reverseString("1234"));
// reverseString("234");
