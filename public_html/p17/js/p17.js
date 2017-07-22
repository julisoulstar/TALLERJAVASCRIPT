    console.log(" rule of three ");
	console.log(" A -> B ");
	console.log(" C -> X ");
	var a =  prompt(" enter the value of a ");
	var b =  prompt(" enter the value of b ");
	var c =  prompt(" enter the valur of c ");
	var type =  prompt(" To a greater value of (a) will there be a greater value of (b)?, 1 is yes and 0 is no ");
	if (type == 0 ) {
	x=parseInt(a)*parseInt(b)/parseInt(c);
	console.log(" is a rule of three inverse and is solved thus ");
	console.log(" x=a*b/c " + x);
	}else{
      if (type == 1) {
	x=parseInt(b)*parseInt(c)/parseInt(a);
	console.log(" is a rule of three direct and is resolved as well :");
	console.log(" x=b*c/a " + x);
    }
    }