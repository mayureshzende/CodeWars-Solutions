function calculateAge(y1, y2) {
  if (y1 === y2) {
    return "You were born this very year!";
  }
  return y1 < y2
    ? `You are ${y2 - y1} ${y2 - y1 > 1 ? "years" : "year"} old.`
    : `You will be born in ${y1 - y2} ${y1 - y2 > 1 ? "years" : "year"}.`;
}

console.log(calculateAge(2012, 2016), "You are 4 years old.");
console.log(calculateAge(1989, 2016), "You are 27 years old.");
console.log(calculateAge(2000, 2090), "You are 90 years old.");
console.log(calculateAge(2000, 1990), "You will be born in 10 years.");
console.log(calculateAge(3400, 3400), "You were born this very year!");
console.log(calculateAge(900, 2900), "You are 2000 years old.");
