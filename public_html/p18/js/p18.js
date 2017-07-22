	var salary =  prompt(" write the worker's salary ");
	var retention =  prompt(" write the percentage of retention ");
	retained=parseInt(salary)*parseInt(retention)/100;
	pay=parseInt(salary)-parseInt(retained);
	console.log(" retained value =" + retained);
	console.log(" total to pay =" + pay);