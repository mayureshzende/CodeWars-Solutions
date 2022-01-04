function giveMeFive(obj) {
  const res = [];
  for (let keys in obj) {
    if (keys.length === 5 && obj[keys].length === 5) {
      res.push("" + keys);
      res.push("" + obj[keys]);
    } else if (keys.length === 5) {
      res.push("" + keys);
    } else if (obj[keys].length === 5) {
      res.push("" + obj[keys]);
    }
  }
  return res;
}

function giveMeFive(obj) {
  var five = [];
  for (var key in obj) {
    if (key.length == 5) five.push(key);
    if (obj[key].length == 5) five.push(obj[key]);
  }
  return five;
}

// console.log(giveMeFive({ Our: "earth", is: "a", beautyful: "world" }), [
//   "earth",
//   "world",
// ]);
// console.log(
//   giveMeFive({ Ihave: "enough", money: "to", buy: "a", car: "model" }),
//   ["Ihave", "money", "model"]
// );

console.log(giveMeFive({ Pears: "than", apple: "sweet" }), [
  "Pears",
  "apple",
  "sweet",
]);
