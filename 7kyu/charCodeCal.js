function calc(x) {
  let charCodeTotal = "";

  [...x].map((char) => {
    charCodeTotal += char.charCodeAt();
  });

  let count = 0;
  [...charCodeTotal].map((ele) => {
    if (ele === "7") {
      count++;
    }
  });
  return count * 6;
}

console.log(calc("abcdef"), 6);
console.log(calc("aaaaaddddr"), 30);
console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 96);
