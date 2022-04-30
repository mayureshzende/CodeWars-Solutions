function shorter_reverse_longer(a, b) {
  if (a.length === b.length)
    return b + [...a].reverse().join().replace(/\,/gi, "") + b;

  let max = a.length > b.length ? a : b;
  let min = a.length > b.length ? b : a;
  return min + [...max].reverse().join().replace(/\,/gi, "") + min;
}

console.log(shorter_reverse_longer("first", "abcde"), "abcdetsrifabcde");
console.log(shorter_reverse_longer("hello", "bau"), "bauollehbau");
console.log(shorter_reverse_longer("abcde", "fghi"), "fghiedcbafghi");
