$("#additions").hide();
$("#subtractions").hide();
$("#multiplications").hide();
$("#divisions").hide();
$("#addition").click(function () {
  $("#additions").slideDown();
  $("#menu").slideUp();
});
$("#subtraction").click(function () {
  $("#subtractions").slideDown();
  $("#menu").slideUp();
});
$("#multiplication").click(function () {
  $("#multiplications").slideDown();
  $("#menu").slideUp();
});
$("#division").click(function () {
  $("#divisions").slideDown();
  $("#menu").slideUp();
});
$("#return1").click(function () {
  $("#additions").slideUp();
  $("#menu").slideDown();
});
$("#return2").click(function () {
  $("#subtractions").slideUp();
  $("#menu").slideDown();
});
$("#return3").click(function () {
  $("#multiplications").slideUp();
  $("#menu").slideDown();
});
$("#return4").click(function () {
  $("#divisions").slideUp();
  $("#menu").slideDown();
});
function addition() {
  var number1 = $("#addition1").val();
  var number2 = $("#addition2").val();
  var result = parseInt(number1) + parseInt(number2);
  $("#text1").text(number1 + " + " + number2 + " = " + result);
}
function subtraction() {
  var number1 = $("#subtraction1").val();
  var number2 = $("#subtraction2").val();
  var result = parseInt(number1) - parseInt(number2);
  $("#text2").text(number1 + " - " + number2 + " = " + result);
}
function multiplication() {
  var number1 = $("#multiplication1").val();
  var number2 = $("#multiplication2").val();
  var result = parseInt(number1) * parseInt(number2);
  $("#text3").text(number1 + " * " + number2 + " = " + result);
}
function division() {
  var number1 = $("#division1").val();
  var number2 = $("#division2").val();
  var result = parseInt(number1) / parseInt(number2);
  $("#text4").text(number1 + " / " + number2 + " = " + result);
}