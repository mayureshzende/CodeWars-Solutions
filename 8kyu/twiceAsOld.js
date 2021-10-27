function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  let diffAge = dadYearsOld - sonYearsOld;
  return Math.abs(diffAge - sonYearsOld);
}
console.log(twiceAsOld(36, 7), 22);
console.log(twiceAsOld(42, 21), 0);

/* 
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}
*/
