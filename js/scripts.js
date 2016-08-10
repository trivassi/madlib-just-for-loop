$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var person3Input = $("input#person3").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".person3").text(person3Input);

    $("#story").show();

    event.preventDefault();
  });
});
