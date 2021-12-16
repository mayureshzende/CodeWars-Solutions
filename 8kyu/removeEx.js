function remove(s, n) {
  let str = s.split("");
  for (let i = 0; i < str.length; i++) {
    if ((str[i] === "!") & (n > 0)) {
      str[i] = "";
      n--;
    }
  }
  return str.join("");
}

console.log(remove("Hi!", 1), "Hi");
console.log(remove("Hi!", 100), "Hi");
console.log(remove("Hi!!!", 1), "Hi!!");
console.log(remove("Hi!!!", 100), "Hi");
// console.log(remove("!Hi", 1), "Hi");
// console.log(remove("!Hi!", 1), "Hi!");
// console.log(remove("!Hi!", 100), "Hi");
console.log(remove("!!!Hi !!hi!!! !hi", 1), "!!Hi !!hi!!! !hi");
// console.log(remove("!!!Hi !!hi!!! !hi", 3), "Hi !!hi!!! !hi");

/* 
function remove(s,n){
  for (var i=0;i<n;i++) s=s.replace("!","");
  return s;
}

function remove(s,n){
  return n>0 ? remove(s.replace('!', ''), n-1) : s;
}

*/
