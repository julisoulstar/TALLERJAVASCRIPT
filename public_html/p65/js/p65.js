$("#registerelements").hide();
$("#findelement").hide();
$("#printelement").hide();
$("#register").click(function () {
  $("#registerelements").slideDown();
  $("#menu").slideUp();
});
$("#find").click(function () {
  $("#findelement").slideDown();
  $("#menu").slideUp();
});
$("#print").click(function () {
  $("#printelement").slideDown();
  $("#menu").slideUp();
});
$("#return1").click(function () {
  $("#registerelements").slideUp();
  $("#menu").slideDown();
});
$("#return2").click(function () {
  $("#findelement").slideUp();
  $("#menu").slideDown();
});
$("#return3").click(function () {
  $("#printelement").slideUp();
  $("#menu").slideDown();
  $("#print2").empty();
});


function register() {
  var Name = $("#name").val();
  var Code = $("#code").val();
  var data = {
    Name,
    Code
  };
  var Inventory = JSON.parse(localStorage.getItem('Inventory'));
  if (Inventory === null) {
    var Inventory = [
      data
    ];
  } else {
    Inventory.push(data);
  }
  localStorage.setItem('Inventory', JSON.stringify(Inventory));
}
function findname() {
  var flag = 0;
  var Name2 = $("#name2").val();
  var Inventory = JSON.parse(localStorage.getItem('Inventory'));
  Inventory.forEach(function (element) {
    if (element.Name === Name2) {
      flag = 1;
      $("#answer1").html('The item has been found, Name : ' + element.Name + ' - Code : ' + element.Code);
    } else if (flag !== 1) {
      $("#answer1").html('The item has NOT been found');
    }
  });
}
function findcode() {
  var code2 = $("#code2").val();
  var flag = 0;
  var Inventory = JSON.parse(localStorage.getItem('Inventory'));
  Inventory.forEach(function (element) {
    if (element.Code === code2) {
      flag = 1;
      $("#answer2").html('The item has been found, Name : ' + element.Name + ' - Code : ' + element.Code);
    } else if (flag !== 1) {
      $("#answer2").html('The item has NOT been found');
    }
  });
}
function print() {
  var Inventory = JSON.parse(localStorage.getItem('Inventory'));
  Inventory.forEach(function (element) {
    $("#print2").append(" Name : " + element.Name + " Code : " + element.Code, "<br>");
  });
}