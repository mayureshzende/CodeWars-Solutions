// * [A - Z]

function solution(string) {
  //   console.log(string.split("[A-Z]*"));
  //   return string.replace(/([A-Z])/g, " $1");
  //   return string.replace(/([A-Z])/g, " $1");
  let newStr = "";
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    if (char === char.toUpperCase()) {
      newStr += " " + char;
    } else {
      newStr += char;
    }
  }
  return newStr;
}

console.log(solution("camelCasingTest"));
