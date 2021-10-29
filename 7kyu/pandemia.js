function infected(s) {
  console.log(s.includes("1"));
  if (!s.includes("1") && !s.includes("0")) return 0;

  let arr = s.split("X");

  let total = 0; // = s.length;
  let infected = 0;

  for (let word of arr) {
    if (word.indexOf("1") !== -1) {
      infected += word.length;
      word = word.replace(/0/g, "1");
      //   console.log(word);
    }
    total += word.length;
  }

  //   console.log(total, " and infection is ", infected);
  //   console.log(" infection is ", (100 * infected) / total);
  return (100 * infected) / total;
}

// console.log(infected("01000000X000X011X0X"));
// console.log(infected("01X000X010X011XX"));
// console.log(infected("XXXXX"));
// console.log(infected("0000000010"));
// console.log(infected("X00X000000X10X0100"));
// console.log(infected("xxxx"));

/* 
function infected(s) {

  if(!(s.includes('0') && s.includes('1'))) return 0;
  
  let str = s.split('X').map(el => el.includes('1') ? el.replace(/0/g, '1') : el).join('');
  
  let total = str.length;
  let infect = str.match(/1/g).length;
  
  return 100 * infect / total;
}

*/
