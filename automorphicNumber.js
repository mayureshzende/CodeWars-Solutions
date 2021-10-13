function automorphic(n) {
  //your code here
  let sqr = n * n;
  while (n > 0) {
    if (n % 10 != sqr % 10) {
      return "Not!!";
    }

    n = Math.floor(n / 10);
    sqr = Math.floor(sqr / 10);
  }

  return "Automorphic";
}

console.log(automorphic(95));
console.log(automorphic(76));

//  n => String(n*n).endsWith(String(n)) ? "Automorphic" : "Not!!" ;
