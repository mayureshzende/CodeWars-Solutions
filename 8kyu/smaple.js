function print() {
  setTimeout(() => {
    console.log("hello 1");
  }, 3000);
}

function print2A() {
  setTimeout(() => {
    console.log("hello 2 ");
  }, 1000);
}

function printsec() {
  setTimeout(() => {
    console.log("hello sec ");
  }, 200);
}

print2A();
console.log("hello log");
print();
console.log("hello log 1");
printsec();
