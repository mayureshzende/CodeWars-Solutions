function getGrade(s1, s2, s3) {
  let avg = Math.floor((s1 + s2 + s3) / 3);
  console.log(avg);
  if ((avg >= 90) & (avg <= 100)) {
    return "A";
  }
  if ((avg >= 80) & (avg < 90)) {
    return "B";
  }
  if ((avg >= 70) & (avg < 80)) {
    return "C";
  }
  if ((avg >= 60) & (avg < 70)) {
    return "D";
  }
  return "F";
}

console.log(getGrade(95, 90, 93), "A");
console.log(getGrade(100, 85, 96), "A");
console.log(getGrade(92, 93, 94), "A");
