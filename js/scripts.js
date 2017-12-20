//backend
var numbers = [];
var beepBoop = function (input) {
  for (var i = 0; i <= input; i++) {
    numbers.push(i);
    if (i.toString().includes("0")) {
      numbers[i] = beep;

    } else if (i.toString().includes("1")) {
      numbers[i] = boop;

    } else if (i % 3 === 0) {
      numbers[i] = dave;

    } else {
      numbers[i] = i ;
    }
  }
    return numbers;
}



//userend
var boop = "Boop, ";
var beep = "Beep, ";
var dave = "I'm sorry, Dave. I'm afraid I can't do that. , ";
$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#input1").val());
    var result = beepBoop(input);
    var resultArray = [];
    $("#results").empty();
    $("#resultClear").show();
    $(".wellOutput").show();
    numbers.forEach(function(resultArray) {
      $("#results").append("<li>" + resultArray + "</li>");
      $("form#form1").submit(function(event) {
      });
    });
  });
});
