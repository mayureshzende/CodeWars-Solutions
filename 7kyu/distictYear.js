function distinctDigitYear(year) {
  for (let i = year + 1; i < year * 2; i++) {
    let set = [...new Set(i.toString())];
    if (set.length === 4) {
      return i;
    }
  }
}

console.log(distinctDigitYear(1987), 2013);
console.log(distinctDigitYear(2013), 2014);
