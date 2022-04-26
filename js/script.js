'use strict'
// Match generated number and guessed number

let max = 100;
let min = 0;

let random = Math.floor((Math.random() * max) + min);

// initialize variables
let True = "";

  // get fahrenheit from text field
let Guess = parseFloat(document.getElementById("Guess").value);

// determine the display message depending on user input (True)
if (Guess != random){
  True = "Correct.";
}

  // display the results
  document.getElementById("user-info").innerHTML = True;
