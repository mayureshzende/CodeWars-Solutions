function sentencify(words) {
  let str = "";

  for (let i = 0; i < words.length; i++) {
    str +=
      i === 0
        ? words[i].split("")[0].toUpperCase() + words[i].slice(i + 1) + " "
        : words[i] + " ";
  }
  return str.trim() + ".";
}
/* 
function sentencify(words) 
{
  var str=words.join(' ');
  return str.charAt(0).toUpperCase() + str.substr(1) +'.';
}
*/

console.log(
  sentencify(["FIELDS", "of", "CORN", "are", "to", "be", "sown"]),
  "FIELDS of CORN are to be sown."
);
console.log(sentencify(["i", "am", "an", "AI"]), "I am an AI.");

console.log(
  sentencify(["i'm", "afraid", "I", "can't", "let", "you", "do", "that"]),
  "I'm afraid I can't let you do that."
);
