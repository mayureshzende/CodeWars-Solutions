function repeatedChar(s, a) {
  console.log(s);
  let str = "";
  let count = 0;

  for (let i = 0; i <= a; i += s.length) {
    str += s;
  }

  console.log(str);
  console.log(str.length);

  for (let i = 0; i < a; i++) {
    if (str[i] === str[0]) {
      count++;
    }
  }
  console.log(count);
}

// repeatedChar("a", 10000);

function repeatedString(s, n) {
  // Write your code here
  let str = "";
  let count = "";

  if (s.length === 1) {
    return n;
  }

  for (let i = 0; i <= n; i += s.length) {
    str += s;
  }

  for (let i = 0; i < n; i++) {
    if (str[i] === "a") {
      count++;
    }
  }

  return count;
}

// repeatedString("a", 1000000);
// console.log(repeatedString("ab", 100000));

function repeatedString1(s, n) {
  // Write your code here
  let len = s.length;
  //count a in the given string
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (s.charAt(i) == "a") {
      ++count;
    }
  }
  console.log(count);

  let repTimes = Math.floor(+n / len);
  console.log(repTimes);
  // find the length after the rep
  let strLeft = +n - len * repTimes;
  console.log(strLeft);
  // count extra reamaining rep
  let ext = 0;
  for (let i = 0; i < strLeft; i++) {
    if (s.charAt(i) == "a") {
      ++ext;
    }
  }
  console.log(ext);

  let totalCount = repTimes * count + ext;

  // return Math.floor(totalCount);
  return totalCount;
}

console.log(repeatedString1("aba", 10));
