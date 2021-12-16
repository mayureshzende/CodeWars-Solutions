function isToday(date) {
  //Code goes here.
  let today = new Date().toLocaleDateString();
  return today === date.toLocaleDateString();
}

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
var yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

console.log(isToday(new Date()), true);
console.log(isToday(tomorrow), false);
console.log(isToday(yesterday), false);
