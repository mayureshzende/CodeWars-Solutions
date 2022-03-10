function compose(s1, s2) {
  const str1 = s1.split("\n");
  const str2 = s2.split("\n");
  const res = [];

  for (let i = 0; i < str1.length; i++) {
    res.push(
      str1[i].slice(0, i + 1) +
        str2[str2.length - (i + 1)].slice(0, str2.length - i)
    );
  }

  return res.join("\n");
}

// console.log(
//   compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB"),
//   "bNkTB\nhTrWO\nRTFVi\nCnnIj"
// );
// console.log(
//   compose("HXxA\nTGBf\nIPhg\nuUMD", "Hcbj\nqteH\nGbMJ\ngYPW"),
//   "HgYPW\nTGGbM\nIPhqt\nuUMDH"
// );
console.log(
  compose("tSrJ\nOONy\nsqPF\nxMkB", "hLqw\nEZuh\nmYFl\nzlYf"),
  "tzlYf\nOOmYF\nsqPEZ\nxMkBh"
);
