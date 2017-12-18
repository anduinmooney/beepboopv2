//backend
var numbers = [];
var beepBoop = function (input) {
  for (var i = 0; i <= input; i++) {
  numbers.push(i);
  console.log(input);
}
return numbers;
}



//userend

$(document).ready(function() {
    $("form#form1").submit(function(event) {
      event.preventDefault();
      var input = parseInt($("input#input1").val());
      var result = beepBoop(input);
      $("#results").append(result);
    });
});
