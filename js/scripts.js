//backend
var numbers = [];
var beepBoop = function (input) {
  for (var i = 0; i <= input; i++) { //Check if the current index is less than the given input. If it is, then continue increasing index
    numbers.push(i); //pushes all numbers in index to array numbers
    if (i.toString().includes("0")) { //Check if the number listed in the index includes a 0
      alert("Beep!");
    } else if (i.toString().includes("1")) { //Check if the number listed in the index includes a 1
        alert("Boop!");
    } 

  console.log(input);
  console.log(numbers);
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
