var date1 = prompt('Enter first date YY , MM , DD');
console.log('First date entered : ' + date1);
var date2 = prompt('Enter second date YY , MM , DD');
console.log('Second date entered : ' + date2);
date1 = new Date(date1);
date2 = new Date(date2);
if (date2.getTime() > date1.getTime()) {
  var diference = date2.getTime() - date1.getTime();
} else {
  var diference = date1.getTime() - date2.getTime();
}
var years = parseInt(diference / (1000 * 60 * 60 * (24 * 364)));
var months = parseInt(diference / (1000 * 60 * 60 * (24 * 30.4167)));
var days = parseInt(diference / (1000 * 60 * 60 * 24));
console.log("difference in years : " + years + " difference in months : " + months + " difference in days : " + days);