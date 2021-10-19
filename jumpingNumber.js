function jumpingNumber(n) {
  if (n < 10) {
    return "Jumping!!";
  }

  let str = "" + n;
  let arr = [];

  if (n >= 10) {
    arr = str.split("");
  }

  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i - 1]) !== 1) {
      return "Not!!";
    }
  }
  return "Jumping!!";
}

console.log(jumpingNumber(13), "Not!!");
console.log(jumpingNumber(1), "Jumping!!");
console.log(jumpingNumber(7), "Jumping!!");
console.log(jumpingNumber(9), "Jumping!!");
console.log(jumpingNumber(23), "Jumping!!");
console.log(jumpingNumber(32), "Jumping!!");
console.log(jumpingNumber(79), "Not!!");
console.log(jumpingNumber(98), "Jumping!!");
console.log(jumpingNumber(8987), "Jumping!!");
console.log(jumpingNumber(4343456), "Jumping!!");
console.log(jumpingNumber(98789876), "Jumping!!");
console.log(jumpingNumber(2298), "Not!!");

/* 

function isJumping(number) {
  let a = number.toString().split('');
  if(a.length === 1) return 'Jumping!!';
  for(let i=1;i<a.length;i++){
     if(Math.abs(a[i]-a[i-1]) !== 1){
        return 'Not!!';
     }
  }
  return 'Jumping!!';
}
*/
