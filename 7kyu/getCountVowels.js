function getCount(str) {
  var vowelsCount = 0;
  let vowelArr = ["a", "e", "i", "o", "u"];
  for (let char of str.toLowerCase()) {
    if (vowelArr.includes(char)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

console.log(getCount("abracadabra"), 5);
/* 
function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}


function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
*/
