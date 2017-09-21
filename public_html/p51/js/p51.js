function math() {
  var age = $('#number').val();
  if (age <= 17) {
    $('#text').text(" Sorry, minors are not allowed ");
  } else {
    $('#text').text(" Enjoy the blowout ");
  }
}