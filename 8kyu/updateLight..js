function updateLight(current) {
  //your code here!

  return current === "green"
    ? "yellow"
    : current === "yellow"
    ? "red"
    : current === "red"
    ? "green"
    : "";
}

console.log(updateLight("green"), "yellow");
console.log(updateLight("yellow"), "red");
console.log(updateLight("red"), "green");

/* 
const updateLight = current => ({
  green: 'yellow',
  yellow: 'red',
  red: 'green',
})[current]

---------

function updateLight(current) {
  
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

}

*/
