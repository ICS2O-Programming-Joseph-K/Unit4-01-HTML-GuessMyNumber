'use strict'
// Match generated number and guessed number
function enterClicked () {


let random = Math.floor((Math.random() * max) + min);

// initialize variables
let True = "";

  // get fahrenheit from text field
let Guess = parseFloat(document.getElementById("Guess").value);

// determine the display message depending on user input (True)
if (Guess == random){
  True = "Correct.";
}

// determine the display message depending on user input (False)
if (Guess != random){
  False = "Incorrect.";
}

  // display the results
  document.getElementById("user-info").innerHTML = True;

    // display the results
  document.getElementById("user-info").innerHTML = False;

}