function validateCode(code) {
  return /^[1-3]/g.test(code);
}

console.log(validateCode(1234), true);
console.log(validateCode(248), true);
console.log(validateCode(8), false);
console.log(validateCode(321), true);
console.log(validateCode(9453), false);
