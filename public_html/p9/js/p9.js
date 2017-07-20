    var num=parseInt(prompt('Enter a number'));
    var x=0;
    for ( i=1;i<=num;i++) {
    if(num % i === 0) {
      x++;
    }
    }
    if (x<=2){
    console.log('The number ' +num+ ' is prime');
    }else{
    console.log('the number ' +num+ ' is not prime');
    }