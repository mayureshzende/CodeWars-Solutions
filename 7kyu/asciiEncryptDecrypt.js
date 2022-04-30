function asciiEncrypt(plaintext) {
  let len = plaintext.length;
  let output = "";
  for (let i = 0; i < len; i++) {
    output += String.fromCharCode(plaintext[i].charCodeAt(0) + i);
  }
  return output;
}

function asciiDecrypt(ciphertext) {
  let len = ciphertext.length;
  let output = "";
  for (let i = 0; i < len; i++) {
    output += String.fromCharCode(ciphertext[i].charCodeAt(0) - i);
  }
  return output;
}

console.log(asciiEncrypt("PASSWORD"), "PBUV[TXK", "Encryption is incorrect");
console.log(asciiDecrypt("PBUV[TXK"), "PASSWORD", "Decryption is incorrect");
