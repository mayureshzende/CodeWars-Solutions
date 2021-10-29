function computerToPhone(numbers) {
  let obj = {
    0: "0",
    1: "7",
    2: "8",
    3: "9",
    4: "4",
    5: "5",
    6: "6",
    7: "1",
    8: "2",
    9: "3",
  };
  let res = "";
  for (let s of numbers) {
    res += obj[s];
  }
  return res;
}

console.log(computerToPhone("0789456123"), "0123456789");
/* 
function computerToPhone(numbers) {
  return numbers.split('').map(function(d) {return "0789456123"[d]; }).join('');
}
*/
