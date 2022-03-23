function swap(str) {
  let res = "";

  [...str].map((char) => {
    if (char === char.toUpperCase()) {
      res += char.toLowerCase();
    } else {
      res += char.toUpperCase();
    }
  });
  return res;
}

console.log(swap("HelloWorld"), "hELLOwORLD");
console.log(swap("CodeWars"), "cODEwARS");
