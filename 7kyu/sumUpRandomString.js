function sumFromString(str) {
  let res = str
    .split(" ")
    .map((w) => w.replace(/[^\d]/gi, " "))
    .join(" ");

  return res.split(" ").reduce((acc, curr) => (acc += +curr), 0);
}
console.log(
  sumFromString("In 2015, I want to know how much does iPhone 6+ cost?"),
  2021
);
console.log(sumFromString("1+1=2"), 4);
console.log(sumFromString("e=mc^2"), 2);
/* function sumFromString(str) {
  return (str.match(/\d+/g) || []).map(Number).reduce((a, b) => a + b, 0)
}

function sumFromString(str) {

      var arr = str.split(/\D/g);
      var res = 0;
      
      for(var i = 0; i < arr.length; i++){
        res += +arr[i];
      }
      
      return res;
    } */
