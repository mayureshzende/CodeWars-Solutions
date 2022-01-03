function slope(points) {
  //..

  points.map((ele) => {
    if (!ele) return "undefined";
  });
  let div = (points[3] - points[1]) / (points[2] - points[0]);
  return isFinite(div) ? +div : undefined + "";
}

// console.log(slope([19, 3, 20, 3]), "0");
// console.log(slope([2, 7, 4, -7]), "-7");
// console.log(slope([10, 50, 30, 150]), "5");
// console.log(slope([15, 45, 12, 60]), "-5");
// console.log(slope([10, 20, 20, 80]), "6");
// console.log(slope([-10, 6, -10, 3]), "undefined");

// const slope = ([x1, y1, x2, y2]) => {
//   const result = (y2 - y1) / (x2 - x1);
//   return isFinite(result) ? `${result}` : "undefined";
// };

const sum = [{}, 943894, true, []].reduce((acc, curr) => {
  if (typeof curr === "number") {
    acc + curr;
  } else {
    acc + 0;
  }

  return acc;
}, 0);

console.log(sum);
// console.log(typeof []);
