//backend
var numbers = [];
var beepBoop = function (input) {
  for (var i = 0; i <= input; i++) { //Check if the current index is less than the given input. If it is, then continue increasing index
    numbers.push(i); //pushes all numbers in index to array numbers
    if (i.toString().includes("0")) { //Check if the number listed in the index includes a 0
      alert("Beep!");
    } else if (i.toString().includes("1")) { //Check if the number listed in the index includes a 1
        alert("Boop!");
    } else if (i % 3 === 0) { //If the current index number divided by 3 will set the index number to 0, then alert user with "I'm sorry, Dave. I'm afraid I can't do that."
        alert("I'm sorry, Dave. I'm afraid I can't do that.");
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
