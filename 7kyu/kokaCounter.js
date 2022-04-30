var kookaCounter = function (laughing) {
  if (laughing.length < 2) return 0;
  laughing = laughing.replace(/a*/gi, "");
  let count = 1;
  for (let i = 0, len = laughing.length - 1; i < len; i++) {
    if (laughing[i] !== laughing[i + 1]) count++;
  }
  return count;
};

console.log(kookaCounter(""), 0);
console.log(kookaCounter("hahahahaha"), 1);
console.log(kookaCounter("hahahahahaHaHaHa"), 2);
console.log(kookaCounter("HaHaHahahaHaHa"), 3);
