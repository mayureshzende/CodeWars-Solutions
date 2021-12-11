function noBoringZeros(n) {
  if (n == 0) return 0;
  let num = n;
  while (num % 10 === 0) {
    num /= 10;
  }
  return num;
}

console.log(noBoringZeros(1450), 145);
console.log(noBoringZeros(960000), 96);
console.log(noBoringZeros(1050), 105);
console.log(noBoringZeros(-1050), -105);
console.log(noBoringZeros(0), 0);
