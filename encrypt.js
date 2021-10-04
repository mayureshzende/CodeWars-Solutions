function encrypt(text, n) {
  let arr = text.split("");
  //   console.log(arr);
  let str = "";
  let odd = "";
  let even = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j % 2 === 0) {
        even += arr[j];
        // console.log("even   ", j, "ev = ", even);
      } else {
        odd += arr[j];
        // console.log("odd ", j, "odd ", odd);
      }
    }
    arr = odd.concat(even);
    odd = "";
    even = "";
    // console.log(" arrr is ", i, " = ", arr, "and length is ", arr.length);
    // str = str.concat(odd, even);
    // console.log(" str on i is ", i, " = ", str);
    // arr = str.split("");
    // str = arr.join("");
    // console.log(" --- ", arr);
    // encrypt(join(""), n - 1);
  }
  // console.log(" arrr is ", i, " = ", arr);

  console.log(arr);
  return '"' + arr + '"';
}

console.log(encrypt("This is a test!", 3));

// encrypt(("This is a test!", 3), " ---- ", " Tah itse sits!");
// encrypt(("This is a test!", 4), " ---- ", "This is a test!");
// encrypt(("This is a test!", -1), "!!!!!", "This is a test!");
encrypt(
  ("This is a test!", -1),
  "!!!!!",
  "This is a asdsaddddddddddddddddddddddddddddddddddddd sadassssssasdddddddddasdaasdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa test!"
);

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join("");
  }
  return encryptedText;
}

// encrypt(("This is a test!", 0), "This is a test!");
// (encrypt("This is a test!", 1), "hsi  etTi sats!");
// console.log(encrypt("This is a test!", 1));
// console.log(
//   encrypt("This is a test!", 2),
//   " ------------------- ",
//   "s eT ashi tist!"
// );
// console.log(0 % 2);

/* 
smart solution for the encryption

function encrypt(text, n) {
  console.log(text, n);
  if (!text || n <= 0) return text;
  while (n--) {
    let ans = "";
    for (let i = 1; i < text.length; i += 2) {
      ans += text[i];
    }
    for (let i = 0; i < text.length; i += 2) {
      ans += text[i];
    }
    text = ans;
  }
  return text;
}


function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join("");
  }
  return encryptedText;
} */
