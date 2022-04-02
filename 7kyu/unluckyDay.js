function unluckyDays(year) {
  //your code here
  return Array.from({ length: 12 }).filter(
    (_, i) => new Date(year, i, 13).getDay() === 5
  ).length;
}

/* 
  const names = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const fridays13 = months.map(month => {
    const date = new Date(year, month - 1, 1)
    let count = 0
    while (date.getMonth() === month - 1) {
      const day = `${date.getDate()}-${names[date.getDay()]}`
      if (day === '13-fri') count++
      date.setDate(date.getDate() + 1)
    }
    return count
  })
  return fridays13.reduce((total, friday) => total + friday, 0)
}

function unluckyDays(year){
  let date = new Date(year,0).getTime()
  let d = 1000*60*60*24
  let friday=0
  for (let i=0;i<365;i++){
    date+=d
    if (new Date(date).getDay()===5&&new Date(date).getDate()===13) friday++
  }
  return friday
}

*/

console.log(unluckyDays(1586), 1, "should be: 1");
console.log(unluckyDays(1001), 3, "should be: 3");
console.log(unluckyDays(2819), 2, "should be: 2");
console.log(unluckyDays(2792), 2, "should be: 2");
console.log(unluckyDays(2723), 2, "should be: 2");
console.log(unluckyDays(1909), 1, "should be: 1");
console.log(unluckyDays(1812), 2, "should be: 2");
