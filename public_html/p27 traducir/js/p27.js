    var personalinfo ="";
    var familyinfo ="";
    var workinfo ="";
    var professionalinfo ="";
    var op = 0;
    do {
    function menu() {
      var option = prompt("Select an option to enter your data.\n\
        1. Personal information\n\
        2. Family reference\n\
        3. Work reference\n\
        4. Professional profile description\n\
        5. Print Resume\n\
        0. exit the program");
      return parseInt(option);
    }

    var result = menu();
    function personal() {
      personalinfo = {
      name: '',
      lastname: '',
      phonenumber: '',
      address: '',
      nationality: '',
      hometown: '',
      occupation: '',
      email: '',
      civilStatus: ''
    };

    personalinfo.name = prompt('Enter your name');
    personalinfo.lastname= prompt('Enter your lastname');
    personalinfo.phonenumber = prompt('Enter your phone number');
    personalinfo.address = prompt('Enter your address');
    personalinfo.nationality = prompt('Enter your nationality');
    personalinfo.hometown = prompt('Enter your home city');
    personalinfo.occupation = prompt('Enter your occupation');
    personalinfo.email = prompt('Enter your email');
    personalinfo.civilStatus = prompt('Enter your marital status');
    localStorage.setItem("Nombre", personalinfo.name);
    
    }
    function family() {
      familyinfo = {
      nombre: '',
      apellido: '',
      numeroTelefono: '',
      direccion: '',
      nationality: '',
      ciudadorigen: '',
      occupation: '',
      email: '',
      civilStatus: ''
    };

    familyinfo.nombre = prompt('Enter family name');
    familyinfo.apellido= prompt('Enter family lastname');
    familyinfo.numeroTelefono = prompt('Enter family phone number');
    familyinfo.direccion = prompt('Enter family address');
    familyinfo.nationality = prompt('Enter family nationality');
    familyinfo.ciudadorigen = prompt('Enter hometown of the relative');
    familyinfo.occupation = prompt('Enter family occupation');
    familyinfo.email = prompt('Enter email from family member');
    familyinfo.civilStatus = prompt('Enter family status');
      }
    function work() {
      workinfo = {
      companysname: '',
      numeroTelefono: '',
      direccion: '',
      country: '',
      ciudad: '',
      occupation: '',
      email: '',
      Headofwork: ''
    };

    workinfo.companysname = prompt('Enter your company name');
    workinfo.numeroTelefono = prompt('Enter company phone number');
    workinfo.direccion = prompt('Enter company address');
    workinfo.country = prompt('Enter country of company');
    workinfo.ciudad = prompt('Enter company city');
    workinfo.occupation = prompt('Enter your occupation in the company');
    workinfo.email = prompt('Enter company email');
    workinfo.Headofwork = prompt('Enter the name of the head of the company');
    }
    function professional() {
      professionalinfo = {
        text: ''
      };
      
      professionalinfo.text = prompt("");
    }
    function print() {
      op = 1;
      console.log("nombre : "+na);
      

      console.log('\
            RESUME\n\
      Personal information');
      console.log('nombre :' +personalinfo.name);
      console.log('apellido :' +personalinfo.lastname);
      console.log('numero de telefono :' +personalinfo.phonenumber);
      console.log('direccion :' +personalinfo.address);
      console.log('nationality :' +personalinfo.nationality);
      console.log('ciudad origen :' +personalinfo.hometown);
      console.log('ocupacion :' +personalinfo.occupation);
      console.log('email :' +personalinfo.email);
      console.log('civil status :' +personalinfo.civilStatus);
      
      console.log('\n\
      Family reference');
      console.log('nombre :' +familyinfo.nombre);
      console.log('apellido :'+familyinfo.apellido);
      console.log('numero de telefono :'+familyinfo.numeroTelefono);
      console.log('direccion :'+familyinfo.direccion);
      console.log('nationality :'+familyinfo.nationality);
      console.log('ciudad origen :'+familyinfo.ciudadorigen);
      console.log('ocupacion :'+familyinfo.occupation);
      console.log('email :'+familyinfo.email);
      console.log('civil status :'+familyinfo.civilStatus);
      
      console.log('\n\
      Work reference');
      console.log('nombre de la empresa :'+workinfo.companysname);
      console.log('numero de telefono de la empresa :'+workinfo.numeroTelefono);
      console.log('direccion :'+workinfo.direccion);
      console.log('pais de la empresa :'+workinfo.country);
      console.log('ciudad de la empresa :'+workinfo.ciudad);
      console.log('ocupacion en la empresa :'+workinfo.occupation);
      console.log('email de la empresa :'+workinfo.email);
      console.log('jefe de la empresa :'+workinfo.Headofwork);
      
      console.log('\n\
      Professional profile description');
      console.log('texto de su profesion :'+professionalinfo.text);
      
    }
    function exit() {
      op = 1;
    }
    switch (result) {
      case 1:
        personal();
        break;
      case 2:
        family();
        break;
      case 3:
        work();
        break;
      case 4:
        professional();
        break;
      case 5:
        print();
        break;
      case 0:
        exit();
        console.log('Bye');
        break;
    }
} while (op === 0);
