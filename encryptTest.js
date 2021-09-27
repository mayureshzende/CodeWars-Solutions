/* function encrypt(text, n) {
  let arr = text.split("");
  //   console.log(arr);
  let str = "";
  let odd = "";
  let even = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j % 2 === 0) {
        even += arr[j];
      } else {
        odd += arr[j];
      }
    }
    arr = odd.concat(even);
    odd = "";
    even = "";
  }

  // console.log(" this is array ~~~~~~~~~~~~~~~~~~~~~", arr + "");
  return arr;
} */

// console.log(encrypt("This is a test!", 3));
//
// encrypt(("This is a test!", 1), " ---- ", " Tah itse sits!");
// encrypt(("This is a test!", 4), " ---- ", "This is a test!");
// encrypt(("This is a test!", -1), "!!!!!", "This is a test!");

// encrypt(("This is a test!", 0), "This is a test!");
// (encrypt("This is a test!", 1), "hsi  etTi sats!");
// console.log(encrypt("This is a test!", 1));
// console.log(
//   encrypt("This is a test!", 2),
//   " ------------------- ",
//   "s eT ashi tist!"
// );
// console.log(0 % 2);

// encrypt("This is a test!", 1);

/* function test() {
  return 3;
}

test(); */

function encrypt(text, n) {
  let arr = text.split("");
  let str = "";
  let odd = "";
  let even = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j % 2 === 0) {
        even += arr[j];
      } else {
        odd += arr[j];
      }
    }
    arr = odd.concat(even);
    odd = "";
    even = "";
  }

  return arr;
}

// console.log(
//   encrypt("This is a test!", 0),
//   "   =  ============  ",
//   "hsi  etTi sats!"
// );

function decrypt(encryptedText, n) {
  if (n <= 0 || !encryptedText) {
    return encryptedText;
  }

  let inp = encryptedText;

  const transform = function (inp) {
    // for (let i = 0; i < n; i++) {
    let str = "";
    let odd = inp.slice(0, inp.length / 2);
    let even = inp.slice(inp.length / 2);

    for (let j = 0; j < inp.length; j++) {
      if (j % 2 === 0) {
        str += even[0];
        even = even.slice(1);
      } else {
        str += odd[0];
        odd = odd.slice(1);
      }
    }
    return str;
  };

  // console.log(str, "  here in func ", str.length);
  for (let i = 0; i < n; i++) {
    inp = transform(inp);
  }

  return inp;
}

console.log(
  (decrypt("hsi  etTi sats!", 4), " dec --- ", "  ========= This is a test!")
);
