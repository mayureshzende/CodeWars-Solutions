function decode(string) {
  let obj = {
    1: 9,
    2: 8,
    3: 7,
    4: 6,
    5: 0,
    6: 4,
    7: 3,
    8: 2,
    9: 1,
    0: 5,
  };

  return string
    .split("")
    .map((ele) => obj[ele])
    .join("");
}

console.log(decode("4103432323"), "6957678787");
console.log(decode("4103438970"), "6957672135");
console.log(decode("4104305768"), "6956750342");

/*
1 2 3 4 5 6 7 8 9 0 
9 8 7 6 0 4 3 2 1 5


function decode(string) {
  return string.split("").map(function(value) {
    return value==5 ? 0 : value==0 ? 5 : 10 - value;
  }).join("");
}

const decode = s => s.replace(/./g, c => '5987604321'[c]);
    
*/
