function replace(s) {
  let vowels = "aeiou";
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      res += "!";
    } else {
      res += s[i];
    }
  }
  return res;
}

// s.replace(/[aeoiu]/gi, "!");
console.log(replace("!Hi! Hi!"), "!H!! H!!");
console.log(replace("aeiou"), "!!!!!");
console.log(replace("ABCDE"), "!BCD!");
