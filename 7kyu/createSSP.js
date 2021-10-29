//These are your super secret characters you will use to make the password super secure
var superSecretChars = [
  ["a", "@"],
  ["s", "$"],
  ["o", "0"],
  ["h", "5"],
  ["x", "*"],
];
function createSSP(password) {
  let obj = {};
  let pass = "";
  for (let i = 0; i < superSecretChars.length; i++) {
    if (!obj[superSecretChars[i][0]]) {
      obj[superSecretChars[i][0]] = superSecretChars[i][1];
    }
  }

  for (let char of password) {
    // console.log(
    //   ` at ${char}  ------- ${obj.hasOwnProperty(char.toLowerCase())}`
    // );
    if (obj.hasOwnProperty(char.toLowerCase())) {
      pass += obj[char.toLowerCase()];
    } else {
      pass += char;
    }
  }

  return pass;
}

// console.log(createSSP("haxorpassword"), "5@*0rp@$$w0rd");
// console.log(createSSP("HaxorPassword"), "5@*0rP@$$w0rd");
console.log(createSSP("MuchSecureVeryPassword"), "Muc5$ecureVeryP@$$w0rd");

/* 
//These are your super secret characters you will use to make the password super secure
var ssc = [['a', '@'],['s', '$'],['o', '0'], ['h', '5'], ['x', '*']];
function createSSP(password){
  for(var i = 0; i < ssc.length; i++){
    password = password.replace(new RegExp(ssc[i][0], 'gi'), ssc[i][1]);
  }
  return password;
}
----------------------

var chars = {a: '@', s: '$', o: 0, h: 5, x: '*'};
function createSSP(password){
  return password.replace(/[asohx]/gi, function(m){ return chars[m.toLowerCase()] });
}

*/
