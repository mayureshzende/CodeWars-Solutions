function strong(n) {
  let sum = 0;
  let num = "" + n;
  let str = num.split("");

  for (let i = 0; i < str.length; i++) {
    sum += fact(str[i]);
  }

  return sum === n ? "STRONG!!!!" : "Not Strong !!";
}

function fact(n) {
  if (n <= 1) {
    return 1;
  }

  return n * fact(n - 1);
}

console.log(strong(145));
console.log(strong(7));
