$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var blanks = ["adjective1", "name", "singular-noun", "large-number", "famous-person", "adjective2", "number"];

    blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story").show();
    $("#blanks").hide();
    $("#form-header").hide();
    document.body.style.backgroundImage = "url(img/book-background.jpg)";

    event.preventDefault();
  });
});
