var confirmation = 0;
var advice = 0;
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
    var option2 = parseInt(prompt("    1. Set size of the array\n\
    2. Fill arrangement (random numbers)"));

    switch (option2) {
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
    if (advice === 0) {
      for (j = 0; j < i; j++) {
        array[j] = Math.round((Math.random() * 100));
      }
    } else if (advice === 1) {
      confirmation = parseInt(prompt('you are sure to re-fill the arrangement? Yes(1)/No(2)'));

    }
    if (confirmation === 1) {
      advice = 0;
      for (j = 0; j < i; j++) {
        array[j] = Math.round((Math.random() * 100));
      }
    } else if (confirmation === 2) {
      menu();
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
    advice = 1;
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
    advice = 1;
    for (var i = 0; i < array.length - 1; i++) {
      for (var j = i + 1; j < array.length; j++) {
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
    advice = 1;
    var size = array.length,
            slot,
            tmp;

    for (var item = 0; item < size; item++) { // outer loop
      tmp = array[item];
      for (slot = item - 1; slot >= 0 && array[slot] > tmp; slot--) { // inner loop
        array[ slot + 1 ] = array[slot];
      }
      array[ slot + 1 ] = tmp;
    }
    return array;
  }

  function Applymethod() {
    advice = 1;
    let mergeSort = array => {
      if (array.length < 2) {
        return array;
      }
      let middle = parseInt(array.length / 2) | 0;
      let left = array.slice(0, middle);
      let right = array.slice(middle);
      let merge = (left, right) => {
        let result = [];
        let il = ir = 0;
        while (il < left.length && ir < right.length) {
          result.push((left[il] < right[ir]) ? left[il++] : right[ir++]);
        }
        return [...result, ...left.slice(il), ...right.slice(ir)];
      };
      return merge(mergeSort(left), mergeSort(right));
    };
    let result = mergeSort(array);
    array = result;
  }

  function Applytheordering() {
    advice = 1;
    for (let j = 0; j < array.length; ++j) {
      let i = iMin = j;
      for (++i; i < array.length; ++i) {
        (array[ i ] < array[ iMin ]) && (iMin = i);
      }
      [array[ j ], array[ iMin ]] = [array[ iMin ], array[ j ]];
    }

    return array;
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

