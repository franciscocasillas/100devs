// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let faveDrink = " Malibu Pineapple ";
console.log(faveDrink.trim());

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let fruits = "Now we are going to be looking for an apple";
let fruitsArr = fruits.split(" ");
console.log(fruitsArr.includes("apple"));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
	let num = Math.floor(Math.random() * 9);
	if (num < 3) {
		return "rock";
	} else if (num < 6) {
		return "paper";
	} else {
		return "scissors";
	}
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function whoWins(option) {
	option = option.toLowerCase();
	let computer = rockPaperScissors();
	console.log(option, computer);
	switch (option) {
		case "rock":
			if (computer === "rock") {
				console.log("TIE");
			} else if (computer === "paper") {
				console.log("You win!");
			} else {
				console.log("You lose.");
			}
			break;
		case "paper":
			if (computer === "rock") {
				console.log("You lose.");
			} else if (computer === "paper") {
				console.log("TIE");
			} else {
				console.log("You win!");
			}
			break;
		case "scissors":
			if (computer === "rock") {
				console.log("You win!");
			} else if (computer === "paper") {
				console.log("You lose");
			} else {
				console.log("TIE");
			}
			break;
	}
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function xTimes(arr) {
	for (let i = 0; i < arr.length; i++) {
		whoWins(arr[i]);
	}
}

xTimes(["paper", "rock", "paper", "rock", "scissors"]);
