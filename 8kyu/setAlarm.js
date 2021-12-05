function setAlarm(employed, vacation) {
  if (employed & vacation) return false;
  if (employed & !vacation) return true;
  return false;
}
//   return employed && !vacation;
module.exports = setAlarm();

console.log(setAlarm(true, true), false, "Should be false.");
console.log(setAlarm(false, true), false, "Should be false.");
console.log(setAlarm(true, false), true, "Should be true.");
