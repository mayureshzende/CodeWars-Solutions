function isVow(a) {
  const vow = [97, 101, 105, 111, 117];

  let res = [];
  for (let i = 0; i < a.length; i++) {
    if (vow.includes(a[i])) {
      res.push(String.fromCharCode(a[i]));
    } else {
      res.push(a[i]);
    }
  }
  return res;
}
// const isVow = a => a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)

console.log(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]), [
  "e",
  121,
  110,
  113,
  113,
  103,
  121,
  121,
  "e",
  107,
  103,
]);
