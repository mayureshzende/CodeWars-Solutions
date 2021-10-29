function getSum(a, b) {
  if (a === b) return a;
  if (a > b) {
    a = a + b;
    b = a - b;
    a = a - b;
  }
  let sum = 0;
  for (let i = a; i <= b; i++) {
    console.log(i);
    sum += i;
  }
  return sum;
}

// console.log(getSum(-1, 2));
console.log(getSum(0, -1));
console.log(0 + -1);

/* 
const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}


function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}

*/
