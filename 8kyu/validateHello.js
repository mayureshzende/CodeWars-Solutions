function validateHello(greetings) {
  const arr = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];

  const obj = {
    hello: "english",
    ciao: "italian",
    salut: "french",
    hallo: "german",
    hola: "spanish",
    ahoj: "czech republic",
    czesc: "polish",
  };
  let str = greetings.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (arr.includes(str[i])) {
      return true;
    }
  }

  return false;
}

//return /h[ae]llo|ciao|salut|hola|ahoj|czesc/i.test(greetings);

// console.log(validateHello("ahoj"), true);
console.log(
  validateHello(
    "aRE. lA que! Tres You: are haStA, WIE: cZEsC, doInG? Wie; yoU! haSTA: holA; yOu, HoMBre, la YOU: ahOj; pASa DOiNg! tsChUSS"
  ),
  true
);

// console.log(
//   validateHello(
//     "BieN? hOmBRe PASa? DOing: hoMBre aRe La; aRe hasTa, how heLlO HoW tschuss! TrES dOiNg: tSChUSs CIAo; HOMbRE TRES hOw QuE lA TSChUss"
//   ),
//   false
// );
