Array.prototype.remove_ = function (integer_list, values_list) {
  let res = integer_list;
  for (let i = 0, len = values_list.length; i < len; i++) {
    res = res.filter((ele) => ele !== values_list[i]);
  }
  return res;
};

l = new Array();

integer_list = [1, 1, 2, 3, 1, 2, 3, 4];
values_list = [1, 3];
console.log(l.remove_(integer_list, values_list), [2, 2, 4]);

/* 
Array.prototype.remove_ = function(integer_list, values_list){
  return integer_list.filter(function (element) {
    return values_list.indexOf(element) === -1;
  });
}
*/
