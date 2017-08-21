var text1;
var op = 0;
var array = [];
var i = 0;
var found = false;
do {
  function menu() {
    var option = prompt("    1. Fill arrangement\n\
    2. Find element by sequential search method\n\
    3. Apply bubble sorting method\n\
    4. Apply bidirectional bubble sorting method\n\
    5. Apply insertion sort method\n\
    6. Apply method of sorting by mixing\n\
    7. Apply the ordering method by selection\n\
    8. Print Arrangement.\n\
    0. Quit the program");
    return parseInt(option);
  }

  var result = menu();

  function Fillarrangement() {

    function menu2() {
      var option2 = prompt("    1. Set size of the array\n\
    2. Fill arrangement (random numbers)");
      return parseInt(option2);

    }
    var result2 = menu2();

    switch (result2) {
      case 1:
        define();
        break;
      case 2:
        fill();
        break;

      default:

        break;
    }
  }

  function define() {
    i = parseInt(prompt("Indicate the size of the arrangement"));
  }
  function fill() {
    for (j = 0; j < i; j++) {
      array[j] = Math.round((Math.random() * 100));
    }
  }
  function Findelemen() {
    var pos = [];
    txt1 = parseInt(prompt("Type number"));
    for (var s = 0; s < array.length; s++) {
      if (array[s] === txt1) {
        found = true;
        pos.push(s);
      }
    }
    if (found) {
      console.log("The data is found and is in the position ", pos);
    } else {
      console.log("The data is not in the array");
    }
  }
  function Applybubble() {
    for (var i = 1; i < array.length; i++) {
      for (var j = 0; j < (array.length - i); j++) {
        if (array[j] > array[j + 1]) {
          var p = array[j + 1];
          array[j + 1] = array[j];
          array[j] = p;
        }
      }
    }
    return array;
  }

  function Applybidirectional() {
    for (var i = 0; i < array.length-1; i++) {
      for (var j = i+1; j < array.length; j++) {
        if (array[j] < array[i]) {
          var p = array[i];
          array[i] = array[j];
          array[j] = p;
        }
      }
    }
    return array;


  }
  function Applyinsertion() {
    


  }
  function Applymethod() {

  }
  function Applytheordering() {

  }
  function Print() {
    console.log(array);
  }
  switch (result) {
    case 1:
      Fillarrangement();
      break;
    case 2:
      Findelemen();
      break;
    case 3:
      Applybubble();
      break;
    case 4:
      Applybidirectional();
      break;
    case 5:
      Applyinsertion();
      break;
    case 6:
      Applymethod();
      break;
    case 7:
      Applytheordering();
      break;
    case 8:
      Print();
      break;
    case 0:
      op = 1;
      console.log('bye');
      break;
  }
} while (op === 0);

