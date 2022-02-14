function moveTen(s) {
  let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let res = "";
  for (let i = 0; i < s.length; i++) {
    res +=
      obj[s[i]] + 10 > 26
        ? getKeyByValue(obj, obj[s[i]] + 10 - 26)
        : getKeyByValue(obj, obj[s[i]] + 10);
  }

  return res;
}
function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
console.log(moveTen("testcase"), "docdmkco");
// console.log(moveTen("test"), "docds");

/* 
function moveTen(s){
  return s.split('').map(e => e.charCodeAt(0) + 10 > 122 
                                ? String.fromCharCode(e.charCodeAt(0) - 16) 
                                : String.fromCharCode(e.charCodeAt(0) + 10)).join('');
}

*/
