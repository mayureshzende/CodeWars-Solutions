function solve(s) {
  let count = 0;
  let max = 0;
  let str = s.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) {
      count++;
      if (count > max) {
        max = count;
      }
    } else {
      count = 0;
    }
  }
  return max;
}

function solve1(s) {
  let word = s.split(/[^aeiou]/);
  console.log(Math.max(...word.map((x) => x.length)));
  return Math.max(...word.map((x) => x.length));
}

// for (let i = 0; i < s.length; ++i) {
//   if ("aeiou".includes(s[i])) {
//     cur++;
//     if (cur > max) {
//       max = cur;
//     }
//   } else {
//     cur = 0;
//   }
// }

console.log(solve1("codewarriors"), 2);
console.log(solve("suoidea"), 3);
// console.log(solve("ultrarevolutionariees"), 3);
// console.log(solve("cuboideonavicuare"), 2);
