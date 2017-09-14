function message() {
  var name = $('#name').val();
  var DocumentType = $('#DocumentType').val();
  var identificationNumber = $('#identificationNumber').val();
  $('#text').text("Hello, my name is " + name + ".\n\
My " + DocumentType + " number is " + identificationNumber + ".");
}