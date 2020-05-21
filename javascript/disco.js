// When color button is clicked, pick a number 0-255
$(".color").click(function() {
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  // Display the number in an alert window.
  alert(red + "," + green + "," + blue);
});
