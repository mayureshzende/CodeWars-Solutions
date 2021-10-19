function switchDict(dic) {
  const obj = {};

  for (const [key, value] of Object.entries(dic)) {
    // console.log(key, values);
    if (!obj[value]) {
      obj[value] = [key];
    } else {
      obj[value].push(key);
    }
  }

  return obj;
}

//  =====================================
let before2 = {
  Ice: "Cream",
  Heavy: "Cream",
  Light: "Cream",
  Double: "Cream",
};

let expectedAns2 = { Cream: ["Ice", "Double", "Light", "Heavy"] };

console.log(switchDict(before2));

/* 
function switchDict(dic) {
  return Object.entries(dic).reduce((acc, [key, value]) => {
    if (!acc[value]) acc[value] = [];
    acc[value].push(key);
    return acc;
  }, {});
}
*/
