function charFreq(message) {
  const obj = {};
  message.split("").map((char) => {
    if (!obj[char + ""]) {
      obj[char + ""] = 1;
    } else {
      obj[char + ""] += 1;
    }
  });
  return obj;
}

console.log(charFreq("I like cats"), {
  a: 1,
  " ": 2,
  c: 1,
  e: 1,
  I: 1,
  k: 1,
  l: 1,
  i: 1,
  s: 1,
  t: 1,
});
