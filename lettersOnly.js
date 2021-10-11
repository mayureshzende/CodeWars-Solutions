function removeChars(s) {
  let arr = s.split(" ");
  let str = "";

  for (const word of arr) {
    str += word.replace(/[^A-Za-z]/g, "") + " ";
  }

  // console.log(str.slice(0, str.length - 1).length);

  return str.slice(0, str.length - 1).length;
}

// console.log(removeChars("that's a pie&ce o_f p#ie! 123"));
// console.log(removeChars("1 + 1 = 2"));
console.log(removeChars("tree1"));

/*
function removeChars(s) {
  return s.replace(/[^a-z ]/ig, "")
}


function removeChars(s) {
  return s.split('').filter(s => s === ' ' || s.toLowerCase() !== s.toUpperCase()).join('');
}
*/
