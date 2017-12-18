//backend
var numbers = [];
var beepBoop = function (input) {
  for (var i = 0; i <= input; i++) {
  numbers.push(i);
  console.log(input);
}

}



//userend

$(document).ready(function() {
    $("form#form1").submit(function(event) {
      event.preventDefault();
      var input = $("input#input1").val();
      var input = parseInt($("input#input1").val());
      var output = beepBoop(input);
      $(".results").text(output);
    });
});
