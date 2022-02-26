// function dateNbDays(a0, a, p) {
//   let count = 1;
//   const interest = a0 * (p / 100 / 360);
//   while (a0 <= a) {
//     a0 += interest;
//     count++;
//   }
//   return JSON.stringify(new Date(2016, 0, count)).slice(1, 11);
// }

function dateNbDays(a0, a, p) {
  let count = 2;
  for (let i = 0; a0 <= a; i++) {
    ++count;
    a0 += a0 * (p / 100 / 360);
  }
  return JSON.stringify(new Date(2016, 0, count)).slice(1, 11);
}

console.log(dateNbDays(4281, 5087, 2), "2024-07-03");
console.log(dateNbDays(100, 101, 0.98), "2017-01-01");

/* 
You have an amount of money a0 > 0 and you deposit it with an interest rate of p percent divided by 360 per day on the 1st of January 2016. You want to have an amount a >= a0.

Task:
The function date_nb_days (or dateNbDays...) with parameters a0, a, p will return, as a string, the date on which you have just reached a.

Example:
date_nb_days(100, 101, 0.98) --> "2017-01-01" (366 days)

date_nb_days(100, 150, 2.00) --> "2035-12-26" (7299 days)
*/
