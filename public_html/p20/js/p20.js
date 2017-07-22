    var minimum = prompt('Enter minimum wage');
    var salary = prompt('Enter your salary per month');
    var days = parseInt(prompt('Number of days you have worked'));
    var auxilio = 80000;
    salary2=parseInt(salary)/30*parseInt(days);
    if (salary2 <= (minimum * 2)) {
      var salaryHelp = salary2 + auxilio;
      console.log('Salary :' + salary2);
      console.log('You are granted transport aid of :' + auxilio);
      console.log('Total salary :' + salaryHelp);
    } else if (salary2 >= (minimum * 4)) {
      var retentionPercentage = prompt('Enter retention percentage');
      var retention = salary2*parseInt(retentionPercentage) / 100;
      var salary3 = salary2 - retention;
      console.log('Salary :' + salary2);
      console.log('Retention is made at the source of : ' + retention);
      console.log('Total salary :' + salary3);
    }
