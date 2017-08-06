    var date =  prompt('Enter first date YY , MM , DD');
    console.log('First date entered : '+date);
    
    var date2 =  prompt('Enter second date YY , MM , DD');
    console.log('Second date entered : '+date2);
    
    
    
    var a = new Date (date);
    var b = new Date (date2);
    
    var c =a-b;
    var days = Math.floor(c/(1000*60*60*24));
    var months=days/30;
    var years=months/12;
    console.log('Difference in days : '+days);
    console.log('Difference in months : '+months);
    console.log('Difference in years : '+years);