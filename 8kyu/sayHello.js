function sayHello(name, city, state) {
  let str = "";
  name.map((ele) => (str += ele + " "));
  return `Hello, ${str.trim()}! Welcome to ${city}, ${state}!`;
}
console.log(
  sayHello(["John", "Smith"], "Phoenix", "Arizona") ==
    "Hello, John Smith! Welcome to Phoenix, Arizona!",
  "Hello, John Smith! Welcome to Phoenix, Arizona!"
);
