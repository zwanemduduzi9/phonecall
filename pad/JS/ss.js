<link href="https://fonts.googleapis.com/css?family=Exo" rel="stylesheet">
$(".digit").on('click', function() {
  var num = ($(this).clone().children().remove().end().text());
  var state = ($(this).clone().children().remove().end().text());
  if (count < 11) {
    $("#output").append('<span>' + num.trim() + '</span>');

    count++
  }
});

$('.fa-long-arrow-left').on('click', function() {
  $('#output span:last-child').remove();
  count--;
});

if($("botrow").on('click', function() {
  $('#output span:last-child').remove();
})=='registetionFailed';
{
	'ss'
}