function whatday(num) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  //   console.log(days[num - 1]);
  return num < 8
    ? days[num - 1]
    : "Wrong, please enter a number between 1 and 7";
}

console.log(whatday(1), "Sunday");
console.log(whatday(2), "Monday");
console.log(whatday(3), "Tuesday");
console.log(whatday(8), "Wrong, please enter a number between 1 and 7");
