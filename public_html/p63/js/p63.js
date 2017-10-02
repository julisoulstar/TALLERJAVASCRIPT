$("#personalinfo").hide();
$("#familyinfo").hide();
$("#workinfo").hide();
$("#professionalinfo").hide();
$("#printinformation").hide();
$("#personal").click(function () {
  $("#personalinfo").slideDown();
  $("#menu").slideUp();
});
$("#family").click(function () {
  $("#familyinfo").slideDown();
  $("#menu").slideUp();
});
$("#work").click(function () {
  $("#workinfo").slideDown();
  $("#menu").slideUp();
});
$("#professional").click(function () {
  $("#professionalinfo").slideDown();
  $("#menu").slideUp();
});
$("#print").click(function () {
  $("#printinformation").slideDown();
  $("#menu").slideUp();
});
$("#return1").click(function () {
  $("#personalinfo").slideUp();
  $("#menu").slideDown();
});
$("#return2").click(function () {
  $("#familyinfo").slideUp();
  $("#menu").slideDown();
});
$("#return3").click(function () {
  $("#workinfo").slideUp();
  $("#menu").slideDown();
});
$("#return4").click(function () {
  $("#professionalinfo").slideUp();
  $("#menu").slideDown();
});
$("#return5").click(function () {
  $("#printinformation").slideUp();
  $("#menu").slideDown();
});
var personalinfo = "";
var familyinfo = "";
var workinfo = "";
var professionalinfo = "";
function personal() {
  personalinfo = {
    name: '',
    lastname: '',
    phonenumber: '',
    address: '',
    nationality: '',
    hometown: '',
    occupation: '',
    email: '',
    civilStatus: ''
  };

  personalinfo.name = $("#name").val();
  personalinfo.lastname = $("#lastname").val();
  personalinfo.phonenumber = $("#phonenumber").val();
  personalinfo.address = $("#address").val();
  personalinfo.nationality = $("#nationality").val();
  personalinfo.hometown = $("#hometown").val();
  personalinfo.occupation = $("#occupation").val();
  personalinfo.email = $("#email").val();
  personalinfo.civilStatus = $("#civilStatus").val();
}
function family() {
  familyinfo = {
    name: '',
    lastname: '',
    phonenumber: '',
    address: '',
    nationality: '',
    hometown: '',
    occupation: '',
    email: '',
    civilStatus: ''
  };

  familyinfo.name = $("#name2").val();
  familyinfo.lastname = $("#lastname2").val();
  familyinfo.phonenumber = $("#phonenumber2").val();
  familyinfo.address = $("#address2").val();
  familyinfo.nationality = $("#nationality2").val();
  familyinfo.hometown = $("#hometown2").val();
  familyinfo.occupation = $("#occupation2").val();
  familyinfo.email = $("#email2").val();
  familyinfo.civilStatus = $("#civilStatus2").val();
}
function work() {
  workinfo = {
    companysname: '',
    phonenumber: '',
    address: '',
    country: '',
    city: '',
    occupation: '',
    email: '',
    Headofwork: ''
  };

  workinfo.companysname = $("#companysname").val();
  workinfo.phonenumber = $("#phonenumber3").val();
  workinfo.address = $("#address3").val();
  workinfo.country = $("#nationality3").val();
  workinfo.city = $("#hometown3").val();
  workinfo.occupation = $("#occupation3").val();
  workinfo.email = $("#email3").val();
  workinfo.Headofwork = $("#Headofwork").val();
}
function professional() {
  professionalinfo = {
    text: ''
  };

  professionalinfo.text = $("#text").val();
}
function print() {
  $("#print1").html("<h1>RESUME</h1><br>\n\
<h2>Personal information</h2><br>");
  $("#print2").html("<h3>Name : " + personalinfo.name + "</h3>" + "<h3>Phone Number : " + personalinfo.phonenumber + "</h3>" + '<h3>Nationality : ' + personalinfo.nationality + "</h3>" + '<h3>Occupation : ' + personalinfo.occupation + "</h3>");
  $("#print3").html("<h3>LastName : " + personalinfo.lastname + "</h3>" + "<h3>Address :  " + personalinfo.address + "</h3>" + '<h3>Hometown : ' + personalinfo.hometown + "</h3>" + '<h3>Email : ' + personalinfo.email + "</h3>" + '<h3>Civil Status : ' + personalinfo.civilStatus + "</h3>");
  $("#print4").html("<h2>Family reference</h2><br>");
  $("#print5").html("<h3>Name : " + familyinfo.name + "</h3>" + "<h3>Phone Number : " + familyinfo.phonenumber + "</h3>" + '<h3>Nationality : ' + familyinfo.nationality + "</h3>" + '<h3>Occupation : ' + familyinfo.occupation + "</h3>");
  $("#print6").html("<h3>LastName : " + familyinfo.lastname + "</h3>" + "<h3>Address :  " + familyinfo.address + "</h3>" + '<h3>Hometown : ' + familyinfo.hometown + "</h3>" + '<h3>Email : ' + familyinfo.email + "</h3>" + '<h3>Civil Status : ' + familyinfo.civilStatus + "</h3>");
  $("#print7").html("<h2>Work reference</h2><br>");
  $("#print8").html("<h3>Company Name : " + workinfo.companysname + "</h3>" + "<h3>Address : " + workinfo.address + "</h3>" + '<h3>Company city : ' + workinfo.city + "</h3>" + '<h3>Company email :' + workinfo.email + "</h3>");
  $("#print9").html("<h3>Business phone number : " + workinfo.phonenumber + "</h3>" + "<h3>Company country : " + workinfo.country + "</h3>" + '<h3>Occupation in the company :' + workinfo.occupation + "</h3>" + '<h3>Head of the company :' + workinfo.Headofwork);
  $("#print10").html("<h2>Professional profile description</h2><br>");
  $("#print11").html('<h3>Professional description : ' + professionalinfo.text + "</h3>");
}