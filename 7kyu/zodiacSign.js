function starSign(date) {
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;

  if ((day >= 21) & (month === 1) || (day <= 19) & (month === 2))
    return "Aquarius";
  if ((day >= 20) & (month === 2) || (day <= 20) & (month === 3))
    return "Pisces";
  if ((day >= 21) & (month === 3) || (day <= 20) & (month === 4))
    return "Aries";
  if ((day >= 21) & (month === 4) || (day <= 21) & (month === 5))
    return "Taurus";
  if ((day >= 22) & (month === 5) || (day <= 21) & (month === 6))
    return "Gemini";
  if ((day >= 22) & (month === 6) || (day <= 22) & (month === 7))
    return "Cancer";
  if ((day >= 23) & (month === 7) || (day <= 23) & (month === 8)) return "Leo";
  if ((day >= 24) & (month === 8) || (day <= 23) & (month === 9))
    return "Virgo";
  if ((day >= 24) & (month === 9) || (day <= 23) & (month === 10))
    return "Libra";
  if ((day >= 24) & (month === 10) || (day <= 22) & (month === 11))
    return "Scorpio";
  if ((day >= 23) & (month === 11) || (day <= 21) & (month === 12))
    return "Sagittarius";
  return "Capricorn";
}

/* 
  Aquarius ------ 21 January - 19 February
Pisces --------- 20 February - 20 March
Aries ---------- 21 March - 20 April
Taurus -------- 21 April - 21 May
Gemini -------- 22 May - 21 June
Cancer -------- 22 June - 22 July
Leo ------------- 23 July - 23 August
Virgo ----------- 24 August - 23 September
Libra ----------- 24 September - 23 October
Scorpio -------- 24 October - 22 November
Sagittarius ---- 23 November - 21 December
Capricorn ----- 22 December - 20 January

 dateObj.getUTCMonth() + 1; //months from 1-12
  var day1 = dateObj.getUTCDate();
  var year1 = dateObj.getUTCFullYear();

  function starSign(date) {
  var day = date.getDate();

  switch(date.getMonth()){
    case 0:  return day < 21 ? "Capricorn" : "Aquarius";
    case 1:  return day < 20 ? "Aquarius" : "Pisces";
    case 2:  return day < 21 ? "Pisces" : "Aries";
    case 3:  return day < 21 ? "Aries" : "Taurus";
    case 4:  return day < 22 ? "Taurus" : "Gemini";
    case 5:  return day < 22 ? "Gemini" : "Cancer";
    case 6:  return day < 23 ? "Cancer" : "Leo";
    case 7:  return day < 24 ? "Leo" : "Virgo";
    case 8:  return day < 24 ? "Virgo" : "Libra";
    case 9:  return day < 24 ? "Libra" : "Scorpio";
    case 10: return day < 23 ? "Scorpio" : "Sagittarius";
    case 11: return day < 22 ? "Sagittarius" : "Capricorn";           
  }
}


*/

console.log(starSign(new Date(1970, 5, 5)), "Gemini");
console.log(starSign(new Date(2000, 1, 15)), "Aquarius");
console.log(starSign(new Date(1987, 7, 23)), "Leo");
