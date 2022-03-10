function tapCodeTranslation(text) {
  const obj = {
    A: "1 1",
    B: "1 2",
    C: "1 3",
    D: "1 4",
    E: "1 5",
    F: "2 1",
    G: "2 2",
    H: "2 3",
    I: "2 4",
    J: "2 5",
    K: "1 3",
    L: "3 1",
    M: "3 2",
    N: "3 3",
    O: "3 4",
    P: "3 5",
    Q: "4 1",
    R: "4 2",
    S: "4 3",
    T: "4 4",
    U: "4 5",
    V: "5 1",
    W: "5 2",
    X: "5 3",
    Y: "5 4",
    Z: "5 5",
  };
  let res = [];
  for (let i = 0; i < text.length; i++) {
    res.push(getString(obj[text[i].toUpperCase()]));
  }

  return res.join(" ");
}

function getString(str) {
  let one = str[0];
  let two = str[2];
  let res1 = "";
  let res2 = "";
  for (let i = 0; i < one; i++) {
    res1 += ".";
  }

  for (let i = 0; i < two; i++) {
    res2 += ".";
  }
  return `${res1} ${res2}`;
}

console.log(
  tapCodeTranslation("test"),
  ".... .... . ..... .... ... .... ....",
  `Text: "test"`
);
