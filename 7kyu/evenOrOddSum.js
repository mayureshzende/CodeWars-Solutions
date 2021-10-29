function evenOrOdd(str) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < str.length; i++) {
    // console.log(str.charAt(i));
    if (str.charAt(i) % 2 == 0) {
      evenSum += +str.charAt(i);
    } else {
      oddSum += +str.charAt(i);
    }
  }
  //   console.log(" ------------------------------ ");
  //   for (let i = 1; i < str.length; i += 2) {
  //     console.log(str.charAt(i));
  //     evenSum += +str.charAt(i);
  //   }

  console.log(" ------------------------------ ");

  console.log(evenSum, " od sum is ", oddSum);
  if (evenSum === oddSum) {
    return "Even and Odd are the same";
  }
  if (evenSum > oddSum) {
    return "Even is greater than Odd";
  }
  if (oddSum > evenSum) {
    return "Odd is greater than Even";
  }
}

console.log(evenOrOdd("112"));
// console.log(evenOrOdd("41164546340276618"));
