function spongeMeme(sentence) {
  let str = "";

  for (let i = 0, length = sentence.length; i < length; i++) {
    str += i % 2 === 0 ? sentence[i].toUpperCase() : sentence[i].toLowerCase();
  }

  return str;
}
console.log(
  spongeMeme("stop Making spongebob Memes!"),
  "StOp mAkInG SpOnGeBoB MeMeS!"
);
