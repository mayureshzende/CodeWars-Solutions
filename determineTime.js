function determineTime(durations) {
  let min = 0;
  let arr = [];
  durations.map((time) => {
    arr = time.split(":");
    min += (arr[0] % 60) * 60 + (arr[1] % 60);
  });
  return min <= 1440 ? true : false;
}

console.log(determineTime(["00:30:00", "02:30:00", "00:15:00"]), true);
console.log(determineTime(["06:00:00", "12:00:00", "06:30:00"]), false);
