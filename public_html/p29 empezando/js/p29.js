var dato;
var contacto;
var op = 0;
do {
  function menu() {
    var option = prompt("        1. registrar elemento\n\
        2. buscar elemento por nombre\n\
        3. buscar elemento por codigo\n\
        4. imprimir elementos resgistrados\n\
        0. exit the program");
    return parseInt(option);
  }

  var result = menu();

  function register() {
    var nombre = prompt('Digite su nombre');
    var codigo = parseInt(prompt('Digite su codigo'));
    var dato = {
      nombre,
      codigo
    };
    var contacto = JSON.parse(localStorage.getItem('contacto'));
    if (contacto === null) {
      var contacto = [
        dato
      ];
    } else {
      contacto.push(dato);
    }
    localStorage.setItem('contacto', JSON.stringify(contacto));
  }
  function searchname() {
    var name = prompt('escribe el nombre que deseas buscar');
    var flag = 0;
    var contacto = JSON.parse(localStorage.getItem('contacto'));
    for (let contact of contacto){
      if (contact.nombre === name) {
        flag++;
        if (flag === 1){
      console.log('el elemento ha sido encontrado, nombre : '+contact.nombre+' - codigo : '+contact.codigo);
    }
    }
    }
    console.log(flag === 0? 'El elemento NO ha sido encontrado' : '');
  }
  function searchcode() {
    var name = parseInt(prompt('escribe el codigo que deseas buscar'));
    var flag = 0;
    var contacto = JSON.parse(localStorage.getItem('contacto'));
    for (let contact of contacto){
      if (contact.codigo === parseInt(name)) {
        flag++;
        if (flag === 1){
      console.log('el elemento ha sido encontrado, nombre : '+contact.nombre+' - codigo : '+contact.codigo);
    }
    }
    }
    console.log(flag === 0? 'El elemento NO ha sido encontrado' : '');

  }
  function print() {
    console.log(JSON.parse(localStorage.getItem('contacto')));

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