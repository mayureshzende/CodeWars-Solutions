function minimumSteps(numbers, value) {
  let arr = numbers.sort((a, b) => a - b);
  console.log(arr);
  let count = 0;
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i];
    if (sum < value) {
      ++count;
    }
  }
  return count;
}

console.log(minimumSteps([8, 9, 10, 4, 2], 23), 3);
// console.log(minimumSteps([4, 6, 3], 2), 0);
// console.log(minimumSteps([10, 9, 9, 8], 17), 1);

/* 
function minimumSteps(numbers, value){
   return numbers.sort((a,b)=>a-b).filter((e,i)=> (value=value-e) > 0).length;
}
*/
