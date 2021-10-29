var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    let res = 0;
    let str = "";
    if (count === 0) return "0=0";
    if (count < 0) return `${count}<0`;
    for (let i = 0; i <= count; i++) {
      res += i;
      str += `${i}+`;
    }
    str = `${str.slice(0, -1)} = ${res}`;
    ``;
    return res, str;
  };

  return SequenceSum;
})();

// console.log(SequenceSum.showSequence(6));
// console.log(SequenceSum.showSequence(-15));
// console.log(SequenceSum.showSequence(14));
console.log(SequenceSum.showSequence(7));
// console.log(SequenceSum.showSequence(0));

/*
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    var m = [], s=0;
    if(count === 0) return count + '=' + 0;
    if(count < 0) return count + '<' + 0;
    
    for(var i=0; i<=count; i++) {
      s+=i; 
      m.push(i);
    };

    return m.join('+') + ' = ' + s;
  };

  return SequenceSum;

})();
*/
