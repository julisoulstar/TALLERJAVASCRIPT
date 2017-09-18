function math() {
  var number = $('#number').val();
  var x = 0;
  for (i = 1; i <= number; i++) {
    if (number % i === 0) {
      x++;
    }
  }
  if (x <= 2) {
    var answer1 = 'The number ' + number + ' is prime ';
    $('#text').val(answer1);
  } else {
    var answer2 = 'the number ' + number + ' is not prime';
    $('#text').val(answer2);
  }
}