function solution(str, ending) {
  let strend = ending.length;
  return str.slice(str.length - strend) === ending ? true : false;
}

console.log(solution("abcde", "cde"), true);
console.log(solution("abcde", "abc"), false);
