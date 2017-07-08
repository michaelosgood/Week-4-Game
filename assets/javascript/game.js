// Michael Osgood / Gold Coins Collector Game / HW4 //

//FUNCTIONS
window.onload = function() {

//Generate random number between 19 through 100 that player needs to reach
function generateRandomNumber() {
	var randomNumber = Math.floor(Math.random() * (100 - 19 + 1)) + 19;
	return randomNumber;
	console.log(random number generated);
}

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
var coin = coinRandom();
console.log(coin)

$("#goal").text(goal); //pushes the goal number to the HTML (i think)
$("#wins").text(winCounter); //pushes the number of wins to the HTML (i think)
$("#losses").text(lossCounter); //pushes the number of losses to HTML (i think)
$("#total").text(total); //pushes the total score to HTML (i think)






//Main Process//
//-----------------------------------------------------------------------

//PSUEDO CODE
//Generate a random number up to 50 for player to guess


//Assign a random value between 1 through 12 for each coin

//When player clicks on a coin, display the value in HTML

//When another coin is clicked on, add the sum of all the coins
	//If sum exceeds random number, player loses
	//Add 1 to number of losses
	//Reset random number

	//If value is equal to random number
	//Add 1 to number of wins
	//Reset random number

}

