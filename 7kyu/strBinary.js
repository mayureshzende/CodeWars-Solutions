const str = "password123";
const textToBinary = (str = "") => {
  let res = "";
  res = str
    .split("")
    .map((char) => {
      return "0" + char.charCodeAt(0).toString(2);
    })
    .join(" ");
  return res;
};

console.log(textToBinary(str));

/* 1110000 1100001 1110011 1110011 1110111 1101111 1110010 1100100 110001 110010 110011


01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 0110001 0110010 0110011 
);

01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011 

console.log(
    "char is - ",
    char,
    " and the char at code 0 is ",
    char.charCodeAt(0)
    
    */
