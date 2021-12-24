class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName || "John";
    this.lastName = lastName || "Doe";
    this.age = age || 0;
    this.gender = gender || "Male";
  }

  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}

console.log(new Person().firstName, "John");
console.log(new Person().lastName, "Doe");
console.log(new Person().age, 0);
console.log(new Person().gender, "Male");
console.log(new Person().sayFullName(), "John Doe");
/* 
class Person {
  constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
    Object.assign(this, { firstName, lastName, age, gender });
  }
  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}
 */
