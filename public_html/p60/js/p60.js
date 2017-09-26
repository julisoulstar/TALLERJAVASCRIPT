function math() {
  var hours = $("#hours").val();
  var week = hours / (24 * 7);
  var day = hours / 24;
  $("#text").text(" it represents : " + "\n\
 weeks : " + week + "\n\
 days : " + day);
}