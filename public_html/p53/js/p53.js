function math() {
  var a = $('#a').val();
  var b = $('#b').val();
  var c = $('#c').val();
  var x = 0;
  x = parseInt(b) * parseInt(c) / parseInt(a);
  $('#text').text(" the rule of three is solved thus : x=b*c/a  x = " + x + ".");
}