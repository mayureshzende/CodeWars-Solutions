function strCount(str, letter) {
  //code here
  return [...str].filter((ch) => ch === letter).length;
}

console.log(strCount("Hello", "o"), 1);
console.log(strCount("Hello", "l"), 2);
