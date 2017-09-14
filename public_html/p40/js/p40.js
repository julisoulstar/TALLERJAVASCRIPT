function message() {
  var name = $('#name').val();
  var DocumentType = $('#DocumentType').val();
  var identificationNumber = $('#identificationNumber').val();
  var BiologicalGender = $('#BiologicalGender').val();
  var height = $('#height').val();
  var question = $('#question').val();
  $('#text').text("Hello, my name is " + name + ".\n\
My " + DocumentType + " number is " + identificationNumber + ".\n\
Biological gender: " + BiologicalGender + ".\n\
My height is: " + height + " mts.\n\
Is it true that I live in Carthage ?: " + question + "");
}