var salariminimun;
var identificatiocard;
var op = 0;
function menu() {
  var option = prompt("        configuracion del software de nomina\n\
        1. seleccione idioma\n\
        2. configurar\n\
        3. continuar\n\
        0. salir del programa\n\
        seleccione una opcion :");
  //
  //config nombre de empresa:
  var workingHoursPerMonth = parseInt("192");
  var transportAid = parseInt("100000");
  var transportAidwages = parseInt("1");
  var retentionRate = parseInt("10");
  var MinimumSalarys = parseInt("3");
  var Salary = parseInt("600000");
  var CompanyName = "STARSCOMPANY";
  var data = {
    CompanyName,
    Salary,
    MinimumSalarys,
    retentionRate,
    transportAidwages,
    transportAid,
    workingHoursPerMonth
  };
  var company = JSON.parse(localStorage.getItem('company'));
  if (company === null) {
    var company = [
      data
    ];
  } else {
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



function language() {
  var option = prompt("        configuracion del software de nomina\n\
        seleccione idioma del software\n\
        1. Español\n\
        2. Ingles\n\
        seleccione una opcion :");
  return parseInt(option);
}
function setup() {
  var option = parseInt(prompt("        configuracion del software de nomina\n\
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
        seleccione una opcion :"));
  switch (option) {
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
function companyname() {
  var option = parseInt(prompt("        configuracion del software de nomina\n\
        Nombre de la empresa\n\
        1. Imprimir nombre de la empresa\n\
        2. Modificar nombre de la empresa\n\
        3. vovler\n\
        seleccione una opcion :"));
  switch (option) {
    case 1:
      var company = JSON.parse(localStorage.getItem('company'));
      localStorage.setItem('company', JSON.stringify(company));
      for (let contact of company) {
        console.log('Nombre de la empresa : ' + contact.CompanyName);
      }
      companyname();
      break;
    case 2:
      var company = JSON.parse(localStorage.getItem('company'));
      for (let contact of company) {
        contact.CompanyName = prompt('escribe nombre de empresa');
      }
      localStorage.setItem('company', JSON.stringify(company));
      companyname();
      break;
    case 3:
      setup();
      break;
  }
}
function salary() {
  var option = parseInt(prompt("        configuracion del software de nomina\n\
        Salario minimo\n\
        1. Imprimir salario minimo\n\
        2. Modificar salario minimo\n\
        3. vovler\n\
        seleccione una opcion :"));
  switch (option) {
    case 1:
      var company = JSON.parse(localStorage.getItem('company'));
      for (let contact of company) {
        console.log('salario minimo : ' + contact.Salary);
      }
      salary();
      break;
    case 2:
      var company = JSON.parse(localStorage.getItem('company'));
      for (let contact of company) {
        contact.Salary = prompt('escribe el salario minimo');
      }
      localStorage.setItem('company', JSON.stringify(company));
      salary();
      break;
    case 3:
      setup();
      break;
  }
}
function retention() {
  var option = parseInt(prompt("        configuracion del software de nomina\n\
        Salario minimo\n\
        1. Imprimir numero de salarios minimos para cobrar retencion en la fuente\n\
        2. Modificar numero de salarios minimos\n\
        3. vovler\n\
        seleccione una opcion :"));
  switch (option) {
    case 1:
      var company = JSON.parse(localStorage.getItem('company'));
      for (let contact of company) {
        console.log('cantidad de salarios minimos para cobrar retencion en la fuente : ' + contact.MinimumSalarys);
      }
      retention();
      break;
    case 2:
      var company = JSON.parse(localStorage.getItem('company'));
      for (let contact of company) {
        contact.MinimumSalarys = prompt('A partir de cuantos salarios minimos se cobra retencion en la fuente');
      }
      localStorage.setItem('company', JSON.stringify(company));
      retention();
      break;
    case 3:
      setup();
      break;
  }
}
function percentage() {
  var option = parseInt(prompt("        configuracion del software de nomina\n\
        Nombre de la empresa\n\
        1. Imprimir porcentaje de retencion en la fuente\n\
        2. Modificar porcentaje de retencion en la fuente\n\
        3. vovler\n\
        seleccione una opcion :"));
  switch (option) {
    case 1:
      var company = JSON.parse(localStorage.getItem('company'));
      for (let contact of company) {
        console.log('porcentaje de retencion en la fuente : ' + contact.retentionRate + " %");
      }
      percentage();
      break;
    case 2:
      var company = JSON.parse(localStorage.getItem('company'));
      for (let contact of company) {
        contact.retentionRate = parseInt(prompt('Escriba el porcentaje de retencion en la fuente'));
      }
      localStorage.setItem('company', JSON.stringify(company));
      percentage();
      break;
    case 3:
      setup();
      break;
  }
}
function helptransport() {
  var option = parseInt(prompt("        configuracion del software de nomina\n\
        Nombre de la empresa\n\
        1. Imprimir la cantidad de salarios minimos para pagar auxilio de transporte\n\
        2. Modificar la cantidad de salarios minimos para pagar auxilio de transporte\n\
        3. vovler\n\
        seleccione una opcion :"));
  switch (option) {
    case 1:
      var company = JSON.parse(localStorage.getItem('company'));
      localStorage.setItem('company', JSON.stringify(company));
      for (let contact of company) {
        console.log('cantidad de salarios minimos para pagar auxilio de transporte : ' + contact.transportAidwages);
      }
      helptransport();
      break;
    case 2:
      var company = JSON.parse(localStorage.getItem('company'));
      for (let contact of company) {
        contact.transportAidwages = prompt('escribe la cantidad de salarios minimos para pagar auxilio de transporte');
      }
      localStorage.setItem('company', JSON.stringify(company));
      helptransport();
      break;
    case 3:
      setup();
      break;
  }
}
function helptransport2() {
  var option = parseInt(prompt("        configuracion del software de nomina\n\
        Nombre de la empresa\n\
        1. Imprimir auxilio de transporte\n\
        2. Modificar auxilio de transporte\n\
        3. vovler\n\
        seleccione una opcion :"));
  switch (option) {
    case 1:
      var company = JSON.parse(localStorage.getItem('company'));
      localStorage.setItem('company', JSON.stringify(company));
      for (let contact of company) {
        console.log('auxilio de transporte : ' + contact.transportAid);
      }
      helptransport2();
      break;
    case 2:
      var company = JSON.parse(localStorage.getItem('company'));
      for (let contact of company) {
        contact.transportAid = prompt('escribe la cantidad del auxilio de transporte');
      }
      localStorage.setItem('company', JSON.stringify(company));
      helptransport2();
      break;
    case 3:
      setup();
      break;
  }
}
function hours() {
  var option = parseInt(prompt("        configuracion del software de nomina\n\
        Nombre de la empresa\n\
        1. Imprimir la cantidad de horas laborables al mes\n\
        2. Modificar la cantidad de horas laborales al mes\n\
        3. vovler\n\
        seleccione una opcion :"));
  switch (option) {
    case 1:
      var company = JSON.parse(localStorage.getItem('company'));
      localStorage.setItem('company', JSON.stringify(company));
      for (let contact of company) {
        console.log('cantidad de horas laborales al mes : ' + contact.workingHoursPerMonth);
      }
      helptransport2();
      break;
    case 2:
      var company = JSON.parse(localStorage.getItem('company'));
      for (let contact of company) {
        contact.workingHoursPerMonth = prompt('escriba la cantidad de horas laborales al mes');
      }
      localStorage.setItem('company', JSON.stringify(company));
      helptransport2();
      break;
    case 3:
      setup();
      break;
  }
}
function go() {
  var option = parseInt(prompt("        software de nomina\n\
        1. Gestion de empleados\n\
        2. Registrar horas laboradas\n\
        3. Generar nomina\n\
        4. Imprimir comprobante de pago\n\
        0. salir del programa\n\
        seleccione una opcion :"));
  switch (option) {
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
  var option = parseInt(prompt("        software de nomina\n\
        gestion de empleados\n\
        \n\
        1. Agregar\n\
        2. Modificar\n\
        3. Eliminar\n\
        4. imprimir empleados registrados\n\
        5. Volver\n\
        0. salir del programa\n\
        seleccione una opcion :"));
  switch (option) {
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
      go();
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
      return one();
    }
  }
  var nombre = prompt('escriba su nombre');
  var apellido = prompt('escriba su apellido');
  var cargo = prompt('escriba su cargo');
  var salario = parseInt(prompt('escriba su salario'));
  for (let contact of company) {
    if (salario < contact.Salary) {
      console.log('El Salario introducido es inferior al salario mínimo configurado en el sistema, introduzca uno mayor ');
      return one();
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
  var option = parseInt(prompt("        software de nomina\n\
        gestion de empleados\n\
        \n\
        1. Modificar el nombre\n\
        2. Modificar el apellido\n\
        3. Modificar la cedula\n\
        4. Modificar el cargo\n\
        5. Modificar el salario\n\
        6. Volver\n\
        0. salir del programa\n\
        seleccione una opcion :"));
  switch (option) {
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

function modify1() {
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
function modify2() {
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
  one();
}
function modify3() {
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
  one();
}
function modify4() {
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
  one();
}
function modify5() {
  var newsalary;
  var flag = 0;
  var Inventory = JSON.parse(localStorage.getItem('lista'));
  var company = JSON.parse(localStorage.getItem('company'));
  for (let contact of Inventory) {
    if (contact.cedula === identificationcard) {
      flag++;
      if (flag === 1) {
        newsalary = prompt('escriba el nuevo salario : ');
        for (let contact of company) {
          if (newsalary < contact.Salary) {
            console.log('El Salario introducido es inferior al salario mínimo configurado en el sistema, introduzca uno mayor ');
            return Modify2();
          } else {
            contact.salary = newsalary;
          }
        }
        localStorage.setItem('lista', JSON.stringify(Inventory));

      }
    }
  }
  one();
}


function modify6() {
  one();
}
function remove() {
  var object = '';
  var identificationcard = prompt('escriba la cedula del empleado a eliminar');
  var flag = 0;
  var Inventory = JSON.parse(localStorage.getItem('lista'));
  for (var i = 0; i < Inventory.length; i++) {
    if (Inventory[i].cedula === identificationcard) {
      var question = parseInt(prompt('esta seguro de eliminar al empleado? Yes(1)/No(2)'));
    }
    if (question === 1) {
      flag++;
      x = i;
      object = Inventory[x];
    } else if (question === 2) {
      flag = 2;
    }
  }
  if (flag === 1) {
    console.log('se ha eliminado :');
    console.log(object);
    Inventory[x] = Inventory[0];
    Inventory[0] = object;

    Inventory.shift();
    localStorage.setItem('lista', JSON.stringify(Inventory));
  } else if (flag === 2) {
    console.log('Se ha cancelado la eliminacion');
  } else if (flag === 0) {
    console.log('La cedula no se encuentra registrada');
  }
}
function print2() {
  console.log("\
        +-------------------------------------------------------------------------------------------------------+\n\
        |     Cedula         |     Nombre        |     Apellidos           |     Cargo        |     Salario     |\n\
        +-------------------------------------------------------------------------------------------------------+\n\
        ");
  var lista = JSON.parse(localStorage.getItem('lista'));
  lista.forEach(function (element) {
    console.log("        |    " + element.cedula + "      |   " + element.nombre + "     |    " + element.apellido + "     |    " + element.cargo + "      |    " + element.salario + "      |");
  });
  console.log("\n\
        +-------------------------------------------------------------------------------------------------------+");
  one();
}
function two() {
  var flag = 0;
  var Inventory = JSON.parse(localStorage.getItem('lista'));
  var company = JSON.parse(localStorage.getItem('company'));
  var identificationcard = prompt("Escriba la cedula del empleado a registrar las horas laborales");
  for (let contact of Inventory) {
    if (contact.cedula === identificationcard) {
      flag = 1;
      var Daytimehours
    }
  }
  one();
}



function exit() {
  op = 1;
  console.log('Bye');
}
do {
  var result = menu();
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