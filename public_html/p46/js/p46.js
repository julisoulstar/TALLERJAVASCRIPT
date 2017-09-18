function math() {
  var number = $('#number').val();
  if (number % 2 === 0) {
    var answer1 = 'The number ' + number + ' is pair ';
    $('#text').val(answer1);
  } else {
    var answer2 = 'the number ' + number + ' is not pair';
    $('#text').val(answer2);
  }
}