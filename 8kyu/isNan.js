const isReallyNaN = (val) => {
  console.log(typeof val);
  return typeof val !== "number" ? false : true;
};

console.log(isReallyNaN(37) === false);
console.log(isReallyNaN("37") === false);
console.log(isReallyNaN(NaN) === true);
console.log(isReallyNaN(undefined) === false);
