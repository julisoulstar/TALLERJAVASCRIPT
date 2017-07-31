
function menu() {
  var option = prompt("   1. Realizar una suma\n\
    2. Realizar una resta\n\
    3. Realizar una multiplicacion\n\
    4. Realizar una division\n\
    0. Salir del programa");
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
    console.log('adios');
    break;
}

