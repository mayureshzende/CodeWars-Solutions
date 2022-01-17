const removeConsecutiveDuplicates = (s) => {
  let strArr = s.split(" ");
  let res = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== strArr[i + 1]) {
      res.push(strArr[i]);
    }
  }
  return res.join(" ");
};

console.log(
  removeConsecutiveDuplicates(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  ),
  "alpha beta gamma delta alpha beta gamma delta"
);
