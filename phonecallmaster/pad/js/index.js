var count = 0;

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

$('.botrow').on('click', function() {
  

  
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