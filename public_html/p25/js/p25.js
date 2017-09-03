var array = [];
var even = [];
var prime = [];
var i = 0;
var accountant = 0;
var accountanteven = 0;
var accountantprime = 0;
var sumprime = 0;
var sumeven = 0;
var averageprime = 0;
var averageeven = 0;


while (i <= 9) {
  array[i] = Number(prompt("Enter the number:"));
  i++;
}

//encontrar pares con do while
//do {
//  if (array[i] % 2 === 0) {
//    even[accountanteven] = array[i];
//    accountanteven++;
//  }
//  i++;
//} while (i <= array.length);
//encontrar pares con while
//while (i <= array.length) {
//  if (array[i] % 2 === 0) {
//    even[accountanteven] = array[i];
//    accountanteven++;
//  }
//  i++;
//}
//encontrar pares con for
for (i = 0; i <= array.length; i++) {
  if (array[i] % 2 === 0) {
    even[accountanteven] = array[i];
    accountanteven++;
  }
}

//encontrar primos con for
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
accountanteven = accountanteven - 1;

console.log("Prime numbers typed: ");
for (i = 0; i <= accountantprime; i++) {
  console.log(prime[i]);
}


console.log("Even numbers typed: ");
for (i = 0; i <= accountanteven; i++) {
  console.log(even[i]);
}


for (i = 0; i <= accountantprime; i++) {
  sumprime = sumprime + prime[i];
}
console.log("The sum of the prime numbers is: " + sumprime);


for (i = 0; i <= accountanteven; i++) {
  sumeven = sumeven + even[i];
}
console.log("The sum of the even numbers is: " + sumeven);

accountantprime = accountantprime + 1;
accountanteven = accountanteven + 1;

averageprime = sumprime / accountantprime;
console.log("The average prime numbers is: " + averageprime);

averageeven = sumeven / accountanteven;
console.log("The average of even numbers is: " + averageeven);