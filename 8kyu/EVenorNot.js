function testEven(n) {
  //   if (n > 0) {
  //     for (let i = 0; i < Math.sqrt(n); i++) {
  //       if (n % i === 0) {
  //         return true;
  //       }
  //     }
  //   } else {
  //     for (let i = Math.sqrt(n); i >= 0; i--) {
  //       if (n % i === 0) {
  //         return false;
  //       }
  //     }
  //   }
  console.log(Math.abs(n) % 2);
  return Math.abs(n) % 2 === 0;
}
console.log(testEven(-4), true);
