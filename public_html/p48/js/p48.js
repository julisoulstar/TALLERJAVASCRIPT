var a = "*";
var b = "______";
var c = 1;
while (c <= 6) {
  if (a === "*") {
    b = b + a;
    $('#text').append(b.slice(c), "<br>");
    c++;
  }
}