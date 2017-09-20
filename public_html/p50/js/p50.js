var one = 0;
var two = 0;
var three = 0;
$('#one').hide();
$('#two').hide();
$('#three').hide();
$('#exercise1').click(function () {
  if (one === 0) {
    $('#one').slideDown();
    one = 1;
  } else if (one === 1) {
    $('#one').slideUp();
    one = 0;
  }
});
$('#exercise2').click(function () {
  if (two === 0) {
    $('#two').slideDown();
    two = 1;
  } else if (two === 1) {
    $('#two').slideUp();
    two = 0;
  }
});
$('#exercise3').click(function () {
  if (three === 0) {
    $('#three').slideDown();
    three = 1;
  } else if (three === 1) {
    $('#three').slideUp();
    three = 0;
  }
});

function math() {
  var number = $('#number').val();
  var money = 258320000 / parseInt(number);
  $('#text').text("  Your company has : $258.320.000 \n\
  Each employee will receive : $" + money);
}
function math2() {
  var hours = $('#hours').val();
  var gain = 45000 * parseInt(hours) - 20000;
  $('#text2').text("Your profit today is $" + gain);
}
$('#text3').text("There are " + 2.54 * 12 * 5280 + " centimeters in a mile");