function remove(s) {
  let str = s.replace(/!/gi, "");
  let count = 0;
  console.log(str);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "!") {
      count++;
    }
  }
  return str.padEnd(s.length, "!");
}

console.log(remove("Hi!"), "Hi!");
console.log(remove("Hi! Hi!"), "Hi Hi!!");
