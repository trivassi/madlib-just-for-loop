$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var blanks = ["adjective1", "name", "singular-noun", "large-number", "famous-person", "adjective2", "number"];

    // blanks.forEach(function(blank){
    //   var userInput = $("input#" + blank).val();
    //   $("." + blank).text(userInput);
    // });

    for (var i = 0; i < blanks.length; i++) {
      var userInput = $("input#" + blanks[i]).val();
      $("." + blanks[i]).text(userInput);
    }

    $("#story").show();
    $("#blanks").hide();
    $("#form-header").hide();
    document.body.style.backgroundImage = "url(img/book-background.jpg)";

    event.preventDefault();
  });
});
