function isPalindrome(x) {
  //   let rev = x.split("").reverse().join("");
  let strArr = x.split(""); //.reverse().join("");
  console.log(rev(strArr));

  return rev(strArr).toLowerCase() === x.toLowerCase();
}

function rev(arr) {
  for (let i = 0, j = arr.length - 1; i < j; j--, i++) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr.join("");
}

console.log(isPalindrome("mayur"));
