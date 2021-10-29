function octalToDec(n) {
  return "0o" + n - 0;
  // return parseInt("" + n, 8);
  // return num;
}

console.log(octalToDec("31"), 25);
console.log(octalToDec("1457"), 815);
console.log(
  octalToDec("53275320260735355325703124536"),
  104862069400837536141322590
);
// console.log(104862069400837536141322590);

function toFixed(x) {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split("e-")[1]);
    if (e) {
      x *= Math.pow(10, e - 1);
      x = "0." + new Array(e).join("0") + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split("+")[1]);
    if (e > 20) {
      e -= 20;
      x /= Math.pow(10, e);
      x += new Array(e + 1).join("0");
    }
  }
  return x;
}
