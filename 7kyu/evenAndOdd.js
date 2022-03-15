function evenAndOdd(num) {
  // your code here
  let n = num.toString();
  let even = "",
    odd = "";
  [...n].map((ele) => {
    if (ele % 2 === 0) {
      even += ele;
    } else {
      odd += ele;
    }
  });
  return [+even, +odd];
}

console.log(evenAndOdd(126453), [264, 153], `For input 126453`);
console.log(evenAndOdd(3012), [2, 31], `For input 3012`);
console.log(evenAndOdd(4628), [4628, 0], `For input 4628`);
