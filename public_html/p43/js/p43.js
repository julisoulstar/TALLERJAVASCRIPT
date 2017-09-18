function math() {
  var number1 = $('#number1').val();
  var number2 = $('#number2').val();

  var result1 = parseInt(number1) ** parseInt(number2);
  var result2 = parseInt(number2) ** parseInt(number1);
  var result3 = parseInt(number1) * parseInt(number2);
  var result4 = parseInt(number1) / parseInt(number2);
  var result5 = parseInt(number2) / parseInt(number1);
  var result6 = parseInt(number1) % parseInt(number2);

  $('#text').text(number1 + " to " + number2 + " is : " + result1 + "\n\
" + number2 + " to " + number1 + " is : " + result2 + "\n\
The multiplication between " + number1 + " and " + number2 + " is : " + result3 + "\n\
The division between " + number1 + " and " + number2 + " is : " + result4 + "\n\
The division between " + number2 + " and " + number1 + " is : " + result5 + "\n\
The division module between " + number1 + " and " + number2 + " is : " + result6 + ".");
}