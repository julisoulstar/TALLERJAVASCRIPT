    var number=parseInt(prompt('Enter a number'));
    var x=0;
    for ( i=1;i<=number;i++) {
    if(number % i === 0) {
      x++;
    }
    }
    if (x<=2){
    console.log('The number ' +number+ ' is prime');
    }else{
    console.log('the number ' +number+ ' is not prime');
    }