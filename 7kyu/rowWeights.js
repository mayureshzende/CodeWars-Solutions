function rowWeights(array) {
  if (array.length <= 1) {
    return [array[0] + 0, 0];
  }

  let res = [0, 0];
  for (const [index, value] of array.entries()) {
    if (index % 2 === 0) {
      res[0] += value;
    } else {
      res[1] += value;
    }
  }
  return res;
}

// console.log(rowWeights([80]));
console.log(rowWeights([0]));
// console.log(rowWeights([50, 60, 70, 80]));
// console.log(rowWeights([70, 58, 75, 34, 91]));

/*  
function rowWeights(array){
  let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
  let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
  
  return [t1, t2]
}
*/
