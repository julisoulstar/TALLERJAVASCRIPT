var one = 0;
$('#text').hide();
$('#button').click(function () {
  if (one === 0) {
    $('#text').slideDown();
    one = 1;
  } else if (one === 1) {
    $('#text').slideUp();
    one = 0;
  }
});
year = 15;
month = year * 12;
day = year * 365;
hour = year * (24 * 365);
minute = year * (60 * (24 * 365));
second = year * (60 * (60 * (24 * 365)));

$("#text").text(" 15 years posseses : " + "\n\
 months : " + month + "\n\
 days : " + day + "\n\
 hours : " + hour + "\n\
 minutes : " + minute + "\n\
 seconds : " + second);