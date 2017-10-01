function math() {
  var date1 = new Date($("#date1")).val();
  var date2 = new Date($("#date2")).val();
  if (date2.getTime() > date1.getTime()) {
    var diference = date2.getTime() - date1.getTime();
  } else {
    var diference = date1.getTime() - date2.getTime();
  }
  var array = [];
  array[0] = Math.floor(diference / (1000 * 60 * 60 * (24 * 364)));
  array[1] = Math.floor(diference / (1000 * 60 * 60 * (24 * 30)));
  array[2] = Math.floor(diference / (1000 * 60 * 60 * 24));
  return diference;

  $("#text").text(array[0] + "" + array[1] + "" + array[2]);
}