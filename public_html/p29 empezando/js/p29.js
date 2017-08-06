function menu() {
  var option = prompt("        1. To make a sum\n\
        2. Perform a subtraction\n\
        3. Perform a multiplication\n\
        4. Make a division\n\
        0. exit the program");
  return parseInt(option);
}

var result = menu();
function adition() {
  var number1 = parseInt(prompt('Enter a number'));
  var number2 = parseInt(prompt('Enter another number'));
  console.log(`The result of the sum is : ${ number1 + number2}`);
}
function subtraction() {
  var number1 = parseInt(prompt('Enter a number'));
  var number2 = parseInt(prompt('Enter another number'));
  console.log(`The result of the subtraction is : ${ number1 - number2}`);
}
function multiplication() {
  var number1 = parseInt(prompt('Enter a number'));
  var number2 = parseInt(prompt('Enter another number'));
  console.log(`The multiplication result is : ${ number1 * number2}`);
}
function division() {
  var number1 = parseInt(prompt('Enter a number'));
  var number2 = parseInt(prompt('Enter another number'));
  console.log(`The result of the division is : ${ number1 / number2}`);
}
switch (result) {
  case 1:
    adition();
    break;
  case 2:
    subtraction();
    break;
  case 3:
    multiplication();
    break;
  case 4:
    division();
    break;
  default:
    console.log('bye');
    break;
}

