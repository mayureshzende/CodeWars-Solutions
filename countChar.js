function count(word) {
  if (word.length === 0) return {};

  const charCount = {};

  for (const char of word) {
    !charCount.hasOwnProperty(char)
      ? (charCount[char] = 1)
      : (charCount[char] += 1);
  }
  return charCount;
}

// console.log(count("aba"), { a: 2, b: 1 });
// console.log(count(""), {});

// function count(string) {
//   //   if (string.length === 0) return {};

//   const charCount = new Map();

//   for (let char of string) {
//     !charCount.has(char)
//       ? charCount.set(char, 1)
//       : charCount.set(char, charCount.get(char) + 1);
//   }
//   console.log("------------ map ", charCount);
//   return charCount;
// }
function countReduce(word) {
  if (!word.length) return {};

  let str = [...word];

  const res = str.reduce((charSeen, char) => {
    !charSeen.hasOwnProperty(char)
      ? (charSeen[char] = 1)
      : (charSeen[char] += 1);
    return charSeen;
  }, {});

  return res;
}

console.log(countReduce("aba"), { a: 2, b: 1 });
console.log(countReduce(""), {});

/*
working code 

function count(word) {
// if(!word.length) return {}
//   const charCount = {};

//   for (const char of word) {
//     !charCount.hasOwnProperty(char)
//       ? (charCount[char] = 1)
//       : (charCount[char] += 1);
//   }
//   return charCount;
//     if (!word.length) return {};

  let str = [...word];

  return [...word].reduce((charSeen, char) => {
    !charSeen.hasOwnProperty(char)
      ? (charSeen[char] = 1)
      : (charSeen[char] += 1);
    return charSeen;
  }, {});
}

=============
function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}
*/
