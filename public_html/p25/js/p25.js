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

while (i <= 9) {
  array[i] = Number(prompt("Enter the number:"));
  i++;
}

//-pares con do while-------------------------------------------------

i = 0;
do {
  if (array[i] % 2 === 0) {
    even[accountanteven] = array[i];
    accountanteven++;
  }
  i++;
} while (i <= array.length);

accountanteven = accountanteven - 1;

console.log("Even numbers typed (DO WHILE): ");
i = 0;
do {
  console.log(even[i]);
  i++;
} while (i <= accountanteven)

i = 0;
do {
  sumeven = sumeven + even[i];
  i++;
} while (i <= accountanteven)
console.log("The sum of the even numbers is: " + sumeven);

accountanteven = accountanteven + 1;

averageeven = sumeven / accountanteven;
console.log("The average of even numbers is: " + averageeven);
console.log('--------------------------------------------------');

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

console.log("Even numbers typed (WHILE): ");
i = 0;
while (i <= accountanteven) {
  console.log(even[i]);
  i++;
}

i = 0;
while (i <= accountanteven) {
  sumeven = sumeven + even[i];
  i++;
}
console.log("The sum of the even numbers is: " + sumeven);

accountanteven = accountanteven + 1;

averageeven = sumeven / accountanteven;
console.log("The average of even numbers is: " + averageeven);
console.log('--------------------------------------------------');

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

console.log("Even numbers typed (FOR): ");
for (i = 0; i <= accountanteven; i++) {
  console.log(even[i]);
}

for (i = 0; i <= accountanteven; i++) {
  sumeven = sumeven + even[i];
}
console.log("The sum of the even numbers is: " + sumeven);

accountanteven = accountanteven + 1;

averageeven = sumeven / accountanteven;
console.log("The average of even numbers is: " + averageeven);
console.log('--------------------------------------------------');

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

console.log("Prime numbers typed (DO WHILE): ");
i = 0;
do {
  console.log(prime[i]);
  i++;
} while (i <= accountantprime)

i = 0;
do {
  sumprime = sumprime + prime[i];
  i++;
} while (i <= accountantprime)
console.log("The sum of the prime numbers is: " + sumprime);

accountantprime = accountantprime + 1;

averageprime = sumprime / accountantprime;
console.log("The average prime numbers is: " + averageprime);
console.log('--------------------------------------------------');

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

console.log("Prime numbers typed (WHILE): ");
i = 0;
while (i <= accountantprime) {
  console.log(prime[i]);
  i++;
}

i = 0;
while (i <= accountantprime) {
  sumprime = sumprime + prime[i];
  i++;
}
console.log("The sum of the prime numbers is: " + sumprime);

accountantprime = accountantprime + 1;

averageprime = sumprime / accountantprime;
console.log("The average prime numbers is: " + averageprime);
console.log('--------------------------------------------------');

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

console.log("Prime numbers typed (FOR): ");
for (i = 0; i <= accountantprime; i++) {
  console.log(prime[i]);
}

for (i = 0; i <= accountantprime; i++) {
  sumprime = sumprime + prime[i];
}
console.log("The sum of the prime numbers is: " + sumprime);

accountantprime = accountantprime + 1;

averageprime = sumprime / accountantprime;
console.log("The average prime numbers is: " + averageprime);