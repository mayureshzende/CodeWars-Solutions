function makeValley(arr) {
  let arr1 = [],
    arr2 = [];
  let sorted = arr.slice().sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    arr1.push(sorted.pop());
    arr2.push(sorted.pop());
  }
  return arr1.concat(arr2.sort((a, b) => a - b)).filter((v) => v != undefined);
}

/* 
function makeValley(arr) {
    var leftWing = []
    var rightWing = []
    arr.sort((a, b) => b - a)
      .forEach((el, i) => i % 2 == 0 ? leftWing.push(el) : rightWing.unshift(el))
    
    return [...leftWing, ...rightWing]
}

function makeValley(arr) {
  arr.sort((a, b)=> b - a )
  const arr1 = [], arr2 = []
  
  for ( let i = 0; i < arr.length; i++ ){
    if ( i % 2 ){
      arr2.push(arr[i])
    } else {
      arr1.unshift(arr[i])
    }
  }
  
  return (arr2.concat(arr1)).reverse()
}

*/
