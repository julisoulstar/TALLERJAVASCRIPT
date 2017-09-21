function math() {
  var height = $('#height').val();
  var base = $('#base').val();
  var perimeter = (2 * parseInt(height)) + (2 * parseInt(base));
  var area = parseInt(height) * parseInt(base);
  $('#text').text(" the perimeter of the rectangle is : " + perimeter + "\n\
 the area of the rectangle is : " + area);
}