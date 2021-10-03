var howManyYears = function (date1, date2) {
  //   console.log(date1.slice(0, 4));
  //   console.log(date2.slice(0, 4));
  let year1 = date1.slice(0, 4);
  let year2 = date2.slice(0, 4);

  return date1 > date2
    ? date1.slice(0, 4) - date2.slice(0, 4)
    : date2.slice(0, 4) - date1.slice(0, 4);
};
console.log(howManyYears("2015/10/10", "1990/10/10"));
