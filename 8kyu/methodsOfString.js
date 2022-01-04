function fiveLine(s) {
  let str = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
      str += s.trim();
    }
    str += "\n";
  }
  return str.trim();
}

// console.log(fiveLine("  a"), "a\naa\naaa\naaaa\naaaaa");

function fiveLine1(s) {
  //coding here...
  s = s.trim();
  var tmp = s;
  var res = [s];
  console.log(res);
  for (var i = 1; i < 5; i++) {
    res.push((s += tmp));
  }
  return res.join("\n");
}

fiveLine1("t");
