$("#Fillarrangement").hide();
$("#printarray").hide();
$("#findelement").hide();
$("#refill").hide();
$("#fill").click(function () {
  $("#Fillarrangement").slideDown();
  $("#menu").slideUp();
});
$("#find").click(function () {
  $("#findelement").slideDown();
  $("#menu").slideUp();
});
$("#print").click(function () {
  $("#printarray").slideDown();
  $("#menu").slideUp();
});
$("#return1").click(function () {
  $("#Fillarrangement").slideUp();
  $("#menu").slideDown();
  $("#message").empty();
  $("#message2").empty();

});
$("#return2").click(function () {
  $("#printarray").slideUp();
  $("#menu").slideDown();
  $("#print2").empty();
});
$("#return3").click(function () {
  $("#findelement").slideUp();
  $("#menu").slideDown();
  $("#answer").empty();
});
$("#sure").click(function () {
  advice = 0;
  fill();
});
var i = 0;
var confirmation = 0;
var advice = 0;
var array = [];
var found = false;
var number = 0;
function size() {
  i = $("#size").val();
  $("#message").text("Done");
}
function fill() {
  if (advice === 0) {
    $("#refill").slideUp();
    array = [];
    for (j = 0; j < i; j++) {
      array[j] = Math.round((Math.random() * 100));
    }
    $("#message2").text("Done");
  } else if (advice === 1) {
    $("#refill").slideDown();

  }
}
function find() {
  var pos = [];
  number = $("#search").val();
  for (var s = 0; s < array.length; s++) {
    if (array[s] == $("#search").val()) {
      found = true;
      pos.push(s);
    }
  }
  if (found) {
    $("#answer").text("The data is found and is in the position " + (parseInt(pos) + 1));
  } else {
    $("#answer").text("The data is not in the array");
  }
}
function bubble() {
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
function bidirectional() {
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
function insertion() {
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
function mixing() {
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
function selection() {
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
function print() {
  for (z = 0; z < array.length; z++) {
    $("#print2").append(array[z] + " , ");
  }
}