const comfortable_word = (word) => {
  let left = [];
  let right = [];

  leftIncludes = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "a",
    "s",
    "d",
    "f",
    "g",
    "z",
    "x",
    "c",
    "v",
    "b",
  ];
  rightIncludes = ["y", "u", "i", "o", "p", "h", "j", "k", "l", "n", "m"];
  let str = word.split("");
  for (const char of str) {
    if (leftIncludes.includes(char)) {
      left.push(char);
    }
    if (rightIncludes.includes(char)) {
      right.push(char);
    }
  }
  if ((right.length > 0) & (left.length > 0)) {
    return true;
  }

  return false;
};

console.log(comfortable_word("word"));
// console.log(comfortable_word("test"));

/* 
const comfortable_word = word => {
  let right=['y', 'u', 'i', 'o', 'p', 'h', 'j','k', 'l', 'n', 'm'];
  let left=['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b'];
  let arr=[];
  if (right.includes(word[0])){
  word.split('').map((v,i,a)=>{
  if (i%2===0){
    if (right.includes(v)){arr.push(true)}
    else{ arr.push(false)}}
  if (i%2!==0){
    if (left.includes(v)){arr.push(true)}
    else{ arr.push(false)}
  }})}
  if (left.includes(word[0])){
  word.split('').map((v,i,a)=>{
  if (i%2!==0){
    if (right.includes(v)){arr.push(true)}
    else{arr.push(false)}
  }
  if (i%2===0){
    if (left.includes(v)){arr.push(true)}
    else{ arr.push(false)}
  }})}
  return arr.every(v=>v===true)
};


const comfortable_word = word => {
  console.log(word);
  var r1='qwertasdfgzxcvb';
  var r2='yuiophjklnm';
  if (r1.indexOf(word[0])!=-1)
  {
    for (var i=0; i<word.length; ++i)
      if (i%2==0)
      {
        if (r1.indexOf(word[i])==-1)  
          return false;
      }
      else
        if (r2.indexOf(word[i])==-1)  
          return false;
  }
  else
  {
    for (var i=0; i<word.length; ++i)
      if (i%2==0)
      {
        if (r2.indexOf(word[i])==-1)  
          return false;
      }
      else
        if (r1.indexOf(word[i])==-1)  
          return false;
  }
  return true;
};
*/
