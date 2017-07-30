    var name = prompt('Enter your full name');
    var documentType = prompt('Enter your document type');
    var identification = prompt('Enter your identification number');
    var gender = prompt('Type your biological gender, F = feminine / M = masculine');
    var height = prompt('Type your height in mts');
    var cartago = prompt('Do you live in Carthage? F = faslo / T = true');
    console.log('Hello, my name is ' + name + ' . ');
    console.log('My number of ' + documentType + ' is ' + identification + '.');
    if(gender==="F" || gender==="f") {
      console.log('Biological gender : Feminine');
    }else{
    if(gender==="M" || gender==="m") {
      console.log('Biological gender : Masculine');
    }
  }
    console.log('my height is :' + height + ' mts.');

    if(cartago==="F" || cartago==="f") {
      console.log('Is it true that I live in Carthage?: FALSE');
    }else{
    if(cartago==="T" || cartago==="t") {
      console.log('Is it true that I live in Carthage?: TRUE');
    }
  }