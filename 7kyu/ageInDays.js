function ageInDays(year, month, day) {
  var dateObj = new Date();
  var month1 = dateObj.getUTCMonth() + 1; //months from 1-12
  var day1 = dateObj.getUTCDate();
  var year1 = dateObj.getUTCFullYear();
  console.log(new Date(year, month, day));

  var date1 = new Date(`${month}/${day}/${year}`);
  var date2 = new Date(`${month1}/${day1}/${year1}`);

  // To calculate the time difference of two dates
  var Difference_In_Time = date2.getTime() - date1.getTime();

  // To calculate the no. of days between two dates
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  return `You are ${Difference_In_Days} days old`;
}

// var birthday = new Date();
// birthday.setDate(birthday.getDate() - 2);
// console.log(
//   ageInDays(
//     birthday.getFullYear(),
//     birthday.getMonth() + 1,
//     birthday.getDate()
//   ),
//   "You are 2 days old",
//   "Should return 'You are 2 days old' if your birthday is 2 days in the past"
// );

// const ageInDays = (y, m, d) =>
//   "You are " +
//   (new Date() - new Date().setFullYear(y, m - 1, d)) / 86400000 +
//   " days old";

var birthday = new Date();
birthday.setDate(birthday.getDate() - 365);
console.log(
  ageInDays(
    birthday.getFullYear(),
    birthday.getMonth() + 1,
    birthday.getDate()
  ),
  "You are 365 days old",
  "Should return 'You are 365 days old' if your birthday is 365 days in the past"
);
