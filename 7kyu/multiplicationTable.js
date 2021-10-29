multiplicationTable = function (size) {
  // insert code here
  let res = [];
  for (let i = 1; i <= size; i++) {
    let numbers = new Array(size).fill(1).map((ele, index) => {
      console.log("" + ele + " at " + index + " eq " + (ele + index));

      return (ele + index) * i;
    });
    console.log(" ------ ");
    res.push(numbers);
  }
  return res;
};

console.log(multiplicationTable(3));
