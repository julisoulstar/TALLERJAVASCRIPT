
var op =0;
do {
  function menu() {
    var option = prompt("        configuracion del software de nomina\n\
        1. seleccione idioma\n\
        2. configurar\n\
        3. continuar\n\
        0. salir del programa\n\
        seleccione una opcion :");
    return parseInt(option);
  }

  var result = menu();

  function language() {
    var option = prompt("        configuracion del software de nomina\n\
        seleccione idioma del software\n\
        1. configurar\n\
        2. continuar\n\
        seleccione una opcion :");
    return parseInt(option);
    }
  function setup() {
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
  function go() {
    function menu(){
    var option = prompt("        software de nomina\n\
        1. Gestion de empleados\n\
        2. Registrar horas laboradas\n\
        3. Generar nomina\n\
        4. Imprimir comprobante de pago\n\
        0. salir del programa\n\
        seleccione una opcion :");
    return parseInt(option);
  }
    var result = menu();
    
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
      console.log('bye');
      break;
  }
  }
    
    function one(){
      function menu(){
      var option = prompt("        software de nomina\n\
        gestion de enpleados\n\
        \n\
        1. Agregar\n\
        2. Modificar\n\
        3. Eliminar\n\
        4. Volver\n\
        0. salir del programa\n\
        seleccione una opcion :");
        console.log("\
        +-------------------------------------------------------------------------------+\n\
        |     Cedula     |     Nombre        |     Apellidos        |     Cargo         |\n\
        +-------------------------------------------------------------------------------+\n\
        | 12345678       | Julian Andres     | Lasso Figueroa       | Instructor        |\n\
        | 38907543       | Sara Isabel       | Lasso Rojas          | JF. Produccion    |\n\
        +-------------------------------------------------------------------------------+\n");
    return parseInt(option);
  }
    var result = menu();
    
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
      returnn();
      break;
    case 0:
      exit();
      console.log('bye');
      break;
  }
  }
  function add(){
    var nombre = prompt('escriba su nombre');
    var apellido = prompt('escriba su apellido');
    var cedula = prompt('escriba su cedula');
    var cargo = prompt('escriba su cargo');
    var salario = prompt('escriba su salario');
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
  }
  function exit() {
    op = 1;
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
      console.log('bye');
      break;
  }
} while (op === 0);