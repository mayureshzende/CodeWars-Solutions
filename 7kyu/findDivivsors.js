function divisors(integer) {
  let res = [];

  if (checkPrime(integer)) {
    return `${integer} is prime`;
  }

  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      res.push(i);
    }
  }

  return res;
}

function checkPrime(number) {
  for (let i = 2; i < Math.floor(number / 2); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");
console.log(divisors(7), "7 is prime");

/*
function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};
*/
