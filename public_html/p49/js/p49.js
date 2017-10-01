var a = "*";
var b = "______";
for (c = 1; c <= 13; c++) {
  if (a === "*") {
    b = b + a;
    $('#text').append(b.slice(c), "<br>");
    c++;
  }
}