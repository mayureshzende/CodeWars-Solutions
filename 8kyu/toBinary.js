function toBinary(num) {
  let str = "";
  let rem;
  while (num > 0) {
    rem = num % 2;
    str += rem;
    num = Math.floor( num / 2);
  }
  return str.split("").reverse().join("");
}

console.log(toBinary(3));
