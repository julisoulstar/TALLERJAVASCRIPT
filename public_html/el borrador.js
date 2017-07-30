    var opcion = prompt("   1. Realizar una suma\n\
    2. Realizar una resta\n\
    3. Realizar una multiplicacion\n\
    4. Realizar una division\n\
    0. Salir del programa");
      if (opcion === 1) {
        var number1 = prompt('Enter a number');
        var number2 = prompt('Enter another number');
        function adition (number1, number2) {
          var result = number1 + number2;
          return result;
    console.log('The result of the sum is : '+result);
        }
    }else if (opcion === 2) {
    var number1 = prompt('Enter a number');
    var number2 = prompt('Enter another number');
    result=parseInt(number1)-parseInt(number2);
    console.log('The result of the subtraction is : '+result);
    }else if (opcion === 3) {
    var number1 = prompt('Enter a number');
    var number2 = prompt('Enter another number');
    result=parseInt(number1)*parseInt(number2);
    console.log('The multiplication result is : '+result);
    }else if (opcion === 4) {
    var number1 = prompt('Enter a number');
    var number2 = prompt('Enter another number');
    result=parseInt(number1)/parseInt(number2);
    console.log('The result of the division is : '+result);
    }else if (opcion === 0) {
    console.log('BYE BYE');
    }