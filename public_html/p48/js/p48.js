//var asterisk1 = "";
//var asterisk = "*", i = 0;
//do {
//  $('#text').append(`${asterisk1 += '*'} <br>`);
//  i++;
//  if (asterisk1 === "******") {
//    var i = 6;
//  }
//} while (i <= 5);
var a = "     *";
var b = "*";
var c = 1;
while (c <= 5) {
  if (a === "     *") {
    $('#text').append(a);
  }
  $('#text').append(a = (a.slice(1) + b));
  c++;
}