function validateWord(s) {
  let res = [...s];
  let obj = {};

  for (let i = 0; i < res.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i].toLowerCase()] = 1;
    } else {
      obj[s[i].toLowerCase()] += 1;
    }
  }
  let valid = true;
  const values = Object.values(obj);
  for (let i = 0; i < values.length - 1; i++) {
    if (values[i] !== values[i + 1]) {
      valid = false;
    }
  }

  return valid;
}
// [a, b, c, a, b, c, d];
console.log(validateWord("abcabc"), true, 'The word was: "abcabc" \n');

console.log(validateWord("abcabcd"), false, 'The word was: "abcabcd" \n');

/* function validateWord(s) {
  var freq = {};
  s.toLowerCase()
    .split("")  
    .forEach(function (s) {
      freq[s] ? freq[s]++ : (freq[s] = 1);
    });

  return new Set(Object.values(freq)).size == 1;
} */
