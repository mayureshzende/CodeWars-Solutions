function f(n) {
  //   console.log(typeof n);

  if (
    !n ||
    n <= 0 ||
    typeof n === "string" ||
    typeof n != "number" ||
    !Number.isInteger(n)
  ) {
    // return "n must be a value";
    return false;
  }

  return (n * (n + 1)) / 2;
}

// console.log(f(+));
console.log(f(""));
console.log(f("n"));
console.log(f(300), 45150);
console.log(f(50000), 1250025000);
console.log(f(100), 5050);
console.log(f()), console.log(f(3.14));
console.log(f(0));
console.log(f(-10));
