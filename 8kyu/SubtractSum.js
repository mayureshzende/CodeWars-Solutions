// this is interesting problem coz we will get the apple everytime if we write return apple still it pass.

function subtractSum(n) {
  const frutisArr = [
    "kiwi",
    "pear",
    "kiwi",
    "banana",
    "melon",
    "banana",
    "melon",
    "pineapple",
    "apple",
    "pineapple",
    "cucumber",
    "pineapple",
    "cucumber",
    "orange",
    "grape",
    "orange",
    "grape",
    "apple",
    "grape",
    "cherry",
    "pear",
    "cherry",
    "pear",
    "kiwi",
    "banana",
    "kiwi",
    "apple",
    "melon",
    "banana",
    "melon",
    "pineapple",
    "melon",
    "pineapple",
    "cucumber",
    "orange",
    "apple",
    "orange",
    "grape",
    "orange",
    "grape",
    "cherry",
    "pear",
    "cherry",
    "pear",
    "apple",
    "pear",
    "kiwi",
    "banana",
    "kiwi",
    "banana",
    "melon",
    "pineapple",
    "melon",
    "apple",
    "cucumber",
    "pineapple",
    "cucumber",
    "orange",
    "cucumber",
    "orange",
    "grape",
    "cherry",
    "apple",
    "cherry",
    "pear",
    "cherry",
    "pear",
    "kiwi",
    "pear",
    "kiwi",
    "banana",
    "apple",
    "banana",
    "melon",
    "pineapple",
    "melon",
    "pineapple",
    "cucumber",
    "pineapple",
    "cucumber",
    "apple",
    "grape",
    "orange",
    "grape",
    "cherry",
    "grape",
    "cherry",
    "pear",
    "cherry",
    "apple",
    "kiwi",
    "banana",
    "kiwi",
    "banana",
    "melon",
    "banana",
    "melon",
    "pineapple",
    "apple",
    "pineapple",
  ];

  if ((n > 9) & (n < 99)) {
    // n = n - sumNum(n);
    return "apple";
  } else {
    while (n > 99) {
      n = n - sumNum(n);
    }
  }
  console.log(n);
  return frutisArr[n - 1];
}
function sumNum(num) {
  let number = num;
  let sum = 0,
    rem = 0;

  while (number > 0) {
    rem = number % 10;
    sum += rem;
    number = Math.floor(number / 10);
  }

  return sum;
}

console.log(subtractSum(58), "apple");
