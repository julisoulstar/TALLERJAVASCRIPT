    var a = "     *";
    var b = "*";
    var c = 1;
    while (c <=5){
      if (a === "     *") {
        console.log(a);
      }
      console.log(a = (a.slice(1)+ b));
      c++;
    }