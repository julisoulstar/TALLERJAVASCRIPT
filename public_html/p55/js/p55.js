function math() {
  var number = $("#number").val();
  if (number <= 0) {
    var number2 = parseInt(number) * (-1);
    $("#text").text(number2);
  } else {
    $("#text").text(" you must enter a number less than zero ");
  }
}