function onesComplement(n) {
  return [...n]
    .map((ele) => {
      return ele === "0" ? 1 : 0;
    })
    .join("");
}

console.log(onesComplement("0"), "1");
console.log(onesComplement("1"), "0");
console.log(onesComplement("01"), "10");
