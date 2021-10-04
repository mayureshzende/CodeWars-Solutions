function getDayName(dateString) {
  let str = "" + dateString;
  console.log(dateString);
  let date = str.split("/");
  // console.log(date);
  let dayName = new Date(dateString);

  let arr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = dayName.getDay();
  console.log("the day is : ", day);
  // Write your code here

  return arr[day];
  // return arr[day];
}

console.log(getDayName("09 / 15 / 2021"));
