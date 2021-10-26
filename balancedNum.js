// console.log(balancedNum(102466), "Not Balanced");
// console.log(balancedNum(102), "Not Balanced");

// console.log(bal(432), "Not Balanced");
console.log(balancedNum(56239814), "Not Balanced");

function balancedNum(num) {
  let str = num.toString();
  if (str.length < 3) return "Balanced";
  let mid = Math.floor(str.length / 2);
  console.log(mid, " mid ");
  let right = 0,
    left = 0;

  for (let i = mid + 1; i <= str.length; i++) {
    left += +str.charAt(i);
  }

  if (str.length % 2 === 0) {
    for (let i = mid - 2; i >= 0; i--) {
      right += +str.charAt(i);
    }
  } else {
    for (let i = mid - 1; i >= 0; i--) {
      right += +str.charAt(i);
    }
  }

  console.log(` right sum is ${right} and left sum is ${left}`);
  return right === left ? "Balanced" : "Not Balanced";
}

/* 
function balancedNum(number) {

  let str = `${number}`
  ,   len = (str.length - (str.length % 2 ? -1 : -2)) / 2
  ,   sum = digits => [ ...digits ].reduce((a, b) => a + +b, 0);

  return sum(str.slice(0, len)) === sum(str.slice(-len)) 
  ? 'Balanced' 
  : 'Not Balanced';


  function balancedNum(number) {
  let numstr = number.toString();
  let leftside = "";
  let rightside = "";
  if (numstr.length/2 < 1 || numstr.length === 2) { 
    return "Balanced";
  }
  if (numstr.length % 2 === 0) {
    leftside = numstr.slice(0,numstr.length/2-1);
  } else {
    leftside = numstr.slice(0,numstr.length/2);
  }
  rightside = numstr.slice(numstr.length/2+1);
  
  let lefttotal = leftside.split("").reduce((a,b)=>parseInt(a)+parseInt(b));
  let righttotal = rightside.split("").reduce((a,b)=>parseInt(a)+parseInt(b));
  return (lefttotal === righttotal) ? "Balanced" : "Not Balanced";
}
*/
