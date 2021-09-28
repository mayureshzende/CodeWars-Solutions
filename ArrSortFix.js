Array.prototype.sort = function () {
  let buf,
    arr = this;
  //   for (let j = 0; j < arr.length - 1; j++)
  //     for (let i = j + 1; i < arr.length; i++)
  //       if (arr[j] > arr[i]) {
  //         buf = arr[j];
  //         arr[j] = arr[i];
  //         arr[i] = buf;
  //       }
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  //   console.log(arr.length);

  return arr;
};

/*
function mergeSort(array) {
  if (array.len < 2) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  let sleft = mergeSort(left);
  let sright = mergeSort(right);

  return merge(sleft, sright);
}
function merge(left, right) {
  let res = [],
    inleft = 0,
    inright = 0;

  while (inleft < left && inright < right) {
    if (left[inleft] < right[inright]) {
      res.push(left[inleft]);
      inleft++;
    } else {
      res.push(right[inright]);
      inright++;
    }
  }
  return res.concat(left.slice(inleft), right.slice(inright));
} */

/* function compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
} */

console.log([9, 7, 2, 4, 5, 3, 6, 8, 1].sort(), [1, 2, 3, 4, 5, 6, 7, 8, 9]);

/* 
Array.prototype.sort = function () {
  for(var i=0;i<this.length-1;i++){
    for(var j=this.length-1;j>=i;j--){
      if(this[j]>this[j+1]){
        [this[j],this[j+1]]=[this[j+1],this[j]];
      }
    }
  }
  return this;
} */
