function drawStairs(n) {
  if (n === 1) {
    return "I";
  }

  let str = "";
  let space = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      space += " ";
    }
    str = str + space + "I\n";
    space = "";
  }

  console.log(str.slice(0, str.lastIndexOf("\n")));
  return str.slice(0, str.lastIndexOf("\n"));
}

// console.log(
//   drawStairs(3),
//   "@",
//   "I\n I\n  I",
//   "There's something wrong with these 3 steps"
// );
console.log(
  drawStairs(5),
  "--I\n I\n  I\n   I\n    I",
  "5-step stairs no good"
);

/* 
const drawStairs = n => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");

function drawStairs(n) {
  let result = [];
  
  for (let i = 0; i < n; i++) {
    result[i] = `${' '.repeat(i)}I`;
  }
  
  return result.join('\n');
}

*/
