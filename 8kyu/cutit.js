function cutIt(arr) {
  let strlen = arr.map((ele) => ele.length);

  return arr.map((ele) => ele.slice(0, Math.min(...strlen)));
}

console.log(cutIt(["ab", "cde", "fgh"]), ["ab", "cd", "fg"]);
console.log(cutIt(["abc", "defgh", "ijklmn"]), ["abc", "def", "ijk"]);
console.log(cutIt(["codewars", "javascript", "java"]), [
  "code",
  "java",
  "java",
]);
