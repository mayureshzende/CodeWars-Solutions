function past(h, m, s) {
  let sec = s * 1000;
  let min = m * 60 * 1000;
  let hr = h * 3600 * 1000;
  return sec + min + hr;
}
// return ((h*3600)+(m*60)+s)*1000;
console.log(past(0, 1, 1), 61000);
console.log(past(1, 1, 1), 3661000);
