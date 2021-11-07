function doubleChar(str) {
  // Your code here
  //   let res = "";
  //   [...str].map((char) => (res += char + char));
  //   return res;
  return str
    .split("")
    .map((char) => char + char)
    .join("");
}

// const doubleChar = (str) => str.split("").map(c => c + c).join("");
console.log(doubleChar("abcd"), "aabbccdd");
console.log(doubleChar("Adidas"), "AAddiiddaass");
console.log(doubleChar("1337"), "11333377");
console.log(doubleChar("illuminati"), "iilllluummiinnaattii");
console.log(doubleChar("123456"), "112233445566");
console.log(doubleChar("%^&*("), "%%^^&&**((");
