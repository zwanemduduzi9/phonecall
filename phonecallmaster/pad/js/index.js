var count = 0;
ua.start();

$(".digit").on('click', function() {
  var num = ($(this).clone().children().remove().end().text());
  if (count < 11) {
    $("#output").append('<span>' + num.trim() + '</span>');

    count++
  }
});

$('.fa-long-arrow-left').on('click', function() {
  $('#output span:last-child').remove();
  count--;
});

$('.w3-button w3-small').on('click', function() {
  document.getElementById("button").disabled = 'true';

  
});






/*
function myFunction() {
  var x = document.getElementById("dial");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
*/