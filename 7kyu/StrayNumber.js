function stray(numbers) {
  let obj = {};
  for (const ele of numbers) {
    if (!obj[ele]) {
      obj[ele] = 1;
    } else {
      obj[ele] += 1;
    }
  }
  console.log(obj["3"]);
  for (const [key, value] of Object.entries(obj)) {
    if (value === 1) {
      return +key;
    }
  }
}

// console.log(stray([1, 1, 2]), 2);
// console.log(stray([1, 1, 3]), 2);
console.log(stray([17, 17, 3, 17, 17, 17, 17]), 3);

/* 
function stray(numbers){
  for (var i in numbers){
     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
  }
}

---------------
const stray = nums => nums.reduce((a, b) => a ^ b);


*/
