function inviteMoreWomen(L) {
  let men = 0;
  let women = 0;

  for (const ele of L) {
    if (ele === 1) {
      ++men;
    } else {
      ++women;
    }
  }

  return men > women ? true : false;
}

console.log(inviteMoreWomen([1, 1, -1]), true);

/* 
function inviteMoreWomen(L) {
  return L.reduce((a,b) => a+b) > 0;
}
*/
