"use strict"

// Match generated number and guessed number
function enterClicked () {
  	// initialize variables
	let Output = ""
  
	// get user input
	let Guess = parseInt(document.getElementById('Guess').value)

  //cosnt or let???
  let random = Math.floor((Math.random() * 6) + 1);

  	// if guess matches random
	if (Guess == random) {
		Output = "Correct."
	} 
	// otherwise, if guess does not match random
	else if (Guess != random) {
		Output = "Incorrect."
	}

  //Else statment for laer use
	// else {
		//Output = "Good evening..."
	//}
	
  // display the results
  document.getElementById('user-info').innerHTML = Output                                                                                                                                                                               
}
