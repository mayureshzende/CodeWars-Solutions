function roundIt(n) {
  let str = n + "";
  let index = str.indexOf(".");
  let strArr = str.split("");
  let dec = "";
  let floatPrt = str.slice(index + 1);
  for (let i = 0; i < index; i++) {
    dec += strArr[i];
  }

  if (dec.length < floatPrt.length) {
    return +dec + 1;
  }

  if (dec.length > floatPrt.length) {
    if (floatPrt < 0) {
      return +dec + 1;
    } else {
      return +dec;
    }
  }

  if (dec.length === floatPrt.length) {
    console.log(" here ");
    let pow = Math.pow(10, floatPrt.length) / 2;
    if (floatPrt > pow) {
      return +dec + 1;
    } else {
      return +dec;
    }
  }
}

console.log(roundIt(3.45), 4);
console.log(roundIt(34.5), 34);
console.log(roundIt(34.56), 35);
console.log(roundIt(9419.2615), 9419);
