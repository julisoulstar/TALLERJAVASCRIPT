var a = 0;
var array = [];
var even = [];
var prime = [];
var i = 0;
var accountant = 0;
var accountanteven = 0;
var sumeven = 0;
var averageeven = 0;
var accountantprime = 0;
var sumprime = 0;
var averageprime = 0;
$("#save").hide();
$("#solution").hide();
$("#solution2").hide();
function math() {
  $("#save").show();
  $("#solution").show();
  $("#solution2").show();
  $("#numbersaved").removeAttr('disabled');
  i = 0;
  a = 0;
  array = [];
  $("#print").empty();
  $("#print2").empty();
  array = [];
  even = [];
  prime = [];
  accountant = 0;
  accountanteven = 0;
  sumeven = 0;
  averageeven = 0;
  accountantprime = 0;
  sumprime = 0;
  averageprime = 0;
}
function save() {
  array[i] = $("#numbers").val();
  a++;
  i++;
  if (a == $("#array").val()) {
    $("#numbersaved").attr('disabled', 'disabled');
    console.log(array);

    i = 0;
    do {
      if (array[i] % 2 === 0) {
        even[accountanteven] = array[i];
        accountanteven++;
      }
      i++;
    } while (i <= array.length);

    accountanteven = accountanteven - 1;

    $("#print").append("<h4>Even numbers typed (DO WHILE): </h4>", "<br>");
    i = 0;
    do {
      $("#print").append(even[i], "<br>");
      i++;
    } while (i <= accountanteven)

    i = 0;
    do {
      sumeven = parseInt(sumeven) + parseInt(even[i]);
      i++;
    } while (i <= accountanteven)
    $("#print").append("The sum of the even numbers is: " + sumeven, "<br>");

    accountanteven = accountanteven + 1;

    averageeven = sumeven / accountanteven;
    $("#print").append("The average of even numbers is: " + averageeven, "<br><br>");

//-pares con while-------------------------------------------------

    i = 0;
    accountanteven = 0;
    sumeven = 0;
    averageeven = 0;
    while (i <= array.length) {
      if (array[i] % 2 === 0) {
        even[accountanteven] = array[i];
        accountanteven++;
      }
      i++;
    }

    accountanteven = accountanteven - 1;

    $("#print").append("<h4>Even numbers typed (WHILE): </h4>", "<br>");
    i = 0;
    while (i <= accountanteven) {
      $("#print").append(even[i], "<br>");
      i++;
    }

    i = 0;
    while (i <= accountanteven) {
      sumeven = parseInt(sumeven) + parseInt(even[i]);
      i++;
    }
    $("#print").append("The sum of the even numbers is: " + sumeven, "<br>");

    accountanteven = accountanteven + 1;

    averageeven = sumeven / accountanteven;
    $("#print").append("The average of even numbers is: " + averageeven, "<br><br>");

//-pares con for-------------------------------------------------

    accountanteven = 0;
    sumeven = 0;
    averageeven = 0;
    for (i = 0; i <= array.length; i++) {
      if (array[i] % 2 === 0) {
        even[accountanteven] = array[i];
        accountanteven++;
      }
    }

    accountanteven = accountanteven - 1;

    $("#print").append("<h4>Even numbers typed (FOR): </h4>", "<br>");
    for (i = 0; i <= accountanteven; i++) {
      $("#print").append(even[i], "<br>");
    }

    for (i = 0; i <= accountanteven; i++) {
      sumeven = parseInt(sumeven) + parseInt(even[i]);
    }
    $("#print").append("The sum of the even numbers is: " + sumeven, "<br>");

    accountanteven = accountanteven + 1;

    averageeven = sumeven / accountanteven;
    $("#print").append("The average of even numbers is: " + averageeven);

//-primos con do while-------------------------------------------------

    var j = 0;
    do {
      var c = 1;
      var accountant = 0;
      do {
        if (array[j] % c === 0) {
          accountant++;
        }
        c++;
      } while (c <= array[j]);
      if (accountant === 2) {
        prime[accountantprime] = array[j];
        accountantprime++;
      }
      j++;
    } while (j < array.length);

    accountantprime = accountantprime - 1;

    $("#print2").append("<h4>Prime numbers typed (DO WHILE): </h4>", "<br>");
    i = 0;
    do {
      $("#print2").append(prime[i], "<br>");
      i++;
    } while (i <= accountantprime)

    i = 0;
    do {
      sumprime = parseInt(sumprime) + parseInt(prime[i]);
      i++;
    } while (i <= accountantprime)
    $("#print2").append("The sum of the prime numbers is: " + sumprime, "<br>");

    accountantprime = accountantprime + 1;

    averageprime = sumprime / accountantprime;
    $("#print2").append("The average prime numbers is: " + averageprime, "<br>");


//-primos con WHILE-------------------------------------------------

    accountantprime = 0;
    sumprime = 0;
    averageprime = 0;
    var j = 0;
    while (j <= array.length) {
      var c = 0;
      var accountant = 0;
      while (c <= array[j]) {
        if (array[j] % c === 0) {
          accountant++;
        }
        c++;
      }
      if (accountant === 2) {
        prime[accountantprime] = array[j];
        accountantprime++;
      }
      j++;
      accountant = 0;
    }

    accountantprime = accountantprime - 1;

    $("#print2").append("<h4>Prime numbers typed (WHILE): </h4>", "<br>");
    i = 0;
    while (i <= accountantprime) {
      $("#print2").append(prime[i], "<br>");
      i++;
    }

    i = 0;
    while (i <= accountantprime) {
      sumprime = parseInt(sumprime) + parseInt(prime[i]);
      i++;
    }
    $("#print2").append("The sum of the prime numbers is: " + sumprime, "<br>");

    accountantprime = accountantprime + 1;

    averageprime = sumprime / accountantprime;
    $("#print2").append("The average prime numbers is: " + averageprime, "<br>");

//-encontrar primos con for-------------------------------------------------

    accountantprime = 0;
    sumprime = 0;
    averageprime = 0;
    for (j = 0; j <= array.length; j++) {
      for (c = 0; c <= array[j]; c++) {
        if (array[j] % c === 0) {
          accountant++;
        }
      }

      if (accountant === 2) {
        prime[accountantprime] = array[j];
        accountantprime++;
      }
      accountant = 0;
    }

    accountantprime = accountantprime - 1;

    $("#print2").append("<h4>Prime numbers typed (FOR): </h4>", "<br>");
    for (i = 0; i <= accountantprime; i++) {
      $("#print2").append(prime[i], "<br>");
    }

    for (i = 0; i <= accountantprime; i++) {
      sumprime = parseInt(sumprime) + parseInt(prime[i]);
    }
    $("#print2").append("The sum of the prime numbers is: " + sumprime, "<br>");

    accountantprime = accountantprime + 1;

    averageprime = sumprime / accountantprime;
    $("#print2").append("The average prime numbers is: " + averageprime, "<br>");
  }
}
//  $("#test").attr('disabled', 'disabled');
//  $("#test").removeAttr('disabled');