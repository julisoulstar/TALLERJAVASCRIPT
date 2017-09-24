function math() {
  var minimum = $("#minimum").val();
  var salary = $("#salary").val();
  var days = $("#days").val();
  var auxilio = 80000;
  var salary2 = parseInt(salary) / 30 * parseInt(days);

  if (salary <= (minimum * 2)) {
    var salaryHelp = salary2 + auxilio;
    $("#text").text(' Salary to be paid according to days worked :' + salary2 + "\n\
" + " You are granted transport aid of : " + auxilio + "\n\
" + ' Total salary :' + salaryHelp);
  } else if (salary > (minimum * 2) && salary < (minimum * 4)) {
    $("#text").text(' Salary to be paid according to days worked :' + salary2 + "\n\
" + " No transportation aid is granted " + "\n\
" + ' Total salary :' + salary2);
  } else if (salary >= (minimum * 4)) {
    var retentionPercentage = 10;
    var retention = salary2 * parseInt(retentionPercentage) / 100;
    var salary3 = salary2 - retention;
    $('#text').text(' Salary to be paid according to days worked :' + salary2 + "\n\
 The percentage of the retention in source is of : " + retentionPercentage + "% \n\
" + ' Retention is made at the source of : ' + retention + "\n\
" + ' Total salary :' + salary3);
  }
}