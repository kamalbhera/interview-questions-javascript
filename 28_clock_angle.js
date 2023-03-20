/*
Given two integers, an hour and a minute, write a function to calculate the angle between the two hands on a clock representing that time.
 
eg.
angle(11:10) = 85'
 
minutes = 10;
minuteAngle = 10 * 6 = 60;
hour = 11;
hourAngle = 11 * 30 + ((10 / 60) * 30); -> 335
diff = |60 - 335|; -> 275
if (275 > 180) => 360 - 275; -> 85
*/
 
function clockAngle (hour, minutes) {
  const MINUTES_PER_HOUR = 60;
  const DEGREES_PER_MINUTE = 360 / MINUTES_PER_HOUR;
  const DEGREES_PER_HOUR = 360 / 12;
  
  let minuteAngle = minutes * DEGREES_PER_MINUTE;
  let hourAngle = hour * DEGREES_PER_HOUR + (minutes / MINUTES_PER_HOUR) * DEGREES_PER_HOUR;
 
  let diff = Math.abs(minuteAngle - hourAngle);
  if (diff > 180) return 360 - diff;
  return diff;
}
 
console.log(clockAngle(11, 10));
