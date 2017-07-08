// Michael Osgood / Gold Coins Collector Game / HW4 //


window.onload = function() {

	//Generate random number between 19 through 100 that player needs to reach
	function generateRandomNumber() {
		var randomNumber = Math.floor(Math.random() * (100 - 19 + 1)) + 19;
		return randomNumber;
	}
		console.log(generateRandomNumber());


	//Generate random value  between 1 through 12 for each coin
	function coinRandom() {
		var coinArray = [];
		for(var i = 0; i < 4; i++){
			var coinValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
			coinArray.push(coinValue);
		}
		return coinArray;
	}

	//VARIABLES
	var goal = generateRandomNumber(); //goal that the player needs to reach to win
	var winCounter = 0; //keeps track of wins
	var lossCounter = 0; //keeps track of losses
	var total = 0; //total score of player 
	var coinList = coinRandom();
	console.log(coinList);

	//Replaces the designated ID in HTML with the value of each variable
	$("#player-goal").text(goal); //pushes the goal number to the HTML (i think)
	$("#wins").text(winCounter); //pushes the number of wins to the HTML (i think)
	$("#losses").text(lossCounter); //pushes the number of losses to HTML (i think)
	$("#total").text(total); //pushes the total score to HTML (i think)

	//When a coin is clicked, it executes this function
	$("img").on("click", function() {
		var alt = $(this).attr("alt");
		console.log(alt);

		if(alt === "coin01") {
			total += coinList[0];
		}

		else if(alt === "coin02") {
			total += coinList[1];
		}

		else if(alt === "coin03") {
			total += coinList[2];
		}

		else if(alt === "coin04") {
			total += coinList[3];
		}

		//If player's total exceeds the goal, then execute this function
		$("#total").text(total);
		if(total > goal) {
			lossCounter += 1; //adds 1 to the losses
			$("#losses").text(lossCounter); //updates the HTML with correct number of losses
			goal = generateRandomNumber(); //generates another random goal
			$("#player-goal").text(goal); //displays the newly generated random goal on HTML
			coinList = coinRandom(); //assigns new random values to our coins

			console.log("lose"); //need to double check if "lose" needs to be in quotes when using console.log
			alert("You Lose"); //alerts the player that they lost
			total = 0; //resets the total to 0
			$("#total").text(total) //updates the HTML with the new total (of 0)
		}


		//If player's total equals goal, they win and this function is excecuted
		else if(total === goal) {
			winCounter += 1; //adds 1 to the wins
			$("#wins").text(winCounter); //updates the HTML with correct number of wins
			goal = generateRandomNumber(); //generates another random goal
			$("#player-goal").text(goal); //displays the newly generated random goal on HTML
			coinList = coinRandom(); //assigns new random values to our coins

			console.log("win");
			alert("You Win");
			total = 0; //resets the total to 0
			$("#total").text(total) //updates the HTML with the new total (of 0)
		}
	});
}

