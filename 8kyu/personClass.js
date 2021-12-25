class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get info() {
    return `${this.name} age is ${this.age}`;
  }
}

var john = new Person("john", 34);
console.log(john.name);
console.log(john.age);
// console.log(john.getInfo());

function datingRange(age) {
  //return min-max
  let min, max;

  if (age <= 14) {
    min = age - 0.1 * age;
    max = age + 0.1 * age;
  } else {
    min = age / 2 + 7;
    max = (age - 7) * 2;
  }
  return `${Math.floor(min)}-${Math.floor(max)}`;
}
