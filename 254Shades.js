function shadesOfGrey(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    let hex = i.toString(16);
    if (i < 10) {
      res.push(`#0${hex}0${hex}0${hex}`);
    } else if ((i >= 10) & (i <= 15)) {
      res.push(`#0${hex}0${hex}0${hex}`);
    } else {
      res.push(`#${hex}${hex}${hex}`);
    }
  }
  if (n > 254) {
    return res.slice(0, 254);
  }
  return res;
}

console.log(shadesOfGrey(256));

/* 
function shadesOfGrey(n) {
  var shades = []
  
  for (var i = 1; i <= Math.min(n, 254); i++) {
    var grey = ('0' + i.toString(16)).slice(-2)
    shades.push('#' + grey + grey + grey)
  }
  
  return shades
}
*/
