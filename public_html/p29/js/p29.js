var op = 0;
do {
  function menu() {
    var option = prompt("        1. Register item\n\
        2. Find item by name\n\
        3. Search item by code\n\
        4. Print registered items\n\
        0. exit the program");
    return parseInt(option);
  }

  var result = menu();

  function register() {
    var Name = prompt('Type element name');
    var Code = parseInt(prompt('Type element code'));
    var data = {
      Name,
      Code
    };
    var Inventory = JSON.parse(localStorage.getItem('Inventory'));
    if (Inventory === null) {
      var Inventory = [
        data
      ];
    } else {
      Inventory.push(data);
    }
    localStorage.setItem('Inventory', JSON.stringify(Inventory));
  }
  function searchname() {
    var Name2 = prompt('Type the name of the item you want to search for');
    var flag = 0;
    var Inventory = JSON.parse(localStorage.getItem('Inventory'));
    for (let contact of Inventory){
      if (contact.Name === Name2) {
        flag++;
        if (flag === 1){
      console.log('The item has been found, Name : '+contact.Name+' - Code : '+contact.Code);
    }
    }
    }
    console.log(flag === 0? 'The item has NOT been found' : '');
  }
  function searchcode() {
    var code2 = parseInt(prompt('Write the code of the item you want to search'));
    var flag = 0;
    var Inventory = JSON.parse(localStorage.getItem('Inventory'));
    for (let contact of Inventory){
      if (contact.Code === parseInt(code2)) {
        flag++;
        if (flag === 1){
      console.log('The item has been found, Name : '+contact.Name+' - Code : '+contact.Code);
    }
    }
    }
    console.log(flag === 0? 'The item has NOT been found' : '');

  }
  function print() {
    console.log(JSON.parse(localStorage.getItem('Inventory')));

  }
  function exit() {
    op = 1;
  }
  switch (result) {
    case 1:
      register();
      break;
    case 2:
      searchname();
      break;
    case 3:
      searchcode();
      break;
    case 4:
      print();
      break;
    case 0:
      exit();
      console.log('bye');
      break;
  }
} while (op === 0);