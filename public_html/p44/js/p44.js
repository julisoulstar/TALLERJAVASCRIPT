function math() {
  var number1 = $('#number1').val();
  var number2 = $('#number2').val();

  var result1 = parseInt(number1) + parseInt(number2);
  var result2 = parseInt(number1) - parseInt(number2);
  var result3 = parseInt(number1) * parseInt(number2);
  var result4 = parseInt(number1) / parseInt(number2);

  $('#text').text("the sum between " + number1 + " and " + number2 + " is : " + result1 + "\n\
 the subtraction between " + number1 + " and " + number2 + " is : " + result2 + "\n\
The multiplication between " + number1 + " and " + number2 + " is : " + result3 + "\n\
The division between " + number1 + " and " + number2 + " is : " + result4 + ".");
}