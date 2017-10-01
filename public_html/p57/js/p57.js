var Information = JSON.parse(localStorage.getItem('Information'));
if (Information === null) {
  var information = JSON.parse(sessionStorage.getItem('information'));
  information.forEach(function (element2) {
    if (element2.save === "sessionStorage") {
      $("#result").text(element2.result);
      $("#hypotenuse").text(element2.hypotenuse);
      element2.save = "no";
      sessionStorage.setItem('information', JSON.stringify(information));
    }
  });
} else {
  Information.forEach(function (element) {
    if (element.save === "localStorage") {
      $("#result").text(element.result);
      $("#hypotenuse").text(element.hypotenuse);
      element.save = "no";
      localStorage.setItem('Information', JSON.stringify(Information));
    }
  });
}
function math() {
  var c1 = $("#c1").val();
  var c2 = $("#c2").val();
  var result = (parseInt(c1) ** 2) + (parseInt(c2) ** 2);
  var hypotenuse = result ** (1 / 2);
  var save = $("#save").val();
  if (save === "localStorage") {
    var data = {
      c1,
      c2,
      result,
      hypotenuse,
      save
    };
    var Information = JSON.parse(localStorage.getItem('Information'));
    if (Information === null) {
      var Information = [
        data
      ];
    } else {
      Information.push(data);
    }
    localStorage.setItem('Information', JSON.stringify(Information));
  } else if (save === "sessionStorage") {
    localStorage.clear();
    var data = {
      c1,
      c2,
      result,
      hypotenuse,
      save
    };
    var information = JSON.parse(sessionStorage.getItem('information'));
    if (information === null) {
      var information = [
        data
      ];
    } else {
      information.push(data);
    }
    sessionStorage.setItem('information', JSON.stringify(information));

  }
}




//var information = JSON.parse(sessionStorage.getItem('information'));
//information.forEach(function (element) {
//  if (element.save === "sessionStorage") {
//    $("#result").text(element.result);
//    $("#hypotenuse").text(element.hypotenuse);
//    element.save = "no";
//  }
//});