//backend
var numbers = [];
var beepBoop = function (input) {
  for (var i = 0; i <= input; i++) { //Check if the current index is less than the given input. If it is, then continue increasing index
    numbers.push(i); //pushes all numbers in index to array numbers

    if (i % 3 === 0) { //If the current index number divided by 3 will set the index number to 0, then alert user with "I'm sorry, Dave. I'm afraid I can't do that."
            numbers[i] ="<li>" + "I'm sorry, Dave. I'm afraid I can't do that. , " + "</li>";

    }
    else if (i.toString().includes("0")) { //Check if the number listed in the index includes a 0
          numbers[i] = "<li>" + "Beep, " + "</li>";

    }
    else if (i.toString().includes("1")) { //Check if the number listed in the index includes a 1
        numbers[i] = "<li>" + "Boop, " + "</li>";

    }
    else {
      numbers[i] = "<li>" + i + "</li>"; //puts regular digits into
    }

  console.log(input);
  console.log(numbers);
}
return numbers; //returns number array
}



//userend

$(document).ready(function() {
    $("form#form1").submit(function(event) {
      event.preventDefault();

      var input = parseInt($("input#input1").val());
      var result = beepBoop(input);
      $("#results").append(result);
      $("#results").last().click(function() { //clickable
      $("#results").empty();

    });
    });
});
