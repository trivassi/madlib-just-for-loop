$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var adjective1 = $("input#adjective1").val();
    var name = $("input#name").val();
    var singularNoun = $("input#singular-noun").val();
    var largeNumber = $("input#large-number").val();
    var famousPerson = $("input#famous-person").val();
    var adjective2 = $("input#adjective2").val();
    var number = $("input#number").val();


    $(".adjective1").text(adjective1);
    $(".name").text(name);
    $(".singular-noun").text(singularNoun);
    $(".large-number").text(largeNumber);
    $(".famous-person").text(famousPerson);
    $(".adjective2").text(adjective2);
    $(".number").text(number);

    $("#story").show();
    $("#blanks").hide();
    $("#form-header").hide();
    document.body.style.backgroundImage = "url(img/book-background.jpg)";

    event.preventDefault();
  });
});
