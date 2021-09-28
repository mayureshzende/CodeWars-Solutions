function singleDigit(n) {
  //   console.log(typeof n);
  if (n < 10) return n;

  //   console.log(count);
  return dec2str(n);
}

function dec2str(n) {
  let dec = n.toString(2);
  //   let arr = dec.split("");
  let count = 0;
  for (let ele of dec) {
    // console.log(ele);
    if (+ele === 1) {
      count++;
    }
    console.log(count);
  }
  if (count >= 10) {
    console.log(" called again ");
    return dec2str(count);
  }
  return count;
}

//   return n < 10
//     ? n
//     : singleDigit([...n.toString(2)].reduce((a, b) => a + +b, 0));

// console.log(singleDigit(5));
console.log(singleDigit(1234444123), 1);
