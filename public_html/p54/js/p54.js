function math() {
  var salary = $('#salary').val();
  var retention = $('#retention').val();
  var retained = parseInt(salary) * parseInt(retention) / 100;
  var pay = parseInt(salary) - parseInt(retained);
  $('#text').text(" retained value =" + retained + "\n\
total to pay =" + pay);
}