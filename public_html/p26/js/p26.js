    var opcion = prompt("   1. Realizar una suma\n\
    2. Realizar una resta\n\
    3. Realizar una multiplicacion\n\
    4. Realizar una division\n\
    0. Salir del programa");
      if (opcion == 1) {
        var number1 = parseInt(prompt('Enter a number'));
        var number2 = parseInt(prompt('Enter another number'));
        function adition (number1, number2) {
          var result = parseInt(number1)+parseInt(number2);
          return result;
    console.log('The result of the sum is : '+result);
        }
    }else{}