function incrementer(nums) {
  let res = [];
  nums.map((ele, index) => {
    if (ele + (index + 1) > 9) {
      res.push((ele + (index + 1)) % 10);
    } else {
      res.push(ele + (index + 1));
    }
  });

  return res;
}

console.log(incrementer([3, 6, 9, 8, 9]), [4, 8, 2, 2, 4]);
/* 
function incrementer(num) { 
  return num.map((a,i) => (a+i+1)%10);
}
*/
