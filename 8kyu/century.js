function century(year) {
  // Finish this :)
  if (year < 100) {
    return 1;
  }
  return year % 100 === 0 ? Math.round(year / 100) : Math.round(year / 100) + 1;
  //  (( year +  99 )/ 100)  | 0 ;
}

console.log(century(1705), 18);
console.log(century(1900), 19);
console.log(century(1601), 17);
console.log(century(2000), 20);
console.log(century(60388), 134);
/* 
const century = year => Math.ceil(year/100)

=======
function century(year) {
  return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
}
-------------------
const century = year => year % 100 === 0 ? parseInt(year / 100) : parseInt(year / 100) + 1;

*/
