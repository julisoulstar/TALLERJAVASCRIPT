var asterisk1 = "";
var asterisk = "*", i = 0;
do {
  $('#text').append(`${asterisk1 += '*'} <br>`);
  i++;
  if (asterisk1 === "******") {
    var i = 6;
  }
} while (i <= 5);