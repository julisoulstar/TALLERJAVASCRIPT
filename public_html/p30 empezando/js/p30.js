var salaryminimun;
var identificationcard;
var op = 0;
do {
  function menu() {
    var option = prompt("        configuracion del software de nomina\n\
        1. seleccione idioma\n\
        2. configurar\n\
        3. continuar\n\
        0. salir del programa\n\
        seleccione una opcion :");
    //
    //config nombre de empresa:
    var Salary = parseInt("600000");
    var CompanyName = "STARSCOMPANY";
    var data = {
      CompanyName,
      Salary
    };
    var company = JSON.parse(localStorage.getItem('company'));
    if (company === null) {
      var company = [
        data
      ];
    }else{
    }
    localStorage.setItem('company', JSON.stringify(company));
    //
    //config empleados:
    var nombre = 'Jose Julian';
    var apellido = 'parra villanueva';
    var cedula = '1010143256';
    var cargo = 'aprendiz';
    var salario = '1000000';
    var datos = {
      nombre,
      apellido,
      cedula,
      cargo,
      salario
    };
    
    var lista = JSON.parse(localStorage.getItem('lista'));
    if (lista === null) {
      lista = [
        datos
      ];
    } else {
    }
    localStorage.setItem('lista', JSON.stringify(lista));
    //
    // config :
    
    return parseInt(option);
  }

  var result = menu();

  function language() {
    var option = prompt("        configuracion del software de nomina\n\
        seleccione idioma del software\n\
        1. Español\n\
        2. Ingles\n\
        seleccione una opcion :");
    return parseInt(option);
  }
  function setup() {
    function setup2(){
    var option = prompt("        configuracion del software de nomina\n\
        1. Nombre de la empresa\n\
        2. Salario minimo\n\
        3. A partir de cuantos salarios minimos se cobra retencion en la fuente\n\
        4. Porcentaje de retencion en la fuente\n\
        5. Hasta cuantos salarios minimos son necesarios para pagar auxilio de \n\
            transporte\n\
        6. Cuanto es el auxilio de transporte\n\
        7. Cantidad de horas laborales al mes\n\
        8. Volver\n\
        0. salir del programa\n\
        seleccione una opcion :");
    return parseInt(option);
  }
  var result = setup2();
  switch (result) {
      case 1:
        companyname();
        break;
      case 2:
        salary();
        break;
      case 3:
        retention();
        break;
      case 4:
        percentage();
        break;
      case 5:
        helptransport();
        break;
      case 6:
        helptransport2();
        break;
      case 7:
        hours();
        break;
      case 8:
        menu();
        break;
      case 0:
        exit();
        break;
    }
  }
  function companyname(){
    function companyname2(){
    var option = prompt("        configuracion del software de nomina\n\
        Nombre de la empresa\n\
        1. Imprimir nombre de la empresa\n\
        2. Modificar nombre de la empresa\n\
        3. vovler\n\
        seleccione una opcion :");
    return parseInt(option);
    }
    var result = companyname2();
    switch (result) {
      case 1:
        printname();
        break;
      case 2:
        modifycompanyname();
        break;
      case 3:
        setup();
        break;
    }
  }
  function printname(){
    var company = JSON.parse(localStorage.getItem('company'));
    localStorage.setItem('company', JSON.stringify(company));
    for (let contact of company){
      console.log('Nombre de la empresa : '+contact.CompanyName);
    }
   companyname();
  }
  function modifycompanyname(){
    var company = JSON.parse(localStorage.getItem('company'));
          for (let contact of company){
     contact.CompanyName = prompt('escribe nombre de empresa');
    }
    localStorage.setItem('company', JSON.stringify(company));
    companyname();
}
function salary(){
    function salary2(){
    var option = prompt("        configuracion del software de nomina\n\
        Salario minimo\n\
        1. Imprimir salario minimo\n\
        2. Modificar salario minimo\n\
        3. vovler\n\
        seleccione una opcion :");
    return parseInt(option);
    }
    var result = salary2();
    switch (result) {
      case 1:
        printsalary();
        break;
      case 2:
        modifysalary();
        break;
      case 3:
        setup();
        break;
    }
  }
  function printsalary(){
    var company = JSON.parse(localStorage.getItem('company'));
    for (let contact of company){
      console.log('salario minimo : '+contact.Salary);
    }
   salary();
  }
  function modifysalary(){
    var company = JSON.parse(localStorage.getItem('company'));
          for (let contact of company){
     contact.Salary = prompt('escribe el salario minimo');
    }
    localStorage.setItem('company', JSON.stringify(company));
    salary();
}
  function go() {
    function menu2() {
      var option = prompt("        software de nomina\n\
        1. Gestion de empleados\n\
        2. Registrar horas laboradas\n\
        3. Generar nomina\n\
        4. Imprimir comprobante de pago\n\
        0. salir del programa\n\
        seleccione una opcion :");
      return parseInt(option);
    }
    var result = menu2();

    switch (result) {
      case 1:
        one();
        break;
      case 2:
        two();
        break;
      case 3:
        three();
        break;
      case 4:
        four();
        break;
      case 0:
        exit();
        break;
    }
  }
  
  function one() {
    function menu3() {
      var option = prompt("        software de nomina\n\
        gestion de empleados\n\
        \n\
        1. Agregar\n\
        2. Modificar\n\
        3. Eliminar\n\
        4. imprimir empleados registrados\n\
        5. Volver\n\
        0. salir del programa\n\
        seleccione una opcion :");

      return parseInt(option);
    }
    
    var result = menu3();

    switch (result) {
      case 1:
        add();
        break;
      case 2:
        Modify();
        break;
      case 3:
        remove();
        break;
      case 4:
        print2();
        break;
      case 5:
        returnn();
        break;
      case 0:
        exit();
        break;
    }
  }
  function add() {
    var Inventory = JSON.parse(localStorage.getItem('lista'));
    var company = JSON.parse(localStorage.getItem('company'));
    var cedula = prompt('escriba su cedula');
    for (let contact of Inventory) {
      if (contact.cedula === cedula) {
        console.log('La cedula digitada ya se encuentra registrada');
        one();
      }
    }
    var nombre = prompt('escriba su nombre');
    var apellido = prompt('escriba su apellido');
    var cargo = prompt('escriba su cargo');
    var salario = parseInt(prompt('escriba su salario'));
    for (let contact of company){
      if (salario < contact.Salary){
        console.log('debe ingresar uno menor');
        one();
      }
    }
    var datos = {
      nombre,
      apellido,
      cedula,
      cargo,
      salario
    };
    
    var lista = JSON.parse(localStorage.getItem('lista'));
    if (lista === null) {
      var lista = [
        datos
      ];
    } else {
      lista.push(datos);
    }
    localStorage.setItem('lista', JSON.stringify(lista));
    one();
  }
  
  function Modify() {
    identificationcard = prompt('escriba cedula del empleado a modificar');
    var flag = 0;
    var Inventory = JSON.parse(localStorage.getItem('lista'));
    for (let contact of Inventory) {
      if (contact.cedula === identificationcard) {
        flag++;
        if (flag === 1) {
          Modify2();
        }
      }
    }
    console.log(flag === 0 ? 'La cedula no se encuentra registrada' : '');
    one();
    }
    function Modify2() {
    function menu4() {
      var option = prompt("        software de nomina\n\
        gestion de empleados\n\
        \n\
        1. Modificar el nombre\n\
        2. Modificar el apellido\n\
        3. Modificar la cedula\n\
        4. Modificar el cargo\n\
        5. Modificar el salario\n\
        6. Volver\n\
        0. salir del programa\n\
        seleccione una opcion :");

      return parseInt(option);
    }
    
    var result = menu4();

    switch (result) {
      case 1:
        modify1();
        break;
      case 2:
        modify2();
        break;
      case 3:
        modify3();
        break;
      case 4:
        modify4();
        break;
      case 5:
        modify5();
        break;
      case 6:
        modify6();
        break;
      case 0:
        exit();
        break;
    }
    }
  
    function modify1(){
    var flag = 0;
    var Inventory = JSON.parse(localStorage.getItem('lista'));
    for (let contact of Inventory) {
      if (contact.cedula === identificationcard) {
        flag++;
        if (flag === 1) {
          contact.nombre = prompt('escriba el nuevo nombre : ');
          localStorage.setItem('lista', JSON.stringify(Inventory));
        }
      }
    }
    one();
  }
    function modify2(){
    var flag = 0;
    var Inventory = JSON.parse(localStorage.getItem('lista'));
    for (let contact of Inventory) {
      if (contact.cedula === identificationcard) {
        flag++;
        if (flag === 1) {
          contact.apellido = prompt('escriba el nuevo apellido : ');
          localStorage.setItem('lista', JSON.stringify(Inventory));
        }
      }
    }
    Modify();
  }
    function modify3(){
    var flag = 0;
    var Inventory = JSON.parse(localStorage.getItem('lista'));
    for (let contact of Inventory) {
      if (contact.cedula === identificationcard) {
        flag++;
        if (flag === 1) {
          contact.cedula = prompt('escriba la nueva cedula : ');
          localStorage.setItem('lista', JSON.stringify(Inventory));
        }
      }
    }
    Modify();
  }
    function modify4(){
    var flag = 0;
    var Inventory = JSON.parse(localStorage.getItem('lista'));
    for (let contact of Inventory) {
      if (contact.cedula === identificationcard) {
        flag++;
        if (flag === 1) {
          contact.cargo = prompt('escriba el nuevo cargo : ');
          localStorage.setItem('lista', JSON.stringify(Inventory));
        }
      }
    }
    Modify();
  }
    function modify5(){
    var flag = 0;
    var Inventory = JSON.parse(localStorage.getItem('lista'));
    for (let contact of Inventory) {
      if (contact.cedula === identificationcard) {
        flag++;
        if (flag === 1) {
          contact.salario = prompt('escriba el nuevo salario : ');
          localStorage.setItem('lista', JSON.stringify(Inventory));
        }
      }
    }
    Modify();
  }
  
  
  function modify6() {
    one();
  }
  function remove(){
    var object = '';
    var identificationcard = prompt('escriba la cedula del empleado a eliminar');
    var flag = 0;
    var Inventory = JSON.parse(localStorage.getItem('lista'));
    for (var i = 0; i<Inventory.length; i++){
      if (Inventory[i].cedula===identificationcard){
        flag++;
        x=i;
        object=Inventory[x];
      }
    }
        if (flag === 1) {
          console.log(object);
          Inventory[x]=Inventory[0];
          Inventory[0]=object;

          Inventory.shift();
          localStorage.setItem('lista', JSON.stringify(Inventory));
        }
    console.log(flag === 0 ? 'La cedula no se encuentra registrada' : '');
    one();
  }
  function exit() {
    console.log('Bye');
    op = 1;
  }
  function print2(){
      console.log("\
        +-------------------------------------------------------------------------------------------------------+\n\
        |     Cedula         |     Nombre        |     Apellidos           |     Cargo        |     Salario     |\n\
        +-------------------------------------------------------------------------------------------------------+\n\
        ");
      var lista = JSON.parse(localStorage.getItem('lista'));
      lista.forEach(function (element) {
        console.log("        |    "+element.cedula + "      |   " + element.nombre +"     |    "+ element.apellido +"     |    "+ element.cargo+"      |    " +element.salario +"      |");
      });
      console.log("\n\
        +-------------------------------------------------------------------------------------------------------+");
    one();
  }
  function returnn() {
    go();
  }
  switch (result) {
    case 1:
      language();
      break;
    case 2:
      setup();
      break;
    case 3:
      go();
      break;
    case 0:
      exit();
      break;
  }
} while (op === 0);